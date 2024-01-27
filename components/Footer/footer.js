class Footer {

    render() {
        const footerElement = document.createElement('footer');
        footerElement.innerHTML = `
            <link rel="stylesheet" href="components/Footer/footer.css">
            <div class="footer-container">
            <div class="bank-logo-container">
                <img src="../../assets/images/logo/bank-logo.webp" alt="bank-logo">
            </div>
            <div class="contact-socials">
                <div class="socials">
                    <img src="../../assets//images/socials/socials-fb.webp" alt="facebook">
                    <img src="../../assets/images/socials/socials-yt.webp" alt="youtube">
                </div>
                <div class="help">
                    <a href="#">მოგვწერეთ</a>
                </div>
            </div>
            <div class="terms-conditions">
                <a href="#">წესები და პირობები</a>
            </div>
            <div class="rights">
                <span>© 2023 ყველა უფლება დაცულია</span>
            </div>
        </div>
            `;

        return footerElement;
    }
}

export default Footer;
