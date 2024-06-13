import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import ModalProjeto from '../../components/ModalProjeto/ModalProjeto';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import projects from './projects';
import * as s from './style';
import { useState } from 'react';
import ReactModal from 'react-modal';

export default function Projetos() {
	const [hoveredCard, setHoveredCard] = useState(null);
	const [projetos, setProjetos] = useState(projects);
	const [projetoSelecionado, setProjetoSelecionado] = useState();
	const [modal, setModal] = useState(false);
	const selectedOptions = [];
	const animatedComponents = makeAnimated();

	const tags = [
		{ value: 'Angular', label: 'Angular' },
		{ value: 'Back-end', label: 'Back-end' },
		{ value: 'CSS', label: 'CSS' },
		{ value: 'Electron', label: 'Electron' },
		{ value: 'Express', label: 'Express' },
		{ value: 'Front-end', label: 'Front-end' },
		{ value: 'Full-stack', label: 'Full-stack' },
		{ value: 'HTML', label: 'HTML' },
		{ value: 'Java', label: 'Java' },
		{ value: 'JavaScript', label: 'JavaScript' },
		{ value: 'MySQL', label: 'MySQL' },
		{ value: 'NodeJs', label: 'NodeJs' },
		{ value: 'PostgreSQL', label: 'PostgreSQL' },
		{ value: 'React', label: 'React' },
		{ value: 'SQLite', label: 'SQLite' },
		{ value: 'Spring', label: 'Spring' },
		{ value: 'Styled-components', label: 'Styled-components' },
		{ value: 'TypeScript', label: 'TypeScript' },
	];

	const handleChangeSelect = (e) => {
		if (e === null || e.length === 0) {
			setProjetos(projects);
		} else {
			const filteredProjects = projects.filter((projeto) =>
				e.some((tag) => projeto.tags.includes(tag.value))
			);
			setProjetos(filteredProjects);
		}
	};

	const handleMouseEnter = (index) => {
		setHoveredCard(index);
	};

	const handleMouseLeave = () => {
		setHoveredCard(null);
	};

	const handleOpenModal = (projeto) => {
		setProjetoSelecionado(projeto);
		setModal(true);
	};

	const handleCloseModal = () => {
		setModal(false);
	};

	ReactModal.setAppElement('#root');

	return (
		<s.section id="projetos">
			<Title text="Projetos" />
			<p>
				Alguns dos meus projetos <s.b>pessoais e profissionais</s.b> que
				acumulei durante os anos, cada projeto com seu{' '}
				<s.b>estudo de caso.</s.b>
			</p>
			<s.selectDiv>
				<Select
					placeholder="Pesquisar tags..."
					isMulti
					options={tags}
					components={animatedComponents}
					closeMenuOnSelect={false}
					defaultValue={selectedOptions}
					onChange={(e) => handleChangeSelect(e)}
				/>
			</s.selectDiv>
			<s.projectsDiv>
				{projetos.map((projeto) => (
					<s.card
						key={projeto.id}
						ishovered={hoveredCard === null ? 'true' : undefined}
						isactive={
							hoveredCard === projeto.id ? 'false' : undefined
						}
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
								{projeto.unfinished ? (
									<Button text="Em Desenvolvimento ⏳" />
								) : (
									<>
										<button
											onClick={() =>
												handleOpenModal(projeto)
											}
										>
											Estudo de caso
										</button>
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
										/>
									</>
								)}
							</s.div>
						</div>
					</s.card>
				))}
			</s.projectsDiv>
			{modal && (
				<ModalProjeto
					modal={modal}
					closeModal={handleCloseModal}
					projeto={projetoSelecionado}
				/>
			)}
		</s.section>
	);
}
