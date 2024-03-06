import { createUseStyles } from 'react-jss';

const HeadingStyles = createUseStyles({
  wrapHeading: {
    width: '70%',
    margin: 'auto',
    marginTop: '20px',

    '@media screen and (max-width: 860px)': {
      '&': {
        width: 'auto',
      },
    },
  },
});

export default function Heading({ className, children }) {
  const classes = HeadingStyles();
  return (
    <div className={className}>
      <div className={classes.wrapHeading}>{children}</div>
    </div>
  );
}
