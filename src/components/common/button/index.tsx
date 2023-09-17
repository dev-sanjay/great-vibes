interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const getStylesAsPerVariant = (variant: IButton['variant']) => {
  switch (variant) {
    case 'primary':
      return 'bg-primary-100 hover:bg-primary-200 text-white';
    case 'secondary':
      return 'border border-primary-100 hover:bg-primary-300 text-primary-100';
    default:
      return '';
  }
};

const getStylesAsPerSize = (size?: IButton['size']) => {
  switch (size) {
    case 'large':
      return 'py-2 px-4 text-base font-medium';
    case 'medium':
      return '';
    case 'small':
      return '';
    default:
      return '';
  }
};

const Button: React.FC<IButton> = ({
  children,
  variant,
  size,
  className = '',
  ...rest
}) => {
  const classes = [
    getStylesAsPerVariant(variant),
    getStylesAsPerSize(size),
    className,
  ].join(' ');

  return (
    <button
      className={`flex justify-center items-center shadow-sm rounded-md ${classes}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
