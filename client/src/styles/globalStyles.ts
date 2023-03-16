import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Theme } from "./theme";

interface ThemeInterface {
  theme: Theme;
}

const GlobalStyle = createGlobalStyle<ThemeInterface>`
    ${reset}
    body{
        color:${({ theme }) => theme.fontColor};
        background-color:${({ theme }) => theme.bgColor}
    }
    *{
      box-sizing:border-box;
    }
`;

export default GlobalStyle;
