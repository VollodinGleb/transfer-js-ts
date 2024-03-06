import { createUseStyles } from 'react-jss';

const ContactBlockStyles = createUseStyles({
  contactsBlock: {
    display: 'flex',
    flexDirection: 'column',

    maxWidth: '350px',
    padding: '5px 5px 5px 15px',
    backgroundColor: '#FCD980',

    '& a': {
      fontWeight: '800',
      paddingLeft: '5%',

      '@media (max-width: 330px)': {
        fontSize: '15px',
      },
    },

    '@media (max-width: 690px)': {
      '&': {
        maxWidth: '100%',
      },
    },
  },
  email: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',

    '@media (max-width: 690px)': {
      '&': {
        justifyContent: 'center',
      },
    },
  },
  phone: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',

    '@media (max-width: 690px)': {
      '&': {
        justifyContent: 'center',
      },
    },
  },
});

export default function ContactsBlock() {
  const classes = ContactBlockStyles();
  return (
    <div className={classes.contactsBlock}>
      <div className={classes.email}>
        <p>Email:</p>
        <a href="https://mail.google.com">contact@website.com</a>
      </div>
      <div className={classes.phone}>
        <p>Phone:</p>
        <a href="">0927 6277 28525</a>
      </div>
    </div>
  );
}
