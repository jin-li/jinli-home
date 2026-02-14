语言：[简体中文 🇨🇳](README.zh.md) | Language: English 🇺🇸

# Jin Li's Homepage

This is a light-weight, elegant and customizable homepage with multi-language (i18n) support.

![responsive](./demo/jinli-home-responsive-devices.png)

![demo](./demo/jinli-home-demo-small-hi.gif)

## Features

- **Light-weight**: The homepage is designed to be simple and easy to use, with minimal dependencies.
- **Elegant**: The homepage has a clean and modern design, with a focus on readability and usability.
- **Customizable**: The homepage can be easily customized with JSON or YAML to fit your personal style and preferences.
- **Multi-language support**: The homepage supports multiple languages, making it accessible to a wider audience.
- **Responsive design**: The homepage is designed to be responsive, ensuring that it looks great on all devices, from desktops to mobile phones.
- **Technology stack**: The homepage is built using React, Vite, and Ant Design with TypeScript, making it fast and elegant.
- **Docker Support**: The homepage can be easily deployed using Docker or docker-compose, making it easy to deploy in any environment.

## Quick Start

### Deploy with Docker (recommended)

```bash
git clone https://github.com/jin-li/jinli-homepage.git
cd jinli-homepage
docker compose build
docker compose up -d
```

By default, the homepage will be served at `http://localhost:12444`. You can change the port by modifying the `docker-compose.yml` file.

### Serve Locally

```bash
git clone https://github.com/jin-li/jinli-homepage.git
yarn install
yarn dev
```

By default, the homepage will be served at `http://localhost:5173`. You can change the port by modifying the `vite.config.ts` file.

### Build for Production

```bash
git clone https://github.com/jin-li/jinli-homepage.git
yarn install
yarn build
```

The production build will be generated in the `dist` directory. You can serve the production build using any static file server, such as `serve` or `http-server`.

```bash
yarn global add serve
serve -s dist
```

## Customization

The homepage is highly customizable. The configuration files are located in the `public/locales` directory. The structure of the `public` directory is as follows:

```sh
public
├── assets
│   ├── avatar.jpg               # your profile avatar
│   ├── bg.jpg                   # background image
│   ├── favicon.ico              # site icon appears on the browser tab
│   └── logo192.png
└── locales
    ├── en
    │   ├── description.json     # slogan/description
    │   ├── footer.json          # footer of the page
    │   ├── links.json           # links to your own application or websites
    │   ├── logo.json            # avatar logo
    │   ├── site.json            # site configuration, including author, background, etc.
    │   ├── socials.json         # social media icons and links， icons are from react-icons fa6
    │   ├── time.json            # time box
    │   └── ui.json              # copyright message
    └── zh
        ├── description.json
        ├── footer.json
        ├── links.json
        ├── logo.json
        ├── site.json
        ├── socials.json
        ├── time.json
        └── ui.json
```
- `assets`: This directory contains the static assets for the homepage, such as images and icons.
- `locales`: This directory contains the localization files for the homepage. Each language has its own subdirectory, such as `en` for English and `zh` for Chinese. Each subdirectory contains JSON files for different sections of the homepage, such as `description.json`, `footer.json`, and `links.json`.

You can customize the homepage by modifying these JSON files or adding/replacing images in the `assets` directory.

The icons used in this project are from the [React Icons](https://react-icons.github.io/react-icons/) library, specifically from the Font Awesome 6 (fa6) collection: 

![react-icons](./demo/react-icons-fa6.png)

The social media icons and links are configured in the `socials.json` and `links.json` files located in the `public/locales/en` and `public/locales/zh` directories. If you want to change or add new social media icons or links, you can search icons on the [React Icons](https://react-icons.github.io/react-icons/) library and use the corresponding icon names in the `socials.json` file.

You need to rebuild the project after modifying the configuration files.

## Issues or Feature Requests

If you encounter any issues or have feature requests, feel free to open an issue on the [GitHub repository](https://github.com/jin-li/jinli-home/issues). When opening an issue, please follow the guidelines in the issue template.

## Development

To contribute to the development of the homepage, you can follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and commit them with a descriptive message.
5. Push your changes to your forked repository.
6. Create a pull request to the original repository.

The structure of the main source code is:

```bash
./
├── public
│   ├── assets            # background, logo, site favicon
│   └── locales           # site configurations, categorized by locales
└── src
    ├── main.tsx          # React default
    ├── index.css         # React default styles
    ├── App.tsx           # overall page view
    ├── App.module.scss   # overall style
    ├── i18n.ts           # i18n support with i18next
    ├── styles            # CSS styles, site color, font, etc.
    ├── view              # panels, responsive design
    ├── components        # components, including logo, description, social links, time box, links, footer, etc.
    └── hooks             # hooks
```

## Acknowledgements

- This project is inspired by [無名の主页](https://github.com/imsyy/home).

- The demo image for the responsive design on multi-devices is generated on [Mokkify](https://mokkify.com/mockups/devices/multi-devices).

- The icons used in this project are from the [React Icons](https://react-icons.github.io/react-icons/) library, specifically from the Font Awesome 6 (fa6) collection.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.