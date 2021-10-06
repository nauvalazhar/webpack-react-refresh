import { Helmet } from 'react-helmet';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

export default function News() {
  let match = useRouteMatch();

  return (
    <>
      <Helmet>
        <title>News</title>
      </Helmet>
      <h1>News page</h1>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <Detail />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </>
  );
}

function Detail() {
  return <h2>Detail</h2>
}
