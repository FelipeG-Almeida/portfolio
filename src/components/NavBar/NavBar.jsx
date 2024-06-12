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
						Início
					</s.desktopLi>
					<s.desktopLi to="sobre" smooth={true} duration={500}>
						Sobre mim
					</s.desktopLi>
					<s.desktopLi to="projetos" smooth={true} duration={500}>
						Projetos
					</s.desktopLi>
					<s.desktopLi to="experiencias" smooth={true} duration={500}>
						Experiências
					</s.desktopLi>
					<s.desktopLi to="formacoes" smooth={true} duration={500}>
						Formação
					</s.desktopLi>
					<s.desktopLi to="contato" smooth={true} duration={500}>
						Contato
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
							Início
						</s.mobileLi>
						<s.mobileLi
							onClick={toggleNav}
							to="sobre"
							smooth={true}
							duration={500}
							offset={-250}
						>
							Sobre mim
						</s.mobileLi>
						<s.mobileLi
							onClick={toggleNav}
							to="projetos"
							smooth={true}
							duration={500}
							offset={-250}
						>
							Projetos
						</s.mobileLi>
						<s.mobileLi
							onClick={toggleNav}
							to="experiencias"
							smooth={true}
							duration={500}
							offset={-250}
						>
							Experiências
						</s.mobileLi>
						<s.mobileLi
							onClick={toggleNav}
							to="formacoes"
							smooth={true}
							duration={500}
							offset={-250}
						>
							Formação
						</s.mobileLi>
						<s.mobileLi
							onClick={toggleNav}
							to="contato"
							smooth={true}
							duration={500}
							offset={-250}
						>
							Contato
						</s.mobileLi>
					</s.mobileUl>
				</s.hamburguer>
			)}
		</s.nav>
	);
}
