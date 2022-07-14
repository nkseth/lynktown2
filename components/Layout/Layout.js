import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>U2Lynk Town</title>
        <meta
          name='description'
          content='A Revolutionary way of social Buying & Selling'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
