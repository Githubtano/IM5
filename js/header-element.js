// Define the custom header element
class HeaderElement extends HTMLElement {
  connectedCallback() {
      // Set the inner HTML of the custom element
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
  // Get references to the hamburger button and the navigation menu
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  // Add click event listener to the hamburger button
  hamburger.addEventListener('click', function() {
      // Toggle the 'show' class on the navigation menu
      navMenu.classList.toggle('show');
  });
});
