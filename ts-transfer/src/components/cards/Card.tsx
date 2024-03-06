import { createUseStyles } from 'react-jss';

const CardStyles = createUseStyles({
  cardContainer: {
    display: 'block',
    padding: '45px 55px 45px 55px',
  },

  CardImage: {
    maxWidth: '100%',
    minWidth131: 1231,
    height: 'auto',
  },
});

export default function Card({ image, date, title, text, children }) {
  const classes = CardStyles();
  return (
    <div class="card">
      <div class={classes.cardContainer}>
        <div className="conteiner-image">
          <img className={classes.CardImage} src={image} alt="img" />
        </div>
        <div className="card-description">
          {date && <h4>{date}</h4>}
          <h3>{title}</h3>
          <p>{text}</p>

          {children}
        </div>
      </div>
    </div>
  );
}
