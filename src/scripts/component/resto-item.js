const data = require("../data/DATA.json");

class RestoItem extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      margin: 80px;
    }
    
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 20px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    li {
      position: relative;
      width: auto;
      height: auto;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.65);
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.6);
    }
    
    img {
        width: 100%;
        height: 350px; 
        object-fit: cover;
    }
    
    h3 {
        margin-top: 1rem;
        font-size: 2rem;
        font-family: 'Roboto Flex', sans-serif;
        font-weight: bold;
        text-align: center;
        color: rgba(0, 0, 0, 0.9);
    }
    
    .description {
      margin: 1.5rem;
      line-height: 1.5;
    }
    
    .description p {
      display:-webkit-box; 
      -webkit-line-clamp: 5; 
              line-clamp: 5; 
      -webkit-box-orient: vertical;
      margin-top: 1rem; 
      text-align: justify;
      overflow: hidden;   
      color: rgba(0, 0, 0, 0.9);
    }

    hr {
      width: 75%;
      height: 2px;
      border: none;
      background: rgba(124,79,15,1);
    }
    
    .info {
      position: absolute;
      top: 0%;
      left: 0%;
      margin: 1rem;
      background: rgba(200, 158, 60, 0.9);
      z-index: 1;
      overflow: hidden;
    }
    
    .info p {
      display: inline-flex;
      flex-direction: row;  
      align-items: center;
      justify-content: center;
      text-align: center;
      color: rgba(0, 0, 0, 0.9); 
      font-family: 'Roboto Flex', serif;
      margin: 0.5rem;
    }
    
    .city {
      background: url('https://img.icons8.com/pastel-glyph/64/null/marker--v1.png') center/contain no-repeat;
      display: inline-block;
      width: 20px;
      height: 20px;
    }

    .city p {
      margin-bottom: 10px;
    }

    .rating {
      background: url('https://img.icons8.com/retro/32/null/filled-star.png') center/contain no-repeat;
      display: inline-block;
      margin-right: 5px;
      width: 20px;
      height: 20px;
    }

    @media (min-width: 1280px) {
      ul {
          grid-template-columns: repeat(3, 1fr);
      }
    }
    @media (max-width: 728px) {
      :host {
        margin: 0px;
      }
    }
    `;
    shadowRoot.appendChild(style);

    const restoItemWrapper = document.createElement("div");
    restoItemWrapper.setAttribute("class", "resto-item");
    const restoItemView = document.createElement("ul");
    restoItemView.setAttribute("class", "resto-list");

    data.restaurants.forEach((restaurant) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("tabIndex", "0");
      listItem.innerHTML = `
      <img src="${restaurant.pictureId}" alt="${restaurant.name}">
      <div class="info">
        <p><i class="city"></i>${restaurant.city}</p>
        <p><i class="rating"></i>${restaurant.rating}</p>
      </div>
      <h3>${restaurant.name}</h3>
      <div class="description">
        <p>${restaurant.description}</p>
      </div>
      <hr>
      `;
      restoItemView.appendChild(listItem);
    });

    restoItemWrapper.appendChild(restoItemView);
    shadowRoot.appendChild(restoItemWrapper);
  }
}

customElements.define("resto-item", RestoItem);
