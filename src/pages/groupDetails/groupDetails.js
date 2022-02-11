import graniteTable from "../../graniteComponents/table/graniteTable";

const myGroups = {
  id: "group-members-no-auth",
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
          value: "Jeremy Smith",
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
