import styled from "@emotion/styled";

const Footer = () => {
  return <Container />;
};

const Container = styled.footer`
  width: 100%;
  height: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #ee7752, #fc9403, #fc5619, #d9310f);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;

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
`;

export default Footer;
