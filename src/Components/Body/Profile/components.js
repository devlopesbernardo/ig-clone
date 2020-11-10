import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  height: 6rem;
  justify-self: flex-start;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
`;

export const Icon = styled.span`
  width: 60px;
  height: 60px;
  display: flex;
  margin-right: 30px;
  justify-content: flex-start;
  align-content: flex-start;
`;

export const Image = styled.img`
  src: ${({ img }) => img};
  width: 100%;
  border-radius: 50%;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
`;

export const Username = styled.b`
  font-size: 15px;
  font-weight: bold;
  color: black;
`;

export const Name = styled.p`
  font-size: 15px;
  font-weight: thin;
  color: #8e8e8e;
`;
