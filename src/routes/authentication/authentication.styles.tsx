import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 0 10px;
  }

  @media screen and (max-width: 425px) {
    width: 400px;
  }
  
`;
