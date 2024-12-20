import GoodsCardComponent from './GoodsCardComponent';

const goodsData = [
  {
    productId: '1423846600228597761',
    productName: '冰鲜柠檬水',
    productPrice: 400,
    productLogo:
      'https://mxsa-oss.mxbc.net/oss/product/20241017/18314f1fc6f247f8a53fb07685cab4a4.jpg',
    sortIndex: 4,
  },
  {
    productId: '1580458438261051393',
    productName: '三拼霸霸奶茶',
    productPrice: 800,
    productLogo:
      'https://mxsa-oss.mxbc.net/oss/product/20241018/bfa91347d137416fbcf740f2ca4704bd.jpg',
    sortIndex: 6,
  },
  {
    productId: '1808318119651999746',
    productName: '东方乌龙轻乳茶',
    productPrice: 600,
    productLogo:
      'https://mxsa-oss.mxbc.net/oss/product/20241130/295c56b3740b4408adb0b2365c19842f.jpg',
    sortIndex: 9,
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

export default function ChangdianComponent() {
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
