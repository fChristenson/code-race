const callMeMaybe = i => {
  if (i === 0) return i;
  return callMeMaybe(--i);
};

callMeMaybe(1000);
