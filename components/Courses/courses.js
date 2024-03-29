import {coursesArray} from '../../static/courses.js'

class CoursesSection {
    constructor() {
        this.coursesArray = coursesArray;
    }

    render() {
        const coursesElement = document.createElement('section');
        coursesElement.id = "courses-section"
        coursesElement.innerHTML = `
            <link rel="stylesheet" href="components/Courses/courses.css">
            <div class="courses-container">
                <div class="courses-title-container">
                    <span>სასწავლო კურსები</span>
                </div> 
                <div class="courses-list-container">
                    <ul class="courses-ul">
                        ${this.coursesArray.map(course => 
                            `<li>
                                <img src=${course.imageSrc} alt="">
                                <div class="course-details">
                                    <div class="course-information">
                                        <span>${course.courseTitle}</span>
                                        <span>${course.registrationPeriod}</span>
                                    </div>
                                    <div class="details-link">
                                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666" xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16" width="17" data-type="color" role="presentation" aria-hidden="true"><defs><style>#comp-lnoncoa62__00000000-0000-0000-0000-000000000003 svg [data-color="1"] {fill: #00AEEF;}</style></defs>
                                            <g>
                                                <path fill="#ffffff" d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z" data-color="1"></path>
                                            </g>
                                        </svg>
                                        <span>${course.details}</span>
                                    </div>
                                </div>
                            </li>`).join('')}
                    </ul>
                </div>
            </div>
            `;

        return coursesElement;
    }
}

export default CoursesSection;
