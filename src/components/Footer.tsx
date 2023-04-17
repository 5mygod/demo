import styled from "@emotion/styled";
import { Spacing } from "./common/Spacing";
import Button from "./common/Button";
import { Mediaqueries } from "styles/mediaqueries";

const Footer = () => {
  return (
    <Container className="footer-container">
      <img
        className="footer-poster"
        src="/footer-poster.png"
        alt="Platform center CI"
      />
      <Spacing mobileSize={40} />
      <ContentsContainer>
        <h2 className="footer-title">WP팀 소식 받아보기</h2>
        <Spacing size={18} />
        <h3 className="footer-description">
          UX 그룹과 WP팀이 어떻게 고객 경험을 혁신하고 있는지 더 알아보세요.
        </h3>
        <Spacing size={32} />
        <FooterButton size="large">새소식 알림 신청하기</FooterButton>
      </ContentsContainer>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  background: linear-gradient(-45deg, #ee7752, #fc9403, #fc5619, #d9310f);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;

  .footer-poster {
    height: 70%;
    max-height: 18.75rem;
    box-shadow: 0.25rem 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.2);
  }

  .footer-title {
    color: #fff;
    font-weight: 700;
    font-size: 2.5rem;
  }

  .footer-description {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.3;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  ${Mediaqueries.모바일} {
    flex-direction: column;

    .footer-title {
      color: #fff;
      font-weight: 700;
      font-size: 1.75rem;
    }

    .footer-description {
      color: #fff;
      font-weight: 500;
      font-size: 16px;
    }
  }
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 48px;

  ${Mediaqueries.모바일} {
    margin-left: 0;
    padding: 0 24px;
  }
`;

const FooterButton = styled(Button)`
  max-width: 300px;
`;

export default Footer;
