import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as s from './style';
import { useState } from 'react';

export default function NavBar() {
	const [navToggled, setNavToggled] = useState(false);

	function toggleNav() {
		setNavToggled(!navToggled);
	}

	return (
		<s.nav>
			{window.innerWidth >= 1024 ? (
				<s.desktopUl>
					<s.desktopLi to="home" smooth={true} duration={500}>
						Home
					</s.desktopLi>
					<s.desktopLi to="sobre" smooth={true} duration={500}>
						About
					</s.desktopLi>
					<s.desktopLi to="projetos" smooth={true} duration={500}>
						Projects
					</s.desktopLi>
					<s.desktopLi to="experiencias" smooth={true} duration={500}>
						Experience
					</s.desktopLi>
					<s.desktopLi to="formacoes" smooth={true} duration={500}>
						Education
					</s.desktopLi>
					<s.desktopLi to="contato" smooth={true} duration={500}>
						Contact
					</s.desktopLi>
				</s.desktopUl>
			) : (
				<s.hamburguer>
					<s.button onClick={toggleNav}>
						<FontAwesomeIcon icon="fa-solid fa-bars" />
					</s.button>
					<s.mobileUl
						style={{ display: navToggled ? 'flex' : 'none' }}
					>
						<s.mobileLi
							onClick={toggleNav}
							to="home"
							smooth={true}
							duration={500}
							offset={-250}
						>
							Home
						</s.mobileLi>
						<s.mobileLi
							onClick={toggleNav}
							to="sobre"
							smooth={true}
							duration={500}
							offset={-250}
						>
							About
						</s.mobileLi>
						<s.mobileLi
							onClick={toggleNav}
							to="projetos"
							smooth={true}
							duration={500}
							offset={-250}
						>
							Projects
						</s.mobileLi>
						<s.mobileLi
							onClick={toggleNav}
							to="experiencias"
							smooth={true}
							duration={500}
							offset={-250}
						>
							Experience
						</s.mobileLi>
						<s.mobileLi
							onClick={toggleNav}
							to="formacoes"
							smooth={true}
							duration={500}
							offset={-250}
						>
							Education
						</s.mobileLi>
						<s.mobileLi
							onClick={toggleNav}
							to="contato"
							smooth={true}
							duration={500}
							offset={-250}
						>
							Contact
						</s.mobileLi>
					</s.mobileUl>
				</s.hamburguer>
			)}
		</s.nav>
	);
}

