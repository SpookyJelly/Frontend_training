export const useConfirm = (
  message = "",
  callback: Function,
  abort: Function
) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      abort();
    }
  };
  return confirmAction;
};
