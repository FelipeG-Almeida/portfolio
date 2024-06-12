import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css.png';
import js from '../../assets/icons/js.png';
import ts from '../../assets/icons/ts.png';
import react from '../../assets/icons/react.png';
import angular from '../../assets/icons/angular.png';
import node from '../../assets/icons/node.png';
import java from '../../assets/icons/java.png';
import spring from '../../assets/icons/spring.png';
import mysql from '../../assets/icons/mysql.png';
import postgree from '../../assets/icons/postgree.png';
import git from '../../assets/icons/git.png';
import * as s from './style';

export default function Sobre() {
	const icons = [
		{ src: html, name: 'HTML' },
		{ src: css, name: 'CSS' },
		{ src: js, name: 'JavaScript' },
		{ src: ts, name: 'TypeScript' },
		{ src: react, name: 'React' },
		{ src: angular, name: 'Angular' },
		{ src: node, name: 'Node.js' },
		{ src: java, name: 'Java' },
		{ src: spring, name: 'Spring' },
		{ src: mysql, name: 'MySQL' },
		{ src: postgree, name: 'PostgreSQL' },
		{ src: git, name: 'Git' },
	];

	return (
		<s.section id='sobre'>
			<s.titleDiv>
				<Title text="Sobre mim" />
			</s.titleDiv>
			<s.aboutDiv>
				<s.h3>Conheça-me melhor!</s.h3>
				<s.p>
					Sou brasileiro, natural de Alagoas e atualmente estou em
					terras paraenses. Nascido em 1997, sou um{' '}
					<s.b>desenvolvedor Full Stack</s.b> focado em criar e manter
					aplicações web, atuando tanto no front-end quanto no
					back-end, com o objetivo de garantir o sucesso do
					produto/cliente. Você pode conferir um pouco do meu trabalho
					na seção de <s.b>projetos</s.b>.
				</s.p>
				<s.p>
					Tenho interesse em conversar sobre ciência e tecnologia, e
					em compartilhar conteúdos relacionados ao que aprendi ao
					longo dos meus anos como desenvolvedor com a comunidade Dev.
				</s.p>
				<s.p>
					Estou aberto a oportunidades de trabalho onde eu possa
					contribuir, aprender e crescer. Se você tem uma boa
					oportunidade que corresponda às minhas habilidades e
					experiências, não hesite em entrar em contato.
				</s.p>
				<Button text="Entre em contato" />
			</s.aboutDiv>
			<div>
				<s.h3>Habilidades/Stack</s.h3>
				<s.stackDiv>
					{icons.map((icon, index) => (
						<s.figure key={index}>
							<img src={icon.src} alt={`${icon.name} icon`} />
							<img src={icon.src} alt="" />
							<figcaption>{icon.name}</figcaption>
						</s.figure>
					))}
				</s.stackDiv>
			</div>
		</s.section>
	);
}
