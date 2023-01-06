import styled from 'styled-components';
import tw from 'twin.macro';
import { BookingCard } from './bookingCard';
import { Marginer } from '../../components/marginer';
import { NavBar } from '../../components/navbar';
import { About } from './about';
import { BookingSteps } from './bookingSteps';
import { TopCars } from './topCars';
import { TopSection } from './topSection';
import { Footer } from './footer';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    items-center
    overflow-hidden  
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookingCard />
      <Marginer direction="vertical" margin="4em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="2em" />
      <About />
      <Marginer direction="vertical" margin="4em" />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}
