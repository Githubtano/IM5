// Define the custom header element
class HeaderElement extends HTMLElement {
  connectedCallback() {

      this.innerHTML = `
        <header class="header">
           <button class="hamburger" id="hamburger">☰</button>
               <nav class="nav" id="nav-menu">
                  <ul class="nav-list">
                      <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
                      <li class="nav-item"><a href="/php/species_list.php" class="nav-link">Species List</a></li>
                      <li class="nav-item"><a href="/about.html" class="nav-link">About</a></li>
                  </ul>
              </nav>
          </header>
      `;
  }
}

// Define the custom element
customElements.define('header-element', HeaderElement);

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        console.log('Hamburger clicked'); // For debugging
    });
});
