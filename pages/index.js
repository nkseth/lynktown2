import Image from 'next/image';
import Community from '../components/Community/Community';
import Faq from '../components/Faq';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import MadeFor from '../components/MadeFor';
import ManageBusiness from '../components/ManageBusiness/ManageBusiness';
import SellingSteps from '../components/SellingSteps/SellingSteps';
import Testimonial from '../components/Testimonial/Testimonial';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SellingSteps />
      <ManageBusiness />
      <Community />
      <Features />
      <Testimonial />
      <MadeFor />
      <Faq />
    </Layout>
  );
}
