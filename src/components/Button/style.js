import styled from 'styled-components';

export const button = styled.button`
	background: var(--main-gradient);
	border: none;
	border-radius: 7px;
	color: #fff;
	cursor: pointer;
	font-size: 0.75rem;
	padding: 15px;
	transition: 0.25s all;
	width: fit-content;

	svg {
		margin-left: 7px;
	}

	&:hover {
		transform: scale(1.05);
	}
`;
