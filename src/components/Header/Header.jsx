import logo from '../../assets/logo.svg';
import styles from './Header.module.css';

const Header = (props) => (
  <header class={styles.header}>
    <img src={logo} class={styles.logo} alt="logo" />
    {props.title}
    {props.link}
  </header>
)

export default Header;