export default function cehCards(jsonBlock) {
  const id = jsonBlock.id;
  const graniteDiv = document.getElementById(id);
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const cssId = "#" + id;
  /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
  var mpCardCSS = document.createElement("style");
  mpCardCSS.id = "g__css_" + id;
  mpCardCSS.innerHTML = `
  ${cssId} .g__no-results{
    display: flex;
    justify-content: center;
    font-size: 1.4rem;
  }
  ${cssId} .g__container.g__container-row{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  ${cssId} .g__container.g__container-column{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
    grid-gap: 1rem;
  }
  ${cssId} .g__container-row .g__card{
    position: relative;
    display: flex;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
  ${cssId} .g__container-column .g__card{
    position: relative;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
  ${cssId} .g__container-row .g__card-star{
    position: absolute;
    top: 15px;
    right: 15px;
    color: #EAEAEA;
    font-size: 1.2rem;
    transition: all 0.5s ease;
  }
  ${cssId} .g__container-column .g__card-star{
    position: absolute;
    z-index: 5;
    top: 10px;
    right: 10px;
    color: #EAEAEA;
    background: #fff;
    padding: 10px;
    border: 1px solid #eaeaea;
    font-size: 1.2rem;
    border-radius: 50%;
    transition: all 0.5s ease;
  }
  ${cssId} .g__card-star:hover{
    cursor: pointer;
    color: #F4D66C;
  }
  ${cssId} .g__card-star.active{
    color: #F4D66C;
  }
  ${cssId} .g__container-row .g__image-container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f7f7f7;
    height: auto;
    width: 250px;
    padding: 15px;
  }
  ${cssId} .g__container-column .g__image-container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    width: auto;
    padding: 15px;
  }
  ${cssId} .g__image-container img{
    max-height: 150px;
    border-radius: 5px;
    width: auto;
    transition: all 0.5s ease;
  }
  ${cssId} .g__type-label{
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 3px 10px 2px 10px;
    font-size: .6rem;
    border-radius: 25px;
    background: var(--gray-200);
  }
  ${cssId} .g__type-automation{
    background: var(--automation);
    color: var(--automation-dark);
  }
  ${cssId} .g__type-measurement{
    background: var(--measurement);
    color: var(--measurement-dark);
  }
  ${cssId} .g__container-row .g__card-body{
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 15px;
  }
  ${cssId} .g__container-column .g__card-body{
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 15px;
  }
  ${cssId} .g__container-row .g__card-title{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    color: #101010;
  }
  ${cssId} .g__container-row .g__card-sub-head{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    margin: 5px 0;
    color: #5D50E6;
  }
  ${cssId} .g__container-row .g__card-description{
    font-size: 14px;
    line-height: 20px;
    color: var(--body-font);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  ${cssId} .g__card-footer{
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  }
  ${cssId} .g__container-row .g__card-attendees{
    font-size: .9rem;
    color: #757575;
    margin-top: 15px;
  }
  ${cssId} .g__container-column .g__card-title{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #101010;
  }
  ${cssId} .g__container-column .g__card-sub-head{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
    color: #5D50E6;
  }
  ${cssId} .g__container-column .g__card-description{
    font-size: 14px;
    line-height: 20px;
    color: var(--body-font);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  ${cssId} .g__container-column .g__card-attendees{
    font-size: .9rem;
    color: #757575;
    padding-top: 25px;
    margin-top: auto;
  }
  `;
  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(mpCardCSS);
  /* ---- No Results ---- */
  if (r.length === 0) {
    const noResults = document.createElement("div");
    noResults.classList.add("g__no-results");
    noResults.innerText = "No Results Found";
    graniteDiv.appendChild(noResults);
    return;
  }
  /* ---- Main container ---- */
  const mp_container = document.createElement("div");
  mp_container.classList.add("g__container");
  o.vertical_cards
    ? mp_container.classList.add("g__container-column")
    : mp_container.classList.add("g__container-row");

  /* ---- Loop through records ---- */
  r.forEach((r, index) => {
    const mp_card = document.createElement("div");
    mp_card.classList.add("g__card");
    // Top image container
    const imgContainer = document.createElement("a");
    imgContainer.href = r.href;
    if (r.classes) {
      imgContainer.setAttribute("class", r.classes);
    }
    imgContainer.classList.add("g__image-container");
    if (r.thumbnail) {
      const img = new Image();
      img.src = r.thumbnail;
      imgContainer.appendChild(img);
    }
    if (o.star) {
      const star = document.createElement("i");
      star.setAttribute("class", "fas fa-star g__card-star");
      mp_card.appendChild(star);
      star.addEventListener("click", () => {
        star.classList.toggle("active");
      });
    }

    mp_card.appendChild(imgContainer);

    // Bottom content
    const cardBody = document.createElement("div");
    cardBody.classList.add("g__card-body");

    // Title
    const cardName = document.createElement("h3");
    cardName.classList.add("g__card-title");
    cardName.innerHTML = r.name || "Untitled";
    cardBody.appendChild(cardName);

    // Sub Head
    if (r.details) {
      const details = document.createElement("h4");
      details.classList.add("g__card-sub-head");
      details.innerHTML = r.details;
      cardBody.appendChild(details);
    }

    // Description
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("g__card-description");
    cardDescription.innerHTML = r.description || "Untitled";
    cardBody.appendChild(cardDescription);

    // Footer Container
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("g__card-footer");
    cardBody.appendChild(cardFooter);

    if (r.attendees) {
      const cardAttendees = document.createElement("p");
      cardAttendees.classList.add("g__card-attendees");
      cardAttendees.innerHTML = `${r.attendees} Attendees`;
      cardFooter.appendChild(cardAttendees);
    }

    if (o.join_button) {
      const joinBtn = document.createElement("a");
      joinBtn.href = r.href || "#";
      joinBtn.setAttribute("class", "p__primary-btn p__slim-btn p__mt-10");
      joinBtn.innerText = "Join Group";
      cardFooter.appendChild(joinBtn);
    }

    mp_card.appendChild(cardBody);
    mp_container.appendChild(mp_card);
  });

  /* ---- Append container to page ---- */
  graniteDiv.appendChild(mp_container);
}
