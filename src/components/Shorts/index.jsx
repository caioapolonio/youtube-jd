import { Container, ShortsScroll, Title, TitleContainer } from "./style";
import Shorts_Frame from "../../assets/shorts/Shorts_Frame.png";
import { data } from "./data";
import Short from "./Short";

const Shorts = () => {
  return (
    <Container>
      <TitleContainer>
        <img src={Shorts_Frame} alt="Shorts logo" height={24} />
        <Title>Shorts</Title>
      </TitleContainer>
      <ShortsScroll>
        {data.map((item) => (
          <Short
            key={item.id}
            image={item.image}
            title={item.name}
            views={item.views}
          />
        ))}
      </ShortsScroll>
    </Container>
  );
};

export default Shorts;
