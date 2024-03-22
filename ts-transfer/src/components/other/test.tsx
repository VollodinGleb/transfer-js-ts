import { createUseStyles } from 'react-jss';

// type RuleNames = 'myButton' | 'myLabel'

interface ButtonProps {
  children?: React.ReactNode;
  spacing?: number;
  fontWeight?: string;
  labelColor?: string;
}

interface CustomTheme {
  background: string;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  myButton: {
    padding: (props: ButtonProps) => props.spacing || 10,
  },
  myLabel: props => ({
    display: 'block',
    color: props.labelColor || 'red',
    fontWeight: props.fontWeight || 'bold',
    backgroundColor: theme.background || 'gray',
  }),
}));
