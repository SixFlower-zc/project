import { NavBar, TabBar } from 'antd-mobile';
import { useLocation, useNavigate, Outlet } from 'react-router';
import './App.css';
import { HomeIcon, MyIcon, IndentIcon, OrderIcon } from './components/icon';
import { useCallback } from 'react';

export default function App() {
  // 路由跳转hooks
  const navigate = useNavigate();
  // 获取url的hooks
  const location = useLocation();
  // 结构获取当前路由pathname
  const { pathname } = location;

  const back = () => {
    navigate(-1);
  };

  const tabsColor = useCallback(
    (path: string) => {
      return pathname === path ? '#ff778e' : '#000';
    },
    [pathname]
  );

  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <HomeIcon color={tabsColor('/')} />,
      badge: '',
    },
    {
      key: '/order',
      title: '点餐',
      icon: <OrderIcon color={tabsColor('/order')} />,
      badge: '',
    },
    {
      key: '/indent',
      title: '订单',
      icon: <IndentIcon color={tabsColor('/indent')} />,
      badge: '',
    },
    {
      key: '/my',
      title: '我的',
      icon: <MyIcon color={tabsColor('/my')} />,
      badge: '',
    },
  ];

  return (
    <div className="app">
      <div className="navbar">
        <NavBar onBack={back} back={null}>
          蜜雪冰城
        </NavBar>
      </div>
      <div style={{ height: '50px', width: '100vw' }}></div>
      <div className="main" style={{ flex: 1 }}>
        <Outlet />
      </div>
      <div style={{ height: '50px', width: '100vw' }}></div>
      <div className="tabbar">
        <TabBar activeKey={pathname} onChange={value => navigate(value)}>
          {tabs.map(item => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </TabBar>
      </div>
    </div>
  );
}
