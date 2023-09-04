export interface SummaryResponse {
  app_version: string;
  time_taken: number;
  msg: string;
  ok: boolean;
  sentence_count: number;
  summary: string;
  sentences: string[];
}

export interface SentimentAnalysisResponse {
  app_version: string;
  time_taken: number;
  msg: string;
  ok: boolean;
  aggregate_sentiment: {
    neg: number;
    neu: number;
    pos: number;
    compound: number;
  };
  sentiment_list: {
    neg: number;
    neu: number;
    pos: number;
    compound: number;
    sentence: string;
  }[];
  sentiment: string;
}
