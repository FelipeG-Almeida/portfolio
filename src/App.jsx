import './App.css';
import NavBar from './components/NavBar/NavBar';
import Inicio from './pages/Inicio/Inicio';
import Projetos from './pages/Projetos/Projetos';
import Sobre from './pages/Sobre/Sobre';
import Experiencias from './pages/Experiencias/Experiencias';
import Formacoes from './pages/Formacoes/Formacoes';
import Contato from './pages/Contato/Contato';
import Footer from './pages/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

function App() {
	console.log('Nenhum bug por aqui 😏')
	return (
		<main>
			<NavBar />
			<Inicio />
			<Sobre />
			<Projetos />
			<Experiencias />
			<Formacoes />
			<Contato />
			<Footer />
		</main>
	);
}

export default App;
library.add(fab, fas);
