import cehCards from "../../pComponents/cards/cehCards";
import cehPillFilters from "../../pComponents/pillFilters/cehPillFilters";

const DashboardPillFilters = {
  id: "ceg-pill-filters",
  options: {
    apply_btn: true,
  },
  records: [
    {
      name: "Trips",
      sf_field: "trips",
      children: [
        { value: "Trips", field: "checkbox" },
        { value: "Sports", field: "checkbox" },
        { value: "Youth Programs", field: "checkbox" },
        { value: "Art", field: "checkbox" },
        { value: "Education", field: "checkbox" },
        { value: "Events", field: "checkbox" },
      ],
    },
  ],
};
cehPillFilters(DashboardPillFilters);

const activityCards = {
  id: "ceg-dashboard-cards",
  options: {
    vertical_cards: true,
    star: true,
  },
  records: [
    {
      name: "Youth Symphony Orchestra",
      description:
        "The Symphony Orchestra is offered to students Grades 6-12 and provides quality musical instruction. I addition to developing technical capabilities and musical understanding, children are expected to perform in two concerts per year.",
      host: "The Academy of Music",
      thumbnail:
        "https://cdn.addapptation.com/addapptation-asset-library/kids_orchestra.png",
      attendees: 15,
      href: "/",
    },
    {
      name: "Beginner Piano Class 1",
      description:
        "In our introduction to piano class, students will learn basic finger position, scales, and be introduced to note formation ",
      host: "The Academy of Music",
      thumbnail:
        "https://cdn.addapptation.com/addapptation-asset-library/kids_piano_1.png",
      attendees: 7,
      href: "/",
    },
    {
      name: "Youth Symphony Orchestra",
      description:
        "The Symphony Orchestra is offered to students Grades 6-12 and provides quality musical instruction. I addition to developing technical capabilities and musical understanding, children are expected to perform in two concerts per year.",
      host: "The Academy of Music",
      thumbnail:
        "https://cdn.addapptation.com/addapptation-asset-library/kids_orchestra.png",
      attendees: 15,
      href: "/",
    },
    {
      name: "Beginner Piano Class 1",
      description:
        "In our introduction to piano class, students will learn basic finger position, scales, and be introduced to note formation ",
      host: "The Academy of Music",
      thumbnail:
        "https://cdn.addapptation.com/addapptation-asset-library/kids_piano_1.png",
      attendees: 7,
      href: "/",
    },
    {
      name: "Youth Symphony Orchestra",
      description:
        "The Symphony Orchestra is offered to students Grades 6-12 and provides quality musical instruction. I addition to developing technical capabilities and musical understanding, children are expected to perform in two concerts per year.",
      host: "The Academy of Music",
      thumbnail:
        "https://cdn.addapptation.com/addapptation-asset-library/kids_orchestra.png",
      attendees: 15,
      href: "/",
    },
    {
      name: "Beginner Piano Class 1",
      description:
        "In our introduction to piano class, students will learn basic finger position, scales, and be introduced to note formation ",
      host: "The Academy of Music",
      thumbnail:
        "https://cdn.addapptation.com/addapptation-asset-library/kids_piano_1.png",
      attendees: 7,
      href: "/",
    },
  ],
};
cehCards(activityCards);
