import styled from 'styled-components';

export const section = styled.section`
	display: flex;
	flex-direction: column;
	row-gap: 20px;
	text-align: center;

	p {
		line-height: 1.5;
	}
	@media screen and (min-width: 1920px) {
		padding: 5% 10%;
	}
`;

export const div = styled.div`
	display: grid;
	grid-gap: 50px;
	grid-template-columns: 1fr 2fr;
	margin-top: 30px;
	text-align: left;

	@media screen and (max-width: 1023px) {
		grid-template-columns: 1fr;
	}
`;

export const h3 = styled.h3`
	font-size: 1.6rem;
	font-weight: 800;
	margin-bottom: 10px;
	grid-column: 1 / span 2;

	@media screen and (max-width: 767px) {
		grid-column: 1;	
	}
`;

export const cardAcademicas = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 10px;
`;

export const cardCursos = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: max-content;
	gap: 10px;

	@media screen and (max-width: 767px) {
		grid-template-columns: 1fr;
	}
`;

export const card = styled.div`
	background-color: #eeeef4;
	border-radius: 7px;
	box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
	column-gap: 20px;
	display: flex;
	line-height: 1.5;
	padding: 20px;
	position: relative;

	h5 {
		font-size: 1.1rem;
		font-weight: 600;
	}

	p {
		font-size: 1.1rem;
	}

	small {
		font-weight: 600;
	}
`;

export const imageDiv = styled.div`
	align-items: center;
	background-color: #eeeef4;
	border: 7px solid var(--bg-color);
	border-radius: 100%;
	bottom: -25px;
	box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
	display: flex;
	justify-content: center;
	padding: 10px;
	position: absolute;
	right: -25px;
	z-index: 2;

		img {
			object-fit: contain;
			height: 55px;
			width: 55px;
		}
`;

export const b = styled.b`
	font-weight: 800;
`;
