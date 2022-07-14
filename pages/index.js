import Image from 'next/image';
import Community from '../components/Community/Community';
import Faq from '../components/Faq';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import MadeFor from '../components/MadeFor';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Community />
      <MadeFor />
      <Faq />
    </Layout>
  );
}
