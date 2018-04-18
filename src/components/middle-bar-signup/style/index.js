import styled from 'styled-components';
import { grid, color, font } from '../../../globals/';

export const MiddleContent = styled.div`
height: ${grid.scale(100)};
width: ${grid.scale(45)};
display:flex;
flex-direction:column;
background-color:${color.white};
font-family:${font.bold};
font-size:${grid.scale(3)};
color:${color.black};
justify-content:center;
align-items:center;
flex-grow:1.5;
float: left;
`;
