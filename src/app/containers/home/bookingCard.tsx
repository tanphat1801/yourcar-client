import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Calendar } from 'react-calendar';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Button } from '../../components/button';
import { Marginer } from '../../components/marginer';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { SCREENS } from '../../responsive';

const Container = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1 pb-1 pr-2 pl-2
    md:pt-2
    md:pb-2
    md:pl-8
    md:pr-8
  `};
`;

const Item = styled.div`
  ${tw` flex relative `}
`;

const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
  `}
`;

const Name = styled.span`
  ${tw` text-gray-600 text-xs md:text-sm cursor-pointer select-none`}
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `}
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 3.5em;
  left: 0;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `};

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
`;

const ArrowIcon = styled.span`
  ${tw`
  text-gray-700
  fill-current
  text-xs
  md:text-base
  ml-1
  `}
`;

export function BookingCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const toggleOpenStartCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isEndCalendarOpen) setEndCalendarOpen(false);
  };

  const [endDate, setEndDate] = useState<Date>(new Date());
  const [isEndCalendarOpen, setEndCalendarOpen] = useState(false);

  const toggleOpenEndCalendar = () => {
    setEndCalendarOpen(!isEndCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  return (
    <Container>
      <Item>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleOpenStartCalendar}>Pick Up Date</Name>
        <ArrowIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretDown : faCaretUp}
          />
        </ArrowIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </Item>
      <LineSeperator />
      <Item>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleOpenEndCalendar}>Return Date</Name>
        <ArrowIcon>
          <FontAwesomeIcon icon={isEndCalendarOpen ? faCaretDown : faCaretUp} />
        </ArrowIcon>
        {isEndCalendarOpen && (
          <DateCalendar offset value={endDate} onChange={setEndDate} />
        )}
      </Item>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </Container>
  );
}
