import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as s from './style';
import PropTypes from 'prop-types';

export default function Button(props) {
	const { text, icon, link, newTab } = props;
	return (
		<s.button href={link} target={newTab && '_blank'}>
			{text}
			{icon && <FontAwesomeIcon icon={icon} size="lg" color="#fff" />}
		</s.button>
	);
}

Button.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.string,
	link: PropTypes.string,
	newTab: PropTypes.bool,
};
