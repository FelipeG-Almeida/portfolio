import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import projetos from './projetos';
import * as s from './style';
import { useState } from 'react';

export default function Projetos() {
	const [hoveredCard, setHoveredCard] = useState(null);
	const animatedComponents = makeAnimated();
	const tags = [
		{ value: 'Angular', label: 'Angular' },
		{ value: 'Back-end', label: 'Back-end' },
		{ value: 'Bulma CSS', label: 'Bulma CSS' },
		{ value: 'CSS', label: 'CSS' },
		{ value: 'Electron', label: 'Electron' },
		{ value: 'Express', label: 'Express' },
		{ value: 'Front-end', label: 'Front-end' },
		{ value: 'Full-stack', label: 'Full-stack' },
		{ value: 'HTML', label: 'HTML' },
		{ value: 'Java', label: 'Java' },
		{ value: 'JavaScript', label: 'JavaScript' },
		{ value: 'Mobile', label: 'Mobile' },
		{ value: 'MySQL', label: 'MySQL' },
		{ value: 'NodeJs', label: 'NodeJs' },
		{ value: 'PostgreSQL', label: 'PostgreSQL' },
		{ value: 'React', label: 'React' },
		{ value: 'SQLite', label: 'SQLite' },
		{ value: 'Spring', label: 'Spring' },
		{ value: 'Styled-components', label: 'Styled-components' },
		{ value: 'TypeScript', label: 'TypeScript' },
	];

	const handleMouseEnter = (index) => {
		setHoveredCard(index);
	};

	const handleMouseLeave = () => {
		setHoveredCard(null);
	};

	return (
		<s.section>
			<Title text="Projetos" />
			<p>
				Alguns dos meus projetos <s.b>pessoais e profissionais</s.b> que
				acumulei durante os anos, cada projeto com seu{' '}
				<s.b>estudo de caso.</s.b>
			</p>
			<div>
				<Select
					isMulti
					options={tags}
					components={animatedComponents}
					closeMenuOnSelect={false}
				/>
			</div>
			<s.projectsDiv>
				<s.card
					isHovered={hoveredCard === null}
					isActive={hoveredCard === 12}
					onMouseEnter={() => handleMouseEnter(12)}
					onMouseLeave={handleMouseLeave}
				>
					<div>
						<img src={projetos[11].thumb} alt={projetos[11].nome} />
						<s.div>
							{projetos[11].tags.map((tag) => (
								<small key={tag}>{tag}</small>
							))}
						</s.div>
					</div>
					<div>
						<h6>{projetos[11].nome}</h6>
						<p>{projetos[11].descricao}</p>
						<s.div>
							<Button text="Em Desenvolvimento ⏳" />
						</s.div>
					</div>
				</s.card>
				{projetos.slice(0, 11).map((projeto) => (
					<s.card
						key={projeto.id}
						isHovered={hoveredCard === null}
						isActive={hoveredCard === projeto.id}
						onMouseEnter={() => handleMouseEnter(projeto.id)}
						onMouseLeave={handleMouseLeave}
					>
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
								{projeto.demo && (
									<Button
										text="Demo"
										icon="fa-solid fa-play"
										link={projeto.demo}
										newTab={true}
									/>
								)}
								<Button
									text="Repo"
									icon="fa-brands fa-github"
									link={projeto.git}
									newTab={true}
								></Button>
							</s.div>
						</div>
					</s.card>
				))}
			</s.projectsDiv>
		</s.section>
	);
}
