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

	@media screen and (max-width: 767px) {
		align-items: center;
		flex-direction: column-reverse;
		row-gap: 20px;
	}
`;

export const imageDiv = styled.div`
	background: var(--main-gradient);
	border-radius: 100%;
	bottom: 50px;
	box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
		rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
	height: 70%;
	left: 5%;
	padding: 20px;
	position: absolute;
	width: auto;

	img {
		border-radius: 100%;
		height: 100%;
		width: 100%;
	}

	@media screen and (max-width: 1023px) {
		left: -25px;
		padding: 13px;
	}

	@media screen and (max-width: 767px) {
		position: initial;
		max-width: 50%;
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

		svg {
			margin-left: 10px;
		}

		&:hover {
			transform: scale(1.05);
		}
	}

	@media screen and (max-width: 1023px) {
		button {
			width: 120px;
		}
	}

	@media screen and (max-width: 767px) {
		width: 100%;

		button {
			width: 100%;
		}
	}
`;
