import { createUseStyles } from 'react-jss';
import Menu from '../header/headerComponents/Menu';

const BottomStyles = createUseStyles({
  footerBottom: {
    padding: '20px 20px 20px 20px',
    backgroundColor: '#FFFFFF',
  },

  containerBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: 'auto',
    alignItems: 'center',

    '@media (max-width: 1100px)': {
      justifyContent: 'center',
    },
  },
});

export default function BottomFooter() {
  const classes = BottomStyles();
  return (
    <div className={classes.footerBottom}>
      <div className={classes.containerBottom}>
        <div>
          <span>Copyright 2022, Finsweet.com</span>
        </div>

        <Menu useFor="footer" />
      </div>
    </div>
  );
}
