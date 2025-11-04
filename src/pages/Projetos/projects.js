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
import PlanilhasBlitzMD from '../../assets/readme/planilhas-blitz.md';
import BounceBoxMD from '../../assets/readme/bounce-box.md';
import LabedditMD from '../../assets/readme/labeddit.md';
import PokedexVanillaMD from '../../assets/readme/pokedex-vanilla.md';
import PokedexMD from '../../assets/readme/pokedex.md';
import VollmedMD from '../../assets/readme/vollmed.md';
import LabookMD from '../../assets/readme/labook.md';
import DecodificadorMD from '../../assets/readme/decodificador.md';
import ProtechMD from '../../assets/readme/protech.md';
import SantanderMD from '../../assets/readme/santander.md';
import AngularStoreMD from '../../assets/readme/angular-store.md';

const projetos = [
    {
        id: 1,
        nome: 'Bov Control',
        descricao:
            'Desktop system for beef cattle farm management, built using Electron and React, designed to help ranchers efficiently manage their business.',
        thumb: BovControl,
        tags: ['Electron', 'React', 'SQLite', 'Full-stack'],
        unfinished: true,
    },
    {
        id: 2,
        nome: 'Planilhas Blitz',
        descricao:
            'E-commerce platform integrated with Hotmart, specialized in creating and selling Excel spreadsheets designed to automate and simplify the daily routines of micro and small businesses.',
        thumb: planilhasBlitz,
        tags: ['React', 'Styled-components', 'Front-end'],
        git: 'https://github.com/FelipeG-Almeida/planilhas-blitz',
        demo: 'https://www.planilhasblitz.com',
        estudo: {
            ideia: 'People always told me I was really good at building Excel spreadsheets, so I combined that with the skills I had been learning and built a website to commercialize them. The goal of the website, beyond making distribution easier, was also to solidify my knowledge in front-end technologies.',
            stack: ['React', 'Styled-components', 'Mobile First'],
            readme: PlanilhasBlitzMD,
        },
    },
    {
        id: 3,
        nome: 'BounceBox',
        descricao:
            'Application that consumes a temporary email API so that users can use services without exposing their real email, through a clean and intuitive UI.',
        thumb: BounceBox,
        tags: ['React', 'Front-end'],
        git: 'https://github.com/FelipeG-Almeida/react-dropmail-challenge',
        demo: 'https://felipeg-almeida.github.io/react-dropmail-challenge/',
        estudo: {
            ideia: 'Websites and online services usually require a valid email address to register, log in or access protected content. But the problem is that many of these websites can use our email to send unwanted messages. People don’t want to deal with spam and bots. A good way to handle this is by using temporary emails when you are not sure the service is trustworthy. This project consists of an app that consumes a temporary email API so users can access services without exposing their real email.',
            stack: ['React', 'Mobile', 'Bulma CSS'],
            readme: BounceBoxMD,
        },
    },
    {
        id: 4,
        nome: 'Labeddit',
        descricao:
            'Social network strongly inspired by Reddit, the final project that crowns my full-stack journey at Labenu.',
        thumb: Labeddit,
        tags: ['React', 'NodeJs', 'Express', 'SQLite', 'Full-stack'],
        git: 'https://github.com/FelipeG-Almeida/labeddit-backend',
        demo: 'https://felipeg-almeida.github.io/labeddit-frontend/',
        estudo: {
            ideia: 'Final project of the Labenu Full Stack program, a faithful Reddit clone where users can sign up/login, create/edit/delete posts and comments, and interact (likes/dislikes).',
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
                'OOP',
                'MVC',
                'UUID',
                'Unit Testing',
            ],
            readme: LabedditMD,
        },
    },
    {
        id: 5,
        nome: 'Pokedex Vanilla',
        descricao:
            'Pokedex challenge developed during Santander Coders 2023 Bootcamp, consuming the public Pokedex API to list Pokemons and their details.',
        thumb: PokedexVanilla,
        tags: ['JavaScript', 'HTML', 'CSS', 'Front-end'],
        git: 'https://github.com/FelipeG-Almeida/pokedex-vanilla',
        demo: 'https://felipeg-almeida.github.io/pokedex-vanilla/',
        estudo: {
            ideia: 'Pokedex project developed on Santander Bootcamp. Consists of simple HTML pages consuming the public Pokedex API, listing pokemons and their details using only JavaScript, HTML and CSS.',
            stack: ['Mobile', 'JavaScript', 'HTML', 'CSS'],
            readme: PokedexVanillaMD,
        },
    },
    {
        id: 6,
        nome: 'Pokedex React',
        descricao:
            'The project every good Junior Dev must have 😎 Uses the public PokeApi.',
        thumb: Pokedex,
        tags: ['React', 'Styled-components', 'Front-end'],
        git: 'https://github.com/FelipeG-Almeida/Pokedex',
        demo: 'https://felipeg-almeida.github.io/Pokedex/',
        estudo: {
            ideia: 'React project that queries the public Pokedex API, showing detailed pokemon info via a component-based UI, developed during Labenu Full Stack program.',
            stack: ['React', 'Styled-components', 'Mobile', 'Chakra UI'],
            readme: PokedexMD,
        },
    },
    {
        id: 7,
        nome: 'API Vollmed',
        descricao:
            'Clinic management system with interaction between doctors and patients. Developed during Oracle ONE Bootcamp, my first CRUD API using Spring with MySQL.',
        thumb: Vollmed,
        tags: ['Java', 'Spring', 'MySQL', 'Back-end'],
        git: 'https://github.com/FelipeG-Almeida/java-spring-api-rest',
        estudo: {
            ideia: 'REST API created with Java Spring, simulating a clinic system with interaction between doctors and patients. Developed during Oracle ONE Bootcamp, where I built my first CRUD API using Spring with MySQL.',
            stack: ['Java', 'Spring', 'MySQL'],
            readme: VollmedMD,
        },
    },
    {
        id: 8,
        nome: 'Labook',
        descricao:
            'Backend of a social network designed to promote connection and interaction between people. Developed as part of the final project of Labenu.',
        thumb: Labook,
        tags: ['NodeJS', 'Express', 'TypeScript', 'SQLite', 'Back-end'],
        git: 'https://github.com/FelipeG-Almeida/projeto-labook-backend',
        estudo: {
            ideia: 'This is the Labook project, a social network designed to promote connection and interaction between people. Developed as part of the final project of Labenu Full Stack.',
            stack: [
                'NodeJS',
                'Express',
                'TypeScript',
                'SQLite',
                'Knex',
                'MVC',
                'UUID',
                'OOP',
                'Postman',
            ],
            readme: LabookMD,
        },
    },
    {
        id: 9,
        nome: 'Decodificador',
        descricao:
            'A simple encoder/decoder that encrypts and decrypts text messages through letter substitution, part of the Oracle Next Education program.',
        thumb: Decodificador,
        tags: ['HTML', 'CSS', 'JavaScript', 'Front-end'],
        git: 'https://github.com/FelipeG-Almeida/decodificador',
        demo: 'https://felipeg-almeida.github.io/decodificador/',
        estudo: {
            ideia: 'This project consists of a simple encoder/decoder that encrypts and decrypts text messages. The decoder uses lower-case letters without accents and substitutes them with keywords.',
            stack: ['HTML', 'CSS', 'JavaScript', 'Mobile'],
            readme: DecodificadorMD,
        },
    },
    {
        id: 10,
        nome: 'Protech Computers',
        descricao:
            'Web e-commerce app for hardware products developed as part of Capgemini Trainee Start Program.',
        thumb: Protech,
        tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Front-end'],
        git: 'https://github.com/FelipeG-Almeida/protech-computers',
        demo: 'https://felipeg-almeida.github.io/protech-computers/',
        estudo: {
            ideia: 'This is ProTech Computers, a web e-commerce application for hardware products developed as part of the Capgemini Trainee Start Program.',
            stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
            readme: ProtechMD,
        },
    },
    {
        id: 11,
        nome: 'API Santander',
        descricao:
            'Java RESTful API created during Santander DIO Bootcamp, simulating a banking system with account and card features.',
        thumb: Santander,
        tags: ['Java', 'Spring', 'PostgreSQL', 'Back-end'],
        git: 'https://github.com/FelipeG-Almeida/santander-dev-2023',
        estudo: {
            ideia: 'Java RESTful API created during Santander DIO Bootcamp, simulating a banking system with account and card features.',
            stack: ['Java', 'Spring', 'PostgreSQL'],
            readme: SantanderMD,
        },
    },
    {
        id: 12,
        nome: 'Angular Store',
        descricao:
            'PS Store clone (which ironically also includes Xbox and PC games 😅) built with Angular, challenge completed during Santander DIO Bootcamp.',
        thumb: AngularStore,
        tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Front-end'],
        git: 'https://github.com/FelipeG-Almeida/angular-store',
        estudo: {
            ideia: 'PS Store clone (which ironically also includes Xbox and PC games 😅) built with Angular, challenge completed during Santander DIO Bootcamp.',
            stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
            readme: AngularStoreMD,
        },
    },
];

export default projetos;
