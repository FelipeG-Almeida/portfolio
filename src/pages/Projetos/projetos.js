import planilhasBlitz from '../../assets/thumbs/planilhas-blitz.png';
import BounceBox from '../../assets/thumbs/bounce-box.png';
import Labeddit from '../../assets/thumbs/labeddit.png';
import PokedexVanilla from '../../assets/thumbs/pokedex-vanilla.png';
import Pokedex from '../../assets/thumbs/pokedex.png';
import Vollmed from '../../assets/thumbs/vollmed.jpg';

const projetos = [
	{
		id: 1,
		nome: 'Planilhas Blitz',
		descricao:
			'Plataforma de e-commerce integrada à Hotmart, especializada na criação e venda de planilhas de Excel, projetadas para automatizar e simplificar a rotina de micro e pequenas empresas.',
		thumb: planilhasBlitz,
		tags: ['React', 'Styled-components', 'Front-end'],
		git: 'https://github.com/FelipeG-Almeida/planilhas-blitz',
		demo: 'https://www.planilhasblitz.com',
		estudo: {
			ideia: 'Sempre me falaram que eu era muito bom em construir planilhas de excel, então uni o útil ao agradável e coloquei em prática os conhecimentos que adquiri e criei um website para comercializar minhas planilhas. O intuito do site, além de facilitar a divulgação das planilhas, foi solidificar meu conhecimento nas tecnologias do front.',
			stack: ['React', 'Styled-components', 'Mobile First'],
			readme: '../../assets/readme/planilhas-blitz.md',
		},
	},
	{
		id: 2,
		nome: 'BounceBox',
		descricao:
			'Aplicação que consome uma API de email temporário para que os usuários possam utilizar serviços sem expor seu email real, através de uma interface intuitiva e amigável.',
		thumb: BounceBox,
		tags: ['React', 'Front-end'],
		git: 'https://github.com/FelipeG-Almeida/react-dropmail-challenge',
		demo: 'https://felipeg-almeida.github.io/react-dropmail-challenge/',
		estudo: {
			ideia: 'Sites e serviços online geralmente exigem um endereço de e-mail válido para registrar acessar ou receber conteúdo protegido etc. No entanto o problema é que alguns desses sites podem usar nossos endereços de e-mail para enviar mensagens indesejadas. As pessoas não querem se preocupar mais com spam propagandas no email hackers e ataques de robôs. Uma boa maneira de lidar com isso é usar um endereço de e-mail temporário se você não tiver certeza de que este site é absolutamente confiável. Dessa forma você pode manter seus e-mails longe de spam e proteger sua privacidade. Este projeto consistem em uma aplicação que consome uma API de email temporário para que os usuários possam utilizar serviços sem expor seu email real.',
			stack: ['React', 'Mobile', 'Bulma CSS'],
			readme: '../../assets/readme/bounxe-box.md',
		},
	},
	{
		id: 3,
		nome: 'Labeddit',
		descricao:
			'Rede social fortemente inspirada no reddit, o projeto final que coroa meu percurso pelo curso full-stack da Labenu.',
		thumb: Labeddit,
		tags: [
			'React',
			'Styled-components',
			'NodeJs',
			'Express',
			'SQLite',
			'Full-stack',
		],
		git: 'https://github.com/FelipeG-Almeida/labeddit-backend',
		demo: 'https://felipeg-almeida.github.io/labeddit-frontend/',
		estudo: {
			ideia: 'O projeto final do curso de Desenvolvimento Full Stack da Labenu, uma cópia fiel da rede social Reddit, onde os usuários são capazes de realizar cadastro/Login, criar, editar e excluir posts e comentários, interagir com os posts e seus respectivos comentários (likes e eislikes)',
			stack: [
				'React',
				'Styled-components',
				'Mobile First',
				'NodeJs',
				'TypeScript',
				'Express',
				'SQLite',
				'Knex',
				'Jest',
				'POO',
				'MVC',
				'UUID',
				'Unit Testing',
			],
			readme: [
				'../../assets/readme/labeddit-backend.md',
				'../../assets/readme/labeddit-frontend.md',
			],
		},
	},
	{
		id: 4,
		nome: 'Pokedex Vanilla',
		descricao:
			'Desafio Pokedex desenvolvido durante o bootcamp Santander Coders 2023, consiste no consumo da API Pokedex, listando Pokemons e suas informações.',
		thumb: PokedexVanilla,
		tags: ['Front-end'],
		git: 'https://github.com/FelipeG-Almeida/pokedex-vanilla',
		demo: 'https://felipeg-almeida.github.io/pokedex-vanilla/',
		estudo: {
			ideia: 'Projeto Pokedex Desenvolvido no Bootcamp Santander. Consistem em algumas páginas simples HTML com acesso a API pública Pokedex, listando Pokemons e suas informações, usando somente Javascript, HTML e CSS',
			stack: ['Mobile', 'JavaScript', 'HTML', 'CSS'],
			readme: '../../assets/readme/pokedex-vanilla.md',
		},
	},
	{
		id: 5,
		nome: 'Pokedex React',
		descricao:
			'Projeto que não pode faltar no repositório de nenhum Dev Junior que se preze 😎 Consiste em um sistema que acessa a Api Pública PokeApi.',
		thumb: Pokedex,
		tags: ['React', 'Styled-components', 'Front-end'],
		git: 'https://github.com/FelipeG-Almeida/Pokedex',
		demo: 'https://felipeg-almeida.github.io/Pokedex/',
		estudo: {
			ideia: 'Projeto React que consiste em uma página que consulta a API pública da Pokedex, trazendo informações detalhadas sobre pokemons por meio de uma interface construída em componentes, desenvolvido no curso de Desenvolvimento Full Stack da Labenu.',
			stack: ['React', 'Styled-components', 'Mobile', 'Chakra UI'],
			readme: '../../assets/readme/planilhas-blitz.md',
		},
	},
	{
		id: 6,
		nome: 'API Vollmed',
		descricao:
			'Sistema de uma clínica com interação entre médidcos e pacientes. Desenvolvido durante o bootcamp Oracle ONE, tive a oportunidade de desenvolver minha primeira API CRUD utilizando Spring com MySQL.',
		thumb: Vollmed,
		tags: ['Java', 'Spring Boot', 'MySQL', 'Back-end'],
		git: 'https://github.com/FelipeG-Almeida/java-spring-api-rest',
		estudo: {
			ideia: 'API Rest criada com framework Java Spring, simula o sistema de uma clínica com interação entre médidcos e pacientes. Desenvolvido durante o bootcamp Oracle ONE, tive a oportunidade de desenvolver minha primeira API CRUD utilizando Spring com MySQL.',
			stack: ['Java', 'Spring Boot', 'MySQL'],
			readme: '../../assets/readme/planilhas-blitz.md',
		},
	},
];

export default projetos;
