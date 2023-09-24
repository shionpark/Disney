import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        color: white;
        text-decoration: none;
        background-color: #130f40
    }
`;

// export const theme: DefaultTheme = {
//   bgColor: '#2c3e50',
//   textColor: 'black',
//   accentColor: 'red',
// };
