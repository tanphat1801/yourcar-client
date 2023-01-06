import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICar } from '../../typings/car';
import { Button } from './button';

const Container = styled.div`
  width: 16.5em;
  min-height: 23em;
  max-height: 23em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  `}
`;

const Thumbnail = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    my-1
  `}
`;

const PriceContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3
  `}
`;

const DailyPrice = styled.h5`
  ${tw`
    text-red-500
    font-bold
    text-sm
    mr-3
  `}
`;

const MonthlyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `}
`;

const Icon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `}
`;

const DetailContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `}
`;

const Detail = styled.span`
  ${tw`
    flex
    items-center
  `}
`;

const Info = styled.h6`
  ${tw`
    text-gray-400
    text-xs
  `}
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    my-2
  `}
`;

const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `}
`;

const Text = styled.p`
  color: inherit;
  ${tw` text-xs font-thin inline-flex `}
`;

export function Car(props: ICar) {
  const { name, thumbnail, dailyPrice, monthlyPrice, mileage, gearType, gas } =
    props;

  return (
    <Container>
      <Thumbnail>
        <img src={thumbnail} alt="" />
      </Thumbnail>
      <Name>{name}</Name>
      <PriceContainer>
        <DailyPrice>
          ${dailyPrice}
          <Text>/day</Text>
        </DailyPrice>
        <MonthlyPrice>
          ${monthlyPrice}
          <Text>/month</Text>
        </MonthlyPrice>
      </PriceContainer>
      <Seperator />
      <DetailContainer>
        <Detail>
          <Icon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </Icon>
          <Info>{mileage}</Info>
        </Detail>
        <Detail>
          <Icon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </Icon>
          <Info>{gearType}</Info>
        </Detail>
        <Detail>
          <Icon>
            <FontAwesomeIcon icon={faFillDrip} />
          </Icon>
          <Info>{gas}</Info>
        </Detail>
      </DetailContainer>
      <RentButton text="Rent now" />
    </Container>
  );
}
