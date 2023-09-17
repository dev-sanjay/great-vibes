import { useContext, useEffect, useState } from 'react';

import { Api } from '@/api';
import JobCard from '@/components/job-card';
import { Context } from '@/context';
import JobForm from '@/components/forms/job';

const Jobs: React.FC = () => {
  const { state, setState } = useContext(Context);
  const [updateJobId, setUpdateJobId] = useState<string | null>(null);

  useEffect(() => {
    const getJobs = async () => {
      const respose = await Api.getJobs({});
      setState({ jobs: respose.data });
    };

    getJobs();
  }, []);

  const onJobDeleteHandler = async (id: string) => {
    await Api.deleteJob({ segment: id });

    const response = await Api.getJobs({});
    setState({ jobs: response.data });
  };

  const onJobEditHandler = (id: string) => {
    setUpdateJobId(id);
  };

  return (
    <>
      {!!updateJobId && (
        <JobForm
          job={state.jobs.find(({ id }) => id === updateJobId)}
          isOpen={!!updateJobId}
          onClose={() => setUpdateJobId(null)}
        />
      )}

      <ul className='flex flex-wrap px-3 sm:px-20 gap-5 lg:gap-20'>
        {state.jobs.map(job => {
          return (
            <li
              key={job.id}
              className='w-full sm:max-w-[calc(50%-20px)] lg:max-w-[calc(50%-40px)] flex'
            >
              <JobCard
                {...job}
                onEdit={() => onJobEditHandler(job.id)}
                onDelete={() => onJobDeleteHandler(job.id)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Jobs;
