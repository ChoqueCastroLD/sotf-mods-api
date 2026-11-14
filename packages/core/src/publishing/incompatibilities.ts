/**
 * Incompatibilities of a mod (2026-11, SotF Mods Manager): `ModDependency` rows of kind
 * `conflicts` on the latest version, served as `incompatibilities` by `GET /api/mods` and
 * `GET /api/mods/slug/:u/:s`. The relation counts both ways for the launcher; it is stored once.
 *
 * Rules (checked on the raw input, before dependencies are merged, so a conflict can never silently
 * replace a dependency or vanish):
 * - every `mod_id` must exist on the site;
 * - a mod cannot be incompatible with itself;
 * - nor with one of its own dependencies (from its manifest or declared as required/optional).
 */

export interface IncompatibilityProblems {
  /** Declared `mod_id`s that are not on the site. */
  unknown: string[];
  /** The mod lists itself. */
  self: boolean;
  /** Declared `mod_id`s that are also dependencies of the mod. */
  dependency: string[];
}

const norm = (id: string) => id.trim().toLowerCase();

/** Problems of the `conflicts` entries of `declared`; `known` holds the `mod_id`s found on the site. */
export function incompatibilityProblems(input: {
  selfManifestId: string | null;
  manifestDeps: readonly string[];
  declared: ReadonlyArray<{ manifestId: string; kind?: 'required' | 'optional' | 'conflicts' | undefined }>;
  known: ReadonlySet<string>;
}): IncompatibilityProblems {
  const conflicts = input.declared
    .filter((d) => d.kind === 'conflicts')
    .map((d) => d.manifestId.trim())
    .filter(Boolean);
  const dependencies = new Set([
    ...input.manifestDeps.map(norm),
    ...input.declared.filter((d) => d.kind !== 'conflicts').map((d) => norm(d.manifestId)),
  ]);
  const self = input.selfManifestId !== null && conflicts.some((id) => norm(id) === norm(input.selfManifestId ?? ''));
  const others = conflicts.filter((id) => input.selfManifestId === null || norm(id) !== norm(input.selfManifestId));
  const knownLower = new Set([...input.known].map(norm));
  return {
    unknown: [...new Set(others.filter((id) => !knownLower.has(norm(id))))],
    self,
    dependency: [...new Set(others.filter((id) => dependencies.has(norm(id))))],
  };
}

export function hasIncompatibilityProblems(problems: IncompatibilityProblems): boolean {
  return problems.self || problems.unknown.length > 0 || problems.dependency.length > 0;
}
