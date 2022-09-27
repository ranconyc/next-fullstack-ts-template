export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 border-solid border-2 border-green-500">
      {sampleTextProp}
    </div>
  );
};

export default BaseTemplate;
