import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import SearchResults from '../../components/utility/search-results/SearchResults';
import { mockSearchResultsProps } from '../../components/utility/search-results/SearchResults.mocks';
import { NextPageWithLayout } from './../page';

const Results: NextPageWithLayout = () => {
  return (
    <section className="felx flex-col items-center gap-y5 ">
      <div className="felx flex-col space-y-8  ">
        {[...new Array(6)].map((_, i) => (
          <SearchResults key={i} {...mockSearchResultsProps.base} />
        ))}
      </div>
    </section>
  );
};

export default Results;

Results.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
