import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        padding: 30px 70px; 
        color: white;
        background-color: #130f40
    }
`;
