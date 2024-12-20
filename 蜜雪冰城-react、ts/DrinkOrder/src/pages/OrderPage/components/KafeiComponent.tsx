import GoodsCardComponent from './GoodsCardComponent';

const goodsData = [
  {
    productId: '1423947876774420482',
    productName: '珍珠奶茶',
    productPrice: 600,
    productLogo:
      'https://mxsa-oss.mxbc.net/oss/product/20241017/516c26ae51ed4b9fb2db2f89bff4a35c.jpg',
    sortIndex: 1,
  },
  {
    productId: '1772149714343567361',
    productName: '厚芋泥奶茶',
    productPrice: 800,
    productLogo:
      'https://mxsa-oss.mxbc.net/oss/product/20241101/0d12ffa2456944228c3ca593e0866cd5.jpg',
    sortIndex: 2,
  },
  {
    productId: '1739527085824811009',
    productName: '芋圆葡萄',
    productPrice: 800,
    productLogo:
      'https://mxsa-oss.mxbc.net/oss/product/20241022/2cd3aded815e42aab3502c7c36001a3a.jpg',
    sortIndex: 10,
  },
];

export default function kafeiComponent() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {goodsData.map(item => (
        <GoodsCardComponent
          key={item.productId}
          id={item.productId}
          name={item.productName}
          price={item.productPrice}
          url={item.productLogo}
          title={'这是' + item.productName + '的介绍'}
        />
      ))}
    </div>
  );
}
