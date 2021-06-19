// Logs when the client route changes
exports.onRouteUpdate = () => {

    let menuIcon = document.getElementById("humberger-menu-icon")

    menuIcon.onclick = () => {

        menuIcon.classList.toggle('hover')

        let navScreen = document.getElementById("nav-screen")
    
        if (navScreen.style.display === 'none') {
      
          // Show background
          navScreen.style.display = "flex"
    
          let mainArea = document.querySelector("main")
          mainArea.style.display = "none"
      
          // fix the header
          let header = document.querySelector("header")
          header.style.position = "fixed"
      
          let logo = document.getElementById("header-logo")
          logo.style.display = "none"
      
          let footerArea = document.querySelector("footer")
      
          if (footerArea) {
            footerArea.style.display = "none"
          }
      
        } else {
      
          // Then hide background
          navScreen.style.display = "none";
      
          let mainArea = document.querySelector("main")
          mainArea.style.display = "flex"
      
          // unfix the header
          let header = document.querySelector("header");
          header.style.position = "absolute";
      
          let logo = document.getElementById("header-logo")
          logo.style.display = "block"
      
          let footerArea = document.querySelector("footer")
      
          if (footerArea) {
            footerArea.style.display = "block"
          }
        }
      }
  }