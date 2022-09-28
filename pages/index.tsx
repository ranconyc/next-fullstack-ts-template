import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();
  console.log('first', locale);
  return (
    <section className="felx flex-col items-center gap-y5 pt-12 sm:pt-36">
      <div className="flex p-5 justify-center text-5xl font-medium ">
        <h1 className=" text-blue-500 ">G</h1>
        <h1 className="text-red-500">o</h1>
        <h1 className="text-yellow-500">o</h1>
        <h1 className="text-blue-500">g</h1>
        <h1 className="text-green-500">l</h1>
        <h1 className="text-red-500">e</h1>
      </div>
      <Search />
      <p className="text-center">
        google offered in:{' '}
        <Link href="/" locale={locale === 'en' ? 'he' : 'en'}>
          <a className="underline text-blue-600">עברית</a>
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
