import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button/Button';
import Curriculo from '/CV Felipe Almeida - Fullstack.pdf';
import { Fade } from 'react-awesome-reveal';
import * as s from './styles';

export default function Inicio() {
	return (
		<s.section id="home">
			<Fade direction="down" duration={1000} style={{ width: '100%' }}>
				<div>
					<s.h2>Procurando um desenvolvedor?</s.h2>
					<s.h1>Felipe Almeida</s.h1>
					<s.p>
						Desenvolvedor {window.innerWidth < 426 && <br></br>}
						Full-stack
					</s.p>
					<Button
						link={Curriculo}
						newTab={true}
						text="Download Currículo"
					/>
				</div>
				<s.imgDiv>
					<s.perfilDiv>
						<s.perfilImg src="./perfil.jpg" alt="" />
					</s.perfilDiv>
					<s.graphic src="./blob.svg" alt="" />
				</s.imgDiv>
			</Fade>
			<s.midias>
				<a href="https://github.com/FelipeG-Almeida" target="_blank">
					<FontAwesomeIcon
						icon="fa-brands fa-github"
						size="xl"
						color="var(--main-color)"
						cursor="pointer"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/fg-almeida"
					target="_blank"
				>
					<FontAwesomeIcon
						icon="fa-brands fa-linkedin"
						size="xl"
						color="var(--main-color)"
						cursor="pointer"
					/>
				</a>
				<a href="https://wa.me/5591998110782" target="_blank">
					<FontAwesomeIcon
						icon="fa-brands fa-whatsapp"
						size="xl"
						color="var(--main-color)"
						cursor="pointer"
					/>
				</a>
				<a href="mailto:felipegustavotheboss@gmail.com">
					<FontAwesomeIcon
						icon="fa-solid fa-envelope"
						size="xl"
						color="var(--main-color)"
						cursor="pointer"
					/>
				</a>
			</s.midias>
		</s.section>
	);
}
