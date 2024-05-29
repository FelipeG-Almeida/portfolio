import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as s from './style';
import PropTypes from 'prop-types';

export default function Button(props) {
	const { text, icon } = props;
	if (icon) {
		return (
			<s.button>
				{text}
				<FontAwesomeIcon icon={icon} size='lg' color="#fff" />
			</s.button>
		);
	}
	return <s.button>{text}</s.button>;
}

Button.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.string,
};
