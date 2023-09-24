import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        padding:50px 70px; 
        color: white;
        background-color: #130f40;
        font-family: 'Croissant One', cursive;
    }
    a {
        color: white;
        text-decoration: none;
        &:visited:not(.history-link) {
        color: inherit;
       }
    }
`;
