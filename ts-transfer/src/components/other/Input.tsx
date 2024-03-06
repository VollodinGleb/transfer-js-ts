import { createUseStyles } from 'react-jss';

const InputStyles = createUseStyles({
  label: {
    '& > input': {
      width: '90%',
      borderRadius: '5px',
      border: 'solid 1px #ababb9',
      padding: '10px',
      fontSize: '16px',

      '@media (max-width: 500px)': {
        width: '90%',
      },
    },
    '& > textarea': {
      width: '95%',
      borderRadius: '5px',
      border: 'solid 1px #ababb9',
      padding: '10px',
      fontSize: '16px',

      '@media (max-width: 300px)': {
        padding: '0',
      },
    },
    '& > p': {
      color: '#000',
      fontWeight: '700',
    },
  },
});

export default function Input({ choose, name, placeholder }) {
  const classes = InputStyles();
  return (
    <label className={classes.label}>
      <p>{name}</p>

      {choose === 'input' ? (
        <input type="text" placeholder={placeholder} />
      ) : (
        <textarea cols="30" rows="10" placeholder={placeholder}></textarea>
      )}
    </label>
  );
}
