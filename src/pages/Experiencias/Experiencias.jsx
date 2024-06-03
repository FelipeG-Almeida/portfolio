import Title from '../../components/Title/Title';
import Artemis from '/artemis.jpg';
import * as s from './styles';

export default function Experiencias() {
	return (
		<s.section>
			<Title text="Experiências" />
			<p>
				Um resumo das minhas <s.b>experiências profissionais</s.b>,
				destacando as habilidades e conhecimentos adquiridos ao longo da
				minha carreira.
			</p>
			<s.jobsDiv>
				<s.card>
					<div>
						<img src={Artemis} alt="Artemis Corporation Logo" />
						<h5>
							Artemis
							<br />
							Corporation
						</h5>
					</div>
					<small>02/2024 - Presente</small>
					<h6>Desenvolvedor Full-stack Junior</h6>
					<p>
						Crio e aprimoro uma plataforma de criação de chatbots
						para nossos clientes. No backend, uso{' '}
						<s.b>Java e Spring</s.b> para desenvolver APIs
						eficientes e gerenciar bancos de dados
						<s.b> MySQL</s.b>. No front-end, trabalho com{' '}
						<s.b>Angular, TypeScript e Bootstrap</s.b> para criar
						interfaces intuitivas e atraentes.
					</p>
				</s.card>
				<s.card>
					<div>
						<img src="" alt="" />
						<h5>Artemis Corporation</h5>
					</div>
					<small>02/2024 - Presente</small>
					<h6>Desenvolvedor Full-stack Junior</h6>
					<p>
						Crio e aprimoro plataforma de criação de chatbots para
						nossos clientes. No backend, uso Java e Spring para
						desenvolver APIs eficientes e gerenciar bancos de dados
						MySQL. No front-end, trabalho com Angular, TypeScript e
						Bootstrap para criar interfaces intuitivas e atraentes.
					</p>
				</s.card>
			</s.jobsDiv>
		</s.section>
	);
}
