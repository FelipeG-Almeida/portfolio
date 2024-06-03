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
	display: grid;
	grid-template-columns: 40% 40%;
	justify-content: space-around;
`;

export const card = styled.div`
	align-items: center;
	background-color: #fff;
	border-radius: 25px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	display: flex;
	flex-direction: column;
	padding: 20px 30px;
	row-gap: 5px;

	div {
		align-items: center;
		display: flex;
		justify-content: space-around;
		width: 100%;
	}

	img {
		height: 125px;
		width: 125px;
	}

	h5 {
		font-size: 2rem;
		font-weight: 800;
	}

	small {
		display: inline-block;
		font-weight: 600;
		font-size: 0.8rem;
		text-align: right;
	}

	h6 {
		font-size: 1.15rem;
		font-weight: 700;
	}

	p {
		font-size: 0.9rem;
	}
`;
