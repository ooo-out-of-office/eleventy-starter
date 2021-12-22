A personalised and opinionated starter kit for [11ty](https://www.11ty.dev/) sites (typically) deployed to Netlify. Inspired by projects like [eleventyone](https://github.com/philhawksworth/eleventyone) and [portfolio-starter](https://github.com/sb-ph/portfolio-starter)

# Opinions

1. Use Tailwind for styling (and cssnano, and autoprefixer)
2. Use Snowpack for compiling CSS and JS assets
3. Pre-package [commitlint](https://github.com/conventional-changelog/commitlint), [commitizen](https://github.com/commitizen/cz-cli), and [husky](https://github.com/typicode/husky) for better commit messages

## How to use:

1. Create a new local project `$ mkdir -p name-of-project`
2. Use (or install) [degit](https://www.npmjs.com/package/degit) `$ npx degit ooo-out-of-office/eleventy-starter#main .`
3. Install deps via Yarn (or npm) `$ yarn`
