import React, { ReactNode } from "react";
import Customizable from "react-customizable-progressbar";

interface IProps {
  children: ReactNode;
  progress: number;
  max: number;
}

function ProgressTimer({ children, progress, max }: IProps) {
  return (
    <Customizable
      progress={progress}
      steps={max}
      radius={110}
      strokeWidth={4}
      strokeColor="#dc1717"
      pointerRadius={5}
      pointerStrokeWidth={2}
      pointerStrokeColor="#dc1717"
      pointerFillColor="#cd1717"
      trackStrokeWidth={2}
      trackStrokeColor="#ffffff"
    >
      <div className="indicator">{children}</div>
    </Customizable>
  );
}

export default ProgressTimer;
