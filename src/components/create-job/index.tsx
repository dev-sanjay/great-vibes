import { useState } from 'react';

import strings from '@/locales/en.json';
import JobForm from '@/components/forms/job';
import Button from '@/components/common/button';

const CreateJob: React.FC = () => {
  const [showCreateJobModal, setShowCreateJobModal] = useState(false);

  return (
    <>
      <Button
        variant='primary'
        size='large'
        onClick={() => setShowCreateJobModal(true)}
        className='font-normal'
      >
        {strings.createAJob}
      </Button>
      <JobForm
        isOpen={showCreateJobModal}
        onClose={() => setShowCreateJobModal(false)}
      />
    </>
  );
};

export default CreateJob;
