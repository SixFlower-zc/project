export default function orderComponent({
  url = 'https://mxsa-oss.mxbc.net/oss/product/20241017/d853fb2ceb4944a8b4362742eb045181.jpg',
  name = '茉莉奶绿',
  flag = true,
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100px',
        backgroundColor: 'white',
        borderRadius: '10px',
        display: 'flex',
        overflow: 'hidden',
        marginBottom: '10px',
      }}
    >
      <img src={url} alt="" />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h3 style={{ padding: '10px' }}>{name}</h3>
        <div style={{ padding: '10px', color: flag ? 'green' : 'red' }}>
          {flag ? '已签收' : '已取消'}
        </div>
      </div>
    </div>
  );
}
