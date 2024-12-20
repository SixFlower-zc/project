import { Swiper, Toast } from 'antd-mobile';
import './css/index.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const SwiperData = [
  {
    path: '/1',
    url: 'https://mxsa-oss.mxbc.net/oss/ad/20241214/d21cef11affb4ef3ad5fddb8f9fc7977.gif',
  },
  {
    path: '/2',
    url: 'https://mxsa-oss.mxbc.net/oss/ad/20241214/fb0a876f409040e1aaacc21ccaff592c.gif',
  },
  {
    path: '/3',
    url: 'https://mxsa-oss.mxbc.net/oss/ad/20241210/440ec5f3de504bcd9433b0ae44cf71ef.gif',
  },
  {
    path: '/4',
    url: 'https://mxsa-oss.mxbc.net/oss/ad/20241109/b6df4362cd944667bf30d491acca2a9d.jpg',
  },
];

const goodsData = [
  {
    productId: '1713107669990117378',
    productName: '茉莉奶绿',
    productPrice: 600,
    productLogo:
      'https://mxsa-oss.mxbc.net/oss/product/20241017/d853fb2ceb4944a8b4362742eb045181.jpg',
    sortIndex: 0,
  },
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
    productId: '1423846600228597761',
    productName: '冰鲜柠檬水',
    productPrice: 400,
    productLogo:
      'https://mxsa-oss.mxbc.net/oss/product/20241017/18314f1fc6f247f8a53fb07685cab4a4.jpg',
    sortIndex: 4,
  },
  {
    productId: '1423931266613354497',
    productName: '棒打鲜橙',
    productPrice: 600,
    productLogo:
      'https://mxsa-oss.mxbc.net/oss/product/20241017/103110fc433340bb841904ab05d24aa2.jpg',
    sortIndex: 5,
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

const bottomData = [
  {
    path: '/1',
    url: 'https://mxsa-oss.mxbc.net/oss/ad/20241216/276ab2206c8649f1af4bcc90b97cc6c6.gif',
  },
  {
    path: '/1',
    url: 'https://mxsa-oss.mxbc.net/oss/ad/20240927/89b553df3cab4986955b690b0c12f7f6.gif',
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);

  const userno = (
    <div className="login">
      <img
        src="https://mxsa-oss.mxbc.net/mini/main/default_avatar.png"
        alt=""
      />
      <div className="login-info">
        <h3>尊敬的用户</h3>
        <div>登陆领取20元新人红包</div>
      </div>
      <div>
        <button
          onClick={() => {
            Toast.show({
              content: '登陆成功',
              afterClose: () => {
                setFlag(true);
              },
            });
          }}
        >
          授权登录
        </button>
      </div>
    </div>
  );

  const useryes = (
    <div className="user-info">
      <div>
        <img
          src="https://mxsa-oss.mxbc.net/mini/main/default_avatar.png"
          alt=""
        />
        <div>
          <div>130******29</div>
          <div>微雪花会员</div>
        </div>
        <div>
          <div>15</div>
          <div>雪王币</div>
        </div>
        <div>
          <div>7</div>
          <div>优惠券</div>
        </div>
      </div>
      <div>
        <img src="/src/assets/img/vip.png" alt="" />
        <div>周四加料日，1元小料券</div>
        <div>{'>'}</div>
      </div>
    </div>
  );

  return (
    <div className="home-page">
      <div className="swiper">
        <Swiper
          loop
          autoplay
          autoplayInterval={2000}
          onIndexChange={i => {
            console.log(i, 'onIndexChange1');
          }}
        >
          {SwiperData.map(item => (
            <Swiper.Item key={item.url}>
              <img src={item.url} alt="" style={{ width: '100%' }} />
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
      <div className="box">
        <div className="main">
          {flag ? useryes : userno}
          <div className="btn">
            <div className="big-btn">
              <img
                src="https://mxsa-oss.mxbc.net/oss/ad/20241106/b02821d1cbf24339ab8e1d728a32a0f5.jpg"
                alt=""
                onClick={() => {
                  navigate('/order?userType=自提');
                }}
              />
              <img
                src="https://mxsa-oss.mxbc.net/oss/ad/20241106/e2abea09bee24f718839877bc78b14c2.jpg"
                alt=""
                onClick={() => {
                  navigate('/order?userType=外送');
                }}
              />
            </div>
            <div className="small-btn">
              <img
                src="https://mxsa-oss.mxbc.net/oss/ad/20241030/58d9d422a9e14e6d881c7f086efdfef7.png"
                alt=""
                onClick={() => {
                  navigate('/');
                }}
              />
              <img
                src="https://mxsa-oss.mxbc.net/oss/ad/20241123/731c6284c3ba421b9199addabb3e22b8.png"
                alt=""
                onClick={() => {
                  navigate('/');
                }}
              />
              <img
                src="https://mxsa-oss.mxbc.net/oss/ad/20241112/c36f8b1de9c34a3cac5747fcd3ee35ee.png"
                alt=""
                onClick={() => {
                  navigate('/');
                }}
              />
              <img
                src="/src/assets/img/Snipaste_2024-12-18_23-11-34.png"
                alt=""
                onClick={() => {
                  navigate('/');
                }}
              />
            </div>
          </div>
          <div className="banner">
            <h2>大家都在喝</h2>
            <div className="dingwei">📍蜜雪冰城(你隔壁)</div>
            <div className="goods">
              {goodsData.map(item => (
                <div key={item.productId}>
                  <img src={item.productLogo} alt="" />
                  <div>{item.productName}</div>
                  <div>
                    <div>¥{item.productPrice / 100}</div>
                    <div>＋</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h2>甜蜜咨询</h2>
          <div className="bottom">
            <Swiper
              loop
              autoplay
              autoplayInterval={2000}
              onIndexChange={i => {
                console.log(i, 'onIndexChange1');
              }}
            >
              {bottomData.map(item => (
                <Swiper.Item key={item.url}>
                  <img src={item.url} alt="" style={{ width: '100%' }} />
                </Swiper.Item>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
