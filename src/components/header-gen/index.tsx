import * as React from "react";
// import SC from "./styled";

interface HeaderGenProps {
  data: any;
}
export default ((props: HeaderGenProps) => {
  return (
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
  );
}) as React.SFC;
