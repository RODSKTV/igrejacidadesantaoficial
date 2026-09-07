/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Ministries from './components/Ministries';
import Messages from './components/Messages';
import Donations from './components/Donations';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col font-body">
        <Header />
        <main>
          <Hero />
          <About />
          <Schedule />
          <Ministries />
          <Messages />
          <Donations />
          <Contact />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
