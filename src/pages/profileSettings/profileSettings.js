import graniteForm from "../../graniteComponents/graniteForm";
import graniteTabs from "../../graniteComponents/graniteTabs";

const theme = {
  mode: "standard",
};

const profileSettings = {
  id: "profile-settings",
  options: {
    title: "",
    addapptation_action: "/",
    description: "",
    title_font_size: "40px",
    description_font_size: "20px",
    db_action: "",
    db_object: "",
    db_id: "g_sf2dsdsf33",
    db_redirect: "",
    flash_message: "",
    position_form: "center",
    form_id: "",
    default_picklists: true,
    button_1_label: "",
    button_1_href: "",
    submit_label: "Save",
    cancel_label: "Cancel",
    max_width: "600px",
    enctype: "application/x-www-form-urlencoded",
    method: "POST",
    visibility_settings: "",
    hide_submit: false,
    allow_cancel: false,
    activate_recaptcha: false,
    auto_superscript: false,
    autosave: false,
    action: "/",
    // Design
    field_bkg_color: "#FFFFFF",
    field_border_color: "#4b4b4b",
    field_border_width: "",
  },
  records: [
    {
      id: "profile_image",
      name: "profile_image",
      label: "Profile Image",
      title: "Profile Image",
      g_type: "file",
      required: false,
      options: "",
      value: "",
      placeholder: "",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
    },
    {
      id: "name",
      name: "name",
      label: "name",
      title: "Name",
      g_type: "text",
      required: true,
      options: "",
      value: "",
      placeholder: "",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__custom-field",
    },
    {
      id: "email",
      name: "email",
      title: "Email",
      g_type: "email",
      required: true,
      options: "",
      value: "",
      placeholder: "",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__custom-field",
    },
    {
      id: "location",
      name: "location",
      title: "Location",
      g_type: "text",
      required: true,
      pattern: "",
      options: "",
      value: "",
      show_password_option: true,
      placeholder: "",
      classes: "g__custom-field",
      id: "a__sign-up-password",
    },
    {
      id: "timezone",
      name: "timezone",
      title: "Timezone",
      g_type: "picklist",
      required: true,
      pattern: "",
      options: ["Pacific", "Mountain", "Central", "Eastern"],
      value: "",
      placeholder: "Default - EST",
      classes: "g__custom-field",
      id: "a__sign-up-password",
    },
  ],
};
graniteForm(profileSettings, theme);

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
