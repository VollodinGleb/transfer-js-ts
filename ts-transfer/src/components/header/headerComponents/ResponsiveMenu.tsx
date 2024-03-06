import { createUseStyles } from 'react-jss';
import Menu from './Menu';

const ResponsiveStyles = createUseStyles({
  responsiveContainer: {
    display: 'none', // 'blcok' or 'none'
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '-20px',
    width: '100%',
    height: '100%',
    backgroundColor: 'hsla(238, 59%, 30%, 0.897)',
    zIndex: '1000', // велике значення z-index, щоб виводити над іншими елементами
  },
  menuContainer: {
    '& #ResponsiveMenu': {
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      listStyle: 'none',
      padding: '0',
      height: '100vh',
    },
    '& #ResponsiveMenu li': {
      textAlign: 'left',
      padding: '1vh',
    },

    '& #ResponsiveMenu li a': {
      fontSize: '40px',
    },

    '@media (max-height: 380px)': {
      '& #ResponsiveMenu li a': {
        fontSize: '30px',
      },

      '& #ResponsiveMenu li': {
        padding: '0',
      },
    },
  },

  crossClick: {
    '& span': {
      fontSize: '50px',
      color: '#BBBBCB',
      position: 'fixed',
      right: '40px',
      top: '30px',
    },
  },
});

export default function ResponsiveMenu() {
  const classes = ResponsiveStyles();
  return (
    <div className={classes.responsiveContainer}>
      <div className={classes.crossClick}>
        <span>&#215;</span>
      </div>
      <div className={classes.menuContainer}>
        <Menu id="ResponsiveMenu"></Menu>
      </div>
    </div>
  );
}
