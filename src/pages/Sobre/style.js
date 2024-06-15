import styled from 'styled-components';
import { Link } from 'react-scroll';

export const section = styled.section`
	display: grid;
	grid-gap: 50px;
	grid-template-columns: 1fr 1fr;

	@media screen and (max-width: 1023px) {
		display: flex;
		flex-direction: column;
		grid-gap: 20px;
	}
`;

export const titleDiv = styled.div`
	grid-column: 1 / span 2;
	text-align: center;
`;

export const aboutDiv = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 10px;
`;

export const h3 = styled.h3`
	font-size: 1.6rem;
	font-weight: 800;
	margin-bottom: 10px;
`;

export const p = styled.p`
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.75;

	&:nth-child(4) {
		margin-bottom: 10px;
	}
`;

export const b = styled.b`
	font-weight: 800;
`;

export const stackDiv = styled.div`
	align-items: center;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	justify-items: center;
	margin-top: 20px;
	row-gap: 10px;

	@media screen and (max-width: 656px) {
		grid-template-columns: repeat(auto-fit, minmax(105px, 1fr));
	}
`;

export const figure = styled.figure`
	align-items: center;
	display: flex;
	flex-direction: column;
	position: relative;
	row-gap: 10px;
	width: max-content;

	img:first-child {
		filter: grayscale(1);
		pointer-events: none;
		position: relative;
		transition: all 0.25s ease;
		z-index: 2;
	}

	img:nth-child(2) {
		position: absolute;
		top: 2px;
		left: 0;
		transform: scale(1.05);
		transition: all 0.25s ease;
		opacity: 0;
		z-index: 1;
	}

	figcaption {
		font-weight: 500;
	}

	&:hover {
		img:first-child {
			filter: grayscale(0);
		}

		img:nth-child(2) {
			opacity: 1;
			filter: blur(24px);
		}
	}
`;

export const button = styled(Link)`
	background: var(--main-gradient);
	border: none;
	border-radius: 7px;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-size: 0.75rem;
	padding: 15px;
	transition: 0.25s all;
	width: fit-content;

	&:hover {
		transform: scale(1.05);
	}
`;
