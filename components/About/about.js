class AboutSection {

    render() {
        const aboutSection = document.createElement('section');
        aboutSection.innerHTML = `
            <link rel="stylesheet" href="components/About/about.css">
            <div class="page-title-container">
                <div class="image-container">
                    <img src="../../assets/images/background/about-background-image.webp" alt="page-main-image">
                </div>
                <div class="title-container">
                    <span>TBC x USAID</span>
                    <span>ტექნოლოგიური განათლებისთვის</span>
                </div>
            </div>
            <div class="page-about-info">
                <div class="text-container">
                    <span>„ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.
                    </span>
                </div>
                <a href="#">გაიგე მეტი</a>
            </div>
            `;
    
    
        return aboutSection;
    }
}    


export default AboutSection