import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import NavToogle from './NavToogle';

const NavBarStyles = createUseStyles({
  mainNavMenu: {
    display: 'inline',
    position: 'fixed',
    width: '100%',
    top: '0',
    left: '0',
    right: '0',
    transition: 'top 0.3s',
    backgroundColor: '#1C1E53',
  },

  navMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 'auto',
    height: '80px',
    width: '90%',
  },

  logo: {
    cursor: 'pointer',
    marginRight: 'auto',

    '@media(max-width: 330px)': {
      marginRight: '5px',

      '& > img': {
        width: '100%',
      },
    },
  },

  navContainer: {
    width: '70%',
    marginRight: '3%',

    '@media (max-width: 1100px)': {
      display: 'none',
    },
  },

  ctaButton: {
    padding: '15px 20px',
    flexShrink: '0',

    cursor: 'pointer',
    borderRadius: '41px',
    border: '2px solid rgba(244, 246, 252, 0.20)',
    backgroundColor: '#1C1E53',
    color: '#FFFFFF',

    '&:hover': {
      borderColor: '#83838d',
      backgroundColor: 'hsl(238, 59%, 30%)',
    },

    '@media(max-width: 330px)': {
      padding: '5px 10px',
    },
  },
});

export default function NavBar({ logo }) {
  const classes = NavBarStyles();
  return (
    <nav className={classes.mainNavMenu} id="main-nav-menu">
      <div className={classes.navMenu}>
        <NavLink className={classes.logo} to="/winter-practic/">
          <img src={logo} alt="logo" />
        </NavLink>

        <div className={classes.navContainer}>
          <Menu useFor="header" />
        </div>

        <NavLink className={classes.ctaButton} to="/winter-practic/contactUs/">
          Contact us
        </NavLink>

        <NavToogle />
      </div>
    </nav>
  );
}
