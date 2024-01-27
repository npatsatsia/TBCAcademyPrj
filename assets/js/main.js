import Header from "../../components/Header/header.js";
import AboutSection from "../../components/About/about.js";
import CoursesSection from "../../components/Courses/courses.js";
import SliderSection from "../../components/Slider/slider.js";
import FAQSection from "../../components/FAQ/faq.js";
import Footer from "../../components/Footer/footer.js";
const app = document.getElementById('app');
const header = new Header();
const aboutSection = new AboutSection()
const coursesSection = new CoursesSection()
const sliderSection = new SliderSection()
const faqSection = new FAQSection()
const footer = new Footer()
app.appendChild(header.render());
app.appendChild(aboutSection.render());
app.appendChild(coursesSection.render());
app.appendChild(sliderSection.render());
app.appendChild(faqSection.render());
app.appendChild(footer.render());