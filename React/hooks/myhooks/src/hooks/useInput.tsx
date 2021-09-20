import { useState } from "react";

export const useInput = (initValue: string, validator: Function) => {
  const [value, setValue] = useState(initValue);
  const onChange = (e: any) => {
    const { target } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value); // 10글자 넘는 순간 여기서 willUpdate가 false로 바뀜
      console.log(willUpdate);
    }
    // 그래서 여기가 실행 안되는거인듯
    if (willUpdate) {
      setValue(target.value);
    }
  };
  return { value, onChange };
};
