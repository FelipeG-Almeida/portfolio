import styled from 'styled-components';

export const section = styled.section`
	display: flex;
	flex-direction: column;
	row-gap: 20px;
	text-align: center;
`;

export const projectsDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-gap: 20px;
`;

export const card = styled.div`
	background-color: rgba(54, 66, 179, 0.05);
	border-radius: 7px;
	color: var(--text-main);
	column-gap: 10px;
	display: flex;
	padding: 20px;
	text-align: left;

	img {
		border: 2px solid rgba(54, 66, 179, 0.1);
		border-radius: 7px;
		max-height: 150px;
	}

	h6 {
		font-size: 1.2rem;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 1rem;
		line-height: 1.5;
		margin-bottom: 10px;
	}
`;

export const div = styled.div`
	gap: 5px;
	display: flex;
	flex-wrap: wrap;
	margin-top: 10px;

	small {
		background-color: rgba(54, 66, 179, 0.1);
		border-radius: 7px;
		font-size: 0.8rem;
		padding: 5px;
	}
`;

export const b = styled.b`
	font-weight: 800;
`;
