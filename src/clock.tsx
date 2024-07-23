import { useState } from "react";

export const Clock = () => {
  let tame = new Date().toLocaleTimeString();
  const [stateTame, setStateTame] = useState(tame);

  const UpdateTime = () => {
    tame = new Date().toLocaleTimeString();
    setStateTame(tame);
  };

  setInterval(UpdateTime);

  return <div>{stateTame}</div>;
};
