export const usePreventLeave = () => {
  const listener = (event: any) => {
    event?.preventDefault();
    event.returnValue = ""; // 이거 넣어줘야지 작동
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};
