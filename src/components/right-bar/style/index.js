import styled from 'styled-components';
import { grid, color } from '../../../globals/';

export const RightUserContents = styled.div`
height: ${grid.scale(100)};
width: ${grid.scale(45)};
display:flex;
flex-direction:column;
background-color:${color.purple};
color:${color.black};
justify-content:top;
align-items:center;
flex-grow:1.5;
float: left;
`;
