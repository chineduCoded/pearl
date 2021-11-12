import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import { Container, Icon, Button } from './ToggleStyle'

export const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <Container>
      <Icon src={Sun} alt="" />
      <Icon src={Moon} alt=""  />
      <Button
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></Button>
    </Container>
  );
};
