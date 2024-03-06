import FullScreenHeader from '../components/other/FullScreenHeader';
import WrapContainer from '../components/other/WrapContainer';
import SocialContainer from '../components/other/SocialLinks';
import Icon from '../components/other/Icon';
import Section from '../components/section/Section';
import Card from '../components/cards/Card';
import RadiusButton from '../components/buttons/RadiusButton';
import ArrowButton from '../components/buttons/ArrowButton';
import '../style/portfolio.css';

import project1 from '../assets/projects/1project.jpg';
import blackFacebook from '../assets/social/facebook_black.svg';
import blackInsta from '../assets/social/insta_black.svg';
import blackTwitter from '../assets/social/twitter_black.svg';
import blackLinkIN from '../assets/social/linkIN_black.svg';

import { TitleCards, TextCards, TitleBlocks, TextBlocks } from '../data';

export default function Portfolio() {
  return (
    <>
      <FullScreenHeader backColor={'#F4F6FC'} textCenter={'center'}>
        <h3>What we created</h3>
        <h1>Our Work Portfolio</h1>
        <p>
          We help teams create great digital products by providing them with tools and technology to
          make the design-to-code process universally accessible.
        </p>
        <SocialContainer justify={'center'}>
          <Icon href={'https://www.facebook.com/'} icon={blackFacebook} />
          <Icon href={'https://www.facebook.com/'} icon={blackInsta} />
          <Icon href={'https://www.facebook.com/'} icon={blackTwitter} />
          <Icon href={'https://www.facebook.com/'} icon={blackLinkIN} />
        </SocialContainer>
      </FullScreenHeader>
      <main id="content">
        <Section id="Portfolio">
          <WrapContainer>
            <div className="projects-cards">
              <Card image={project1} title={TitleBlocks[1]} text={TextCards.featureCards}>
                <ArrowButton text={'View More'} color={'#2405F2'} />
              </Card>
              <Card image={project1} title={TitleBlocks[1]} text={TextCards.featureCards}>
                <ArrowButton text={'View More'} color={'#2405F2'} />
              </Card>
              <Card image={project1} title={TitleBlocks[1]} text={TextCards.featureCards}>
                <ArrowButton text={'View More'} color={'#2405F2'} />
              </Card>
              <Card image={project1} title={TitleBlocks[1]} text={TextCards.featureCards}>
                <ArrowButton text={'View More'} color={'#2405F2'} />
              </Card>
              <Card image={project1} title={TitleBlocks[1]} text={TextCards.featureCards}>
                <ArrowButton text={'View More'} color={'#2405F2'} />
              </Card>
              <Card image={project1} title={TitleBlocks[1]} text={TextCards.featureCards}>
                <ArrowButton text={'View More'} color={'#2405F2'} />
              </Card>
            </div>
          </WrapContainer>
        </Section>

        <Section id="cta-section">
          <h1>Let`s build something great together</h1>
          <p>
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit
            amet, scelerisque cursus purus.
          </p>
          <RadiusButton text="Contuct Us" />
        </Section>
      </main>
    </>
  );
}
