class navBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowDOM.innerHTML = `
    <style>
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 50px;
      padding: 10px;
      background: rgba(200, 158, 60, 0.9);
      backdrop-filter: blur(2.5px);
      -webkit-backdrop-filter: blur(2.5px);
      z-index: 100;
    }
    
    .nav-logo a img {
      margin-top: 5px;
    }

    .nav-logo a h1 {
      display: flex;
      position: absolute;
      align-items: center;
      font-size: 30px;
      margin-left: 60px;
      margin-top: 40px;
      color: rgba(0, 0, 0, 1);
    }
    
    .nav-menu {
      display: flex;
      gap: 20px;
    }
    
    .nav-menu li {
      margin-right: 20px;
      list-style: none;
    }
    
    .nav-menu li:last-child {
      margin-right: 0;
    }
    
    .nav-menu a {
      font-size: 1.2rem;
      color: rgba(0, 0, 0, 0.9);
      font-weight: bold;
      text-decoration: none;
      padding: 10px;
      border-radius: 5px;
      transition: all 0.2s ease;
    }
    
    .nav-menu a:hover {
      background: rgba(255, 255, 255, 0.65);
    }
    
    .navbar-hamburger {
      display: none;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }

    button {
      max-width: 44px;
      min-width: 44px;
      padding: 13px;
    }

    @media only screen and (max-width: 768px) {
      .nav-menu {
        display: none;
        width: 250px;
        transform: translate(250px, 0);
        transition: transform 0.3s ease-in-out;
      }
    
      .navbar-hamburger {
        display: flex;
        justify-content: center;
        flex-direction: column;
        justify-content: center;
      }
    
      .navbar-hamburger span {
        display: flex;
        width: 25px;
        height: 3px;
        background-color: #333;
        margin-bottom: 5px;
      }
    
      .navbar-hamburger span:last-child {
        margin-bottom: 0;
      }

      .navbar-hamburger.active span:nth-child(1) {
        transform: translateY(10px) rotate(45deg);
      }

      .navbar-hamburger.active span:nth-child(2) {
        opacity: 0;
      }

      .navbar-hamburger.active span:nth-child(3) {
        transform: translateY(-6px) rotate(-45deg);
      }
    
      .nav-menu.show {
        display: flex;
        flex-direction: column;
        position: absolute;  
        right: 0;
        width: auto;
        height: auto;
        padding: 15px;
        background: rgba(200, 158, 60, 0.9);
        transform: translateY(70%);
        z-index: 1;
      }
    
      .nav-menu.show ul {
        list-style-type: none;
        padding: 0 16px;
      }

      .nav-menu.show li {
        padding: 5px 0px;
      }
    
      .nav-menu.show li:last-child {
        margin-bottom: 0;
      }
    
      .nav-menu.show a {
        color: rgba(0, 0, 0, 0.9);
        font-weight: bold;
        transition: all 0.2s ease;
      }
    
      .nav-menu.show a:hover {
        background: rgba(255, 255, 255, 0.65);
      }

      .nav-logo h1 {
        display: flex;
        align-items: center;
      }
    }
    </style>
    <nav>
    <div id="home" class="nav-logo">
      <a href="#home">
      <h1>Menu Mate<h1>
      <img src="https://img.icons8.com/glyph-neue/64/null/meal.png" alt="Logo Aplikasi Menu Mate">
      </a>
    </div>
    
    <ul class="nav-menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#">Favorite</a></li>
      <li><a href="#about">About Us</a></li>
    </ul>

    <button class="navbar-hamburger" aria-label="Toggle nav" aria aria-expanded="false" aria aria-controls="nav-menu">
      <span></span>
      <span></span>
      <span></span>
    </nav>
    `;
    const navbarHamburger = this.shadowDOM.querySelector(".navbar-hamburger");
    const navMenu = this.shadowDOM.querySelector(".nav-menu");

    navbarHamburger.addEventListener("click", function () {
      navbarHamburger.classList.toggle("active");
      navMenu.classList.toggle("show");
    });
  }
}

customElements.define("nav-bar", navBar);
