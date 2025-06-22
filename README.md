# Yash Pawar - Full Stack Developer Portfolio

This is the repository for my personal portfolio website, designed to showcase my skills, experience, and projects as a Full Stack Developer with over five years of experience. The site is built with Nuxt 3 and features a clean, responsive design.

You can view the live site here: [yashpwr.github.io](https://yashpwr.github.io)

## 🚀 Key Features

- **Modern Tech Stack**: Built with Nuxt 3 and the Vue 3 Composition API.
- **Dynamic Content**: All content is managed through a single `content.json` file, making updates easy.
- **Responsive Design**: A mobile-first approach ensures the site looks great on all devices.
- **Component-Based**: The architecture is modular and easy to maintain.
- **Interactive Portfolio**: Features a filterable project gallery with detailed modal views.
- **Comprehensive Resume**: Includes detailed sections for experience, education, skills, and certifications.

## 🛠️ Tech Stack

- **Framework**: Nuxt 3
- **Language**: Vue 3 (Composition API)
- **Styling**: CSS with a clean, modern design system.
- **Icons**: Font Awesome 6

## 📋 How Content is Managed

All the text, project details, skills, and personal information displayed on the site are populated from the `assets/content.json` file. This allows for quick and easy updates without needing to touch the Vue components.

### Editing Your Information
To customize the portfolio for your own use, you only need to edit `assets/content.json`.

### Main Sections in `content.json`
- **`sidebar`**: Your name, title, contact details, and social media links.
- **`about`**: The "About Me" description and the list of services you offer.
- **`resume`**: Your education, work experience, skills, and certifications.
- **`portfolio`**: Your projects, complete with categories, images, links, and descriptions.

## 📦 Local Development

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yashpwr/yashpwr.github.io.git
    cd yashpwr.github.io
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:3000`.

## 🚀 Deployment

This project is set up for automatic deployment to GitHub Pages using GitHub Actions.

A workflow, located at `.github/workflows/deploy.yml`, is configured to:
1.  Trigger on any push to the `main` branch.
2.  Build the Nuxt application into a static site.
3.  Deploy the generated static files to your `yashpwr.github.io` page.

There is no manual build step required for deployment. Simply push your changes to the `main` branch, and the site will be updated automatically.

You can monitor the deployment status in the "Actions" tab of your GitHub repository.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Yash Pawar**
- **GitHub**: [@yashpwr](https://github.com/yashpwr)
- **LinkedIn**: [Yash Pawar](https://www.linkedin.com/in/yashpwr/)

If you have any questions, feel free to reach out or open an issue.
