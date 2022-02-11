import cehFilters from "../../pComponents/filter/cehFilters";
import cehCards from "../../pComponents/cards/cehCards";
import cehPicklist from "../../pComponents/picklist/cehPicklist";

const activitiesFilters = {
  id: "ceg_activity-filters",
  options: {
    apply_btn: true,
  },
  records: [
    {
      name: "Sports",
      sf_field: "sports",
      children: [
        { value: "test-1", name: "Option 1", field: "checkbox" },
        { value: "test-2", name: "Option 2", field: "checkbox" },
        { value: "test-3", name: "Option 3", field: "checkbox" },
        { value: "test-4", name: "Option 4", field: "checkbox" },
      ],
    },
    {
      name: "Trips",
      sf_field: "trips",
      children: [
        { value: "trips-1", name: "T Option 1", field: "checkbox" },
        { value: "trips-2", name: "T Option 2", field: "checkbox" },
        { value: "trips-3", name: "T Option 3", field: "checkbox" },
        { value: "trips-4", name: "T Option 4", field: "checkbox" },
      ],
    },
  ],
};
cehFilters(activitiesFilters);

const activityCards = {
  id: "ceg-activity-cards",
  options: {
    star: true,
  },
  records: [
    // {
    //   name: "Youth Symphony Orchestra",
    //   description:
    //     "The Symphony Orchestra is offered to students Grades 6-12 and provides quality musical instruction. I addition to developing technical capabilities and musical understanding, children are expected to perform in two concerts per year.",
    //   host: "The Academy of Music",
    //   thumbnail:
    //     "https://cdn.addapptation.com/addapptation-asset-library/kids_orchestra.png",
    //   attendees: 15,
    //   href: "/",
    // },
    // {
    //   name: "Beginner Piano Class 1",
    //   description:
    //     "In our introduction to piano class, students will learn basic finger position, scales, and be introduced to note formation ",
    //   host: "The Academy of Music",
    //   thumbnail:
    //     "https://cdn.addapptation.com/addapptation-asset-library/kids_piano_1.png",
    //   attendees: 7,
    //   href: "/",
    // },
  ],
};
cehCards(activityCards);

const activityPicklist = {
  id: "ceg-activities-filter",
  options: {
    select_id: "activities-picklist",
    placeholder: "Sort By",
    classes: "p__ml-15",
    select_options: [
      ["option-1", "option 1"],
      ["option-2", "option 2"],
      ["option-3", "option 3"],
    ],
  },
  records: [],
};
cehPicklist(activityPicklist);
