import styled from 'styled-components';

export const section = styled.section`
	display: flex;
	flex-direction: column;
	row-gap: 20px;
	text-align: center;
`;

export const selectDiv = styled.div`
	align-self: center;
	width: 80%;
`;

export const card = styled.div`
	background-color: rgba(54, 66, 179, 0.05);
	border: 1px solid rgba(54, 66, 179, 0.05);
	border-radius: 7px;
	color: var(--text-main);
	column-gap: 10px;
	display: flex;
	opacity: ${({ ishovered, isactive }) => (ishovered || isactive ? 1 : 0.5)};
	padding: 20px;
	text-align: left;
	transition: 0.25s all ease-in-out;

	img {
		border: 1px solid rgba(54, 66, 179, 0.1);
		border-radius: 7px;
		max-height: 150px;
		width: 210px;
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

	&:hover {
		border-color: var(--main-color);
		color: var(--main-color);
		transform: translateY(-3px);
		box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
			rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
			rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	}

	@media screen and (max-width: 630px) {
		align-items: center;
		flex-direction: column;
		row-gap: 20px;

		img {
			object-fit: cover;
			width: 100%;
		}

		p {
			font-size: 0.9rem;
		}
	}
`;

export const projectsDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-gap: 20px;

	@media screen and (max-width: 630px) {
		grid-template-columns: 1fr;
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
