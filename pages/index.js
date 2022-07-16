import Image from 'next/image';
import Community from '../components/Community/Community';
import Faq from '../components/Faq';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import MadeFor from '../components/MadeFor';
import Testimonial from '../components/Testimonial/Testimonial';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Community />
      <Features />
      <Testimonial />
      <MadeFor />
      <Faq />
    </Layout>
  );
}
