const events = [
  { title: "new event", start: "2022-02-02" },
  { title: "new event", start: "2022-16-02" },
  { title: "new event", start: "2022-09-02" },
];

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    dateClick: function (info) {
      alert("Clicked on: " + info.dateStr);
      alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
      alert("Current view: " + info.view.type);
      // change the day's background color just for fun
      info.dayEl.style.backgroundColor = "red";
    },
  });
  calendar.batchRendering(function () {
    calendar.changeView("dayGridMonth");
    calendar.addEvent({
      title: "new event",
      start: "2022-02-12",
      end: "2022-02-15",
    });
  });
  calendar.render();
});
