import styled from 'styled-components';

export const modalDiv = styled.div`
	color: var(--text-main);
	font-family: 'Montserrat', sans-serif;
	padding: 20px;
`;

export const modalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;

	h2 {
		font-size: 1.5rem;
		font-weight: 700;
	}

	svg {
		cursor: pointer;
	}
`;

export const modalBody = styled.div`
	column-gap: 20px;
	display: grid;
	grid-template-columns: 50% 50%;

	h4 {
		border-bottom: 1px solid var(--main-color);
		color: var(--main-color);
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 15px;
		padding-bottom: 5px;
	}

	p {
		font-weight: 500;
		line-height: 1.5;
		margin-bottom: 15px;
	}
`;

export const tags = styled.div`
	column-gap: 5px;
	display: flex;
	flex-wrap: wrap;
	row-gap: 5px;

	small {
		background-color: rgba(54, 66, 179, 0.1);
		border-radius: 7px;
		font-size: 0.8rem;
		padding: 5px;
	}
`;

export const thumb = styled.div`
	align-items: center;
	background-color: #eeeef4;
	border-radius: 7px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
	display: flex;
	height: fit-content;
	padding: 10px;

	img {
		border-radius: 7px;
		object-fit: contain;
		width: 100%;
	}
`;

export const readmeDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	row-gap: 20px;
	width: 100%;

	img {
		max-width: 100%;
	}

	h1 {
		border-bottom: 1px solid #eeeef4;
		font-size: 2rem;
		font-weight: 800;
		padding-bottom: 10px;
	}

	h2 {
		border-bottom: 1px solid #eeeef4;
		font-size: 1.25rem;
		font-weight: 600;
		padding-bottom: 10px;
	}

	p,
	li {
		font-weight: 500;
		line-height: 1.5;
	}

	ul,
	ol {
		display: flex;
		flex-direction: column;
		list-style-type: disc;
		padding-left: 20px;
		row-gap: 10px;
	}

	ol {
		list-style-type: decimal;
	}

	code {
		background-color: #eeeef4;
		display: inline-block;
		padding: 10px;
	}
`;
