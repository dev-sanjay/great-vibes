'use client';

import Jobs from '@/components/jobs';

import { Provider } from '@/context';
import Header from '@/components/header';

export default function Home() {
  return (
    <Provider>
      <Header />

      <main className='flex flex-col items-center'>
        <div className='my-5 sm:my-20'>
          <Jobs />
        </div>
      </main>
    </Provider>
  );
}
