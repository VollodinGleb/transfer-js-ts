import styled from 'styled-components';

const Social = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'start'};
  gap: 10%;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  color: #000;
`;

export default function SocialContainer({ justify, children }) {
  return <Social justify={justify}>{children}</Social>;
}
