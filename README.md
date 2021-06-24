# Screenshots

A live version of this project is available at [search-youtube-videos-with-reactjs.netlify.app](https://search-youtube-videos-with-reactjs.netlify.app/)

![application preview](https://raw.githubusercontent.com/StephenRoille/project-428016a805-part-1/master/screenshots/preview.png)

# Usage

Clone this repo to your computer.

```shell
git clone https://github.com/StephenRoille/project-428016a805-part-1.git youtube-search
```

Create a `.env` file and set a private Youtube token to allow your application to query the Youtube API,

```ini
REACT_APP_YOUTUBE_TOKEN='<...>'
```

Install all the dependencies,

```shell
npm install
```

Start the development server,

```shell
npm run start
```

Your Youtube token is automatically loaded by `React`.

To create a production build simply run,

```shell
npm run build
```

This command creates a `build` directory that you can serve from a web server ([Apache](https://www.apache.org/), [nginx](https://www.nginx.com/)) or using a CDN platform ([Netlify](https://www.netlify.com/))

# Dependencies

This project has the following dependencies,

1. `axios` (Youtube API requests)
2. `react` (user interface)

# Reference

Based on the [Modern React with Redux](https://www.udemy.com/course/react-redux/) course by Stephen Grider.
