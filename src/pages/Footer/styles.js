import styled from 'styled-components';

export const footer = styled.footer`
	align-items: center;
	background-color: var(--main-color);
	color: #fff;
	display: flex;
	flex-direction: column;
	margin-top: 5%;
	padding: 5%;
	text-align: center;

	small {
		border-top: 1px solid #fff;
		display: inline-block;
		font-size: 0.8rem;
		margin-top: 25px;
		padding-top: 25px;
		width: 100%;
	}

	p {
		font-size: 1.5rem;
		font-weight: 600;
	}

	ul {
		column-gap: 15px;
		display: flex;
		margin-top: 15px;
	}
`;
