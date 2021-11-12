import { Services } from "../services/Services";
import { products } from "../../data";
import { Container,
	Texts,
	Title,
	Desc,
	List
} from './ServicesListStyle'

export const ServicesList = () => {
  return (
    <Container>
      <Texts>
        <Title>Create & inspire. It's Lama</Title>
        <Desc>
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </Desc>
      </Texts>
      <List>
        {products.map((item) => (
          <Services key={item.id} img={item.img} link={item.link} />
        ))}
      </List>
    </Container>
  );
};
