import './App.css';
import Logo from './Logo';
function Menu() {
  return (
      <ul style={{listStyleType: 'none',margin: '0', padding: '0',overflow: 'hidden', backgroundColor: '#333'}}>
      <li style={{display:'inline-block'}}><a style={{display: 'block',  color: 'white',  textalign: 'center', padding: '14px 16px',  textDecoration: 'none'}}><Logo/></a></li>
      <li style={{display:'inline-block'}}><a style={{display: 'block',  color: 'white',  textalign: 'center', padding: '14px 16px',  textDecoration: 'none'}}>Home</a></li>
      <li style={{display:'inline-block'}}><a  style={{display: 'block',  color: 'white',  textalign: 'center', padding: '14px 16px',  textDecoration: 'none'}}>Product</a></li>
      <li style={{display:'inline-block'}}><a  style={{display: 'block',  color: 'white',  textalign: 'center', padding: '14px 16px',  textDecoration: 'none'}}>Service</a></li>
      <li style={{display:'inline-block'}}><a  style={{display: 'block',  color: 'white',  textalign: 'center', padding: '14px 16px',  textDecoration: 'none'}}>Help</a></li>
    </ul>
  );
}

export default Menu;
