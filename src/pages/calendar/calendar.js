import graniteCalendar from "../../graniteComponents/calendar/graniteCalendar";

import "./calendar.css";

const calendarEvents = {
  id: "main-calendar",
  options: {},
  records: [
    {
      title: "new event",
      start: "2022-02-02",
      color: "#ECD7FE",
      id: "/activity?id=23232",
      textColor: "#333333",
      url: "/activity?id=23232",
    },
    {
      title: "Event 2",
      start: "2022-02-23",
      color: "#D7F6FF",
      id: "002",
      textColor: "#333333",
    },
    {
      title: "test",
      start: "2022-02-12",
      end: "2022-02-18",
      color: "#D2E2FF",
      id: "003",
      textColor: "#333333",
    },
  ],
};
graniteCalendar(calendarEvents);
