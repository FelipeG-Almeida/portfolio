import styled from 'styled-components';

export const section = styled.section`
	display: flex;
	flex-direction: column;
	line-height: 1.5;
	row-gap: 20px;
	text-align: center;
`;

export const b = styled.b`
	font-weight: 800;
`;

export const jobsDiv = styled.div`
	column-gap: 20px;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	justify-content: space-between;
	row-gap: 20px;
`;

export const card = styled.div`
	align-items: center;
	border-radius: 7px;
	box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
	column-gap: 30px;
	display: flex;
	padding: 20px;
	text-align: left;

	img {
		height: 115px;
		width: 115px;
	}

	h5 {
		font-size: 1.25rem;
		font-weight: 700;
	}

	small {
		background-color: rgba(54, 66, 179, 0.1);
		border-radius: 7px;
		display: inline-block;
		font-weight: 500;
		font-size: 0.9rem;
		margin: 10px 0;
		padding: 5px 10px;
	}

	h6 {
		font-size: 1.1rem;
		font-weight: 600;
	}

	p {
		font-size: 0.9rem;
		font-weight: 500;
	}

	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;
