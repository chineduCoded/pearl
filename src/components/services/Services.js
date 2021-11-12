import styled from 'styled-components'
import { Container,
	Browser,
	Circle,
	Image
} from './ServicesStyle'

export const Services = ({img, link}) => {
 return(
   <Container>
    <Browser>
	<Circle></Circle>
	 <Circle></Circle>
	 <Circle></Circle>
	 <a href={link} target="_blank" rel="noreferrer" >
	   <Image src={img}/>
	 </a>
    </Browser>
   </Container>
 )
}
