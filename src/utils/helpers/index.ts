import { Job } from '@/api/types';

const getApplyData = (applyType: 'quickApply' | 'externalApply') => {
  if (applyType === 'quickApply') {
    return {
      id: 'quickApply',
      label: 'Quick apply',
    };
  } else if (applyType === 'externalApply') {
    return {
      id: 'externalApply',
      label: 'External apply',
    };
  }
};

export const formatJobData = (data: any) => {
  const formattedData: Partial<Job> = {
    jobTitle: data.jobTitle,
    companyName: data.companyName,
    industry: data.industry,
    location: data.location ?? '',
    remoteType: data.remoteType ?? '',
    experience: {
      minimum: data.minExperience ?? '',
      maximum: data.maxExperience ?? '',
    },
    salary: {
      minimum: data.minSalary ?? '',
      maximum: data.maxSalary ?? '',
    },
    employees: data.employees,
    apply: getApplyData(data.applyType),
  };

  return formattedData as Job;
};

export const formatSalary = (salary: number) => {
  return new Intl.NumberFormat('en-IN').format(salary);
};
