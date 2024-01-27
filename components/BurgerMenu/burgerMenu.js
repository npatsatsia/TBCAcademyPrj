class BurgerMenu {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            this.app = document.getElementById('app');
            this.burgerMenu = document.getElementById('burgerMenu');
            this.burgerMenuLines = document.getElementsByClassName('burger-menu-lines');

            this.menu = document.createElement('div');
            this.menu.className = 'menu-burgerMenu';
            this.burgerMenu.appendChild(this.menu);

            this.menuNav = document.createElement('nav');
            this.menuNav.className = 'burgerMenu-nav';
            this.navUl = document.createElement('ul');
            this.navUl.className = 'burgerMenu-nav-ul';

            const itemTexts = ['მთავარი', 'TBC IT', 'TBCxUSAID', 'რისკები'];

            for (let i = 0; i <= itemTexts.length; i++) {
                const navLi = document.createElement('li');
                navLi.textContent = itemTexts[i];
                this.navUl.appendChild(navLi);
            }
    
            this.menuNav.appendChild(this.navUl);
            this.menu.appendChild(this.menuNav);

            this.menuOpen = false;


            if (this.burgerMenuLines.length > 0) {
                for (const line of this.burgerMenuLines) {
                    line.addEventListener('click', this.toggleMenu.bind(this));
                }
                burgerMenu.addEventListener('click', (event) => {
                    this.handleClickOutside(event);
                });
            }

        });
    }


    toggleMenu() {
        this.menuOpen = !this.menuOpen;

        if (this.menuOpen && this.burgerMenu) {
            this.burgerMenu.classList.toggle('open', this.burgerMenu);
            this.menu.classList.toggle("open", this.menuOpen)
            document.querySelector('.burger-menu-lines .burger-line:first-child .half-line').style.transform = "rotate(-135deg) translateX(7px) translateY(-7px)";
            document.querySelector('.burger-menu-lines .burger-line:last-child .half-line').style.transform = "rotate(-135deg) translateX(-7px) translateY(6px)";            
            document.querySelector('.burger-menu-lines .burger-line .full-line').style.transform = "rotate(-45deg)";
        } else {
            document.body.style.transition = 'none';
            document.body.style.backgroundColor = '';
            this.app.style.overflow = '';
            
            this.closeMenu();
        }
    }

    closeMenu() {
        this.menuOpen = false;

        if (this.menu.parentElement) {
            document.body.style.overflow = '';
        }

        if (this.burgerMenu) {
            this.burgerMenu.classList.remove('open');
            this.menu.classList.remove('open');
            document.querySelector('.burger-menu-lines :first-child .half-line').style.transform = "rotate(0)";
            document.querySelector('.burger-menu-lines :last-child .half-line').style.transform = "rotate(0)";
            document.querySelector('.burger-menu-lines .burger-line .full-line').style.transform = "rotate(0)"
        }
    }

    handleClickOutside(event) {
        const target = event.target;
    
        if (!this.menu.contains(target) && this.menuOpen && event.target.className !== "burger-menu-lines" ) {
            this.closeMenu();
        }
    }


    render() {
        const burgerMenuDiv = document.createElement('div');
        burgerMenuDiv.id = 'burgerMenu';
        burgerMenuDiv.className = 'burger-menu-container';
        burgerMenuDiv.innerHTML = `
            <link rel="stylesheet" href="components/BurgerMenu/burgerMenu.css">
        `;
        return burgerMenuDiv;
    }
}

export default BurgerMenu;

