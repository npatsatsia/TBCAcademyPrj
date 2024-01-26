    import BurgerMenu from '../BurgerMenu/burgerMenu.js';

    class Header {
        constructor() {
            this.burgerMenu = new BurgerMenu();
            this.registerScrollEvent();
        }


        registerScrollEvent() {
            let prevScrollPos = window.scrollY || window.pageYOffset;
    
            window.onscroll = () => {
                const currentScrollPos = window.scrollY || window.pageYOffset;
    
                if (prevScrollPos > currentScrollPos) {

                    document.querySelector('.header-container').style.backgroundColor = "rgba(26,30,31, 0.9)";
                    document.querySelector('.header-container').style.display = 'flex';
                } else {

                    document.querySelector('.header-container').style.backgroundColor = "rgba(26,30,31)";
                    document.querySelector('.header-container').style.display = 'none';
                }
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    document.querySelector('.header-container').style.backgroundColor = "rgba(26,30,31, 0.8)";
                } else {
                    document.querySelector('.header-container').style.backgroundColor = "rgba(26,30,31)";
                }
    
                prevScrollPos = currentScrollPos;
            };
        }
    
    
        render() {
            const headerElement = document.createElement('header');
            headerElement.innerHTML = `
                <link rel="stylesheet" href="components/Header/header.css">
                <div class="header-container">
                    <div class="logo">
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="-0.049 -0.035 160.05 35.031" xmlns="http://www.w3.org/2000/svg" viewBox="-0.049 -0.035 160.05 35.031" height="36" width="160" data-type="color" role="presentation" aria-hidden="true">
                            <g>
                                <g clip-path="url(#b290f575-40bd-4c29-b19c-ded35374c9f9_comp-ktjxmlim)">
                                    <path fill="#00ADEE" d="M17.72 20.126a3.738 3.738 0 0 1-1.187 3.079A42.393 42.393 0 0 1 3.49 31.5a6 6 0 0 1-1.37.365 1.043 1.043 0 0 1-1.258-1.083 2.46 2.46 0 0 1 .137-.652C2.27 26.49 6.62 18.587 8.472 15.326c2.315-4.076 8.4-13.898 9.32-15a.332.332 0 0 1 .398-.098c.15.079.267.17.117.711-.796 2.915-1.956 9.255-.756 17.91.065.456.123.86.156 1.245" data-color="1"></path>
                                    <path fill="#00ADEE" d="M19.187 24.287a3.737 3.737 0 0 1 3.26-.508 42.26 42.26 0 0 1 13.697 7.134c.372.294.706.631.997 1.005a1.042 1.042 0 0 1-.306 1.63 2.373 2.373 0 0 1-.652.202c-3.79.718-12.81.907-16.56.933-4.688 0-16.232-.326-17.608-.587a.32.32 0 0 1-.28-.293c0-.17 0-.32.554-.463 2.922-.764 8.987-2.935 15.887-8.296.359-.28.652-.535 1.004-.757" data-color="1"></path>
                                    <path fill="#00ADEE" d="M22.05 20.929a3.73 3.73 0 0 1-2.067-2.563 42.333 42.333 0 0 1-.652-15.431 6 6 0 0 1 .365-1.37 1.043 1.043 0 0 1 1.565-.548c.182.126.348.273.496.437 2.51 2.929 7.174 10.644 9.078 13.872 2.374 4.05 7.826 14.231 8.309 15.561a.32.32 0 0 1-.111.392c-.144.098-.287.15-.652-.248-2.126-2.146-7.037-6.313-15.13-9.613-.425-.17-.803-.32-1.162-.49" data-color="1"></path>
                                    <path fill="#00ADEE" d="M17.386 19.382c.163 1.65.247 2.51-1.096 3.913a44.35 44.35 0 0 1-8.478 6.235 36.381 36.381 0 0 1-5.074 2.478c-1.148.411-2.107.587-2.61-.241a1.597 1.597 0 0 1 0-1.46c1.24-3.366 4.827-9.653 7.175-13.742l.737-1.305c3.593-6.196 8.354-13.78 9.287-15 .137-.176.385-.385.613-.254a.45.45 0 0 1 .163.482c0 .033-.065.255-.085.34-1.539 6.26-1.376 12.39-.652 18.521" data-color="1"></path>
                                    <path fill="#00ADEE" d="M22.637 21.313c-1.513-.69-2.302-1.05-2.85-2.915a44.167 44.167 0 0 1-1.174-10.435c-.013-1.885.118-3.77.392-5.635.215-1.2.548-2.12 1.506-2.12A1.611 1.611 0 0 1 21.77.94c2.296 2.765 5.948 9.007 8.322 13.044.248.417.495.848.743 1.304 3.574 6.209 7.761 14.126 8.342 15.548.085.202.143.522-.085.652a.457.457 0 0 1-.502-.104l-.248-.235c-4.65-4.474-10.05-7.395-15.705-9.835z" data-color="1"></path>
                                    <path fill="#00ADEE" d="M18.339 24.887c1.35-.965 2.054-1.467 3.946-1.01a44.05 44.05 0 0 1 9.633 4.226 36.58 36.58 0 0 1 4.682 3.156c.933.783 1.565 1.533 1.083 2.361a1.598 1.598 0 0 1-1.266.724c-3.534.606-10.767.652-15.476.652h-1.48c-7.174 0-16.116-.346-17.61-.548-.22 0-.52-.137-.52-.404a.45.45 0 0 1 .338-.378l.333-.098c6.196-1.794 11.426-5.009 16.37-8.687" data-color="1"></path>
                                    <path fill="#ffffff" d="m48.77 20.818.965-.966-2.687-2.686a.683.683 0 0 0-.965.965l2.687 2.687z" data-color="2"></path>
                                    <path fill="#ffffff" d="m51.66 21.776 3.671-3.678a.653.653 0 0 0 0-.965.692.692 0 0 0-.965 0l-3.672 3.678-.965.965-3.62 3.62a.653.653 0 0 0 0 .959.652.652 0 0 0 .966 0l3.62-3.613 3.645 3.645a.691.691 0 0 0 .965 0 .653.653 0 0 0 0-.965l-3.645-3.646z" data-color="2"></path>
                                    <path fill="#ffffff" d="M70.71 16.526c.116.393.285.768.502 1.116.202.313.476.704.822 1.167.35.443.675.907.972 1.39.276.462.495.957.652 1.473a6.86 6.86 0 0 1 .267 2.009 5.394 5.394 0 0 1-.652 2.68 4.174 4.174 0 0 1-1.709 1.69 5.18 5.18 0 0 1-2.426.567 5.043 5.043 0 0 1-2.406-.568 4.141 4.141 0 0 1-1.69-1.676 5.426 5.426 0 0 1-.613-2.68c.008-.66.09-1.316.248-1.957l2.609.092a7.68 7.68 0 0 0-.183 1.663 3.359 3.359 0 0 0 .548 2.028 1.761 1.761 0 0 0 1.52.75 1.826 1.826 0 0 0 1.493-.652c.4-.571.598-1.26.561-1.957a3.856 3.856 0 0 0-.365-1.741 10.935 10.935 0 0 0-1.115-1.702 13.844 13.844 0 0 1-1.005-1.448 6.06 6.06 0 0 1-.652-1.546 7.077 7.077 0 0 1-.222-2.126h2.655c-.006.483.06.964.195 1.428" data-color="2"></path>
                                    <path fill="#ffffff" d="M78.008 28.063a3.972 3.972 0 0 1-1.696-1.539 4.304 4.304 0 0 1-.587-2.237 4.623 4.623 0 0 1 .124-1.108l2.609.104a3.368 3.368 0 0 0-.072.75 2.35 2.35 0 0 0 .607 1.722 2.172 2.172 0 0 0 1.617.652 2.218 2.218 0 0 0 1.585-.567 1.959 1.959 0 0 0 .593-1.507 1.847 1.847 0 0 0-.56-1.435 2.264 2.264 0 0 0-1.579-.509h-.698V20.2h.88c.467.026.928-.11 1.305-.386a1.303 1.303 0 0 0 .457-1.063 1.441 1.441 0 0 0-.483-1.102 1.956 1.956 0 0 0-1.304-.483l.137-2.178a5.102 5.102 0 0 1 2.27.476 3.554 3.554 0 0 1 1.512 1.305c.363.575.55 1.244.535 1.924a3.156 3.156 0 0 1-.45 1.67c-.315.5-.79.88-1.35 1.075a2.609 2.609 0 0 1 1.454 1.161c.369.6.557 1.292.542 1.996a3.822 3.822 0 0 1-.574 2.08 3.913 3.913 0 0 1-1.683 1.442 5.87 5.87 0 0 1-2.609.528 5.713 5.713 0 0 1-2.608-.554" data-color="2"></path>
                                    <path fill="#ffffff" d="M93.686 16.526a4.5 4.5 0 0 0 .496 1.116c.202.313.476.704.822 1.167.35.443.675.907.972 1.39.279.46.498.956.652 1.473.19.652.281 1.33.267 2.009a5.394 5.394 0 0 1-.652 2.68 4.194 4.194 0 0 1-1.715 1.69 5.163 5.163 0 0 1-2.426.567 5.04 5.04 0 0 1-2.407-.568 4.121 4.121 0 0 1-1.682-1.676 5.432 5.432 0 0 1-.62-2.68c.007-.66.09-1.316.248-1.957l2.608.091a8.104 8.104 0 0 0-.176 1.664 3.359 3.359 0 0 0 .542 2.002 1.78 1.78 0 0 0 1.526.75 1.807 1.807 0 0 0 1.487-.652c.406-.569.603-1.26.56-1.957a3.77 3.77 0 0 0-.365-1.741 10.93 10.93 0 0 0-1.115-1.702 14.878 14.878 0 0 1-1.004-1.448 6.565 6.565 0 0 1-.652-1.546 7.298 7.298 0 0 1-.222-2.126h2.66c-.005.483.061.964.197 1.428" data-color="2"></path>
                                    <path fill="#ffffff" d="M106.691 27.04a5.531 5.531 0 0 0-2.283-.418h-4.409v-1.956h1.337a5.352 5.352 0 0 1-2.008-2.042 5.869 5.869 0 0 1-.757-2.935 5.746 5.746 0 0 1 .555-2.648c.326-.66.842-1.21 1.48-1.578a4.141 4.141 0 0 1 2.054-.515 4.022 4.022 0 0 1 1.859.437 2.65 2.65 0 0 1 1.259 1.259 2.931 2.931 0 0 1 1.304-1.246 4.144 4.144 0 0 1 1.924-.45 4.43 4.43 0 0 1 2.185.535 3.914 3.914 0 0 1 1.539 1.493c.382.68.576 1.45.561 2.23a4.133 4.133 0 0 1-.574 2.172 3.908 3.908 0 0 1-1.578 1.481 4.815 4.815 0 0 1-2.27.522 4.89 4.89 0 0 1-2.276-.515 4.029 4.029 0 0 1-1.591-1.435 3.86 3.86 0 0 1-.574-2.1v-.359a2.01 2.01 0 0 0-.398-1.304 1.305 1.305 0 0 0-1.07-.496 1.425 1.425 0 0 0-1.226.62 3.263 3.263 0 0 0-.45 1.917 4.443 4.443 0 0 0 1.226 3.385 4.92 4.92 0 0 0 3.02 1.337l.587.058a5.606 5.606 0 0 1 3.117 1.2 3.84 3.84 0 0 1 1.305 2.76h-2.694a1.82 1.82 0 0 0-1.102-1.403l-.052-.006zm3.509-6.431c.347-.403.527-.923.502-1.454a2.105 2.105 0 0 0-.522-1.487 1.676 1.676 0 0 0-1.304-.542 1.723 1.723 0 0 0-1.305.542 2.316 2.316 0 0 0 0 2.895 1.724 1.724 0 0 0 1.305.555 1.69 1.69 0 0 0 1.304-.542" data-color="2"></path>
                                    <path fill="#ffffff" d="M117.126 28.064a4.043 4.043 0 0 1-1.663-1.52 4.219 4.219 0 0 1-.587-2.224c.003-.496.082-.989.234-1.461l2.55.104c-.077.365-.12.736-.13 1.11a2.291 2.291 0 0 0 .554 1.61 1.999 1.999 0 0 0 1.533.6 1.957 1.957 0 0 0 2.107-2.159v-4.943a1.965 1.965 0 0 0-1.183-1.797 1.956 1.956 0 0 0-2.117.375 1.86 1.86 0 0 0-.39.644 1.853 1.853 0 0 0-.106.745 3.5 3.5 0 0 0 .072.75l-2.661.072a6.492 6.492 0 0 1-.105-1.18 3.524 3.524 0 0 1 .607-2.042 3.911 3.911 0 0 1 1.65-1.357 5.58 5.58 0 0 1 2.328-.469 5.217 5.217 0 0 1 2.335.509 3.849 3.849 0 0 1 1.624 1.467c.402.688.606 1.473.587 2.27v4.956a4.726 4.726 0 0 1-.574 2.374 3.836 3.836 0 0 1-1.637 1.566 5.468 5.468 0 0 1-2.55.554c-.859.02-1.71-.17-2.478-.554z" data-color="2"></path>
                                    <path fill="#ffffff" d="M129.008 28.05a4.087 4.087 0 0 1-1.676-1.578 4.571 4.571 0 0 1-.58-2.315 4.798 4.798 0 0 1 .554-2.315 3.912 3.912 0 0 1 1.572-1.579 4.703 4.703 0 0 1 2.335-.56 3.913 3.913 0 0 1 1.493.28c.42.168.795.432 1.096.77v-1.781a1.725 1.725 0 0 0-.652-1.383 2.688 2.688 0 0 0-3.053-.039 1.452 1.452 0 0 0-.606 1.135l-2.707-.091a3.117 3.117 0 0 1 .653-1.918 4.067 4.067 0 0 1 1.728-1.304 6.244 6.244 0 0 1 2.433-.463 5.649 5.649 0 0 1 2.465.528 4.135 4.135 0 0 1 1.728 1.48c.429.64.657 1.395.652 2.166v4.976a4.42 4.42 0 0 1-1.304 3.333 4.898 4.898 0 0 1-3.555 1.232 5.542 5.542 0 0 1-2.608-.567l.032-.007zm4.155-2.25a1.906 1.906 0 0 0 .606-1.454v-.34a1.964 1.964 0 0 0-.606-1.473 2.245 2.245 0 0 0-1.572-.561 2.199 2.199 0 1 0 0 4.39 2.244 2.244 0 0 0 1.572-.562z" data-color="2"></path>
                                    <path fill="#ffffff" d="M139.267 25.363a20.419 20.419 0 0 1-.261-3.43v-2.055a5.553 5.553 0 0 1 .606-2.674 4.16 4.16 0 0 1 1.67-1.715 5.218 5.218 0 0 1 4.813 0 4.163 4.163 0 0 1 1.67 1.703c.422.82.63 1.732.606 2.654v2.087a20.76 20.76 0 0 1-.261 3.45 21.28 21.28 0 0 1-.737 3.059h-2.569c.618-2.079.93-4.236.926-6.405v-2.054a3.262 3.262 0 0 0-.541-2.029 1.91 1.91 0 0 0-1.491-.718 1.905 1.905 0 0 0-1.49.718 3.35 3.35 0 0 0-.541 2.048v2.035a22.328 22.328 0 0 0 .926 6.405h-2.609a22.74 22.74 0 0 1-.737-3.079" data-color="2"></path>
                                    <path fill="#ffffff" d="M156.811 16.526c.114.393.281.768.496 1.116.202.313.476.704.822 1.167.351.443.675.907.971 1.39a6.66 6.66 0 0 1 .9 3.482 5.39 5.39 0 0 1-.652 2.68 4.141 4.141 0 0 1-1.709 1.69 5.163 5.163 0 0 1-2.426.567 5.041 5.041 0 0 1-2.406-.568 4.141 4.141 0 0 1-1.689-1.676 5.419 5.419 0 0 1-.613-2.68c.007-.66.09-1.316.247-1.957l2.609.092a8.085 8.085 0 0 0-.182 1.663 3.363 3.363 0 0 0 .547 2.028 1.765 1.765 0 0 0 1.526.75 1.824 1.824 0 0 0 1.487-.652c.403-.57.601-1.26.561-1.957a3.768 3.768 0 0 0-.365-1.741 10.935 10.935 0 0 0-1.115-1.702 13.76 13.76 0 0 1-1.004-1.448 6.574 6.574 0 0 1-.653-1.546 7.054 7.054 0 0 1-.221-2.126h2.66a4.93 4.93 0 0 0 .196 1.428" data-color="2"></path>
                                </g>
                                <defs fill="none">
                                    <clipPath id="b290f575-40bd-4c29-b19c-ded35374c9f9_comp-ktjxmlim">
                                        <path fill="#ffffff" d="M160 0v35.003H0V0h160z"></path>
                                    </clipPath>
                                </defs>
                            </g>
                        </svg>
                    </div>
                    <nav class="header-nav">
                        <ul class="header-nav-ul">
                            <li><a href="#">მთავარი</a></li>
                            <li><a href="#">TBC IT</a></li>
                            <li><a href="#">TBCxUSAID</a></li>
                            <li><a href="#">რისკები</a></li>
                        </ul>
                    </nav>
                    <div class="burger-menu-lines">
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                    </div>
                </div>
                `;

                headerElement.appendChild(this.burgerMenu.render());

            return headerElement;
        }
    }

    export default Header;
