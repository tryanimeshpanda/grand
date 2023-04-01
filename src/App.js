import React from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <GoogleOAuthProvider clientId="354196533190-8067t8gevnovc1r51eb5dscl5ggbq4v4.apps.googleusercontent.com">
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    </GoogleOAuthProvider>
);

export default App;
