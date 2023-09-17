import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@/utils/constants';
import { CreateJobBody, GetJobReply, Options } from './types';

function Fetch<
  Query extends {},
  Body extends {},
  Reply extends { status?: number }
>(config: AxiosRequestConfig) {
  return async ({ query, body, segment }: Options<Query, Body>) => {
    const url = segment ? `${config.url}/${segment}` : config.url;

    const { data, status } = await axios({
      ...config,
      url,
      headers: { 'Content-Type': 'application/json' },
      data: body,
    });
    return { data, status } as unknown as Reply;
  };
}

export const Api = {
  createJob: Fetch<{}, CreateJobBody, {}>({
    method: 'post',
    url: `${BASE_URL}/job`,
  }),

  deleteJob: Fetch<{}, {}, {}>({
    method: 'delete',
    url: `${BASE_URL}/job`,
  }),

  editJob: Fetch<{}, CreateJobBody, {}>({
    method: 'put',
    url: `${BASE_URL}/job`,
  }),

  getJobs: Fetch<{}, {}, GetJobReply>({
    method: 'get',
    url: `${BASE_URL}/job`,
  }),
};
