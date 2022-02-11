import graniteTable from "../../graniteComponents/table/graniteTable";

const myGroups = {
  id: "my-groups",
  feature: "table",
  options: {
    type: "table",
    datatables: false,
    searching: false,
    paging: false,
    page_length: 10,
    fixed: true,
  },
  records: [
    {
      type: "row",
      href: "",
      children: [
        {
          value: `<img class="g__table-thumb" src="https://cdn.addapptation.com/addapptation-asset-library/group_swim_kid.png">`,
          width: "100px",
        },
        {
          value: "North East Divers",
          text_align: "left",
        },
        {
          value: "Ranked 43/64",
          text_align: "left",
        },
        {
          value: "Joined 09/12/21",
          text_align: "right",
        },
      ],
    },
    {
      type: "row",
      href: "",
      children: [
        {
          value: `<img class="g__table-thumb" src="https://cdn.addapptation.com/addapptation-asset-library/group_swim_kid.png">`,
          width: "100px",
        },
        {
          value: "Wanderlust and Welness",
          text_align: "left",
        },
        {
          value: "Ranked 23/74",
          text_align: "left",
        },
        {
          value: "Joined 09/12/21",
          text_align: "right",
        },
      ],
    },
  ],
};
graniteTable(myGroups);
