const CalEvents = [
  { title: "new event", start: "2022-02-02" },
  { title: "new event", start: "2022-16-02" },
  { title: "new event", start: "2022-09-02" },
];

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: [
      { title: "new event", start: "2022-02-02" },
      { title: "Event 2", start: "2022-02-23" },
      { title: "test", start: "2022-02-12" },
    ],
  });
  calendar.render();
});
