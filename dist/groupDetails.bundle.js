(()=>{"use strict";!function(n){var t=n.id,a=n.options,e=n.records,o="#"+t,r=document.getElementById(t);r.innerHTML="";var i="0.8rem",c=document.createElement("style");c.id="g__css_"+t,c.innerHTML="\n  ".concat(o,' table {\n    font-family: "Montserrat", sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: ').concat(i,";\n    table-layout: ").concat(a.fixed?"fixed":"auto",";\n    color: var(--body-font);\n    border-collapse: collapse;\n    width: 100%;\n    border: 1px solid #EAEAEA;\n    box-sizing: border-box;\n    border-radius: 10px;\n  }\n  ").concat(o," table thead th{\n    background-color: var(--gray-100);\n  }\n  ").concat(o," td, th {\n    text-align: left;\n    padding: 10px;\n  }\n  ").concat(o," table tbody tr{\n    border-bottom: 1px solid var(--gray-200);\n    transition: all 0.2s ease-in;\n  }\n  ").concat(o," table tbody tr.g__clickable-row:hover{\n    cursor: pointer;\n    background: #FAFAFA;\n  }\n  ").concat(o," table tbody tr td a{\n    color: var(--body-font);\n    text-decoration: none;\n    transition: all 0.5s ease;\n  }\n  ").concat(o," table tbody tr td{\n    position: relative;\n  }\n  ").concat(o," table tbody tr td a:hover{\n    color: var(--gray-400);\n  }\n  ").concat(o," .g__table-thumb{\n    max-width: 80px;\n    height: auto;\n    border-radius: 5px;\n  }\n  /* ----------\n  Tooltip\n  ---------- */\n  ").concat(o," .g__tooltip-cell .g__tooltip-container{\n    position: absolute;\n    display: none;\n    top: 95%;\n    left: 0;\n    width: 225px;\n    z-index: 5;\n    background: #ffffff;\n    border: 1px solid #EAEAEA;\n    box-sizing: border-box;\n    border-radius: 5px;\n    padding: 15px;\n  }\n  ").concat(o," .g__tooltip-cell:hover .g__tooltip-container{\n    display: block;\n  }\n  ").concat(o," .g__tooltip-container ul{\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n  }\n  ").concat(o," .g__tooltip-container ul li{\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-column-gap: 1rem;\n    font-size: 0.8rem;\n  }\n  ").concat(o," .g__tooltip-container ul li .g__tooltip-stat{\n    display: grid;\n    justify-items: start;\n  }\n  ").concat(o," .g__tooltip-container ul li .g__tooltip-num{\n    display: grid;\n    justify-items: end;\n  }\n  /* ----------\n  Utility\n  ---------- */\n  ").concat(o," .g__text-left{\n    text-align: left;\n  }\n  ").concat(o," .g__text-center{\n    text-align: center;\n  }\n  ").concat(o," .g__text-right{\n    text-align: right;\n  }\n  /* ----------\n  Strength\n  ---------- */\n  ").concat(o," .g__weak{\n    color: var(--dark-red);\n  }\n  ").concat(o," .g__weak-bkg{\n    background-color: var(--light-red);\n  }\n  ").concat(o," .g__moderate{\n    color: var(--dark-orange);\n  }\n  ").concat(o," .g__moderate-bkg{\n    background-color: var(--light-orange);\n  }\n  ").concat(o," .g__strong{\n    color: var(--dark-green);\n  }\n  ").concat(o," .g__strong-bkg{\n    background-color: var(--light-green);\n  }\n  /* ----------\n  Status\n  ---------- */\n  ").concat(o," .g__active{\n    color: var(--dark-green);\n  }\n  /* ----------\n  datatables.js\n  ---------- */\n\n  ").concat(o," ::-webkit-scrollbar {\n    height: 3px;\n  }\n\n  ").concat(o," ::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  ").concat(o," ::-webkit-scrollbar-thumb {\n    background-color: #5d5d5d\n  }\n  ").concat(o,' table.dataTable thead th{\n    font-size: .8rem;\n    color: var(--gray-400);\n    font-family: "Montserrat", sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    padding: 10px 18px 10px 25px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  ').concat(o,' .dataTables_length{\n    font-family: "Montserrat", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    color: var(--body-font);\n    font-size: ').concat(i,";\n    margin: 10px 0;\n  }\n  ").concat(o," .dataTables_length select{\n    color: var(--body-font);\n    font-size: ").concat(i,";\n  }\n  ").concat(o,' .dataTables_info{\n    font-family: "Montserrat", sans-serif;\n    font-style: normal;\n    font-size: ').concat(i,";\n    color: var(--body-font);\n    font-weight: 400;\n  }\n  ").concat(o,' .dataTables_paginate{\n    font-family: "Montserrat", sans-serif;\n    font-style: normal;\n    font-size: ').concat(i,";\n    font-weight: 400;\n  }\n  ").concat(o," .dataTables_paginate span a{\n    border: 0;\n    font-size: ").concat(i,";\n    background: transparent;\n  }\n  ").concat(o," .dataTables_wrapper .dataTables_paginate .paginate_button{\n    padding: 0.1rem 0.4rem;\n  }\n  /* ----------\n  Sorting Arrows\n  ---------- */\n  ").concat(o," table.dataTable thead th {\n    position: relative;\n  }\n  /* ---------- Not selected ---------- */\n  ").concat(o," table.dataTable thead th.sorting{\n    background-image: none !important;\n  }\n  ").concat(o,' table.dataTable thead th .sorting:after {\n    font-family: "Font Awesome 5 Pro";\n    font-weight: 300;\n    content: "\\f106";\n    color: var(--gray-400);\n    position: absolute;\n    top: 6px;\n    right: 5px;\n  }\n  ').concat(o,' table.dataTable thead th .sorting:before {\n    font-family: "Font Awesome 5 Pro";\n    font-weight: 300;\n    content: "\\f107";\n    color: var(--gray-400);\n    position: absolute;\n    bottom: 6px;\n    right: 5px;\n  }\n  /* ---------- Asc selected ---------- */\n  ').concat(o," table.dataTable thead th.sorting_asc{\n    background-image: none !important;\n  }\n  ").concat(o,' table.dataTable thead .sorting.sorting_asc:after {\n    font-family: "Font Awesome 5 Pro";\n    font-weight: 300;\n    content: "\\f106";\n    color: var(--primary);\n    position: absolute;\n    top: 6px;\n    right: 10px;\n  }\n  ').concat(o,' table.dataTable thead .sorting.sorting_asc:before {\n    font-family: "Font Awesome 5 Pro";\n    font-weight: 300;\n    content: "";\n    color: var(--gray-400);\n    position: absolute;\n    bottom: 6px;\n    right: 10px;\n  }\n  /* ---------- Desc selected ---------- */\n  ').concat(o," table.dataTable thead th.sorting_desc{\n    background-image: none !important;\n  }\n  ").concat(o,' table.dataTable thead .sorting.sorting_desc:after {\n    font-family: "Font Awesome 5 Pro";\n    font-weight: 300;\n    content: "";\n    color: var(--primary);\n    position: absolute;\n    top: 6px;\n    right: 5px;\n  }\n  ').concat(o,' table.dataTable thead .sorting.sorting_desc:before {\n    font-family: "Font Awesome 5 Pro";\n    font-weight: 300;\n    content: "\\f107";\n    color: var(--primary);\n    position: absolute;\n    bottom: 6px;\n    right: 5px;\n  }\n  ').concat(o," .dataTables_filter label{\n    position: relative;\n  }\n  ").concat(o,' .dataTables_filter:before{\n    font-family: "Font Awesome 5 Pro";\n    font-weight: 300;\n    content: "\\f002";\n    color: #5d5d5d;\n    position: absolute;\n    margin-top: 5px;\n    margin-left: 5px;\n  }\n  ').concat(o," .dataTables_filter input{\n    position: relative;\n    border: 0;\n    height: 40px;\n    border-bottom: 1px solid #EAEAEA;\n    margin-bottom: 10px;\n    padding-left: 25px;\n  }\n  ").concat(o," .buttons-html5{\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    border: 0;\n    background: transparent;\n    color: #5D5D5D;\n  }\n  ").concat(o," .buttons-html5:not(:last-child){\n    border-right: 1px solid #EAEAEA;\n  }\n  ");var l=document.getElementById("g__css_"+t);l&&l.remove(),document.head.appendChild(c);var s=document.createElement("table");s.id="g__"+t,r.appendChild(s);var d=document.createElement("tbody");s.appendChild(d),e.forEach((function(n,t){switch(n.type){case"header":var a=s.createTHead(),e=a.insertRow();n.children.forEach((function(n,t){var a=document.createElement("th");if(a.innerHTML=n.value,n.color_label&&(a.style.borderBottom="4px solid ".concat(n.color_label)),n.text_align)switch(n.text_align){case"center":a.classList.add("g__text-center");break;case"right":a.classList.add("g__text-right");break;default:a.classList.add("g__text-left")}e.appendChild(a)})),a.appendChild(e),s.insertBefore(a,d);break;case"row":var o=d.insertRow();o.setAttribute("g__row",t),o.classList.add("order"),n.href&&(o.classList.add("g__clickable-row"),o.setAttribute("data-href",n.href)),n.children.forEach((function(n,t){var a=document.createElement("td");if(!n.width||(a.style.width=n.width),a.innerHTML=n.value,n.color_label&&(a.style.borderLeft="4px solid ".concat(n.color_label)),n.href){a.innerHTML="";var e=document.createElement("a");e.href=n.href,e.innerHTML=n.value,a.appendChild(e)}if(n.strength&&(a.innerHTML="",function(n,t){t.value<=50?n.innerHTML='<span class="g__weak">'.concat(t.value,"</span>"):t.value>50&&t.value<75?n.innerHTML='<span class="g__moderate">'.concat(t.value,"</span>"):n.innerHTML='<span class="g__strong">'.concat(t.value,"</span>")}(a,n)),n.percent_change&&(a.innerHTML="",function(n,t){if(t.value>0)n.classList.add("g__strong"),n.innerHTML='<i class="far fa-long-arrow-up"></i> '.concat(t.value,"%");else if(0===t.value)n.classList.add("g__moderate"),n.innerHTML="".concat(t.value,"%");else{n.classList.add("g__weak");var a=t.value.toString();n.innerHTML='<i class="far fa-long-arrow-down"></i> '.concat(a.slice(1),"%")}}(a,n)),n.score&&(a.innerHTML="",function(n,t){t.value>=70?(n.classList.add("g__strong"),n.classList.add("g__strong-bkg"),n.innerHTML="".concat(t.value)):t.value>=50&&t.value<70?(n.classList.add("g__moderate"),n.classList.add("g__moderate-bkg"),n.innerHTML="".concat(t.value)):(n.classList.add("g__weak"),n.classList.add("g__weak-bkg"),n.innerHTML="".concat(t.value))}(a,n)),n.status&&(a.innerHTML="",function(n,t){t.value?(n.classList.add("g__active"),n.innerHTML="Active"):(n.classList.add("g__inactive"),n.innerHTML="Inactive")}(a,n)),n.tooltip){a.classList.add("g__tooltip-cell");var r=document.createElement("div");r.classList.add("g__tooltip-container"),r.innerHTML=n.tooltip,a.appendChild(r)}if(n.text_align)switch(n.text_align){case"center":a.classList.add("g__text-center");break;case"right":a.classList.add("g__text-right");break;default:a.classList.add("g__text-left")}o.appendChild(a)}))}})),a.datatables&&$("#g__"+t).DataTable({searching:a.searching,paging:a.paging,pageLength:a.page_length,dom:"Bfrtip",buttons:["excelHtml5","csvHtml5"],language:{search:"",paginate:{previous:"<i class='far fa-chevron-left'></i>",next:"<i class='far fa-chevron-right'></i>"}},columnDefs:[{targets:[0],orderable:!1}]});var g=document.querySelectorAll(".g__clickable-row");g&&g.forEach((function(n){n.addEventListener("click",(function(t){var a=n.dataset.href;window.location=a}))}))}({id:"group-members-no-auth",feature:"table",options:{type:"table",datatables:!1,searching:!1,paging:!1,page_length:10},records:[{type:"row",href:"",children:[{value:'<img class="g__table-thumb" src="https://cdn.addapptation.com/addapptation-asset-library/group_swim_kid.png">'},{value:"Jeremy Smith",text_align:"left"},{value:"Joined 09/12/21",text_align:"right"}]}]})})();