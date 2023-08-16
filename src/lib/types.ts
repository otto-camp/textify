export interface SummaryResponse {
  app_version: string;
  time_taken: number;
  msg: string;
  ok: boolean;
  sentence_count: number;
  summary: string;
  sentences: string[];
}
