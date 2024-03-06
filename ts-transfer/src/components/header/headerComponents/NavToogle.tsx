import { createUseStyles } from 'react-jss';

const ToogleStyles = createUseStyles({
  navigationToggle: {
    display: 'none',

    '@media (max-width: 1100px)': {
      display: 'block',
      marginLeft: '10px',
      backgroundColor: 'hsla(238, 59%, 30%, 0.0)',
      border: 'none',
    },

    '@media (max-width: 330px)': {
      margin: '0',
    },
  },
  bar: {
    display: 'block',

    margin: '6px 0',
    width: '22px',
    height: '2.5px',
    backgroundColor: '#BBBBCB',
  },
});

export default function NavToogle({ onClick }) {
  const classes = ToogleStyles();
  return (
    <button className={classes.navigationToggle} onClick={onClick}>
      <span className={classes.bar}></span>
      <span className={classes.bar}></span>
      <span className={classes.bar}></span>
    </button>
  );
}
