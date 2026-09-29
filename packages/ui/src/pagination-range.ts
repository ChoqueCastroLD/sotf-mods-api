/**
 * Page list with ellipses (the MUI algorithm with one boundary page): always the first and last
 * pages, the current page and `siblings` pages on each side. An ellipsis never stands for a
 * single page, and the list keeps a constant length (2·siblings + 5) once there are enough
 * pages, so the control does not jump around while paging.
 */
export type PageToken = number | 'ellipsis-start' | 'ellipsis-end';

function range(from: number, to: number): number[] {
  return Array.from({ length: Math.max(0, to - from + 1) }, (_, index) => from + index);
}

export function paginationRange(current: number, total: number, siblings = 1): PageToken[] {
  const count = Math.max(1, Math.floor(total));
  const page = Math.min(Math.max(1, Math.floor(current)), count);
  if (count <= siblings * 2 + 5) return range(1, count);

  const start = Math.max(Math.min(page - siblings, count - siblings * 2 - 2), 3);
  const end = Math.min(Math.max(page + siblings, siblings * 2 + 3), count - 2);
  return [
    1,
    start > 3 ? 'ellipsis-start' : 2,
    ...range(start, end),
    end < count - 2 ? 'ellipsis-end' : count - 1,
    count,
  ];
}
