import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../responsive';
import menuStyle from './menuStyle';

const List = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;

const Item = styled.li<{ menu?: any }>`
  ${tw`
    text-xs
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `}

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `}
    `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu right styles={menuStyle}>
        <List>
          <Item menu>
            <a href="#">Home</a>
          </Item>
          <Item menu>
            <a href="#">Cars</a>
          </Item>
          <Item menu>
            <a href="#">Services</a>
          </Item>
          <Item menu>
            <a href="#">Contact</a>
          </Item>
        </List>
      </Menu>
    );
  }

  return (
    <List>
      <Item>
        <a href="#">Home</a>
      </Item>
      <Item>
        <a href="#">Cars</a>
      </Item>
      <Item>
        <a href="#">Services</a>
      </Item>
      <Item>
        <a href="#">Contact</a>
      </Item>
    </List>
  );
}
