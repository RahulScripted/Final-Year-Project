class specialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="nav">
                <a href="index.html" class="logo">Gen<span>Art</span>Lab</a>
                <ul id="center-nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="create.html">How To Create</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                </ul>
                <div id="menu-icon">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </header>
        `;

        // JavaScript to set active link
        const navLinks = this.querySelectorAll('#center-nav a');
        const currentPath = window.location.pathname.split('/').pop();

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.toggle('active');
            }
        });
    }
}

customElements.define('special-header', specialHeader);


// Hamburger Menu
let menu = document.querySelector('#menu-icon');
let navBar = document.querySelector('#center-nav');

menu.onclick = () => {
    menu.classList.toggle('add');
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('add'); 
    navBar.classList.remove('active');
}


