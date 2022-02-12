import cehCards from "../../pComponents/cards/cehCards";
import cehPillFilters from "../../pComponents/pillFilters/cehPillFilters";
import graniteTable from "../../graniteComponents/table/graniteTable";

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
        { value: "Trips", name: "Trips", field: "checkbox" },
        { value: "Sports", name: "Sports", field: "checkbox" },
        { value: "Youth Programs", name: "Youth Programs", field: "checkbox" },
        { value: "Art", name: "Art", field: "checkbox" },
        { value: "Education", name: "Education", field: "checkbox" },
        { value: "Events", name: "Events", field: "checkbox" },
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
  ],
};
cehCards(activityCards);

const myActivity = {
  id: "ceg-my-activities-cards",
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
  ],
};
cehCards(myActivity);

const myGroups = {
  id: "ceg-my-groups",
  feature: "table",
  options: {
    type: "table",
    datatables: false,
    searching: false,
    paging: false,
    page_length: 10,
  },
  records: [
    {
      type: "row",
      href: "",
      children: [
        {
          value: `<img class="g__table-thumb" src="https://cdn.addapptation.com/addapptation-asset-library/group_swim_kid.png">`,
        },
        {
          value: "Poolside Swim Team",
          text_align: "left",
        },
        { value: "Rank 43/64", text_align: "center" },
        {
          value: "Joined 09/12/21",
          text_align: "center",
        },
      ],
    },
  ],
};
graniteTable(myGroups);
