import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const ReactQuery = lazy(() => import('pages/ReactQuery'));
const PrivateRoute = lazy(() => import('components/PrivateRoute'));
const Loading = lazy(() => import('components/Loading'));
const FormHookExample = lazy(() => import('pages/FormHook'));
const Error = lazy(() => import('pages/Error'));
const Login = lazy(() => import('pages/Login'));
const Semantic = lazy(() => import('pages/Semantic'));
const Home = lazy(() => import('pages/Home'));
const UserTable = lazy(() => import('pages/Table'));
const ModalExample = lazy(() => import('pages/Modal'));
const Chart = lazy(() => import('pages/Chart'));
const Icons = lazy(() => import('pages/Icons'));
const PageNotFound = lazy(() => import('pages/Error/NotFound'));
const DateFns = lazy(() => import('pages/Date'));
const ModalManager = lazy(() => import('components/ModalManager'));

const Navigation = () => (
  <>
    <ModalManager />
    <Loading />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/table" component={UserTable} />
      <Route exact path="/modal" component={ModalExample} />
      <Route exact path="/chart" component={Chart} />
      <Route exact path="/semantic" component={Semantic} />
      <Route exact path="/form" component={FormHookExample} />
      <Route exact path="/date" component={DateFns} />
      <Route exact path="/error" component={Error} />
      <Route exact path="/react-query" component={ReactQuery} />
      <PrivateRoute exact path="/icons" component={Icons} />
      <Route exact path="/404" component={PageNotFound} />
      <Redirect from="*" to="/404" />
    </Switch>
  </>
);

export default Navigation;
