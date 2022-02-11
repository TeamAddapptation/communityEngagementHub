import cehCalendar from "../../graniteComponents/calendar/calendar";

const calendarEvents = {
  id: "main-calendar",
  options: {},
  records: [],
};
cehCalendar(calendarEvents);

// const CalEvents = [
//   { title: "new event", start: "2022-02-02" },
//   { title: "new event", start: "2022-16-02" },
//   { title: "new event", start: "2022-09-02" },
// ];

// document.addEventListener("DOMContentLoaded", function () {
//   var calendarEl = document.getElementById("calendar");
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: "dayGridMonth",
//     events: [
//       {
//         title: "new event",
//         start: "2022-02-02",
//         color: "#ECD7FE",
//         textColor: "#333333",
//       },
//       {
//         title: "Event 2",
//         start: "2022-02-23",
//         color: "#D7F6FF",
//         textColor: "#333333",
//       },
//       {
//         title: "test",
//         start: "2022-02-12",
//         end: "2022-02-18",
//         color: "#D2E2FF",
//         textColor: "#333333",
//       },
//     ],
//   });
//   calendar.render();
// });
