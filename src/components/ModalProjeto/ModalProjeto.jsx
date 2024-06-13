import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import MarkdownRenderer from '../../services/MarkDownRenderer';
import * as s from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ModalProjeto(props) {
	const { modal, closeModal, projeto } = props;

	const customStyles = {
		content: {
			bottom: 'auto',
			height: '80%',
			left: '50%',
			marginRight: '-50%',
			right: 'auto',
			top: '50%',
			transform: 'translate(-50%, -50%)',
			width: '80%',
		},
		overlay: { zIndex: 1000 },
	};

	return (
		<ReactModal
			isOpen={modal}
			onRequestClose={closeModal}
			style={customStyles}
			shouldCloseOnOverlayClick={true}
		>
			<s.modalDiv>
				<s.modalHeader>
					<h2>{projeto.nome}</h2>
					<FontAwesomeIcon
						onClick={closeModal}
						icon="fa-solid fa-xmark"
						size="2xl"
					/>
				</s.modalHeader>
				<s.modalBody>
					<div>
						<h4>Ideia 💡</h4>
						<p>{projeto.estudo.ideia}</p>
						<h4>Tecnologias e Métodologias</h4>
						<s.tags>
							{projeto.estudo.stack.map((s) => (
								<small key={s}>{s}</small>
							))}
						</s.tags>
					</div>
					<s.thumb>
						<img src={projeto.thumb} alt="" />
					</s.thumb>
				</s.modalBody>
				<MarkdownRenderer filePath={projeto.estudo.readme} />
			</s.modalDiv>
		</ReactModal>
	);
}

ModalProjeto.propTypes = {
	modal: PropTypes.bool,
	closeModal: PropTypes.func,
	projeto: PropTypes.object,
};
