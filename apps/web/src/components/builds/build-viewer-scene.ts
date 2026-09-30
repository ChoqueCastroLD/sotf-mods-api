/**
 * three.js scene of the build viewer (T1-06). Imported dynamically by `build-viewer.ts` on click, so
 * three.js never reaches the initial page weight. One `InstancedMesh` per profile (a handful of draw
 * calls for up to 20 000 pieces); rendering is on demand (no animation loop), so reduced motion and
 * battery are respected. Orbit by mouse/touch (OrbitControls) and by keyboard (arrows, + and -).
 */
import { viewer_canvas_label } from '@sotf/i18n/messages';
import type { BuildGeometryDTO } from '@sotf/contracts/build-viewer';
import {
  AmbientLight,
  BoxGeometry,
  Color,
  DirectionalLight,
  GridHelper,
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

const STRIDE = 9;

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
  scene.add(new AmbientLight(0xffffff, 1.6));
  const sun = new DirectionalLight(0xffffff, 2.2);
  sun.position.set(-40, 80, 30);
  scene.add(sun);

  const { width, depth, height } = geometry.size;
  const radius = Math.max(width, depth, height, 4);
  const grid = new GridHelper(Math.ceil(radius * 2.4), Math.ceil(radius * 2.4) / 2, 0x4a90b8, 0x2a4a60);
  scene.add(grid);

  // Pieces grouped by profile.
  const byProfile = new Map<number, number[]>();
  for (let i = 0; i < count; i++) {
    const profile = data[i * STRIDE] ?? 0;
    const list = byProfile.get(profile);
    if (list) list.push(i);
    else byProfile.set(profile, [i]);
  }
  const box = new BoxGeometry(0.8, 0.8, 0.8);
  const dummy = new Object3D();
  const quat = new Quaternion();
  const meshes: InstancedMesh[] = [];
  const materials: MeshLambertMaterial[] = [];
  for (const [profile, indexes] of byProfile) {
    const material = new MeshLambertMaterial({ color: new Color().setHSL(((profile * 0.618) % 1), 0.45, 0.58) });
    const mesh = new InstancedMesh(box, material, indexes.length);
    indexes.forEach((index, slot) => {
      const o = index * STRIDE;
      dummy.position.set(data[o + 1] ?? 0, data[o + 2] ?? 0, data[o + 3] ?? 0);
      quat.set(data[o + 4] ?? 0, data[o + 5] ?? 0, data[o + 6] ?? 0, data[o + 7] ?? 1).normalize();
      dummy.quaternion.copy(quat);
      const scale = data[o + 8] || 1;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(slot, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    scene.add(mesh);
    meshes.push(mesh);
    materials.push(material);
  }

  const camera = new PerspectiveCamera(45, 1, 0.1, radius * 40);
  const target = new Vector3(0, height / 2, 0);
  camera.position.set(radius * 1.3, radius * 1.1 + height / 2, radius * 1.6);
  const controls = new OrbitControls(camera, canvas);
  controls.target.copy(target);
  controls.enableDamping = false;
  controls.minDistance = radius * 0.25;
  controls.maxDistance = radius * 6;
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
        box.dispose();
        grid.geometry.dispose();
        renderer.dispose();
        canvas.remove();
      },
    },
  };
}
