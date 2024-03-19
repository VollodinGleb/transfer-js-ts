import { FC } from 'react';
import styled from 'styled-components';

interface SocialProps {
  justify?: string;
  children?: JSX.Element | JSX.Element[];
}

const Social: FC<SocialProps> = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'start'};
  gap: 10%;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  color: #000;
`;

const SocialContainer: FC<SocialProps> = ({ justify, children }) => {
  return <Social justify={justify}>{children}</Social>;
};

export default SocialContainer;
