import { FC } from 'react';
import { createUseStyles } from 'react-jss';

interface RadiusButtonProps {
  href: string;
  text: string;
}

const useStyles = createUseStyles({
  radiusButton: {
    display: 'inline-block',
    padding: '15px 10px 15px',
    minWidth: '200px',
    borderRadius: '30px',
    textAlign: 'center',
    backgroundColor: '#FCD980',
    color: '#000',

    '&:hover': {
      backgroundColor: '#fdd05d',
    },
  },
});

const RadiusButton: FC<RadiusButtonProps> = ({ href, text }) => {
  const classes = useStyles();
  return (
    <a className={classes.radiusButton} href={href}>
      {text}
    </a>
  );
};

export default RadiusButton;
