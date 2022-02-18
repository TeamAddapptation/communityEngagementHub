function cehPillFilters(jsonBlock) {
  const id = jsonBlock.id;
  const graniteDiv = document.getElementById(id);
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const cssId = "#" + id;
  /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
  var mpFiltersCss = document.createElement("style");
  mpFiltersCss.id = "g__css_" + id;
  mpFiltersCss.innerHTML = `
  ${cssId} .g__header-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ${cssId} .g__header-container:hover{
    cursor: pointer;
  }
  ${cssId} .g__options-container{
    display: flex;
    flex-wrap: wrap;
  }
  ${cssId} .g__filter-option{
    display: flex;
    align-items: center;
    position: relative;
  }
  ${cssId} .g__header-container .g__filter-header{
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: .9rem;
    color: #5d5d5d;
    transition: color 0.5s ease;
  }
  ${cssId} .g__header-container.active .g__filter-header{
    color: #101010;
  }
  ${cssId} .g__apply-clear-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
  }
  /*----------
  Checkbox
  ---------- */
  ${cssId} .g__filter-option label{
    display: inline-block;
    background-color: #E9E7FF;
    font-size: 14px;
    color: #5D50E6;
    border-radius: 25px;
    white-space: nowrap;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 3px 25px;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: all .2s;
  }
  ${cssId} .g__filter-option label:hover{
    background-color: #5D50E6;
    color: #fff;
  }
  ${cssId} .g__filter-option.active label{
    background-color: #5D50E6;
    color: #fff;
  }
  ${cssId} .g__filter-option input[type="checkbox"]:checked + label {
    background-color: #5D50E6;
    color: #fff;
    transition: all .2s;
  }
  ${cssId} .g__filter-option input[type="checkbox"] {
    display: absolute;
  }
  ${cssId} .g__filter-option input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }
  `;
  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(mpFiltersCss);
  /* ---- Main container ---- */
  const filters = document.createElement("div");
  filters.classList.add("a__filters");

  /* ---- Get url parameters ---- */
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get("cateogry");
  console.log(param);

  /* ---- Loop through records ---- */

  r.forEach((r, index) => {
    const filterGroup = document.createElement("div");
    filterGroup.classList.add("a__filter-group");
    const name = r.name || `group-${index}`;
    const formatName = r.name.replace(/\s+/g, "-").toLowerCase();
    filterGroup.setAttribute("data-group", name);
    const isOpen = localStorage.getItem(name) || "false";

    /* ---- Loop through child elements (filters) ---- */
    const filterContainer = document.createElement("div");
    filterContainer.classList.add("g__options-container");
    isOpen === "true" ? filterContainer.classList.add("active") : "";
    r.children.forEach((option, index) => {
      const filterOption = document.createElement("div");
      filterOption.classList.add("g__filter-option");

      /* ---- Get url parameters ---- */
      const urlParams = new URLSearchParams(window.location.search);
      const param = urlParams.get(r.sf_field);

      if (param) {
        // console.log("Param: ", param);
        // console.log("name: ", option.name);
        // console.log("name: ", option.value);
        if (param === option.value) {
          filterOption.classList.add("active");
        }
      }

      const filterCheckbox = document.createElement("input");
      filterCheckbox.setAttribute("data-num", index + 1);
      r.sf_field
        ? filterCheckbox.setAttribute("data-sf-field", r.sf_field)
        : "";
      filterCheckbox.name = option.value;
      filterCheckbox.id = `${r.sf_field}_${option.value
        .replace(/\s+/g, "-")
        .toLowerCase()}`;
      filterCheckbox.type = "checkbox";
      filterOption.appendChild(filterCheckbox);

      const filterLabel = document.createElement("label");
      filterLabel.classList.add("g__filter-label");
      filterLabel.setAttribute(
        "for",
        `${r.sf_field}_${option.value.replace(/\s+/g, "-").toLowerCase()}`
      );
      filterLabel.innerHTML = option.name;
      filterOption.appendChild(filterLabel);

      filterLabel.addEventListener("click", () => {
        console.log("SF: ", r.sf_field);
        console.log("value: ", option.value);
        let urlParams = `?${r.sf_field}=${option.value}`;
        window.location.href = urlParams;
      });

      filterContainer.appendChild(filterOption);
    });
    filterGroup.appendChild(filterContainer);
    filters.appendChild(filterGroup);
  });

  /* ---- Append container to page ---- */
  graniteDiv.appendChild(filters);
}
