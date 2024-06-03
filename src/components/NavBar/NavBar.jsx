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
					<s.desktopLi>Início</s.desktopLi>
					<s.desktopLi>Sobre mim</s.desktopLi>
					<s.desktopLi>Stack</s.desktopLi>
					<s.desktopLi>Projetos</s.desktopLi>
					<s.desktopLi>Experiências</s.desktopLi>
					<s.desktopLi>Cursos</s.desktopLi>
					<s.desktopLi>Contato</s.desktopLi>
				</s.desktopUl>
			) : (
				<s.hamburguer>
					<s.button onClick={toggleNav}>
						<FontAwesomeIcon icon="fa-solid fa-bars" />
					</s.button>
					<s.mobileUl
						style={{ display: navToggled ? 'flex' : 'none' }}
					>
						<s.mobileLi>Início</s.mobileLi>
						<s.mobileLi>Sobre mim</s.mobileLi>
						<s.mobileLi>Stack</s.mobileLi>
						<s.mobileLi>Projetos</s.mobileLi>
						<s.mobileLi>Experiências</s.mobileLi>
						<s.mobileLi>Cursos</s.mobileLi>
						<s.mobileLi>Projetos Paralelos</s.mobileLi>
						<s.mobileLi>Contato</s.mobileLi>
					</s.mobileUl>
				</s.hamburguer>
			)}
		</s.nav>
	);
}
