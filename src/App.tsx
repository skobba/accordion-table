import * as React from "react";
import "./styles.css";
import Accordion from "./components/accordion-table";

/* const tableGenProps: TableGenProps = {
  data: someJson
}; */

export default function App() {
  return (
    <div className="App">
      <h2>accordion-table</h2>
      <Accordion data={data} />
    </div>
  );
}

const data = [
  {
    id: 1,
    employer: "Farstad Shipping",
    role: "2 Mate",
    vessel: {
      name: "Far Symphony",
      url: "/vessels/1234567890"
    },
    totalDays: 67,
    time: [
      {
        dateFromTo: "28.06.16 - 13.07.16",
        days: 16
      },
      {
        dateFromTo: "13.07.16 - 02.08.16",
        days: 21
      },
      {
        dateFromTo: "28.08.16 - 26.08.16",
        days: 30
      }
    ]
  },
  {
    id: 2,
    employer: "Haugesund Shipping",
    role: "3 Mate",
    vessel: {
      name: "Far Melody",
      url: "/vessels/1234567891"
    },
    totalDays: 67,
    time: [
      {
        dateFromTo: "28.06.16 - 13.07.16",
        days: 16
      },
      {
        dateFromTo: "13.07.16 - 02.08.16",
        days: 21
      },
      {
        dateFromTo: "28.08.16 - 26.08.16",
        days: 30
      }
    ]
  }
];
