import { PageContainer } from "../common/styled";
import CompanyList from "./CompanyList";
import Sidebar from "./Sidebar";
import { HomePageContainer } from "./styled";

const Home = () => {
  return (
    <PageContainer>
      <HomePageContainer>
        <Sidebar />
        <CompanyList />
      </HomePageContainer>
    </PageContainer>
  );
};

export default Home;
