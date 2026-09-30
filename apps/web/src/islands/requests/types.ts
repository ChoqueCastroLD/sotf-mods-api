/** Shapes of the request board API used by the island (type-only imports: no Zod in the island). */
export type {
  MyRequestVotesDTO,
  RequestCommentDTO,
  RequestDTO,
  RequestStatus,
} from '@sotf/contracts/requests';

export interface CursorPage<T> {
  items: T[];
  nextCursor: string | null;
}

export interface VoteResult {
  requestId: number;
  voted: boolean;
  voteCount: number;
}
