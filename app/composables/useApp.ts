export const useApp = () => {
  function isNumeric(value) {
    return !isNaN(value) && value !== "";
  }
  return { isNumeric };
};
