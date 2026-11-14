/**
 * three.js scene of the build viewer (T1-06). Imported dynamically by `build-viewer.ts` on click, so
 * three.js never reaches the initial page weight. Pieces are drawn as wooden cylinders (logs, cut
 * logs, planks, sticks) whose thickness and length per profile are inferred from the geometry
 * (`build-pieces.ts`). One `InstancedMesh` per profile (a handful of draw calls for up to 50 000
 * pieces); rendering is on demand (no animation loop), so reduced motion and battery are respected.
 * Orbit by mouse/touch (OrbitControls) and by keyboard (arrows, + and -).
 */

import type { BuildGeometryDTO } from '@sotf/contracts/build-viewer';
import { viewer_canvas_label } from '@sotf/i18n/messages';
import {
  AmbientLight,
  BoxGeometry,
  Color,
  CylinderGeometry,
  DirectionalLight,
  GridHelper,
  HemisphereLight,
  InstancedMesh,
  MeshLambertMaterial,
  Object3D,
  PerspectiveCamera,
  Quaternion,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { frameOf, inferProfileShapes, materialOf, STRIDE, stoneColor, woodColor } from './build-pieces.ts';

export interface SceneOptions {
  host: HTMLElement;
  modId: number;
  name: string;
  reduceMotion: boolean;
}

export interface SceneResult {
  handle: { dispose(): void };
  shown: number;
  total: number;
}

function decode(base64: string): Float32Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new Float32Array(bytes.buffer, 0, Math.floor(bytes.length / 4));
}

