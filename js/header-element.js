class HeaderElement extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="header">
            <nav class="nav">
                <ul class="nav-list">
                    <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="/php/species_list.php" class="nav-link">Species List</a></li>
                    <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
                </ul>
            </nav>
        </header>
      `;
    }
}
customElements.define('header-element', HeaderElement);
