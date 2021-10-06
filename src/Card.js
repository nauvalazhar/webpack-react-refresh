import { Helmet } from 'react-helmet';

export default function Card() {
  return (
    <>
      <Helmet>
        <title>Webpack React</title>
      </Helmet>
      <article>
        <h1>Hello Bro</h1>
        <p>Ini adalah sebuah paragraf</p>
      </article>
    </>
  );
}
