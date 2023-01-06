import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../responsive';
import image from '../../../assets/images/jeep.png';

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    2xl:justify-center
    pt-4 pb-4 pr-7 pl-7
    md:pl-0
    md:pr-0
    bg-white
  `}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 26em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS['2xl']}) {
    height: 32em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `}
`;

const InfoText = styled.p`
  ${tw`
    max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `}
`;

export function About() {
  return (
    <Container>
      <CarContainer>
        <img src={image} alt="" />
      </CarContainer>
      <InfoContainer>
        <Title>Fell The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          laborum laboriosam corrupti eveniet velit esse voluptatem architecto
          impedit quam inventore reprehenderit molestias et nobis officiis
          aliquam, placeat assumenda nisi deserunt?
        </InfoText>
      </InfoContainer>
    </Container>
  );
}
