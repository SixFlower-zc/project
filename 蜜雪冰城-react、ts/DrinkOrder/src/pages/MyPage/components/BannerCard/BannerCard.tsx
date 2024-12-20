import { useState } from 'react';
import './css/index.css';

export default function BannerCard({
  name = '微雪花',
  backgroundColor = '#3074ff',
  growthValueMin = 0,
  growthValueMax = 30,
  nextLevelTxt = '生日福利',
  tequan = 6,
  icon = 'https://mxsa-oss.mxbc.net/mini/main/mine_card_bg_level_1.png',
  categoryRights = [
    {
      id: 1,
      name: '每日礼',
      rights: [
        {
          id: '1',
          rightName: '周一咖啡日',
          assistDesc: '美式3.99起',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/cc890c6f07bc47199b9abde9d09356fd.png',
        },
        {
          id: '2',
          rightName: '周二抵现日',
          assistDesc: '雪王币当钱花',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/dc09658a08554f9a8a003c591d58c966.png',
        },
        {
          id: '3',
          rightName: '周三会员日',
          assistDesc: '满12元减2元',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/59611927681a463abaa6c31d8342dee2.png',
        },
        {
          id: '4',
          rightName: '周四加料日',
          assistDesc: '满12元可享',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/c3fa7403f3704392b2ce266639c22e1b.png',
        },
        {
          id: '5',
          rightName: '周五秒杀日',
          assistDesc: '雪王币秒杀券',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/ff2e55844b1c4845b2a5ca2e525b653e.png',
        },
      ],
    },
    {
      id: 2,
      name: '成长礼',
      rights: [
        {
          id: '6',
          rightName: '新手礼包',
          assistDesc: '20元券包',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/e1d06d26e1684bd38f2582977b890e8c.png',
        },
        {
          id: '7',
          rightName: '生日福利',
          assistDesc: '优惠券7折起',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/5c75fa6426a44fe6a1d1af8467c5bdee.png',
        },
        {
          id: '8',
          rightName: '等级加速',
          assistDesc: '速度+10%',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/958e4cc626b548678008b90b560af2e6.png',
        },
        {
          id: '9',
          rightName: '升级礼包',
          assistDesc: '优惠券85折起',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/ede7f6127f30487aa7a3d324cf481401.png',
        },
        {
          id: '10',
          rightName: '新品试饮',
          assistDesc: '领新品88折券',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/93bfa5869a554d4883130c80f8ab803b.png',
        },
        {
          id: '11',
          rightName: '闲时优惠',
          assistDesc: '每周1张9折券',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/a569d666ff0d4fcca941d8420f373d98.png',
        },
      ],
    },
    {
      id: 3,
      name: '心意礼',
      rights: [
        {
          id: '12',
          rightName: '客服绿色通道',
          assistDesc: '优先接线',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/b58d324b934740c6ba6c39435f6e8d92.png',
        },
        {
          id: '13',
          rightName: '周边特价',
          assistDesc: '最低8折买周边',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/d3e9c900f6384cc186b9d67ff87b5bc2.png',
        },
        {
          id: '14',
          rightName: '免费一袋冰',
          assistDesc: '敬请期待',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/a4f47d51c87d43478f857662f6b6de46.png',
        },
        {
          id: '15',
          rightName: '音乐节门票',
          assistDesc: '免费抽门票',
          imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/607afd74669d4ab8b1398b352210f080.png',
        },
      ],
    },
  ],
}: Data) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = {
    backgroundColor,
    color: '#fff',
  };
  return (
    <div className="BannerCard" style={{ backgroundColor }}>
      <div className="top">
        <div>
          <div
            style={{ fontSize: '20px', padding: '5px 0', fontWeight: 'bold' }}
          >
            {name}
          </div>
          <div style={{ fontSize: '14px', padding: '5px 0' }}>
            甜蜜值{growthValueMin}/{growthValueMax}
          </div>
          <div style={{ fontSize: '14px', padding: '5px 0' }}>
            再升一级可享受
            <span style={{ color: 'red' }}>{nextLevelTxt}</span>等更多权益
          </div>
        </div>
        <img src={icon} alt="" />
      </div>
      <div
        className="bottom"
        style={{ border: '1px solid ' + backgroundColor }}
      >
        <div>
          您已解锁<span>{tequan}</span>项特权
        </div>
        <div className="tab">
          <div
            style={activeIndex === 0 ? active : {}}
            onClick={() => setActiveIndex(0)}
          >
            每日礼
          </div>
          <div
            style={activeIndex === 1 ? active : {}}
            onClick={() => setActiveIndex(1)}
          >
            成长礼
          </div>
          <div
            style={activeIndex === 2 ? active : {}}
            onClick={() => setActiveIndex(2)}
          >
            心意礼
          </div>
        </div>
        <div className="btn">
          {categoryRights[activeIndex].rights.map(item => (
            <div key={item.id}>
              <img src={item.imgs} alt="" />
              <div
                style={{
                  fontSize: '10px',
                  padding: '5px 0',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                {item.rightName}
              </div>
              <div style={{ fontSize: '10px', padding: '5px 0' }}>
                {item.assistDesc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
