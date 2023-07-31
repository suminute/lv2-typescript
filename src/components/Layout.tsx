import { styled } from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <StDiv>{children}</StDiv>;
};

export default Layout;

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;

  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 5vh;
  }
`;
