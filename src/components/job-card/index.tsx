import { StaticImageData } from 'next/image';

import { Job } from '@/api/types';
import netflix from '@/assets/images/netflix.svg';
import strings from '@/locales/en.json';
import Button from '@/components/common/button';
import { Edit, Trash } from '@/assets/icons';
import Salary from './salary';
import Experience from './experience';

interface JobCardProps extends Job {
  onEdit: () => void;
  onDelete: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  jobTitle,
  companyName,
  industry,
  location,
  remoteType,
  experience,
  salary,
  employees,
  apply,
  onEdit,
  onDelete,
}) => (
  <div className='flex gap-2 py-4 px-6 w-full rounded-[10px] border border-gainsboro bg-white'>
    <div className='h-12 w-12 flex shrink-0'>
      <img src={(netflix as StaticImageData).src} alt='netflix' />
    </div>
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col'>
        <h3 className='text-2xl'>{jobTitle}</h3>
        <p className='text-base'>{`${companyName} - ${industry}`}</p>
        <p className='text-base text-silver'>
          {`${location} ${remoteType ? `(${remoteType})` : ''}`}
        </p>
      </div>
      <div className='flex flex-col gap-2 text-dark-300 text-base'>
        <p>Part-Time (9.00 am - 5.00 pm IST)</p>
        {experience ? <Experience {...experience} /> : null}
        {salary ? <Salary {...salary} /> : null}
        <p>{employees} employees</p>
      </div>
      <div className='flex'>
        {apply?.id === 'quickApply' && (
          <Button variant='primary' size='large'>
            {strings.applyNow}
          </Button>
        )}

        {apply?.id === 'externalApply' && (
          <Button variant='secondary' size='large'>
            {strings.externalApply}
          </Button>
        )}
      </div>
    </div>
    <div className='flex gap-2 ml-auto'>
      <Edit onClick={onEdit} />
      <Trash onClick={onDelete} />
    </div>
  </div>
);

export default JobCard;
