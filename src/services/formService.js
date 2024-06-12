/* eslint-disable no-undef */
import emailjs from '@emailjs/browser';

export default function sendEmail(e) {
	return new Promise((resolve, reject) => {
		const serviceId = 'service_bh5pg0b';
		const templateId = 'template_7xmvtle';
		const publicKey = 'Kn8VFlTAiJgjosze-';

		emailjs
			.sendForm(serviceId, templateId, e.target, {
				publicKey: publicKey,
			})
			.then(
				() => {
					resolve();
				},
				(error) => {
					console.error('Erro ao enviar o email:', error);
					reject(error);
				}
			);
	});
}
