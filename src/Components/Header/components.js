import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  height: 4rem;
  background-color: white;
  padding-left: 20%;
  padding-right: 20%;
  border-bottom: 1px solid #dbdbdb;
  width: 60vw;
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`;
export const Icon = styled.span`
  width: 22px;
  height: 22px;
  display: flex;
  margin-right: 30px;
`;

export const Image = styled.img`
  src: ${({ img }) => img};
  width: 22px;
  height: 22px;
  border-radius: 50%;
`;

export const Search = styled.div`
  background-color: #fafafa;
  align-self: center;
  height: 45%;
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  min-width: 125px;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  display: flex;
  flex: 1;
  font-weight: 300;
  background-color: #fafafa;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
  border: solid 1px rgba(var(--b6a, 219, 219, 219), 1);
`;

export const Logo = styled.div`
  display: flex;
  margin-left: 50px;
  margin-right: 20%;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: flex-start;
`;
export const LogoImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  flex: 1;
`;
