import * as React from "react";
import SC from "./styled";
//import HeaderGen from "../header-gen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export interface AccordionTableProps {
  data: any;
}
export default (props => {
  return (
    <SC.Accordion>
      {props.data.map((data: any, key: any) => {
        return (
          <SC.AccordionItem>
            <SC.Title>
              {data.employer} <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </SC.Title>
            <TimeItems open={true} time={data.time} />
          </SC.AccordionItem>
        );
      })}
    </SC.Accordion>
  );
}) as React.SFC<AccordionTableProps>;

const TimeItems = ({ open, time }) => {
  return (
    <SC.Expanded>
      {time.map((data: any, key: any) => {
        console.log("key: " + JSON.stringify(key));
        return (
          <SC.TimeItems open={open}>
            {data.dateFromTo} - {data.days}
          </SC.TimeItems>
        );
      })}
    </SC.Expanded>
  );
};
