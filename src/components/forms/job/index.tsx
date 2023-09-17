'use client';

import { useContext, useRef, useState } from 'react';
import { Formik, Form } from 'formik';

import strings from '@/locales/en.json';
import { createJobSchemaStep1, createJobSchemaStep2 } from '@/utils/schema';
import Modal from '@/components/common/modal';
import Input from '@/components/common/input';
import Button from '@/components/common/button';
import Range from '@/components/common/input/range';
import Radio from '@/components/common/input/radio';
import { formatJobData } from '@/utils/helpers';
import { Api } from '@/api';
import { Context } from '@/context';
import { Job } from '@/api/types';

interface CreateJobProps {
  job?: Job;
  isOpen: boolean;
  onClose: () => void;
}

const CreateJob: React.FC<CreateJobProps> = ({ job, isOpen, onClose }) => {
  const [showStepTwoForm, setShowStepTwoForm] = useState(false);
  const { setState } = useContext(Context);

  const initialValues = {
    jobTitle: job?.jobTitle ?? '',
    companyName: job?.companyName ?? '',
    industry: job?.industry ?? '',
    location: job?.location ?? '',
    remoteType: job?.remoteType ?? '',
    minExperience: job?.experience?.minimum ?? '',
    maxExperience: job?.experience?.maximum ?? '',
    maxSalary: job?.salary?.maximum ?? '',
    minSalary: job?.salary?.minimum ?? '',
    employees: job?.employees ?? '',
    applyType: job?.apply?.id ?? '',
  };

  const createJob = async (data: object) => {
    const jobData = formatJobData(data);

    // Edit job
    if (job?.id) {
      await Api.editJob({ segment: job.id, body: jobData });
    } else {
      await Api.createJob({ body: jobData });
    }

    const response = await Api.getJobs({});
    setState({ jobs: response.data });
    onClose();
    setShowStepTwoForm(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='text-dark-200 flex items-center justify-between'>
        <h3 className='text-xl font-normal'>{strings.createAJob}</h3>
        <span className='text-base font-medium'>
          {showStepTwoForm ? strings.step2 : strings.step1}
        </span>
      </div>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={
          showStepTwoForm ? createJobSchemaStep2 : createJobSchemaStep1
        }
        onSubmit={e => {
          if (showStepTwoForm) {
            createJob(e);
          } else {
            setShowStepTwoForm(true);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {showStepTwoForm ? (
              <div className='flex flex-col gap-6'>
                <Range
                  id='experience'
                  label={strings.experience}
                  minProps={{
                    name: 'minExperience',
                    placeholder: strings.minimum,
                  }}
                  maxProps={{
                    name: 'maxExperience',
                    placeholder: strings.maximum,
                  }}
                />
                <Range
                  id='salary'
                  label={strings.salary}
                  minProps={{ name: 'minSalary', placeholder: strings.minimum }}
                  maxProps={{ name: 'maxSalary', placeholder: strings.maximum }}
                />
                <Input
                  id='employees'
                  name='employees'
                  type='number'
                  label={strings.totalEmployee}
                  placeholder={strings.totalEmloyeePlaceholder}
                />
                <Radio
                  label={strings.applyType}
                  name='applyType'
                  options={[
                    { id: 'quickApply', label: strings.quickApply },
                    { id: 'externalApply', label: strings.externalApply },
                  ]}
                />
                <div className={`flex justify-end mt-[72px]`}>
                  <Button type='submit' variant='primary' size='large'>
                    {strings.save}
                  </Button>
                </div>
              </div>
            ) : (
              <div className='flex flex-col gap-6'>
                <Input
                  id='jobtitle'
                  name='jobTitle'
                  label={strings.jobTitle}
                  placeholder={strings.jobTitlePlaceholder}
                  required
                />
                <Input
                  id='companyName'
                  name='companyName'
                  label={strings.companyName}
                  placeholder={strings.companyNamePlaceholder}
                  required
                />
                <Input
                  id='industry'
                  name='industry'
                  label={strings.industry}
                  placeholder={strings.industryPlaceholder}
                  required
                />
                <div className='flex gap-6 sm:items-center flex-col sm:flex-row'>
                  <Input
                    id='location'
                    name='location'
                    label={strings.location}
                    placeholder={strings.locationPlaceholder}
                  />
                  <Input
                    id='remoteType'
                    name='remoteType'
                    label={strings.remoteType}
                    placeholder={strings.remoteTypePlaceholder}
                  />
                </div>
                <div className='flex justify-end mt-[72px]'>
                  <Button type='submit' variant='primary' size='large'>
                    {strings.next}
                  </Button>
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateJob;
