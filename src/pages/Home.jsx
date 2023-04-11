import React from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Main from '../component/Main';
import SkillsProgress from '../component/SkillsProgress';

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Main />
      <SkillsProgress />
      <Footer />
    </>
  );
}
