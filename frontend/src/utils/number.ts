const round = (value: number | string) => {
  const val = typeof value === "string" ? Number(value) : value;

  return val.toFixed(2);
};

export { round };