function createRenderer(): WebGLRenderer | null {
  try {
    const probe = document.createElement('canvas');
    if (!(probe.getContext('webgl2') ?? probe.getContext('webgl'))) return null;
    return new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch {
    return null;
  }
}

export async function mountScene(options: SceneOptions): Promise<SceneResult | null> {
  const renderer = createRenderer();
  if (!renderer) return null;
  const response = await fetch(`/api/v2/builds/${options.modId}/geometry`, { headers: { accept: 'application/json' } });
  if (!response.ok) {
    renderer.dispose();
    throw new Error(`geometry ${response.status}`);
  }
  const geometry = (await response.json()) as BuildGeometryDTO;
  const data = decode(geometry.data);
  const count = Math.floor(data.length / STRIDE);

  const { host } = options;
  const canvas = renderer.domElement;
  canvas.tabIndex = 0;
  canvas.setAttribute('role', 'application');
  canvas.setAttribute('aria-label', viewer_canvas_label({ name: options.name }));
  canvas.className = 'absolute inset-0 size-full touch-none';
  host.append(canvas);

  const scene = new Scene();
  // Warm sky over dark ground, plus a low sun: wood reads as wood and the logs keep their relief.
  scene.add(new HemisphereLight(0xfff1dc, 0x2a2018, 0.9));
  scene.add(new AmbientLight(0xffffff, 0.2));
  const sun = new DirectionalLight(0xfff4e6, 1.8);
  sun.position.set(-40, 80, 30);
  scene.add(sun);

  // Framed on the bulk of the pieces (stray outliers ignored); the grid is a 2.25 m construction
  // cell wide and spans a little more than the build.
  const bulk = frameOf(data, count);
  const radius = bulk.radius;
  const gridSize = Math.ceil((radius * 2.6) / 2.25) * 2.25;
  const grid = new GridHelper(gridSize, Math.round(gridSize / 2.25), 0x3d6a85, 0x223644);
  grid.position.set(bulk.center[0], 0, bulk.center[2]);
  scene.add(grid);

  // Pieces grouped by profile.
  const byProfile = new Map<number, number[]>();
  for (let i = 0; i < count; i++) {
    const profile = data[i * STRIDE] ?? 0;
    const list = byProfile.get(profile);
    if (list) list.push(i);
    else byProfile.set(profile, [i]);
  }
  // Low-poly unit shapes along Z (the long axis of every piece), scaled per instance: a hexagonal
  // prism for logs and planks, a box for stone rows.
  const log = new CylinderGeometry(0.5, 0.5, 1, 6, 1);
  log.rotateX(Math.PI / 2);
  const stone = new BoxGeometry(1, 1, 1);
  const shapes = inferProfileShapes(data, count);
  const dummy = new Object3D();
  const quat = new Quaternion();
  const meshes: InstancedMesh[] = [];
  const materials: MeshLambertMaterial[] = [];
  for (const [profile, indexes] of byProfile) {
    const shape = shapes.get(profile) ?? { diameter: 0.45, length: 2.25 };
    const kind = materialOf(geometry.profiles[profile]);
    const { h, s, l } = kind === 'stone' ? stoneColor(profile) : woodColor(profile, shape);
    const material = new MeshLambertMaterial({ color: new Color().setHSL(h, s, l), flatShading: true });
    const mesh = new InstancedMesh(kind === 'stone' ? stone : log, material, indexes.length);
    indexes.forEach((index, slot) => {
      const o = index * STRIDE;
      dummy.position.set(data[o + 1] ?? 0, data[o + 2] ?? 0, data[o + 3] ?? 0);
      quat.set(data[o + 4] ?? 0, data[o + 5] ?? 0, data[o + 6] ?? 0, data[o + 7] ?? 1).normalize();
      dummy.quaternion.copy(quat);
      const lengthScale = data[o + 8] || 1;
      dummy.scale.set(shape.diameter, shape.diameter, shape.length * lengthScale);
      dummy.updateMatrix();
      mesh.setMatrixAt(slot, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    scene.add(mesh);
    meshes.push(mesh);
    materials.push(material);
  }

  const camera = new PerspectiveCamera(45, 1, 0.1, radius * 40);
  const target = new Vector3(bulk.center[0], bulk.center[1], bulk.center[2]);
  // Far enough to fit the bounding sphere in a 45° view, from a three-quarter angle above.
  const distance = (radius / Math.sin(Math.PI / 8)) * 0.9;
  camera.position.copy(target).add(new Vector3(0.62, 0.5, 0.6).normalize().multiplyScalar(distance));
  const controls = new OrbitControls(camera, canvas);
  controls.target.copy(target);
  controls.enableDamping = false;
  controls.minDistance = 2;
  controls.maxDistance = distance * 3;
  controls.maxPolarAngle = Math.PI * 0.495;
  controls.update();

  let frame = 0;
  const draw = () => {
    frame = 0;
    renderer.render(scene, camera);
  };
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(draw);
  };
  controls.addEventListener('change', schedule);

  const resize = () => {
    const w = Math.max(host.clientWidth, 1);
    const h = Math.max(host.clientHeight, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    schedule();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  resize();

  // Keyboard: arrows orbit, + / - zoom (no animation: one step per key press).
  const STEP = Math.PI / 12;
  const onKey = (event: KeyboardEvent) => {
    const offset = camera.position.clone().sub(controls.target);
    let handled = true;
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowRight': {
        const angle = event.key === 'ArrowLeft' ? STEP : -STEP;
        offset.applyAxisAngle(new Vector3(0, 1, 0), angle);
        break;
      }
      case 'ArrowUp':
      case 'ArrowDown': {
        const spherical = offset.clone();
        const axis = new Vector3(0, 1, 0).cross(spherical).normalize();
        const angle = event.key === 'ArrowUp' ? -STEP : STEP;
        const next = spherical.clone().applyAxisAngle(axis, angle);
        const polar = Math.acos(Math.min(1, Math.max(-1, next.y / next.length())));
        if (polar > 0.05 && polar < Math.PI * 0.495) offset.copy(next);
        break;
      }
      case '+':
      case '=':
        offset.multiplyScalar(0.85);
        break;
      case '-':
      case '_':
        offset.multiplyScalar(1.15);
        break;
      default:
        handled = false;
    }
    if (!handled) return;
    event.preventDefault();
    const length = Math.min(Math.max(offset.length(), controls.minDistance), controls.maxDistance);
    camera.position.copy(controls.target).add(offset.setLength(length));
    controls.update();
    schedule();
  };
  canvas.addEventListener('keydown', onKey);
  if (options.reduceMotion) controls.enableDamping = false;
  schedule();
  canvas.focus({ preventScroll: true });

  return {
    shown: geometry.pieces,
    total: geometry.totalPieces,
    handle: {
      dispose() {
        if (frame) cancelAnimationFrame(frame);
        observer.disconnect();
        canvas.removeEventListener('keydown', onKey);
        controls.dispose();
        for (const mesh of meshes) mesh.dispose();
        for (const material of materials) material.dispose();
        log.dispose();
        stone.dispose();
        grid.geometry.dispose();
        renderer.dispose();
        canvas.remove();
      },
    },
  };
}
