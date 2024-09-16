# Creating a .md file with the given README content

readme_content = """

# **Rahul Pathak's Portfolio**

Welcome to the **portfolio website** of Rahul Pathak! This project showcases my skills, projects, and experiences as a Web Developer specializing in React.js, TypeScript, and DevOps.

## **Website Link**

You can view the portfolio live at: [rahulpathak.netlify.app](https://rahulpathak.netlify.app)

---

## **Table of Contents**

1. [Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
4. [Features](#features)
5. [Contact Information](#contact-information)

---

## **Overview**

This portfolio is designed to reflect my expertise in **front-end web development** using modern technologies such as **React.js**, **CSS** for styling, and **Firebase** for the backend. The design is optimized to provide a sleek and **interactive user experience**.

### **Core Features:**

- **Responsive Design**: Ensuring the website looks great on all devices.
- **3D Interactive Design**: Drawing inspiration from Apple's interactive websites.
- **Rotating Text with Transition Effects**: Smooth **fade-in and fade-out** animations.
- **Custom Animations** for job responsibilities in the Experience section.

---

## **Technologies Used**

- **Frontend:**
  - React.js
  - CSS3
  - JavaScript (ES6+)
  - TypeScript
- **Backend:**

  - Firebase (for Authentication and Storage)
  - Express.js (for handling email submissions)
  - Nodemailer (for sending emails)

- **Deployment:**

  - Netlify (for hosting)
  - Vercel (considered for deployment of backend services)

- **Version Control:**
  - Git & GitHub

---

## **Setup Instructions**

To get a local copy up and running, follow these simple steps:

### **1. Clone the repository:**

\`\`\`bash
git clone https://github.com/rahulpathak/portfolio.git
\`\`\`

### **2. Navigate into the project directory:**

\`\`\`bash
cd portfolio
\`\`\`

### **3. Install dependencies:**

\`\`\`bash
npm install
\`\`\`

### **4. Start the development server:**

\`\`\`bash
npm start
\`\`\`

Your application should now be running on **http://localhost:3000**.

---

## **Features**

### **1. Responsive Design**

This website adapts to different screen sizes to provide an optimal viewing experience on **mobile, tablet, and desktop devices**.

### **2. Interactive Sections**

The portfolio includes smooth scroll and **single-page navigation** for a seamless experience.

### **3. Rotating Text Component**

A custom **rotating text** component is implemented with fade-in/fade-out transition effects for enhanced user engagement.

### **4. Contact Form with Nodemailer**

A fully functional **contact form** is available, utilizing **Nodemailer** for email submissions.

---

## **Contact Information**

Feel free to get in touch via:

- **Portfolio**: [rahulpathak.netlify.app](https://rahulpathak.netlify.app)
- **GitHub**: [github.com/rahulpathak](https://github.com/rahulpathak)
- **LinkedIn**: [linkedin.com/in/rahulpathak](https://linkedin.com/in/rahulpathak)

For any inquiries, you can also email me directly at: **[your-email@example.com](mailto:your-email@example.com)**

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### **Thank you for visiting my portfolio!**

I’m excited to connect with fellow developers and tech enthusiasts. Let's make the tech world better together! 🚀
"""

# Saving the content to a .md file

with open('/mnt/data/README.md', 'w') as file:
file.write(readme_content)

'/mnt/data/README.md'
