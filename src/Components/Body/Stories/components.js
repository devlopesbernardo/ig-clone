import styled from 'styled-components';

export const StoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  width: 50%;
  height: 6rem;
  background-color: white;
  border: 1.5px solid #dbdbdb;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.span`
  width: 60px;
  height: 60px;
  display: flex;
  margin-right: 30px;
  justify-content: center;
  align-content: center;
`;

export const Image = styled.img`
  src: ${({ img }) => img};
  width: 100%;
  border-radius: 50%;
`;
