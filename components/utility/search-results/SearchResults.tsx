import Link from 'next/link';

export interface ISearchResults extends React.ComponentPropsWithoutRef<'div'> {
  url: string;
  title: string;
  text: string;
}

const SearchResults: React.FC<ISearchResults> = ({
  url,
  title,
  text,
  className,
  ...divProps
}) => {
  return (
    <div
      className={`flex flex-col w-5/6 m-w-screen-md space-y-1 ${className}`}
      {...divProps}
    >
      <Link href={url}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 cursor-pointer hover:underline"
        >
          <p>{url}</p>
          <p className="text-blue-600 text-xl">{title}</p>
        </a>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default SearchResults;
