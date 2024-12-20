import { Toast } from 'antd-mobile';
import './css/index.css';
import { useState } from 'react';
import Banner from './components/Banner/Banner';

export default function MyPage() {
  const [flag, setFlag] = useState(false);
  return (
    <div className="my-page">
      <header>
        <img
          src="https://mxsa-oss.mxbc.net/mini/main/default_avatar.png"
          alt=""
        />
        <div>
          <div>130******29</div>
          <div>{'我的勋章0/31  >'}</div>
        </div>
        <div className="btn">
          {flag ? (
            <button disabled>已签到</button>
          ) : (
            <button
              onClick={() => {
                Toast.show({
                  content: '签到成功！积分加-10',
                });
                setFlag(true);
              }}
            >
              签到
            </button>
          )}
        </div>
      </header>
      <div className="banner">
        <Banner />
      </div>
      <div className="content">
        <div>
          <div>
            <div>20</div>
            <div style={{ color: '#FFB800' }}>雪王币</div>
          </div>
          <div>
            <img
              src="https://mxsa-oss.mxbc.net/mini/main/coinIcon.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <div>7</div>
            <div style={{ color: '#FFB800' }}>优惠券</div>
          </div>
          <div>
            <img
              src="https://mxsa-oss.mxbc.net/mini/main/couponIcon.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <h3>更多服务</h3>
      <div className="serve">
        <div>
          <div>
            <img src="https://mxsa-oss.mxbc.net/mini/main/cdkey.png" alt="" />
          </div>
          <div>兑换码</div>
        </div>
        <div>
          <div>
            <img src="https://mxsa-oss.mxbc.net/mini/main/flq.png" alt="" />
          </div>{' '}
          <div>雪王福利群</div>
        </div>
        <div>
          <div>
            <img src="https://mxsa-oss.mxbc.net/mini/main/wtfk.png" alt="" />
          </div>{' '}
          <div>问题反馈</div>
        </div>
        <div>
          <div>
            <img src="https://mxsa-oss.mxbc.net/mini/main/jmdh.png" alt="" />
          </div>{' '}
          <div>加盟咨询</div>
        </div>
      </div>
      <footer
        onClick={() => {
          Toast.show({
            content: '你还真以为能跳啊！',
          });
        }}
      >
        <img src="/src/assets/img/app.png" alt="" />
      </footer>
    </div>
  );
}
