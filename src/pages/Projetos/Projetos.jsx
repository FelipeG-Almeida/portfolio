import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import projetos from './projetos';
import * as s from './style';

export default function Projetos() {
	return (
		<s.section>
			<Title text="Projetos" />
			<p>
				Alguns dos meus projetos <s.b>pessoais e profissionais</s.b> que
				acumulei durante os anos, cada projeto com seu{' '}
				<s.b>estudo de caso.</s.b>
			</p>
			<s.projectsDiv>
				{projetos.map((projeto) => (
					<s.card key={projeto.id}>
						<div>
							<img src={projeto.thumb} alt={projeto.nome} />
							<s.div>
								{projeto.tags.map((tag) => (
									<small key={tag}>{tag}</small>
								))}
							</s.div>
						</div>
						<div>
							<h6>{projeto.nome}</h6>
							<p>{projeto.descricao}</p>
							<s.div>
								<Button text="Estudo de caso" />
								<Button text="Demo" />
								<Button
									text="Repo"
									icon="fa-brands fa-github"
								></Button>
							</s.div>
						</div>
					</s.card>
				))}
			</s.projectsDiv>
		</s.section>
	);
}
