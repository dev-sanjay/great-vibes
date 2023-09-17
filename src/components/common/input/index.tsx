import { FieldHookConfig, useField } from 'formik';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    React.ClassAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

const Input: React.FC<InputProps & FieldHookConfig<string>> = ({
  id,
  label,
  required,
  ...props
}) => {
  const [field, { touched, error }] = useField(props);

  return (
    <div className='flex flex-col gap-1 flex-grow'>
      {label && (
        <label
          className={`text-sm font-medium text-dark-100 ${
            required ? "after:content-['*'] after:text-error" : ''
          }`}
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <input
        className={`flex py-2 px-3 rounded-[5px] border text-silver w-full ${
          touched && error ? 'border-error' : 'border-platinum'
        }`}
        id={id}
        {...field}
        {...props}
      />

      {touched && error && <span className='text-xs text-error'>{error}</span>}
    </div>
  );
};

export default Input;
