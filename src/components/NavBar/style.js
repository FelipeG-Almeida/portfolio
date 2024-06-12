import styled from 'styled-components';
import { Link } from 'react-scroll';

export const nav = styled.nav`
	background-color: var(--bg-color);
	box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
	display: flex;
	justify-content: flex-end;
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 999;
`;

export const desktopUl = styled.ul`
	align-items: center;
	column-gap: 15px;
	display: flex;
	justify-content: flex-end;
	padding: 10px 40px;
`;

export const hamburguer = styled.div`
	align-items: flex-end;
	display: flex;
	flex-direction: column;
	padding: 20px 40px;
`;

export const button = styled.button`
	background-color: var(--bg-color);
	border: none;
`;

export const mobileUl = styled.ul`
	align-items: flex-end;
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	position: static;
	right: 0;
	z-index: 999;
`;

export const desktopLi = styled(Link)`
	border-radius: 7px;
	cursor: pointer;
	font-size: 0.9rem;
	font-weight: 300;
	padding: 10px 20px;
	transition: all 0.25s ease-in-out;

	&:hover {
		background-color: var(--secondary-color);
		color: #fff;
	}
`;

export const mobileLi = styled(Link)`
	font-size: 0.9rem;
	font-weight: 300;
	padding: 10px;
`;
