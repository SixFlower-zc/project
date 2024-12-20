import { Popup, SearchBar, Swiper, SwiperRef, Tabs } from 'antd-mobile';
import './css/index.css';
import { useEffect, useRef, useState } from 'react';
import {
  CollectfullIcon,
  CollectIcon,
  LoctionIcon,
  TrumpetIcon,
} from '../../components/icon';
import {
  ChangdianComponent,
  ZhoubianComponent,
  KafeiComponent,
  JingdianComponent,
} from './components';
import { useLocation } from 'react-router';

// 弹出层
const popup = (
  <div
    style={{
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <h2 style={{ padding: '10px 5px' }}>门店公告</h2>
    <div style={{ padding: '10px 5px', display: 'flex' }}>
      <div style={{ marginRight: '10px' }}>
        <TrumpetIcon color="red" width="20px" height="20px" />
      </div>
      <div style={{ lineHeight: '24px', color: 'red' }}>
        加入门店粉丝群，领999元券包
      </div>
    </div>
    <div style={{ padding: '10px 5px', display: 'flex' }}>
      <div style={{ marginRight: '10px' }}>
        <TrumpetIcon color="red" width="20px" height="20px" />
      </div>
      <div style={{ lineHeight: '24px', color: 'red' }}>
        加入门店粉丝群，领999元券包
      </div>
    </div>
    <div style={{ padding: '10px 5px', display: 'flex' }}>
      <div style={{ marginRight: '10px' }}>
        <TrumpetIcon color="red" width="20px" height="20px" />
      </div>
      <div style={{ lineHeight: '24px', color: 'red' }}>
        加入门店粉丝群，领999元券包
      </div>
    </div>
    <div style={{ padding: '10px 5px', display: 'flex' }}>
      <div style={{ marginRight: '10px' }}>
        <TrumpetIcon color="red" width="20px" height="20px" />
      </div>
      <div style={{ lineHeight: '24px', color: 'red' }}>
        加入门店粉丝群，领999元券包
      </div>
    </div>
  </div>
);

// 选项卡
const tabItems = [
  { key: '/jingdian', title: '经典菜单', dom: <JingdianComponent /> },
  { key: '/kafei', title: '咖啡轻乳', dom: <KafeiComponent /> },
  { key: '/zhoubian', title: '周边零食', dom: <ZhoubianComponent /> },
  { key: '/changdian', title: '我的常点', dom: <ChangdianComponent /> },
];

export default function OrderPage() {
  const [userType, setUserType] = useState('自提');
  const [collect, setCollect] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const location = useLocation();

  // 解析查询字符串参数
  const query = new URLSearchParams(location.search);
  const params = query.get('userType');

  useEffect(() => {
    setUserType(params || '自提');
  }, [params]);

  // 自提
  const locationZiti = (
    <div className="locationZiti">
      <div>
        <div
          onClick={() => {
            setCollect(!collect);
          }}
        >
          {collect ? (
            <CollectfullIcon width="20px" height="20px" />
          ) : (
            <CollectIcon color="#ccc" width="20px" height="20px" />
          )}
        </div>
        <div>{'蜜雪冰城(你家门口) >'}</div>
      </div>
      <div>
        <div>
          <LoctionIcon color="#ccc" width="20px" height="20px" />
        </div>
        <div>直线距离1.6km</div>
      </div>
      <div
        onClick={() => {
          setVisible1(true);
        }}
      >
        <div>
          <TrumpetIcon color="red" width="20px" height="20px" />
        </div>
        <div>加入门店粉丝群，领999元券包</div>
        <div>{'查看更多 >'}</div>
      </div>
    </div>
  );
  // 外送
  const locationWaisong = (
    <div className="locationWaisong">
      <div>
        <div>{'请选择收货地址 >'}</div>
      </div>
      <div>
        <div>
          <LoctionIcon color="#ccc" width="20px" height="20px" />
        </div>
        <div>{'蜜雪冰城(你家门口) >'}</div>
      </div>
      <div
        onClick={() => {
          setVisible1(true);
        }}
      >
        <div>
          <TrumpetIcon color="red" width="20px" height="20px" />
        </div>
        <div>加入门店粉丝群，领999元券包</div>
        <div>{'查看更多 >'}</div>
      </div>
    </div>
  );

  return (
    <div className="order-page">
      <header>
        <div className="tabs">
          <div
            style={userType === '自提' ? { color: '#000' } : {}}
            onClick={() => {
              setUserType('自提');
            }}
          >
            自提
          </div>
          <div
            style={userType === '外送' ? { color: '#000' } : {}}
            onClick={() => {
              setUserType('外送');
            }}
          >
            外送
          </div>
        </div>
        <div className="SearchBar">
          <SearchBar placeholder="茉莉奶绿" />
        </div>
      </header>
      <div className="location">
        {userType === '自提' ? locationZiti : locationWaisong}
      </div>
      <div className="tab">
        <Tabs
          activeKey={tabItems[activeIndex].key}
          onChange={key => {
            const index = tabItems.findIndex(item => item.key === key);
            setActiveIndex(index);
            swiperRef.current?.swipeTo(index);
          }}
        >
          {tabItems.map(item => (
            <Tabs.Tab title={item.title} key={item.key} />
          ))}
        </Tabs>
      </div>
      <div className="main">
        <Swiper
          style={{ flex: 1 }}
          direction="horizontal"
          loop
          indicator={() => null}
          ref={swiperRef}
          defaultIndex={activeIndex}
          onIndexChange={index => {
            setActiveIndex(index);
          }}
        >
          {tabItems.map(item => (
            <Swiper.Item key={item.key}>
              <div
                style={{
                  padding: '10px',
                }}
              >
                {item.dom}
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
      <Popup
        visible={visible1}
        onMaskClick={() => {
          setVisible1(false);
        }}
        onClose={() => {
          setVisible1(false);
        }}
        bodyStyle={{ height: '40vh', borderRadius: '15px 15px 0 0' }}
      >
        {popup}
      </Popup>
    </div>
  );
}
