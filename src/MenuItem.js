function MenuItem({label='',link=''}) {
  return (
    <li style={{display:'inline-block'}}><a href={link} style={{display: 'block',  color: 'white',  textalign: 'center', padding: '14px 16px',  textDecoration: 'none'}}>{label}</a></li>
  );
}

export default MenuItem;
