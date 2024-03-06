import { createUseStyles } from 'react-jss';
import FullScreenHeader from '../components/other/FullScreenHeader';
import Section from '../components/section/Section';

const FaqStyles = createUseStyles({
  faq: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',

    '& > h2': {
      textAlign: 'center',
    },
    '@media (max-width: 700px)': {
      width: 'auto',
    },
  },
});

export default function FAQ() {
  const classes = FaqStyles();
  return (
    <>
      <FullScreenHeader textCenter={'center'}>
        <h1>Privacy Policy</h1>
        <p>
          When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring
          your
        </p>
      </FullScreenHeader>
      <main id="content">
        <Section>
          <div className={classes.faq}>
            <h2>Lorem ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.
            </p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident. Dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi.
            </p>
          </div>
        </Section>
      </main>
    </>
  );
}
