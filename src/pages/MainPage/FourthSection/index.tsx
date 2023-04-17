import styled from "@emotion/styled";
import BaseContainer from "components/common/Container";
import { Mediaqueries } from "styles/mediaqueries";
import { Slider } from "./Swiper";
import { Text } from "components/common/Text";
import { Spacing } from "components/common/Spacing";
import { THIRD_SECTION_ID } from "hooks/useSectionSelector";

const FourthSection = () => {
  return (
    <Container id={THIRD_SECTION_ID}>
      <ContentContainer>
        <Text typography="h2">Swiper</Text>
        <Spacing size={24} />
        <Text typography="p">좌우로 스와이프!</Text>
        <Spacing size={2} />
        <Text typography="p">
          좌우로 마우스로 드래그하거나 양옆의 화살표를 눌러보세요.
        </Text>
        <Spacing size={20} mobileSize={12} />
      </ContentContainer>
      <Slider />
    </Container>
  );
};

const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${Mediaqueries.모바일} {
    min-height: 0;
    padding: 5rem 0;
  }
`;

const ContentContainer = styled.div`
  text-align: center;

  ${Mediaqueries.모바일} {
    width: 92%;
    text-align: left;
  }
`;

export default FourthSection;
