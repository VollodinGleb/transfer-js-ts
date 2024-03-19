import { FC } from 'react';
import { createUseStyles } from 'react-jss';

interface BlockProps {
  image: string;
  title: string;
  text: string;
  children?: JSX.Element | JSX.Element[];
}

const BlockStyles = createUseStyles({
  BlockContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
    margin: 'auto',
    backgroundColor: '#1C1E53',
    padding: '0',
  },

  BlockImage: {
    width: 'auto',
    height: 'auto',
  },

  BlockDescription: {
    width: '40%',
    margin: 'auto',
    paddingBottom: '20px',
  },

  '@media (max-width: 690px)': {
    BlockDescription: {
      width: 'auto',
    },
  },
});

const Block: FC<BlockProps> = ({ image, title, text, children }) => {
  const classes = BlockStyles();

  return (
    <div className="block">
      <div className={classes.BlockContainer}>
        <div className="conteiner-block-image">
          <img className={classes.BlockImage} src={image} alt="img" />
        </div>
        <div className={classes.BlockDescription}>
          <div className="styles-description">
            <h3>{title}</h3>
            <p>{text}</p>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
