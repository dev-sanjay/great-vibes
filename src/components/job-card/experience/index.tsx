const Experience: React.FC<{ maximum?: number; minimum?: number }> = ({
  maximum,
  minimum,
}) => {
  return maximum && minimum ? (
    <p>
      Experience ({minimum} - {maximum} years)
    </p>
  ) : maximum ? (
    <p>Experience ({maximum} years)</p>
  ) : minimum ? (
    <p>Experience ({minimum} years)</p>
  ) : null;
};

export default Experience;
