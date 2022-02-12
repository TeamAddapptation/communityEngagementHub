function graniteCalendar(jsonBlock) {
  const id = jsonBlock.id;
  const graniteDiv = document.getElementById(id);
  const o = jsonBlock.options;
  const r = jsonBlock.records;

  const calendarCont = document.getElementById(id);
  console.log(calendarCont);
  document.addEventListener("DOMContentLoaded", function () {
    var calendar = new FullCalendar.Calendar(calendarCont, {
      initialView: "dayGridMonth",
      events: r,
    });
    calendar.render();
  });
}
