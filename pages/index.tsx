import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div className="">
      <Search />
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <>{page}</>;
};
