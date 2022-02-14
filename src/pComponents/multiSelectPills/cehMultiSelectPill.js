function cehMultiSelectPill(jsonBlock) {
  const id = jsonBlock.id;
  const graniteDiv = document.getElementById(id);
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const cssId = "#" + id;
  const action = o.addapptation_action || "";
  const formId =
    o.formId || "g__" + Math.random().toString(36).substring(2, 15);
  const method = o.method || "POST";
  const enctype = o.enctype || "application/x-www-form-urlencoded";
  /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
  var multiSelectPill = document.createElement("style");
  multiSelectPill.id = "g__css_" + id;
  multiSelectPill.innerHTML = `
  ${cssId} .g__multiselect{
    position: relative;
  }
  ${cssId} .g__default-select{
    position: absolute;
    top: 0;
    left: -300px;
    opacity: 0;
  }
  ${cssId} .g__custom-select{
    display: flex;
    flex-wrap:wrap;
  }
  ${cssId} .g__custom-option{
    display: flex;
    align-items: center;
    background: #f5f5f5;
    color: #757575;
    font-size: 14px;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    padding: 5px 30px;
    border-radius: 20px;
    margin-right: 5px;
    transition: all 0.5s ease;
  }
  ${cssId} .g__custom-option i{
    margin-left: 10px;
  }
  ${cssId} .g__custom-option:hover{
    cursor: pointer;
    background: #DAF3E9;
    color: #00B267;
  }
  ${cssId} .g__custom-option.active{
    cursor: pointer;
    background: #DAF3E9;
    color: #00B267;
  }
  `;
  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(multiSelectPill);

  /* ---- Main container ---- */
  const multiSelectForm = document.createElement("form");
  multiSelectForm.classList.add("g__multiselect");
  multiSelectForm.setAttribute("action", action);
  multiSelectForm.setAttribute("id", formId);
  multiSelectForm.setAttribute("method", method);
  multiSelectForm.setAttribute("enctype", enctype);
  multiSelectForm.setAttribute("novalidate", "false");

  const select = document.createElement("select");
  select.multiple = true;
  select.id = `custom-${id}`;
  select.classList.add("g__default-select");
  multiSelectForm.appendChild(select);
  /* ---- Loop through records ---- */

  const customSelect = document.createElement("div");
  customSelect.classList.add("g__custom-select");
  multiSelectForm.appendChild(customSelect);

  r.forEach((r, index) => {
    r.options.forEach((option, index) => {
      const defaultOption = document.createElement("option");
      defaultOption.value = option[0];
      defaultOption.innerText = option[1];

      select.appendChild(defaultOption);

      const customOption = document.createElement("div");
      customOption.setAttribute("data-index", index);
      customOption.classList.add("g__custom-option");
      customOption.innerHTML = `${option[1]} <i class="fa fa-thin fa-plus"></i>`;
      customSelect.appendChild(customOption);
    });
  });

  /* ---- Append container to page ---- */
  graniteDiv.appendChild(multiSelectForm);

  const form = document.getElementById(formId);
  const customOptionArr = document.querySelectorAll(".g__custom-option");
  const defaultSelect = document.getElementById(`custom-${id}`);

  if (customOptionArr.length) {
    customOptionArr.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.target.classList.toggle("active");
        const icon = e.target.querySelector("i");
        icon.setAttribute("class", "");
        const selected = e.target.dataset.index;
        if (defaultSelect[selected].selected) {
          defaultSelect[selected].selected = false;
          icon.setAttribute("class", "fa fa-thin fa-plus");
        } else {
          defaultSelect[selected].selected = true;
          icon.setAttribute("class", "fa fa-thin fa-check");
        }
      });
    });
  }
}
