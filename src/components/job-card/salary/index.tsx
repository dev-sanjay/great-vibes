import { formatSalary } from '@/utils/helpers';

const Salary: React.FC<{ maximum?: number; minimum?: number }> = ({
  maximum,
  minimum,
}) => {
  const max = maximum ? formatSalary(maximum) : maximum;
  const min = minimum ? formatSalary(minimum) : minimum;

  return max && min ? (
    <p>
      INR (₹) {min} - {max} / Month
    </p>
  ) : max ? (
    <p>INR (₹) {max} / Month</p>
  ) : min ? (
    <p>INR (₹) {min} / Month</p>
  ) : null;
};

export default Salary;
