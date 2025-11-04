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
				<Title text="Contact" />
			</div>
			<p>
				Feel free to reach out using the form below. I will get back to you as soon as possible.
			</p>
			<s.div>
				<s.imageDiv>
					<img src="./perfil-git.jpg" alt="" />
				</s.imageDiv>
				<s.form onSubmit={handleSubmit}>
					<fieldset>
						<label htmlFor="nome">Name</label>
						<input required name="nome" id="nome" type="text" />
						<label htmlFor="email">Email</label>
						<input required name="email" id="email" type="email" />
						<label htmlFor="mensagem">Message</label>
						<textarea
							required
							rows="5"
							name="mensagem"
							id="mensagem"
						></textarea>
					</fieldset>
					<button type="submit">
						{enviando ? 'Sending...' : 'Send'}
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
