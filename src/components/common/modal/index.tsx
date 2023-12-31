'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as='div' className='relative z-10' onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='fixed inset-0 bg-black bg-opacity-25' />
      </Transition.Child>

      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel className='flex flex-col gap-6 w-full md:min-w-[577px] max-w-md transform overflow-hidden rounded-[10px] bg-white p-8 text-left align-middle shadow-xl transition-all border border-platinum'>
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);

export default Modal;
