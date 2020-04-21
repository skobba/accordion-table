import styled from "styled-components";

const MyDiv = styled.div`
  color: red;
`;
const Accordion = styled.div`
  width: 90%;
`;

const Title = styled.div`
  height: 30px;
  width: 100%;
  color: black;
  letter-spacing: 1px;
  text-align: left;
  line-height: 2;
  font-weight: lighter;
  position: relative;
  padding: 10px;
  border-radius: 4px;
  margin-top: 2px;
  border-style: solid;
  border-color: black;
`;
const TimeItems = styled.div`
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${props => (props.open ? "25px 0" : "0")};
  transition: all 0.3s ease-out;
`;

const Expanded = styled.div`
  width: 100%;
  color: black;
  letter-spacing: 1px;
  text-align: left;
  line-height: 2;
  font-weight: lighter;
  padding: 10px;
  border-radius: 4px;
  margin-top: 2px;
  border-style: solid;
  border-color: black;
`;

const AccordionItem = styled.ul`
  list-style: none;
  padding: 0px 0px 0px 0px;
`;

export default {
  Accordion,
  MyDiv,
  AccordionItem,
  Title,
  Expanded,
  TimeItems
};
