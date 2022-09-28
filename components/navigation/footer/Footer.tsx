export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...FooterProps }) => {
  return (
    <footer
      className={`w-full p-4  bg-slate-200 text-slate-500 ${className}`}
      {...FooterProps}
    >
      <p>Usa</p>
    </footer>
  );
};

export default Footer;
