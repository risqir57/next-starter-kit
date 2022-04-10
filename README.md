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