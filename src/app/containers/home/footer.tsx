import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../../components/logo';

const FooterContainer = styled.div`
  min-height: 18em;
  background-color: #1d2124;
  ${tw`
     flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-xl
    flex-wrap
  `}
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `};
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3 
  `}
`;

const AboutText = styled.p`
  ${tw` 
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;

const Section = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `}
`;

const Links = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;

const Link = styled.li`
  ${tw`
    mb-3
  `}
  & > a {
    ${tw`
      text-sm
      text-white
      transition-all
      hover:text-gray-200
    `}
  }
`;

const Title = styled.h3`
  ${tw`
    text-xl
    font-bold
    text-white
    mb-3
  `}
`;

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `};
`;

const CopyrightText = styled.small`
  font-size: 12px;

  ${tw`
    text-gray-300
  `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" />
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit enim molestias est, quod quia dolor voluptate
            voluptates vero architecto ipsum corrupti magni quae nesciunt hic?
          </AboutText>
        </AboutContainer>
        <Section>
          <Title>Our Links</Title>
          <Links>
            <Link>
              <a href="#">Home</a>
            </Link>
            <Link>
              <a href="#">About Us</a>
            </Link>
            <Link>
              <a href="#">Models</a>
            </Link>
            <Link>
              <a href="#">Blog</a>
            </Link>
          </Links>
        </Section>
        <Section>
          <Title>Other Links</Title>
          <Links>
            <Link>
              <a href="#">FAQ</a>
            </Link>
            <Link>
              <a href="#">Contact Us</a>
            </Link>
            <Link>
              <a href="#">Support</a>
            </Link>
            <Link>
              <a href="#">Privacy Policy</a>
            </Link>
            <Link>
              <a href="#">Terms &amp; Conditions</a>
            </Link>
          </Links>
        </Section>
        <Section>
          <Title>Contact</Title>
          <div className="flex mb-4 items-center">
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <p className="text-sm text-white">+91 555-234-8469</p>
          </div>
          <div className="flex mb-4 items-center">
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <p className="text-sm text-white">info@yourcar.com</p>
          </div>
        </Section>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
