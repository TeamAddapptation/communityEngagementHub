function cehFilters(jsonBlock) {
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
  ${cssId} .a__filter-group{
    padding: 20px 25px;
    border-bottom: 1px solid var(--gray-200);
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
  ${cssId} .g__options-container{
    display: none;
  }
  ${cssId} .g__options-container.active{
    margin-top: 20px;
    display: block;
  }
  ${cssId} .g__apply-clear-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
  }
  /*----------
  Open Close Filter
  ---------- */
  ${cssId} .g__header-container .g__open-close{
    position: relative;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
  ${cssId} .g__header-container.active .g__open-close:before{
    background-color: #101010;
    transform: translatey(-50%) rotate(-90deg);
		opacity: 0;
  }
  ${cssId} .g__header-container.active .g__open-close:after{
    background-color: #101010;
    transform: translatey(-50%) rotate(0);
  }
  ${cssId} .g__open-close:before,
  ${cssId} .g__open-close:after{
    content: "";
		display: block;
		background-color: #5d5d5d;
		position: absolute;
		top: 50%; left: 0;
		transition: .35s;
		width: 100%;
		height: 2px;
  }
  ${cssId} .g__open-close:before{
    transform: translatey(-50%);
  }
  ${cssId} .g__open-close:after{
    transform: translatey(-50%) rotate(90deg);
  }
  /*----------
  Checkbox
  ---------- */
  ${cssId} .g__filter-label{
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: .9rem;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #5d5d5d;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  ${cssId} .g__filter-label input{
    position: absolute;
    top: 4px;
    left: 0;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  ${cssId} .g__styled-checkbox{
    position: absolute;
    top: 4px;
    left: 0;
    height: 12px;
    width: 12px;
    background: #F7F7F7;
    border: 1px solid #EAEAEA;
    border-radius: 3px;
  }
  ${cssId} .g__filter-label input:checked ~ .g__styled-checkbox {
    background-color: var(--green);
  }
  ${cssId} .g__styled-checkbox:after {
    content: "";
    position: absolute;
    display: none;
  }
  ${cssId} .g__filter-label input:checked ~ .g__styled-checkbox:after {
    display: block;
  }
  ${cssId} .g__filter-label .g__styled-checkbox:after {
    left: 3px;
    top: 1px;
    width: 4px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
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

  /* ---- Loop through records ---- */

  r.forEach((r, index) => {
    const filterGroup = document.createElement("div");
    filterGroup.classList.add("a__filter-group");
    const name = r.name || `group-${index}`;
    const formatName = r.name.replace(/\s+/g, "-").toLowerCase();
    filterGroup.setAttribute("data-group", name);
    const isOpen = localStorage.getItem(name) || "false";

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("g__header-container");
    const filterHeader = document.createElement("div");
    filterHeader.classList.add("g__filter-header");
    filterHeader.innerHTML = r.name;
    const openClose = document.createElement("div");
    openClose.classList.add("g__open-close");
    isOpen === "true" ? headerContainer.classList.add("active") : "";
    headerContainer.appendChild(filterHeader);
    headerContainer.appendChild(openClose);
    filterGroup.appendChild(headerContainer);

    /* ---- Loop through child elements (filters) ---- */
    const filterContainer = document.createElement("div");
    filterContainer.classList.add("g__options-container");
    isOpen === "true" ? filterContainer.classList.add("active") : "";
    r.children.forEach((option, index) => {
      const filterOption = document.createElement("div");
      filterOption.classList.add("g__filter-option");

      const filterLabel = document.createElement("label");
      filterLabel.classList.add("g__filter-label");
      filterLabel.setAttribute(
        "for",
        `${r.sf_field}_${option.value.replace(/\s+/g, "-").toLowerCase()}`
      );
      filterLabel.innerHTML = option.name;
      filterOption.appendChild(filterLabel);

      const filterCheckbox = document.createElement("input");
      filterCheckbox.setAttribute("data-num", index + 1);
      r.sf_field ? filterCheckbox.setAttribute("data-sf", r.sf_field) : "";
      filterCheckbox.name = option.value;
      filterCheckbox.id = `${r.sf_field}_${option.value
        .replace(/\s+/g, "-")
        .toLowerCase()}`;
      filterCheckbox.type = "checkbox";
      const styledCheckbox = document.createElement("div");
      styledCheckbox.classList.add("g__styled-checkbox");

      filterLabel.appendChild(filterCheckbox);
      filterLabel.appendChild(styledCheckbox);

      filterContainer.appendChild(filterOption);
    });
    filterGroup.appendChild(filterContainer);
    filters.appendChild(filterGroup);
  });

  const applyClearContainer = document.createElement("div");
  applyClearContainer.classList.add("g__apply-clear-container");

  if (o.apply_btn) {
    const applyBtn = document.createElement("button");
    applyBtn.id = "mp_apply-filters";
    applyBtn.classList.add("p__primary-btn");
    applyBtn.innerHTML = "Apply";
    applyClearContainer.appendChild(applyBtn);
  }

  const clearBtn = document.createElement("button");
  clearBtn.classList.add("p__text-link");
  clearBtn.classList.add("p__mt-10");
  clearBtn.id = "mp_clear-filters";
  clearBtn.innerHTML = "Clear all filters";
  applyClearContainer.appendChild(clearBtn);

  filters.appendChild(applyClearContainer);

  /* ---- Append container to page ---- */
  graniteDiv.appendChild(filters);

  /* ---- Filter dropdown ---- */
  const filterGroupArr = document.querySelectorAll(".a__filter-group");
  const filtersArr = document.querySelectorAll(".g__header-container");
  filterGroupArr.forEach((group) => {
    const header = group.querySelector(".g__header-container");
    const options = group.querySelector(".g__options-container");
    header.addEventListener("click", () => {
      header.classList.toggle("active");
      options.classList.toggle("active");
      if (header.classList.contains("active")) {
        localStorage.setItem(group.dataset.group, true);
      } else {
        localStorage.setItem(group.dataset.group, false);
      }
    });
  });

  const clear = document.getElementById("mp_clear-filters");
  clear.addEventListener("click", () => {
    const filterGroups = document.querySelectorAll(".a__filter-group");
    filterGroups.forEach((group) => {
      let inputsArr = group.querySelectorAll('input[type="checkbox"]');
      inputsArr.forEach((input) => {
        input.checked = false;
      });
    });
    localStorage.removeItem("selectedItems");
    window.location.href = o.clear_filter_url || "?";
  });

  /* ---- Selected Filters ---- */
  let storage = localStorage.getItem("selectedItems");
  if (storage) {
    let checkedArr = storage.split(",");
    const filterGroups = document.querySelectorAll(".a__filter-group");
    filterGroups.forEach((group) => {
      let inputsArr = group.querySelectorAll('input[type="checkbox"]');
      inputsArr.forEach((input, index) => {
        const id = input.id;
        if (checkedArr.includes(id)) {
          input.checked = true;
        }
      });
    });
  }

  /* ---- Apply Button ---- */
  const apply = document.getElementById("mp_apply-filters");
  apply.addEventListener("click", () => {
    const filterGroups = document.querySelectorAll(".a__filter-group");
    let urlParams = "?";
    const currentParams = new URLSearchParams(window.location.search);
    const workflowParam = currentParams.get("view");
    if (workflowParam == "activity") {
      urlParams = "?view=activity";
    } else if (workflowParam == "group") {
      urlParams = "?view=group";
    }
    let checkedArr = [];
    filterGroups.forEach((group) => {
      let isQueried = true;
      let inputsArr = group.querySelectorAll('input[type="checkbox"]');
      inputsArr.forEach((input, index) => {
        if (input.checked) {
          let hasStorage = localStorage.getItem("selectedItems");
          if (hasStorage) {
            localStorage.removeItem("selectedItems");
          }
          if (isQueried) {
            if (urlParams.length === 1) {
              urlParams += `${input.dataset.sf}=`;
            } else {
              urlParams += `&${input.dataset.sf}=`;
            }
          }
          checkedArr.push(input.id);
          const name = input.name;
          if (isQueried) {
            urlParams += `${name}`;
          } else {
            urlParams += `,${name}`;
          }
          isQueried = false;
        }
      });
      isQueried = true;
    });
    localStorage.setItem("selectedItems", checkedArr);
    const lastChar = urlParams.charAt(urlParams.length - 1);
    if (lastChar === "&") {
      urlParams = urlParams.substring(0, urlParams.length - 1);
    }
    window.location.href = urlParams;
  });
  localStorage.removeItem("selectedItems");
}
