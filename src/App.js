import React, { Suspense, useState } from 'react';
import { Router } from 'react-router-dom';
import { Sidebar } from 'semantic-ui-react';
import { themeProvider } from 'provider/theme';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { browserHistory } from 'store/reducer';
import ScrollToTop from 'components/ScollToTop';
import ErrorBoundary from 'components/ErrorBoundary';
import ContainerBody from 'components/ContainerBody';
import Header from 'pages/Layout/Header';
import SidebarPage from 'pages/Layout/SideBar';
import Navigation from './Navigation';
import { GlobalStyle } from './global.styles';
import './App.css';

const App = () => {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible((prevVisible) => !prevVisible);
  };
  return (
    <Router history={browserHistory}>
      <GlobalStyle />
      <ThemeProvider theme={themeProvider}>
        <ToastContainer />
        <ErrorBoundary>
          <ScrollToTop>
            <Suspense fallback={<div>Loading ....</div>}>
              <Sidebar.Pushable>
                <SidebarPage visible={visible} setVisible={setVisible} />
                <Sidebar.Pusher dimmed={visible}>
                  <Header toggleMenu={toggleMenu} />
                  <div className="App">
                    <ContainerBody>
                      <Navigation />
                    </ContainerBody>
                  </div>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </Suspense>
          </ScrollToTop>
        </ErrorBoundary>
      </ThemeProvider>
    </Router>
  );
};

export default App;
