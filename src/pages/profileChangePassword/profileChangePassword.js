import graniteForm from "../../graniteComponents/graniteForm";

const theme = {
  mode: "standard",
};

const profileSettings = {
  id: "change-password-form",
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
      id: "current-password",
      name: "current-password",
      label: "Current Password",
      title: "Current Password",
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
      id: "new-password",
      name: "new-password",
      label: "New Password",
      title: "New Password",
      g_type: "password",
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
      id: "conform-password",
      name: "conform-password",
      label: "Conform Password",
      title: "Conform Password",
      g_type: "password",
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
  ],
};
graniteForm(profileSettings, theme);
