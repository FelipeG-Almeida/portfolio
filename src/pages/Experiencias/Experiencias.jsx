import Title from '../../components/Title/Title';
import Artemis from '/artemis.png';
import Blitz from '/blitz.png';
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
					<img src={Artemis} alt="Artemis Corporation Logo" />
					<div>
						<h5>Artemis Corporation</h5>
						<h6>Desenvolvedor Full-stack Junior</h6>
						<small>02/2024 - Presente</small>
						<p>
							Crio e aprimoro uma plataforma de criação de
							chatbots para nossos clientes. No backend, uso{' '}
							<s.b>Java e Spring</s.b> para desenvolver APIs
							eficientes e gerenciar bancos de dados
							<s.b> MySQL</s.b>. No front-end, trabalho com{' '}
							<s.b>Angular, TypeScript e Bootstrap</s.b> para
							criar interfaces intuitivas e atraentes.
						</p>
					</div>
				</s.card>
				<s.card>
					<img src={Blitz} alt="Planilhas Blitz Logo" />
					<div>
						<h5>Planilhas Blitz</h5>
						<h6>Desenvolvedor Front-end</h6>
						<small>01/2021 - Presente</small>
						<p>
							Desenvolvi um site com o objetivo de comercializar
							planilhas de Excel para automatizar e facilitar a
							rotina de micro e pequenas empresas. Além de
							promover essas planilhas, criei o site para
							solidificar meu conhecimento nas principais
							tecnologias de front-end:
							<s.b> HTML, CSS, JavaScript e React</s.b>.
						</p>
					</div>
				</s.card>
			</s.jobsDiv>
		</s.section>
	);
}
