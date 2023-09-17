import { useField } from 'formik';

interface RadioProps {
  label?: string;
  options: { id: string; label: string }[];
  name: string;
}

const Radio: React.FC<RadioProps> = ({ name, label, options }) => {
  const [field] = useField({ name });

  return (
    <div className='flex flex-col gap-3'>
      {label && <p className='text-sm font-medium'>{label}</p>}
      <ul className='flex items-center gap-4'>
        {options.map(({ id, label }) => {
          return (
            <li key={id} className='relative'>
              <input
                {...field}
                id={id}
                type='radio'
                value={id}
                checked={id === field.value}
                className='peer absolute w-0 h-0 opacity-0'
              />
              <label
                htmlFor={id}
                className='flex items-center relative before:absolute before:left-0 before:border-2 before:border-lightSilver before:w-5 before:h-5 before:cursor-pointer before:rounded-full peer-checked:before:bg-primary-200 peer-checked:before:border-primary-200 peer-focus:before:bg-primary-200 peer-focus:before:border-primary-200 pl-6 text-silve after:absolute after:left-[7px] after:w-1.5 after:h-1.5 after:rounded-full after:bg-white cursor-pointer text-sm text-silver'
              >
                {label}
              </label>
              <span className='hidden peer-focus:inline-flex absolute -left-0.5 -top-0.5 rounded-full h-6 w-6 border border-primary-200' />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Radio;
