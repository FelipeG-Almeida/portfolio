import PropTypes from 'prop-types';
import * as s from './style';

export default function Title(props) {
	const { text } = props;
	return (
		<div>
			<s.h2>{text}</s.h2>
			<s.span></s.span>
		</div>
	);
}

Title.propTypes = {
	text: PropTypes.string,
};
