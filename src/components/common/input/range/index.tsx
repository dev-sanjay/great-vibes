import strings from '@/locales/en.json';
import { FieldHookConfig, useField } from 'formik';
import { ChangeEvent, useState } from 'react';

interface RangeProps {
  id: string;
  label?: string;
  autoFocus?: boolean;
  minProps: {
    name: string;
    placeholder: string;
  };
  maxProps: {
    name: string;
    placeholder: string;
  };
}

const Range: React.FC<RangeProps> = ({
  id,
  label,
  autoFocus,
  minProps,
  maxProps,
}) => {
  const [minField, minMeta] = useField({ name: minProps.name });
  const [maxField, maxMeta] = useField({ name: maxProps.name });

  return (
    <div className='flex flex-col gap-1 flex-grow'>
      {label && (
        <label htmlFor={id} className='text-sm font-medium text-dark-100'>
          {label}
        </label>
      )}

      <div className='flex gap-6 sm:items-start flex-col sm:flex-row'>
        <div className='flex gap-1 flex-col flex-1'>
          <input
            className={`flex py-2 px-3 rounded-[5px] border border-platinum text-silver w-full ${
              minMeta.touched && minMeta.error ? 'border-error' : ''
            }`}
            id={id}
            type='number'
            placeholder={minProps.placeholder}
            autoFocus={autoFocus}
            {...minField}
          />
          {minMeta.touched && minMeta.error && (
            <span className='text-xs text-error'>{minMeta.error}</span>
          )}
        </div>

        <div className='flex gap-1 flex-col flex-1'>
          <input
            className={`flex py-2 px-3 rounded-[5px] border border-platinum text-silver w-full ${
              maxMeta.touched && maxMeta.error ? 'border-error' : ''
            }`}
            type='number'
            placeholder={maxProps.placeholder}
            {...maxField}
          />
          {maxMeta.touched && maxMeta.error && (
            <span className='text-xs text-error'>{maxMeta.error}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Range;
