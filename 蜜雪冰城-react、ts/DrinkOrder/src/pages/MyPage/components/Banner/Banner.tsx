import { Swiper } from 'antd-mobile';
import './css/index.css';
import BannerCard from '../BannerCard/BannerCard';

const info: Data[] = [
  {
    id: 1,
    name: '微雪花',
    backgroundColor: '#3074ff',
    growthValueMin: 0,
    growthValueMax: 30,
    nextLevelTxt: '生日福利',
    tequan: 6,
    icon: 'https://mxsa-oss.mxbc.net/mini/main/mine_card_bg_level_1.png',
    categoryRights: [
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
  },
  {
    id: 2,
    name: '小雪球',
    backgroundColor: '#ffbb47',
    growthValueMin: 31,
    growthValueMax: 100,
    nextLevelTxt: '生日福利',
    tequan: 10,
    icon: 'https://mxsa-oss.mxbc.net/mini/main/mine_card_bg_level_2.png',
    categoryRights: [
      {
        id: 1,
        name: '每日礼',
        rights: [
          {
            id: '1',
            rightName: '周一咖啡日',
            assistDesc: '美式3.99起',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/3912989612a0401c91dc61d59a9f8447.png',
          },
          {
            id: '2',
            rightName: '周二抵现日',
            assistDesc: '雪王币当钱花',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/2d5ce9acf8464760b00cb168316020f0.png',
          },
          {
            id: '3',
            rightName: '周三会员日',
            assistDesc: '满12元减2元',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/2aa06981c6714c7ca19a2bc95d9a0a7a.png',
          },
          {
            id: '4',
            rightName: '周四加料日',
            assistDesc: '满12元可享',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/bf4acff5cbb3454b89d3ecd8c2c553d4.png',
          },
          {
            id: '5',
            rightName: '周五秒杀日',
            assistDesc: '雪王币秒杀券',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/fba92d7406634e6884e13128d49c7b77.png',
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
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/66a3cda0ab1b4b669e256adb40dd3c24.png',
          },
          {
            id: '7',
            rightName: '生日福利',
            assistDesc: '优惠券7折起',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/91ead6065dce4933a286b4728e1d1b51.png',
          },
          {
            id: '8',
            rightName: '等级加速',
            assistDesc: '速度+10%',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/87eb020d0d1446a3a984b828c6450b9a.png',
          },
          {
            id: '9',
            rightName: '升级礼包',
            assistDesc: '优惠券85折起',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/6a48de87d40a4dce960b879e93bc9722.png',
          },
          {
            id: '10',
            rightName: '新品试饮',
            assistDesc: '领新品88折券',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/ab8aa12b8d3346c681b0f6244c1b0faa.png',
          },
          {
            id: '11',
            rightName: '闲时优惠',
            assistDesc: '每周1张9折券',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/c15b3201671f49b880189ebb1a87c964.png',
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
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/128207deb0ae4717adafcadc58d55c19.png',
          },
          {
            id: '13',
            rightName: '周边特价',
            assistDesc: '最低8折买周边',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/9366a314ffbf46739cfbcd1f323e5017.png',
          },
          {
            id: '14',
            rightName: '免费一袋冰',
            assistDesc: '敬请期待',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/f84c075ae180452a8ec30eaf9543bafc.png',
          },
          {
            id: '15',
            rightName: '音乐节门票',
            assistDesc: '免费抽门票',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/dbe7f963e7d3406ba68802bb54616e09.png',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: '大雪人',
    backgroundColor: '#bd7bfa',
    growthValueMin: 101,
    growthValueMax: 1000,
    nextLevelTxt: '新品试饮',
    tequan: 12,
    icon: 'https://mxsa-oss.mxbc.net/mini/main/mine_card_bg_level_3.png',
    categoryRights: [
      {
        id: 1,
        name: '每日礼',
        rights: [
          {
            id: '1',
            rightName: '周一咖啡日',
            assistDesc: '美式3.99起',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/7e8d8dc38e0f49f4a428c034d2a768f7.png',
          },
          {
            id: '2',
            rightName: '周二抵现日',
            assistDesc: '雪王币当钱花',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/d3197696ee6b43e18609d577bd159182.png',
          },
          {
            id: '3',
            rightName: '周三会员日',
            assistDesc: '满12元减2元',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/2b075dd2069c4bc8b71d49a84619286b.png',
          },
          {
            id: '4',
            rightName: '周四加料日',
            assistDesc: '满12元可享',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/f12e5db70e7846f7aecbcb130f2b0d41.png',
          },
          {
            id: '5',
            rightName: '周五秒杀日',
            assistDesc: '雪王币秒杀券',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/dcd895a0e7c34cd8a5d0f55f1f47b694.png',
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
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/0ef6f9916c3d47bda850b2632864b42a.png',
          },
          {
            id: '7',
            rightName: '生日福利',
            assistDesc: '优惠券7折起',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/169dc63148104788b4720a15d5a01405.png',
          },
          {
            id: '8',
            rightName: '等级加速',
            assistDesc: '速度+10%',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/31483ea8837b4ea6a234437d67c2953b.png',
          },
          {
            id: '9',
            rightName: '升级礼包',
            assistDesc: '优惠券85折起',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/fa78961699af403d9227d8b91256c004.png',
          },
          {
            id: '10',
            rightName: '新品试饮',
            assistDesc: '领新品88折券',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/900a23dacd6a47b986c9c1dff82ebd9d.png',
          },
          {
            id: '11',
            rightName: '闲时优惠',
            assistDesc: '每周1张9折券',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/ad3e2722a57947e0936f2cc92ca30495.png',
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
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/3f1c8953403a42eba18790e3f66883e9.png',
          },
          {
            id: '13',
            rightName: '周边特价',
            assistDesc: '最低8折买周边',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/0fb1491c64dc4572a1715461af8b69d5.png',
          },
          {
            id: '14',
            rightName: '免费一袋冰',
            assistDesc: '敬请期待',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/054af7a8ee864621928300f52e5379a3.png',
          },
          {
            id: '15',
            rightName: '音乐节门票',
            assistDesc: '免费抽门票',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/4e6ee3967ac94a3c9a5b463987084e0c.png',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: '冰雪王',
    backgroundColor: '#272523',
    growthValueMin: 1001,
    growthValueMax: 9999,
    nextLevelTxt: '周边特价',
    tequan: 15,
    icon: 'https://mxsa-oss.mxbc.net/mini/main/mine_card_bg_level_4.png',
    categoryRights: [
      {
        id: 1,
        name: '每日礼',
        rights: [
          {
            id: '1',
            rightName: '周一咖啡日',
            assistDesc: '美式3.99起',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/1600ec1b60d841a4b10b0f08d4c22f40.png',
          },
          {
            id: '2',
            rightName: '周二抵现日',
            assistDesc: '雪王币当钱花',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/26582092efd74a2ab5473aa689b31ae5.png',
          },
          {
            id: '3',
            rightName: '周三会员日',
            assistDesc: '满12元减2元',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/294d041ea740440389a5b44fcd662b9c.png',
          },
          {
            id: '4',
            rightName: '周四加料日',
            assistDesc: '满12元可享',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/8842e38636494f3581673d26428eb062.png',
          },
          {
            id: '5',
            rightName: '周五秒杀日',
            assistDesc: '雪王币秒杀券',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/6119f14ae2574ac28ae52a0d98d074b2.png',
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
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/0cea71e2608d403790774f1c4933d9c9.png',
          },
          {
            id: '7',
            rightName: '生日福利',
            assistDesc: '优惠券7折起',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/c75ca6fe17a44a8ba3d32dcc42b4fc5a.png',
          },
          {
            id: '8',
            rightName: '等级加速',
            assistDesc: '速度+10%',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/85ffaa6f0cf047c18e265cb4e4a92224.png',
          },
          {
            id: '9',
            rightName: '升级礼包',
            assistDesc: '优惠券85折起',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/27a11d0e7e6e4544ae2219897510d7b6.png',
          },
          {
            id: '10',
            rightName: '新品试饮',
            assistDesc: '领新品88折券',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/5cd0cdd22ba047f3b2c69f0a3a98edc8.png',
          },
          {
            id: '11',
            rightName: '闲时优惠',
            assistDesc: '每周1张9折券',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/87527dafdfd34342874f8319a7c5e0de.png',
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
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/ac65a0b3a3e64d3893f1653a2b59be5c.png',
          },
          {
            id: '13',
            rightName: '周边特价',
            assistDesc: '最低8折买周边',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/6ebc8b3e1d6f4ac9934c84abd54586a4.png',
          },
          {
            id: '14',
            rightName: '免费一袋冰',
            assistDesc: '敬请期待',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/27d1a185d2654be097de99b2592b2445.png',
          },
          {
            id: '15',
            rightName: '音乐节门票',
            assistDesc: '免费抽门票',
            imgs: 'https://mxsa-oss.mxbc.net/oss/h5/20231205/bc3424cfd6d24c8482829e7131d01a1f.png',
          },
        ],
      },
    ],
  },
];

export default function Banner() {
  const items = info.map((v, index) => (
    <Swiper.Item key={index}>
      <div>
        <BannerCard {...v} />
      </div>
    </Swiper.Item>
  ));

  return (
    <div className="MyPage-banner">
      <Swiper indicator={() => null}>{items}</Swiper>
    </div>
  );
}
