import { createUseStyles } from 'react-jss';
import SocialContainer from '../other/SocialLinks';
import BottomFooter from './BottomFooter';
import ContactsBlock from '../other/ContactsBlock';
import Icon from '../other/Icon';
import logo from './../../assets/logo.svg';
import facebook from '../../assets/social/facebook.svg';
import twitter from '../../assets/social/twitter.svg';
import insta from '../../assets/social/insta.svg';
import linkIN from '../../assets/social/linkIN.svg';

const FooterStyles = createUseStyles({
  footer: {
    bottom: '0',
    marginTop: 'auto',
    backgroundColor: '#1C1E53',
  },

  weightWrap: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(20em, 1fr))',
    gap: '2em',
    marginTop: '30px',
    paddingTop: '30px',

    '@media (max-width: 330px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(10em, 1fr))',
    },
  },

  discription: {
    margin: 'auto',
    color: '#FFFFFF',
    width: '70%',

    '& > p': {
      color: '#BBBBCB',
    },

    '@media (max-width: 690px)': {
      width: 'auto',
    },
  },

  contacts: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    color: '#FFFFFF',
    width: '70%',

    '& > p': {
      color: '#BBBBCB',
    },

    '@media (max-width: 690px)': {
      width: 'auto',

      '& > ul': {
        justifyContent: 'center',
      },
    },
  },
});

export default function Footer() {
  const classes = FooterStyles();
  return (
    <footer id="FooterID" className={classes.footer}>
      <div>
        <div className={classes.weightWrap}>
          <div className={classes.discription}>
            <img src={logo} alt="logo" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In aut vitae eligendi,
              ducimus mollitia fuga totam distinctio quis sed sit animi, minima ad neque, fugit
              facilis sapiente labore tenetur iure?
            </p>
          </div>
          <div className={classes.contacts}>
            <h2>Lets Talk!</h2>
            <p>
              We are always open to discuss your project, improve your online presence and help with
              your UX/UI design challenges.
            </p>

            <SocialContainer>
              <Icon href={'https://www.facebook.com/'} icon={facebook} />
              <Icon href={'https://www.facebook.com/'} icon={twitter} />
              <Icon href={'https://www.facebook.com/'} icon={insta} />
              <Icon href={'https://www.facebook.com/'} icon={linkIN} />
            </SocialContainer>

            <ContactsBlock />
          </div>
        </div>
      </div>

      <BottomFooter />
    </footer>
  );
}
