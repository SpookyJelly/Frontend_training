import { useState, useEffect } from "react";
export const useNetwork = () => {
  const [status, setStatus] = useState(navigator.onLine); // Navigator 인터페이스는 사용자 에이전트의 상태와 신원 정보를 나타냅내며, 스크립트로 해당 정보를 질의할 때와 애플리케이션을 특정 활동에 등록할 때 사용합니다.
  const handleChange = () => {
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    window.removeEventListener("online", handleChange);
    window.removeEventListener("offline", handleChange);
  }, []);
  return status;
};
