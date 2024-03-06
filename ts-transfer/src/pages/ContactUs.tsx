import FullScreenHeader from '../components/other/FullScreenHeader';
import WrapContainer from '../components/other/WrapContainer';
import ContactForm from '../components/other/ContactForm';

export default function ContactUs() {
  return (
    <>
      <FullScreenHeader textCenter={'center'} marginBottom={'20px'}>
        <h1>Contatc Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, doloremque error.
          Praesentium explicabo aspernatur dolores non ab?
        </p>
        <span style={{ fontSize: '45px', fontWeight: '900' }}>&#8595;</span>
      </FullScreenHeader>

      <main id="content">
        <WrapContainer>
          <ContactForm />
        </WrapContainer>
      </main>
    </>
  );
}
