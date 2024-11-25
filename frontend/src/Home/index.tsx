import { PageContainer } from "../common/styled";
import Sidebar from "./Sidebar";
import { HomePageContainer } from "./styled";

const Home = () => {
  return (
    <PageContainer>
      <HomePageContainer>
        <Sidebar />
        HI FROM HOME PAGE
      </HomePageContainer>
    </PageContainer>
  );
};

export default Home;
