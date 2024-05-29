import styled from 'styled-components';

export const section = styled.section`
	align-items: center;
	display: flex;
	flex-direction: row;
	height: 100%;
	justify-content: space-between;

	@media screen and (max-width: 1023px) {
		align-items: flex-start;
		flex-direction: column;
	}
`;

export const imgDiv = styled.div`
	align-items: center;
	display: flex;
	flex-grow: 1;
	justify-content: center;
	position: relative;

	@media screen and (max-width: 1023px) {
		margin-top: 75px;
		position: inherit;
	}
`;

export const perfilDiv = styled.div`
	position: relative;

	&::after {
		background-color: var(--main-color);
		border-radius: 50%;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
			rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
		content: '';
		display: block;
		height: 326px;
		left: -8px;
		position: absolute;
		top: -15px;
		width: 314px;
		z-index: 1;

		@media screen and (min-width: 1441px) {
			height: 536px;
			width: 524px;
		}
	}
`;

export const perfilImg = styled.img`
	border: 4px solid var(--bg-color);
	border-radius: 50%;
	height: 290px;
	position: relative;
	width: 290px;
	z-index: 2;

	@media screen and (min-width: 1441px) {
		height: 500px;
		width: 500px;
	}
`;

export const graphic = styled.img`
	right: 0;
	position: absolute;
	width: 60%;
	z-index: 0;
`;

export const h2 = styled.h2`
	font-size: 1rem;
	font-weight: 500;
`;

export const h1 = styled.h1`
	font-size: 2.5rem;
	font-weight: 900;
	margin: 10px 0;
	text-transform: uppercase;
`;

export const p = styled.p`
	font-size: 1.1rem;
	font-weight: 400;
	line-height: 1.25;
	margin-bottom: 45px;
	text-transform: uppercase;
`;

export const midias = styled.div`
	border-radius: 7px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	display: flex;
	flex-direction: column;
	padding: 15px;
	position: absolute;
	right: 0;
	row-gap: 20px;
`;
