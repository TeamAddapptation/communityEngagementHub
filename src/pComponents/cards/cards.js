export default function cards(jsonBlock) {
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
  ${cssId} .g__container{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  ${cssId} .g__card{
    position: relative;
    display: flex;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
  ${cssId} .g__card-star{
    position: absolute;
    top: 15px;
    right: 15px;
    color: #EAEAEA;
    font-size: 1.2rem;
    transition: all 0.5s ease;
  }
  ${cssId} .g__card-star:hover{
    cursor: pointer;
    color: #F4D66C;
  }
  ${cssId} .g__card-star.active{
    color: #F4D66C;
  }
  ${cssId} .g__image-container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f7f7f7;
    height: auto;
    width: 250px;
    padding: 15px;
  }
  ${cssId} .g__image-container:hover img{
    transform: scale(1.07);
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
  ${cssId} .g__card-body{
    padding: 25px;
  }
  ${cssId} .g__card-title{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    color: #101010;
  }
  ${cssId} .g__card-sub-head{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    margin: 5px 0;
    color: #5D50E6;
  }
  ${cssId} .g__card-description{
    font-size: 14px;
    line-height: 20px;
    color: var(--body-font);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  ${cssId} .g__card-attendees{
    font-size: .9rem;
    color: #757575;
    margin-top: 15px;
  }
  `;
  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(mpCardCSS);
  /* ---- Main container ---- */
  const mp_container = document.createElement("div");
  mp_container.classList.add("g__container");

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
    if (r.host) {
      const host = document.createElement("h4");
      host.classList.add("g__card-sub-head");
      host.innerHTML = r.host;
      cardBody.appendChild(host);
    }

    // Description
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("g__card-description");
    cardDescription.innerHTML = r.description || "Untitled";
    cardBody.appendChild(cardDescription);

    if (r.attendees) {
      const cardAttendees = document.createElement("p");
      cardAttendees.classList.add("g__card-attendees");
      cardAttendees.innerHTML = `${r.attendees} Attendees`;
      cardBody.appendChild(cardAttendees);
    }

    mp_card.appendChild(cardBody);
    mp_container.appendChild(mp_card);
  });

  /* ---- Append container to page ---- */
  graniteDiv.appendChild(mp_container);
}
