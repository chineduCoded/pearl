import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import { Container,
	Bg,
	Wrapper,
	Left,
	Title,
	Icon,
	Info,
	InfoItem,
	Right,
	Desc,
	Form,
	Input,
	Textarea,
	Button
} from './ContactStyle'

export const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rrvnzco",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return(
   <Container>
     <Bg></Bg>
     <Wrapper>
        <Left>
	  <Title>Let's discuss your project</Title>
	  <Info>
	   <InfoItem>
	    <Icon src={Phone} />
	    08164367316
	  </InfoItem>
	   <InfoItem>
	    <Icon src={Email} />
	    chinedujohn17@gmail.com
	  </InfoItem>
	   <InfoItem>
	     <Icon src={Address} />
	     8 Aliu Street, Iyana School, ketu
	  </InfoItem>
	  </Info>
        </Left>
        <Right>
         <Desc>
	  <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
	 </Desc>
	 <Form ref={formRef} onSubmit={handleSubmit}>
            <Input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <Input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <Input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <Textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <Button>Submit</Button>
            {done && "Thank you..."}
          </Form>
	</Right>
     </Wrapper>
   </Container>
  )

}
