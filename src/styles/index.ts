import { styled } from 'styled-components';

export * from './theme';
export * from './GlobalStyles';

export const Title = styled.h1`
  font-size: 52px;
  text-align: center;
  color: ${(props) => props.theme.accentColor};
  margin: 20px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

export const Loader = styled.h1`
  font-size: 32px;
  text-align: center;
  color: ${(props) => props.theme.accentColor};
`;

export const CharacterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  border-radius: 15px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 15px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const SubTitle = styled.span`
  font-size: 20px;
`;

export const FooterInner = styled.footer`
  text-align: center;
  opacity: 0.5;
  margin-top: 40px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
`;
