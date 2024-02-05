class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".navlist",
    ".navlist li",
  );
  mobileNavbar.init();



  const observer = new IntersectionObserver(entries => {
    console.log(entries)

    Array.from(entries).forEach(entry => {
      if(entry.intersectionRatio >= 1) {
        entry.target.classList.add('init-hidden-off')
      }
    })

  }, {
    threshold: [0, .5, 1]
  })
  
  Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
  })