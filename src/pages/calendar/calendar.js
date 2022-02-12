import graniteCalendar from "../../graniteComponents/calendar/graniteCalendar";

const calendarEvents = {
  id: "main-calendar",
  options: {},
  records: [
    {
      title: "new event",
      start: "2022-02-02",
      color: "#ECD7FE",
      textColor: "#333333",
    },
    {
      title: "Event 2",
      start: "2022-02-23",
      color: "#D7F6FF",
      textColor: "#333333",
    },
    {
      title: "test",
      start: "2022-02-12",
      end: "2022-02-18",
      color: "#D2E2FF",
      textColor: "#333333",
    },
  ],
};
graniteCalendar(calendarEvents);
