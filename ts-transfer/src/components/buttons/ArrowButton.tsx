import { FC } from 'react';
import styled from 'styled-components';

interface ArrowButtonProps {
  href: string;
  text: string;
  color?: string;
  spacing?: string;
}

const Button = styled.a<{ color?: string; spacing?: string }>`
  display: inline-block;
  padding: 10px 10px 10px 0px;
  margin-left: ${props => props.spacing || '0px'};
  text-align: center;
  color: ${props => props.color || '#fff'};
`;

const Arrow = styled.span<{ color?: string }>`
  font-size: 22px;
  font-weight: 600;
  color: ${props => props.color || '#fff'};
`;

const ArrowButton: FC<ArrowButtonProps> = ({ href, text, color, spacing }) => {
  return (
    <Button href={href} color={color} spacing={spacing}>
      {text} <Arrow color={color}>&#8594;</Arrow>
    </Button>
  );
};

export default ArrowButton;
