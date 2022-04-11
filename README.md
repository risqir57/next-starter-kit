<p align="center">
  <img src="https://github.com/risqir57/next-starter-kit/blob/main/public/assets/svg/logos.svg" />
</p>

---
<br />
<p align="center">
  <a aria-label="Version" href="https://github.com/risqir57/next-starter-kit/releases">
    <img alt="" src="https://img.shields.io/github/package-json/v/risqir57/next-starter-kit.svg?style=for-the-badge&labelColor=000000" />
  </a>
  <a aria-label="License" href="https://github.com/risqir57/next-starter-kit/blob/main/LICENSE">
    <img alt="" src="https://img.shields.io/github/license/risqir57/next-starter-kit.svg?style=for-the-badge&labelColor=000000" />
  </a>
  <a aria-label="Join discord server" href="https://discord.gg/49gEt3Z4">
    <img alt="" src="https://img.shields.io/badge/Join%20discord%20server-5865F2.svg?style=for-the-badge&logo=Discord&labelColor=000000&logoWidth=20" />
  </a>
</p>

---

## 🏁 Getting Started
- If using Node Version Manager [NVM](https://github.com/nvm-sh/nvm), create file `.huskyrc` in the root:
    > @ref https://typicode.github.io/husky/#/?id=command-not-found

    ```sh
    export NVM_DIR="$HOME/.nvm"
      [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    ```

## 🤔 How To
- Checking code for identifying and reporting on patterns.
    > Using [Eslint](https://eslint.org/), [Prettier](https://prettier.io/), [Stylelint](https://stylelint.io/)

    ```sh
    # Check all code is clean
    yarn checker
    ```

- Auto format/fix patterns.

    ```sh
    # Fix code
    yarn formatter
    ```

## 📗 Storybook
  > Storybook command is under script:

  ```sh
  # run storybook under development
  yarn storybook
  # AND
  # generate storybook statsic build, this will create folder storybook-static
  yarn storybook:build
  ```

## ⌨️ Optimize Code Editor
  - Visual studio code:
  
    > Create file name `settings.json` under .vscode
    ```json
    {
      "editor.tabSize": 2,
      "editor.formatOnSave": true,
      "prettier.tabWidth": 2,
      "stylelint.validate": ["css", "scss"],
      "css.validate": true,
      "scss.validate": true,
      "files.associations": {
        "*.scss": "postcss"
      },
      "emmet.includeLanguages": {
        "postcss": "scss"
      },
      "editor.codeActionsOnSave": {
        "source.fixAll": true,
        "source.organizeImports": true
      },
    }
    ```

## 🗺 App Structure
> This app concerned with split code.

```txt
.
├── .husky                => Husky root hooks
│   ├── commit-msg        => Husky hooks to lint commit with commitlint
│   └── pre-commit        => Husky hooks to run static test
├── public                => Public root, every file under this folder can access from web root
│   ├── assets            => Public assets, can access from url /assets
│   └── favicon.ico       => App icon
├── src                   => Base app root directory
│   ├── __stories__       => Store any storybook component
│   ├── __test__          => Unit test folder, using Jest as engine
│   ├── containers        => Store page view, logic, combine with component, HOC, and Layout
│   ├── pages             => Next.js pages folder, this file only call view from container folder, data SSG fetching
│   ├── styles            => Store global style and mix external css and font family
│   └── types             => Custom type definition
├── commitlint.config.js  => Commitlint configuration
├── jest.config.js        => Jest configuration
├── jest.setup.js         => Jest setup for running firstly wehn test is running using jest
├── next-env.d.ts         => (Don't Edit)! Next.js type definition auto genearted every app running
├── next.config.js        => Next.js configuration
├── package.json          => Third party package manager
├── tsconfig.json         => Typescript configuration
└── yarn.lock             => (Don't Edit)! Yarn lock file, auto generated
```
