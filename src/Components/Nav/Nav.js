import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.css';
import logo from '../../assets/images/logo.svg';

function Nav() {
	return (
		<div className={styles.navigation}>
			<Link to="/" className={styles.logo}>
				<img src={logo} alt="Logo" />
				<span>React SSR Boilerplate</span>
			</Link>
			<ul className={styles.menu}>
				<li>
					<NavLink to="/about" activeClassName={styles.active}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/article" activeClassName={styles.active}>
						Article
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
