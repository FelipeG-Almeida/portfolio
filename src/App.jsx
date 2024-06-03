import './App.css';
import NavBar from './components/NavBar/NavBar';
import Inicio from './pages/Inicio/Inicio';
import Projetos from './pages/Projetos/Projetos';
import Sobre from './pages/Sobre/Sobre';
import Experiencias from './pages/Experiencias/Experiencias';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

function App() {
	return (
		<main>
			<NavBar />
			<Inicio />
			<Sobre />
			<Projetos />
			<Experiencias />
		</main>
	);
}

export default App;
library.add(fab, fas);
