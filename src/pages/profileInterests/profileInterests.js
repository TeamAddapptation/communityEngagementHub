import graniteForm from "../../graniteComponents/graniteForm";
import graniteTabs from "../../graniteComponents/graniteTabs";
import cehMultiSelectPill from "../../pComponents/multiSelectPills/cehMultiSelectPill.JS";

const theme = {
  mode: "standard",
};
let settingsTabs = {
  id: "setting-tabs",
  options: {
    g_style: "line",
    id: "g__setting-tabs",
    g_align_tabs: "left",
    g_font_size: "16",
    g_font_color: "#757575",
    g_font_hover_color: "#5D50E6",
    g_icon_size: "",
    g_step_number_color: "",
    g_title_size: "20px",
    g_title_color: "",
    g_description_size: "12px",
    g_description_color: "",
    g_highlight_color: "#5D50E6",
    g_background_color: "#ffffff",
    g_background_active_color: "#ffffff",
    g_background_hover_color: "#5D50E6",
    g_align: "center",
    g_align_icon: "flex-start",
    g_direction: false,
    g_padding: "10px 40px",
    g_margin: "0",
    g_border_width: "2",
    g_border_color: "",
    g_border_radius: "",
    g_full_width: true,
    padding_top: "0",
    padding_bottom: "0",
    margin_top: "0",
    margin_bottom: "0",
    g_classes: "",
    g_cursor_disabled: false,
    g_action: "hash_builder",
    g_tab_left_padding: "40",
    g_tab_right_padding: "40",
  },
  records: [
    {
      name: "Profile",
      desc: "",
      icon: "",
      href: "/profileSettings.html",
    },
    {
      name: "My Interests",
      desc: "",
      href: "/profileInterests.html",
    },
    {
      name: "Password",
      desc: "",
      href: "/profileChangePassword.html",
    },
  ],
};
graniteTabs(settingsTabs, theme);

const interests = {
  id: "interests-editor",
  options: {
    formId: "granite-demo",
    editable: true,
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
