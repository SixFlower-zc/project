import { useNavigate } from 'react-router';

export default function GoodsCardComponent({
  url = 'https://mxsa-oss.mxbc.net/oss/product/20241017/d853fb2ceb4944a8b4362742eb045181.jpg',
  name = '茉莉奶绿',
  title = '这是商品介绍',
  price = 600,
  id = '1',
}) {
  const addiconStyle = {
    padding: '5px',
    width: '25px',
    height: '25px',
    color: '#fff',
    backgroundColor: '#f80f28',
    fontWeight: ' bold',
    borderRadius: '50%',
  };

  const navigate = useNavigate();

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', width: '45%' }}
      onClick={() => {
        navigate('/indent?id=' + id);
      }}
    >
      <img src={url} alt={name} style={{ width: '100%' }} />
      <div style={{ fontSize: '14px', fontWeight: 'bold', padding: '5px' }}>
        {name}
      </div>
      <div style={{ fontSize: '12px', color: '#999', padding: '5px' }}>
        {title}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '5px',
        }}
      >
        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
          ￥{price / 100}起
        </div>
        <div style={addiconStyle}>＋</div>
      </div>
    </div>
  );
}
