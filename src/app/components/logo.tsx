import styled from 'styled-components';
import tw from 'twin.macro';
import logo from '../../assets/images/car-logo.png';
import logoDark from '../../assets/images/car-logo-dark.png';

interface ILogo {
  color?: 'white' | 'dark';
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const Text = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1

  `}
  ${({ color }) => (color === 'white' ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
  width: auto;
  ${tw`
    h-9
    md:h-9
  `}
  img {
    width: auto;
    height: 100%;
  }
`;

Logo.defaultProps = {
  color: 'dark',
};

export function Logo(props: ILogo) {
  const { color } = props;
  return (
    <LogoContainer>
      <Image>
        <img src={color === 'dark' ? logo : logoDark} alt="Logo" />
      </Image>
      <Text color={color}>Yourcar</Text>
    </LogoContainer>
  );
}
