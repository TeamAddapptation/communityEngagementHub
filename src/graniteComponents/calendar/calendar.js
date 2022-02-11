export default function cehCalendar(jsonBlock) {
  const id = jsonBlock.id;
  const graniteDiv = document.getElementById(id);
  const o = jsonBlock.options;
  const r = jsonBlock.records;

  const calendarCont = document.getElementById(id);
  console.log(calendarCont);
  document.addEventListener("DOMContentLoaded", function () {
    var calendar = new FullCalendar.Calendar(calendarCont, {
      initialView: "dayGridMonth",
      events: [
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
    });
    calendar.render();
  });
}
