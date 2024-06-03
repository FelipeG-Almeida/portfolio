import planilhasBlitz from '../../assets/thumbs/planilhas-blitz.png';
import BounceBox from '../../assets/thumbs/bounce-box.png';
import Labeddit from '../../assets/thumbs/labeddit.png';
import PokedexVanilla from '../../assets/thumbs/pokedex-vanilla.png';
import Pokedex from '../../assets/thumbs/pokedex.png';
import Vollmed from '../../assets/thumbs/vollmed.jpg';
import Labook from '../../assets/thumbs/labook.png';
import Decodificador from '../../assets/thumbs/decodificador.png';
import Protech from '../../assets/thumbs/protech.png';
import Santander from '../../assets/thumbs/santander.jpg';
import AngularStore from '../../assets/thumbs/angular-store.png';
import BovControl from '../../assets/thumbs/bov-control.png';

const projetos = [
	{
		id: 1,
		nome: 'Bov Control',
		descricao:
			'Sistema Desktop para gestão de fazendas de gado de corte, desenvolvido usando Electron e React, com intúito de auxiliar o pecuarista em gerir seu negócio.',
		thumb: BovControl,
		tags: ['Electron', 'React', 'SQLite', 'Full-stack'],
		unfinished: true,
	},
	{
		id: 2,
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
		id: 3,
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
		id: 4,
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
		id: 5,
		nome: 'Pokedex Vanilla',
		descricao:
			'Desafio Pokedex desenvolvido durante o bootcamp Santander Coders 2023, consiste no consumo da API Pokedex, listando Pokemons e suas informações.',
		thumb: PokedexVanilla,
		tags: ['JavaScript', 'HTML', 'CSS', 'Front-end'],
		git: 'https://github.com/FelipeG-Almeida/pokedex-vanilla',
		demo: 'https://felipeg-almeida.github.io/pokedex-vanilla/',
		estudo: {
			ideia: 'Projeto Pokedex Desenvolvido no Bootcamp Santander. Consistem em algumas páginas simples HTML com acesso a API pública Pokedex, listando Pokemons e suas informações, usando somente Javascript, HTML e CSS',
			stack: ['Mobile', 'JavaScript', 'HTML', 'CSS'],
			readme: '../../assets/readme/pokedex-vanilla.md',
		},
	},
	{
		id: 6,
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
			readme: '../../assets/readme/pokedex.md',
		},
	},
	{
		id: 7,
		nome: 'API Vollmed',
		descricao:
			'Sistema de uma clínica com interação entre médidcos e pacientes. Desenvolvido durante o bootcamp Oracle ONE, minha primeira API CRUD utilizando Spring com MySQL.',
		thumb: Vollmed,
		tags: ['Java', 'Spring', 'MySQL', 'Back-end'],
		git: 'https://github.com/FelipeG-Almeida/java-spring-api-rest',
		estudo: {
			ideia: 'API Rest criada com framework Java Spring, simula o sistema de uma clínica com interação entre médidcos e pacientes. Desenvolvido durante o bootcamp Oracle ONE, tive a oportunidade de desenvolver minha primeira API CRUD utilizando Spring com MySQL.',
			stack: ['Java', 'Spring', 'MySQL'],
			readme: '../../assets/readme/vollmed.md',
		},
	},
	{
		id: 8,
		nome: 'Labook',
		descricao:
			'Backend de uma rede social com o objetivo de promover a conexão e interação entre pessoas. Desenvolvido como parte do projeto final do curso de Desenvolvimento da Labenu.',
		thumb: Labook,
		tags: ['NodeJS', 'Express', 'TypeScript', 'SQLite', 'Back-end'],
		git: 'https://github.com/FelipeG-Almeida/projeto-labook-backend',
		estudo: {
			ideia: 'Este é o projeto Labook, uma rede social com o objetivo de promover a conexão e interação entre pessoas. Desenvolvido como parte do projeto final do curso de Desenvolvimento Full Stack da Labenu.',
			stack: [
				'NodeJS',
				'Express',
				'TypeScript',
				'SQLite',
				'Knex',
				'MVC',
				'UUID',
				'POO',
				'Postman',
			],
			readme: '../../assets/readme/labook.md',
		},
	},
	{
		id: 9,
		nome: 'Decodificador',
		descricao:
			'Um decodificador simples que permite criptografar e descriptografar mensagens de texto, através da substituição de letras, um desafio que faz parte do programa Oracle Next Education.',
		thumb: Decodificador,
		tags: ['HTML', 'CSS', 'JavaScript', 'Front-end'],
		git: 'https://github.com/FelipeG-Almeida/decodificador',
		demo: 'https://felipeg-almeida.github.io/decodificador/',
		estudo: {
			ideia: 'Este projeto consiste em um decodificador simples que permite criptografar e descriptografar mensagens de texto, um desafio que faz parte do programa Oracle Next Education. O decodificador utiliza uma substituição de letras minúsculas, sem acentos, por palavras-chave.',
			stack: ['HTML', 'CSS', 'JavaScript', 'Mobile'],
			readme: '../../assets/readme/decodificador.md',
		},
	},
	{
		id: 10,
		nome: 'Protech Computers',
		descricao:
			'Uma aplicação web de e-commerce de produtos de hardware desenvolvida como parte do Programa Trainee Start, da Capgemini.',
		thumb: Protech,
		tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Front-end'],
		git: 'https://github.com/FelipeG-Almeida/protech-computers',
		demo: 'https://felipeg-almeida.github.io/protech-computers/',
		estudo: {
			ideia: 'Este é o projeto ProTech Computers uma aplicação web de e-commerce de produtos de hardware desenvolvida como parte do Programa Trainee Start da Capgemini',
			stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
			readme: '../../assets/readme/protech.md',
		},
	},
	{
		id: 11,
		nome: 'API Santander',
		descricao:
			'API RESTful Java criada durante o bootcamp Santander DIO, que simula um sistema bancário com funções de conta e cartões.',
		thumb: Santander,
		tags: ['Java', 'Spring', 'PostgreSQL', 'Back-end'],
		git: 'https://github.com/FelipeG-Almeida/santander-dev-2023',
		estudo: {
			ideia: 'API RESTful Java criada durante o bootcamp Santander DIO, que simula um sistema bancário com funções de conta e cartões.',
			stack: ['Java', 'Spring', 'PostgreSQL'],
			readme: '../../assets/readme/planilhas-blitz.md',
		},
	},
	{
		id: 12,
		nome: 'Angular Store',
		descricao:
			'Cópia da PS Store (que tem jogos de Xbox e PC por algum motivo 😅) feita com Angular, desafio concluido durante o bootcamp Santander DIO.',
		thumb: AngularStore,
		tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Front-end'],
		git: 'https://github.com/FelipeG-Almeida/angular-store',
		estudo: {
			ideia: 'Cópia da PS Store (que tem jogos de Xbox e PC por algum motivo 😅) feita com Angular, desafio concluido durante o bootcamp Santander DIO.',
			stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
			readme: '../../assets/readme/angular-store.md',
		},
	},
];

export default projetos;
