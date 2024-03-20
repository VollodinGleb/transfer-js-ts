import { FC } from 'react';
import styled from 'styled-components';
import { createUseStyles } from 'react-jss';
import Input from './Input';
import RadiusButton from '../buttons/RadiusButton';

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  width: 70%;
  background-color: #f4f6fc;
  padding: 15px 15px 15px 35px;
  margin-bottom: 50px;
  border-radius: 10px;
  text-align: start;
`;

const ContactFormStyles = createUseStyles({
  form: {
    '@media (max-width: 704px)': {
      '&': {
        width: 'auto',
        alignItems: 'center',
        padding: '0',
      },
    },
  },
  wrapBoxes: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  rightBox: {
    minWidth: '50%',
    '@media (max-width: 704px)': {
      '&': {
        minWidth: '100%',
      },
      '@media (max-width: 500px)': {
        minWidth: '95%',
      },
    },
  },
  leftBox: {
    composes: '$rightBox',
  },

  wrapTextarea: {
    '@media (max-width: 704px)': {
      width: '90%',
    },
  },
});

const ContactForm: FC = () => {
  const classes = ContactFormStyles();
  return (
    <FormStyles className={classes.form}>
      <div className={classes.wrapBoxes}>
        <div className={classes.rightBox}>
          <Input choose={'input'} name={'Name'} placeholder={'Enter your name'}></Input>
          <Input choose={'input'} name={'Email'} placeholder={'Enter your email'}></Input>
        </div>
        <div className={classes.leftBox}>
          <Input choose={'input'} name={'Subject'} placeholder={'Provide context'}></Input>
          <Input choose={'input'} name={'Subject'} placeholder={'Provide Subject'}></Input>
        </div>
      </div>

      <div className="textarea-container">
        <div className="wrap-textarea">
          <Input
            choose={'textarea'}
            name={'Message'}
            placeholder={'Write your question here'}
          ></Input>
        </div>
      </div>

      <div className="wrap-button" style={{ marginBottom: '10px', marginTop: '10px' }}>
        <RadiusButton href='' text={'Send Messege'}></RadiusButton>
      </div>
    </FormStyles>
  );
}

export default ContactForm;