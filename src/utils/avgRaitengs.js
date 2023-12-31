const calculateFvgRaitings = reviews => {
  const totalRating = reviews
    ? reviews.reduce((acc, item) => acc + item.rating, 0)
    : 0;

  const avgRating =
    totalRating === 0
      ? ''
      : totalRating === 1
      ? totalRating
      : (totalRating / reviews?.length).toFixed(1);
  return {
    avgRating,
    totalRating,
  };
};
export default calculateFvgRaitings;
