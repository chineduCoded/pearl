import award from "../../img/award.png"
import { AboutHolder,
	Left,
	Bg,
	Card,
	Image,
	Right,
	Title,
	Sub,
	Desc,
	Award,
	ImgA,
	AwardText,
	AwardTitle,
	AwardDesc
} from './AboutStyle'
export const About = () => {
  return(
   <AboutHolder>
     <Left>
	<Bg></Bg>
	<Card>
	  <Image src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="" />
	</Card>
     </Left>
     <Right>
	<Title>About Me</Title>
	<Sub>
	  It is a long established fact that a reader will be distracted by the
          readable content.
	</Sub>
	<Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
	</Desc>
	<Award>
	  <ImgA src={award} />
	  <AwardText>
	    <AwardTitle>International Design Awards 2021</AwardTitle>
	    <AwardDesc>
	     Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
	    </AwardDesc>
	  </AwardText>
	</Award>
     </Right>
   </AboutHolder>
 )

};
