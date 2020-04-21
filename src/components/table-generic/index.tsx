import * as React from "react";
import SC from "./styled";

interface IndicatorProps {
  type: string;
}
export default ((props: IndicatorProps) => {
  return <SC.MyDiv>MyDiv</SC.MyDiv>;
}) as React.SFC;
