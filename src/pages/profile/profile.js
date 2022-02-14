import graniteTable from "../../graniteComponents/table/graniteTable";
import cehMultiSelectPill from "../../pComponents/multiSelectPills/cehMultiSelectPill";

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

const interests = {
  id: "interests",
  options: {
    formId: "granite-demo",
    action: "",
    method: "",
    enctype: "",
  },
  records: [
    {
      options: [
        ["camping__c", "Camping"],
        ["soccer__c", "Soccer"],
        ["film__c", "Film"],
        ["science__c", "Science"],
        ["computers__c", "Computers"],
      ],
    },
  ],
};
cehMultiSelectPill(interests);
