import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as s from './styles';

export default function Footer() {
	return (
		<s.footer>
				<p>SOCIAL</p>
				<ul>
					<a
						href="https://github.com/FelipeG-Almeida"
						target="_blank"
					>
						<FontAwesomeIcon
							icon="fa-brands fa-github"
							size="2xl"
							color="#fff"
							cursor="pointer"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/fg-almeida"
						target="_blank"
					>
						<FontAwesomeIcon
							icon="fa-brands fa-linkedin"
							size="2xl"
							color="#fff"
							cursor="pointer"
						/>
					</a>
					<a href="https://wa.me/5591998110782" target="_blank">
						<FontAwesomeIcon
							icon="fa-brands fa-whatsapp"
							size="2xl"
							color="#fff"
							cursor="pointer"
						/>
					</a>
					<a href="mailto:felipegustavotheboss@gmail.com">
						<FontAwesomeIcon
							icon="fa-solid fa-envelope"
							size="2xl"
							color="#fff"
							cursor="pointer"
						/>
					</a>
				</ul>
			<small>
				© Copyright {new Date().getFullYear()}. Feito por Felipe
				Almeida... óbvio
			</small>
		</s.footer>
	);
}
