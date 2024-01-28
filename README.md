## TECHNOLOGIES USED:
  - **HTML5**: Used for structuring the content and layout of the web page.
  - **CSS3**: Applied for styling and presentation of the web page.
  - **JavaScript (ES6)**: Used for adding dynamic behavior and interactivity to the web page.


  

## PROJECT STRUCTURE:

  1. **HTML Files:**
      - `index.html`: Includes essential meta tags, linked external resources.
      - Also the approach of using separate HTML files for each component and rendering content dynamically through JavaScript.
  2. **CSS Files:**
      - `styles.css`: The main CSS file contains a global reset for margin and padding, a set of CSS variables defined in :root, and some styling rules for the body, header, section, and footer.
                 - For each component, I've created a dedicated CSS file where I define the styling specific to that section, outlining how each part should appear.  3. JavaScript Files

  3. **JS Files:**
       - `main.js`: The main JavaScript file, importing different components/modules that represent different sections of your web application. Each import statement corresponds to a specific section.
               - DOM Manipulation, creating instances of components, appending the different sections of the web application and rendering components.
               - For each component, I've created a corresponding JS file to manage the logic, outlining how each section should function.
     
  4. **Assets:**
         - `images/`: Contains image files, logos, background image, and static images used in the application.
         - main.js and styles.css files are also placed here

  5. **Static:**
         - Centralized Asset Management in static.js file, which serves as a hub for managing and importing static resources, particularly images, .map function allows us to seamlessly integrate these images into our components
         - also it has bennefits such as maintainability and Ease of Update.


     

## Features

  ### Responsive Web Design
  
  The project incorporates responsive web design, allowing the application to adapt seamlessly to different screen sizes and devices. Whether accessed from a desktop, tablet, or smartphone, users can enjoy a consistent and user-friendly experience.

  ### Burger Menu (Screen Width ≤ 768px)

  On screens with a width of 768 pixels or less, [TBCAcademyPrj] dynamically transforms the navigation experience. A sleek and intuitive burger menu appears, gracefully animating onto the screen.
  Upon clicking the burger icon, the menu elegantly slides in from the right, providing easy access to navigation options. This responsive design ensures a streamlined and user-friendly interaction, especially on smaller devices where space is limited.

  ### Partner Carousel

  Navigate through our esteemed partners effortlessly with our dynamic Partner Carousel. This interactive feature showcases a list of partners, and users can easily navigate through the carousel using intuitive buttons.
  Whether you want to explore different partners or focus on a specific one, our Partner Carousel offers a seamless and engaging experience.


  

## How To Launch Project

  ### Useing "http-server"

  1. **Install Node.js and npm:**
     - Ensure that you have Node.js and npm installed on your machine.
  
  2. **Install http-server globally:**
     - Open your terminal and run the following command to install `http-server` globally:
  
       ```bash
       npm install --global http-server
       ```
  
  3. **Navigate to Project Root:**
     - Change directory to your project root using the `cd` command.
  
  4. **Start the Server:**
     - Run the following command to start the `http-server`:
  
       ```bash
       http-server
       ```
  
     - The terminal will display information about the server, including the URL where your project is accessible (e.g., http://127.0.0.1:8080).
  
  5. **Access Project in Browser:**
     - Copy the provided URL and open a web browser.
  
  6. **Keep Terminal Open:**
     - Remember to keep the terminal window open while the server is running. Closing the terminal will stop the server.
  
  7. **Stop the Server (Optional):**
     - To manually stop the server, press `Ctrl+C` in the terminal window.

By following these steps, you should be able to launch your project using the `http-server` and access it in your web browser. This setup is convenient for development purposes.



### Useing Live Server

  1. **Install Visual Studio Code:**
     - Ensure that you have Visual Studio Code installed on your machine.
  
  2. **Open Project in Visual Studio Code:**
     - Open your project folder using Visual Studio Code.
  
  3. **Install Live Server Extension:**
     - Install the "Live Server" extension from the Visual Studio Code marketplace.
  
  4. **Right-click on `index.html`:**
     - In the Visual Studio Code file explorer, right-click on your `index.html` file.
  
  5. **Select "Open with Live Server":**
     - Choose the option "Open with Live Server" from the context menu.
  
  6. **Access Project in Browser:**
     - Your default web browser will open, and your project will be accessible at a live server address (e.g., http://127.0.0.1:5500).
  
  7. **Keep Visual Studio Code Open:**
     - You can continue editing your code in Visual Studio Code while the live server is running.
  
  8. **Stop Live Server (Optional):**
     - To stop the live server, right-click on the Visual Studio Code window and choose "Stop Server" from the Live Server menu.

By following these steps, you should be able to launch your project using Visual Studio Code's Live Server extension. This extension simplifies the process of starting a local server for your project.



## Open Deployed Project on Vercel

  1. **Access Deployed Project:**
     - Open your web browser.
  
  2. **Visit Deployment Link:**
     - Go to the deployed project's link: [https://tbc-academy-prj.vercel.app/](https://tbc-academy-prj.vercel.app/)
  
  3. **Explore Deployed Project:**
     - Your project should be accessible at the provided Vercel deployment link.
  
  4. **Interact with the Project:**
     - Explore and interact with the deployed version of your project.

By following these steps, you should be able to open and explore the deployed version of your project on Vercel. This link can be shared with others for them to access and view your live project.
