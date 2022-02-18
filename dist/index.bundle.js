(()=>{"use strict";!function(n){var e=n.id,t=document.getElementById(e),a=n.records,o="#"+e,i=document.createElement("style");i.id="g__css_"+e,i.innerHTML="\n  ".concat(o," .g__header-container{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  ").concat(o," .g__header-container:hover{\n    cursor: pointer;\n  }\n  ").concat(o," .g__options-container{\n    display: flex;\n    flex-wrap: wrap;\n  }\n  ").concat(o," .g__filter-option{\n    display: flex;\n    align-items: center;\n    position: relative;\n  }\n  ").concat(o,' .g__header-container .g__filter-header{\n    font-family: "Montserrat", sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: .9rem;\n    color: #5d5d5d;\n    transition: color 0.5s ease;\n  }\n  ').concat(o," .g__header-container.active .g__filter-header{\n    color: #101010;\n  }\n  ").concat(o," .g__apply-clear-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 25px;\n  }\n  /*----------\n  Checkbox\n  ---------- */\n  ").concat(o," .g__filter-option label{\n    display: inline-block;\n    background-color: #E9E7FF;\n    font-size: 14px;\n    color: #5D50E6;\n    border-radius: 25px;\n    white-space: nowrap;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    margin-right: 5px;\n    padding: 3px 25px;\n    cursor: pointer;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    transition: all .2s;\n  }\n  ").concat(o," .g__filter-option.active label{\n    background-color: #5D50E6;\n    color: #fff;\n  }\n  ").concat(o,' .g__filter-option input[type="checkbox"]:checked + label {\n    background-color: #5D50E6;\n    color: #fff;\n    transition: all .2s;\n  }\n  ').concat(o,' .g__filter-option input[type="checkbox"] {\n    display: absolute;\n  }\n  ').concat(o,' .g__filter-option input[type="checkbox"] {\n    position: absolute;\n    opacity: 0;\n  }\n  ');var r=document.getElementById("g__css_"+e);r&&r.remove(),document.head.appendChild(i);var c=document.createElement("div");c.classList.add("a__filters");var d=new URLSearchParams(window.location.search).get("cateogry");console.log(d),a.forEach((function(n,e){var t=document.createElement("div");t.classList.add("a__filter-group");var a=n.name||"group-".concat(e);n.name.replace(/\s+/g,"-").toLowerCase(),t.setAttribute("data-group",a);var o=localStorage.getItem(a)||"false",i=document.createElement("div");i.classList.add("g__options-container"),"true"===o&&i.classList.add("active"),n.children.forEach((function(e,t){var a=document.createElement("div");a.classList.add("g__filter-option");var o=new URLSearchParams(window.location.search).get(n.sf_field);o&&o===e.value&&a.classList.add("active");var r=document.createElement("input");r.setAttribute("data-num",t+1),n.sf_field&&r.setAttribute("data-sf-field",n.sf_field),r.name=e.value,r.id="".concat(n.sf_field,"_").concat(e.value.replace(/\s+/g,"-").toLowerCase()),r.type="checkbox",a.appendChild(r);var c=document.createElement("label");c.classList.add("g__filter-label"),c.setAttribute("for","".concat(n.sf_field,"_").concat(e.value.replace(/\s+/g,"-").toLowerCase())),c.innerHTML=e.name,a.appendChild(c),c.addEventListener("click",(function(){console.log("SF: ",n.sf_field),console.log("value: ",e.value);var t="?".concat(n.sf_field,"=").concat(e.value);window.location.href=t})),i.appendChild(a)})),t.appendChild(i),c.appendChild(t)})),t.appendChild(c)}({id:"ceg-pill-filters",options:{apply_btn:!0},records:[{name:"Trips",sf_field:"trips__c",children:[{value:"Trips",name:"Trips",field:"checkbox"},{value:"Sports",name:"Sports",field:"checkbox"},{value:"Youth Programs",name:"Youth Programs",field:"checkbox"},{value:"Art",name:"Art",field:"checkbox"},{value:"Education",name:"Education",field:"checkbox"},{value:"Events",name:"Events",field:"checkbox"}]}]}),function(n){var e=n.id,t=document.getElementById(e),a=n.options,o=n.records,i="#"+e,r=document.createElement("style");r.id="g__css_"+e,r.innerHTML="\n  ".concat(i," .g__no-results{\n    display: flex;\n    justify-content: center;\n    font-size: 1.4rem;\n  }\n  ").concat(i," .g__container.g__container-row{\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 1rem;\n  }\n  ").concat(i," .g__container.g__container-column{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));\n    grid-gap: 1rem;\n  }\n  ").concat(i," .g__container-row .g__card{\n    position: relative;\n    display: flex;\n    background: #FFFFFF;\n    border: 1px solid #EAEAEA;\n    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.05);\n    border-radius: 5px;\n  }\n  ").concat(i," .g__container-column .g__card{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: #FFFFFF;\n    border: 1px solid #EAEAEA;\n    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.05);\n    border-radius: 5px;\n  }\n  ").concat(i," .g__container-row .g__card-star{\n    position: absolute;\n    top: 15px;\n    right: 15px;\n    color: #EAEAEA;\n    font-size: 1.2rem;\n    transition: all 0.5s ease;\n  }\n  ").concat(i," .g__container-column .g__card-star{\n    position: absolute;\n    z-index: 5;\n    top: 10px;\n    right: 10px;\n    color: #EAEAEA;\n    background: #fff;\n    padding: 10px;\n    border: 1px solid #eaeaea;\n    font-size: 1.2rem;\n    border-radius: 50%;\n    transition: all 0.5s ease;\n  }\n  ").concat(i," .g__card-star:hover{\n    cursor: pointer;\n    color: #F4D66C;\n  }\n  ").concat(i," .g__card-star.active{\n    color: #F4D66C;\n  }\n  ").concat(i," .g__container-row .g__image-container{\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #f7f7f7;\n    height: auto;\n    width: 250px;\n    padding: 15px;\n  }\n  ").concat(i," .g__container-column .g__image-container{\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #ffffff;\n    width: auto;\n    padding: 15px;\n  }\n  ").concat(i," .g__image-container img{\n    max-height: 150px;\n    border-radius: 5px;\n    width: auto;\n    transition: all 0.5s ease;\n  }\n  ").concat(i," .g__type-label{\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    padding: 3px 10px 2px 10px;\n    font-size: .6rem;\n    border-radius: 25px;\n    background: var(--gray-200);\n  }\n  ").concat(i," .g__type-automation{\n    background: var(--automation);\n    color: var(--automation-dark);\n  }\n  ").concat(i," .g__type-measurement{\n    background: var(--measurement);\n    color: var(--measurement-dark);\n  }\n  ").concat(i," .g__container-row .g__card-body{\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    padding: 15px;\n  }\n  ").concat(i," .g__container-column .g__card-body{\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    padding: 15px;\n  }\n  ").concat(i," .g__container-row .g__card-title{\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 22px;\n    line-height: 24px;\n    color: #101010;\n  }\n  ").concat(i," .g__container-row .g__card-sub-head{\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 5px 0;\n    color: #5D50E6;\n  }\n  ").concat(i," .g__container-row .g__card-description{\n    font-size: 14px;\n    line-height: 20px;\n    color: var(--body-font);\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  ").concat(i," .g__card-footer{\n    display: flex;\n    justify-content: space-between;\n    margin-top: auto;\n  }\n  ").concat(i," .g__container-row .g__card-attendees{\n    font-size: .9rem;\n    color: #757575;\n    margin-top: 15px;\n  }\n  ").concat(i," .g__container-column .g__card-title{\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    color: #101010;\n  }\n  ").concat(i," .g__container-column .g__card-sub-head{\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0;\n    color: #5D50E6;\n  }\n  ").concat(i," .g__container-column .g__card-description{\n    font-size: 14px;\n    line-height: 20px;\n    color: var(--body-font);\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n\n  ").concat(i," .g__container-column .g__card-attendees{\n    font-size: .9rem;\n    color: #757575;\n    padding-top: 25px;\n    margin-top: auto;\n  }\n  ");var c=document.getElementById("g__css_"+e);if(c&&c.remove(),document.head.appendChild(r),0===o.length){var d=document.createElement("div");return d.classList.add("g__no-results"),d.innerText="No Results Found",void t.appendChild(d)}var s=document.createElement("div");s.classList.add("g__container"),a.vertical_cards?s.classList.add("g__container-column"):s.classList.add("g__container-row"),o.forEach((function(n,e){var t=document.createElement("div");t.classList.add("g__card");var o=document.createElement("a");if(o.href=n.href,n.classes&&o.setAttribute("class",n.classes),o.classList.add("g__image-container"),n.thumbnail){var i=new Image;i.src=n.thumbnail,o.appendChild(i)}if(a.star){var r=document.createElement("i");r.setAttribute("class","fas fa-star g__card-star"),t.appendChild(r),r.addEventListener("click",(function(){r.classList.toggle("active")}))}t.appendChild(o);var c=document.createElement("div");c.classList.add("g__card-body");var d=document.createElement("h3");if(d.classList.add("g__card-title"),d.innerHTML=n.name||"Untitled",c.appendChild(d),n.details){var l=document.createElement("h4");l.classList.add("g__card-sub-head"),l.innerHTML=n.details,c.appendChild(l)}var p=document.createElement("p");p.classList.add("g__card-description"),p.innerHTML=n.description||"Untitled",c.appendChild(p);var _=document.createElement("div");if(_.classList.add("g__card-footer"),c.appendChild(_),n.attendees){var m=document.createElement("p");m.classList.add("g__card-attendees"),m.innerHTML="".concat(n.attendees," Attendees"),_.appendChild(m)}if(a.join_button){var u=document.createElement("a");u.href=n.href||"#",u.setAttribute("class","p__primary-btn p__slim-btn p__mt-10"),u.innerText="Join Group",_.appendChild(u)}t.appendChild(c),s.appendChild(t)})),t.appendChild(s)}({id:"ceg-dashboard-cards",options:{vertical_cards:!0,star:!0},records:[{name:"Youth Symphony Orchestra",description:"The Symphony Orchestra is offered to students Grades 6-12 and provides quality musical instruction. I addition to developing technical capabilities and musical understanding, children are expected to perform in two concerts per year.",host:"The Academy of Music",thumbnail:"https://cdn.addapptation.com/addapptation-asset-library/kids_orchestra.png",attendees:15,href:"/"},{name:"Beginner Piano Class 1",description:"In our introduction to piano class, students will learn basic finger position, scales, and be introduced to note formation ",host:"The Academy of Music",thumbnail:"https://cdn.addapptation.com/addapptation-asset-library/kids_piano_1.png",attendees:7,href:"/"},{name:"Youth Symphony Orchestra",description:"The Symphony Orchestra is offered to students Grades 6-12 and provides quality musical instruction. I addition to developing technical capabilities and musical understanding, children are expected to perform in two concerts per year.",host:"The Academy of Music",thumbnail:"https://cdn.addapptation.com/addapptation-asset-library/kids_orchestra.png",attendees:15,href:"/"},{name:"Beginner Piano Class 1",description:"In our introduction to piano class, students will learn basic finger position, scales, and be introduced to note formation ",host:"The Academy of Music",thumbnail:"https://cdn.addapptation.com/addapptation-asset-library/kids_piano_1.png",attendees:7,href:"/"},{name:"Youth Symphony Orchestra",description:"The Symphony Orchestra is offered to students Grades 6-12 and provides quality musical instruction. I addition to developing technical capabilities and musical understanding, children are expected to perform in two concerts per year.",host:"The Academy of Music",thumbnail:"https://cdn.addapptation.com/addapptation-asset-library/kids_orchestra.png",attendees:15,href:"/"},{name:"Beginner Piano Class 1",description:"In our introduction to piano class, students will learn basic finger position, scales, and be introduced to note formation ",host:"The Academy of Music",thumbnail:"https://cdn.addapptation.com/addapptation-asset-library/kids_piano_1.png",attendees:7,href:"/"}]})})();