export interface Options<Q, B> {
  query?: Q;
  body?: B;
  segment?: string;
}

export interface Job {
  id: string;
  jobTitle: string;
  companyName: string;
  industry: string;
  location?: string;
  remoteType?: string;
  experience?: {
    minimum: number;
    maximum: number;
  };
  salary?: {
    minimum: number;
    maximum: number;
  };
  employees?: number;
  apply?: {
    id: string;
    label: string;
  };
}

export interface CreateJobBody extends Job {}

export interface GetJobReply {
  status: number;
  data: Job[];
}
