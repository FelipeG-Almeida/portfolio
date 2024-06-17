import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '../../components/Title/Title';
import sendEmail from '../../services/formService';
import * as s from './style';
import { useState } from 'react';

export default function Contato() {
	const [enviando, setEnviando] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		setEnviando(true);

		sendEmail(e).then(() => {
			setEnviando(false);
			e.target.reset();
		});
	}

	return (
		<s.section id="contato">
			<div>
				<Title text="Contato" />
			</div>
			<p>
				Sinta-se à vontade para entrar em contato através do formulário
				abaixo. Responderei o mais rápido possível.
			</p>
			<s.div>
				<s.imageDiv>
					<img src="./perfil.jpg" alt="" />
				</s.imageDiv>
				<s.form onSubmit={handleSubmit}>
					<fieldset>
						<label htmlFor="nome">Nome</label>
						<input required name="nome" id="nome" type="text" />
						<label htmlFor="email">E-mail</label>
						<input required name="email" id="email" type="email" />
						<label htmlFor="mensagem">Mensagem</label>
						<textarea
							required
							rows="5"
							name="mensagem"
							id="mensagem"
						></textarea>
					</fieldset>
					<button type="submit">
						{enviando ? 'Enviando...' : 'Enviar'}
						{enviando && (
							<FontAwesomeIcon
								icon="fa-solid fa-circle-notch"
								size="xl"
								spin
							/>
						)}
					</button>
				</s.form>
			</s.div>
			<s.gif src="./wasup.gif" alt="" />
		</s.section>
	);
}
