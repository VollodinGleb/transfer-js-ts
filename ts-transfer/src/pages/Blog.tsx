import FullScreenHeader from '../components/other/FullScreenHeader';

export default function Blog() {
  return (
    <>
      <FullScreenHeader textCenter={'center'}>
        <h1>Our Blog</h1>
        <p>Something about Blog !)</p>
      </FullScreenHeader>
      <main id="content"></main>
    </>
  );
}
