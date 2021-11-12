import Me from "../../img/me.jpg";
import { Container,
	Left,
	Wrapper,
	Heading,
	Name,
	Title,
	TitleWrapper,
	TitleItem,
	Desc,
	Scroll,
	Right,
	Bg,
	Image
} from './IntroStyle'
export const Intro = () => {
  return(
   <Container>
     <Left>
	<Wrapper>
	  <Heading>Hi, I'm</Heading>
	  <Name>Elijah Chinedu</Name>
	  <Title>
	   <TitleWrapper>
	     <TitleItem>Web Developer</TitleItem>
	     <TitleItem>UI/UX Designer</TitleItem>
	     <TitleItem>Photographer</TitleItem>
	   </TitleWrapper>
	  </Title>
	  <Desc>
	     design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
	  </Desc>
	</Wrapper>
     </Left>
     <Right>
	<Bg></Bg>
	<Image />
     </Right>
   </Container>
  )
}
