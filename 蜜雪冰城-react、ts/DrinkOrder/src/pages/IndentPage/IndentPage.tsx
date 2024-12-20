import { Swiper, SwiperRef, Tabs } from 'antd-mobile';
import { useRef, useState } from 'react';
import './css/index.css';
import OrderComponent from './components/orderComponent';

const tabItems = [
  { key: '/all', title: '全部' },
  { key: '/history', title: '历史' },
  { key: '/tui', title: '退单' },
];

export default function IndentPage() {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="indent-page">
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
      <div className="swiper">
        <Swiper
          direction="horizontal"
          loop
          indicator={() => null}
          ref={swiperRef}
          defaultIndex={activeIndex}
          onIndexChange={index => {
            setActiveIndex(index);
          }}
        >
          <Swiper.Item>
            <div className="SwiperItem">
              <OrderComponent />
              <OrderComponent
                name="芋圆葡萄"
                url="https://mxsa-oss.mxbc.net/oss/product/20241022/2cd3aded815e42aab3502c7c36001a3a.jpg"
              />
              <OrderComponent flag={false} />
              <OrderComponent
                name="芋圆葡萄"
                url="https://mxsa-oss.mxbc.net/oss/product/20241022/2cd3aded815e42aab3502c7c36001a3a.jpg"
                flag={false}
              />
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div className="SwiperItem">
              <OrderComponent />
              <OrderComponent
                name="芋圆葡萄"
                url="https://mxsa-oss.mxbc.net/oss/product/20241022/2cd3aded815e42aab3502c7c36001a3a.jpg"
              />
            </div>
          </Swiper.Item>
          <Swiper.Item>
            <div className="SwiperItem">
              <OrderComponent flag={false} />
              <OrderComponent
                name="芋圆葡萄"
                url="https://mxsa-oss.mxbc.net/oss/product/20241022/2cd3aded815e42aab3502c7c36001a3a.jpg"
                flag={false}
              />
            </div>
          </Swiper.Item>
        </Swiper>
      </div>
    </div>
  );
}
