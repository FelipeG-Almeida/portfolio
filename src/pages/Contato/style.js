import styled from 'styled-components';

export const section = styled.section`
	display: flex;
	flex-direction: column;
	row-gap: 20px;
	text-align: center;

	p {
		line-height: 1.5;
	}
`;

export const div = styled.div`
	display: flex;
	position: relative;
	justify-content: flex-end;
`;

export const imageDiv = styled.div`
	background-color: var(--main-color);
	border-radius: 100%;
	height: 70%;
	left: 75px;
	padding: 20px;
	position: absolute;
	width: 25%;

	img {
		border-radius: 100%;
		height: 100%;
		width: 100%;
	}
`;

export const form = styled.form`
	background-color: var(--bg-color);
	border: 1px solid #eeeef4;
	border-radius: 7px;
	padding: 20px;
	text-align: left;
	width: 65%;
	z-index: 2;

	fieldset {
		display: flex;
		flex-direction: column;
		row-gap: 10px;
	}

	label {
		font-size: 1rem;
		font-weight: 700;
	}

	input,
	textarea {
		background-color: #eeeef4;
		border: none;
		border-radius: 7px;
		font-size: 1rem;
		margin-bottom: 10px;
		padding: 10px 15px;
		resize: none;
	}

	a {
		float: right;
		text-align: center;
		width: 15%;
	}

	button {
		background: var(--main-gradient);
		border: none;
		border-radius: 7px;
		color: #fff;
		cursor: pointer;
		float: right;
		font-size: 0.75rem;
		padding: 15px;
		transition: 0.25s all;
		width: 20%;

		&:hover {
			transform: scale(1.05);
		}
	}
`;
