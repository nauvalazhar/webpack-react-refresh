import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home page</h1>
      <img src="/sass.svg" />
    </>
  );
}
