import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  padding: 10px 10px 10px 0px;
  margin-left: ${props => props.spacing || '0px'};
  text-align: center;
  color: ${props => props.color || '#fff'};
`;

const Arrow = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: ${props => props.color || '#fff'};
`;

export default function ArrowButton({ href, text, color, spacing }) {
  return (
    <Button href={href} color={color} spacing={spacing}>
      {text} <Arrow color={color}>&#8594;</Arrow>
    </Button>
  );
}
