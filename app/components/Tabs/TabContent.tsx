import ProductView from '../ProductView/ProductView';

const TabContent = ({productList}: {productList: Product[]}) => (
  <div className="grid grid-cols-3 gap-10">
    {productList.map((product) => (
      <ProductView
        key={Math.random()}
        img={product?.img}
        bagName={product?.bagName}
        price={product?.price}
        icon={product?.icon}
      />
    ))}
  </div>
);

export default TabContent;
