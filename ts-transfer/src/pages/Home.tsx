import Card from '../components/cards/Card';
import FullScreenHeader from '../components/other/FullScreenHeader';
import WrapContainer from '../components/other/WrapContainer';
import Heading from '../components/section/Heading';
import Section from '../components/section/Section';
import '../style/home.css';
import ArrowButton from '../components/buttons/ArrowButton';
import Block from '../components/cards/Block';
import RadiusButton from '../components/buttons/RadiusButton';

import pointer1 from '../assets/cards/work/pointer1.svg';
import pointer2 from '../assets/cards/work/pointer2.svg';
import pointer3 from '../assets/cards/work/pointer3.svg';
import pointer4 from '../assets/cards/work/pointer4.svg';

import clients from '../assets/cards/features/clients.svg';
import correct from '../assets/cards/features/correct.svg';
import pencil from '../assets/cards/features/pencil.svg';
import comment from '../assets/cards/features/comment.svg';
import timmer from '../assets/cards/features/timmer.svg';
import note from '../assets/cards/features/note.svg';

import hands from '../assets/blog/hands.jpg';
import computers from '../assets/blog/computers.jpg';
import PCperson from '../assets/blog/PCperson.jpg';
import project1 from '../assets/projects/1project.jpg';

import { TitleCards, TextCards, TitleBlocks, TextBlocks } from '../data';

export default function Home() {
  return (
    <>
      <FullScreenHeader
        status="act"
        backColor={'#1C1E53'}
        color={'#fff'}
        height={'100vh'}
        marginBottom={'150px'}
        textColor={'#BBBBCB'}
      >
        <h1>Building stellar websites for early startups</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta perspiciatis enim itaque
          ratione esse? Officiis, culpa quisquam.
        </p>
      </FullScreenHeader>

      <main id="content">
        <Section id="How-work">
          <Heading className={'work-heading'}>
            <h2>How we work</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quos totam ducimus.
            </p>
            <ArrowButton href={'./'} color={'#2405F2'} text={'Get in touch with us'} />
          </Heading>

          <WrapContainer>
            <div className="work-cards">
              <Card
                image={pointer1}
                title={TitleCards.workCards[0]}
                text={TextCards.workCards}
              ></Card>
              <Card
                image={pointer2}
                title={TitleCards.workCards[1]}
                text={TextCards.workCards}
              ></Card>
              <Card
                image={pointer3}
                title={TitleCards.workCards[2]}
                text={TextCards.workCards}
              ></Card>
              <Card
                image={pointer4}
                title={TitleCards.workCards[3]}
                text={TextCards.workCards}
              ></Card>
            </div>
          </WrapContainer>
        </Section>

        <Section id="Features">
          <Heading className={'features-heading'}>
            <h4>Features</h4>
            <h2>Design that solves problems, one product at a time</h2>
          </Heading>

          <WrapContainer>
            <div className="feature-cards">
              <Card
                image={clients}
                title={TitleCards.featureCards[0]}
                text={TextCards.featureCards}
              ></Card>
              <Card
                image={correct}
                title={TitleCards.featureCards[1]}
                text={TextCards.featureCards}
              ></Card>
              <Card
                image={pencil}
                title={TitleCards.featureCards[2]}
                text={TextCards.featureCards}
              ></Card>
              <Card
                image={comment}
                title={TitleCards.featureCards[3]}
                text={TextCards.featureCards}
              ></Card>
              <Card
                image={timmer}
                title={TitleCards.featureCards[4]}
                text={TextCards.featureCards}
              ></Card>
              <Card
                image={note}
                title={TitleCards.featureCards[5]}
                text={TextCards.featureCards}
              ></Card>
            </div>
          </WrapContainer>
        </Section>

        <Section id="Our-projects">
          <Heading className={'projects-heading'}>
            <h2>View our projects</h2>
            <ArrowButton href={'./'} color={'#000'} text={'View More'} />
          </Heading>

          <WrapContainer>
            <div className="project-blocks">
              <Block image={project1} title={TitleBlocks[0]} text={TextBlocks.Project}>
                <RadiusButton href={'./'} text={'View More'} />
              </Block>
              <Block image={project1} title={TitleBlocks[1]} text={TextBlocks.Project}>
                <RadiusButton href={'./'} text={'View More'} />
              </Block>
              <Block image={project1} title={TitleBlocks[2]} text={TextBlocks.Project}>
                <RadiusButton href={'./'} text={'View More'} />
              </Block>
            </div>
          </WrapContainer>
        </Section>

        <Section id="Our-blog">
          <Heading className={'blog-heading'}>
            <h2>Our blog</h2>
          </Heading>

          <WrapContainer>
            <div className="blog-cards">
              <Card
                image={hands}
                date={'19 Jan 2022'}
                title={TitleCards.blogCards[0]}
                text={TextCards.blogCards}
              >
                <ArrowButton href={'./'} color={'#2405F2'} text={'Read More'} />
              </Card>
              <Card
                image={computers}
                date={'19 Jan 2022'}
                title={TitleCards.blogCards[0]}
                text={TextCards.blogCards}
              >
                <ArrowButton href={'./'} color={'#2405F2'} text={'Read More'} />
              </Card>
              <Card
                image={PCperson}
                date={'19 Jan 2022'}
                title={TitleCards.blogCards[0]}
                text={TextCards.blogCards}
              >
                <ArrowButton href={'./'} color={'#2405F2'} text={'Read More'} />
              </Card>
            </div>
          </WrapContainer>
        </Section>
      </main>
    </>
  );
}
