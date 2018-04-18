import styled from 'styled-components';
import { grid, color, font } from '../../../globals/';

export const LeftBarStyle = styled.div`
  height:100%;
  width: ${grid.scale(25)};
  background-color:${color.dark};
  display:flex;
  flex-direction:column;
  float: left;
  .left-bar-menu-brand-container{
    font-family:${font.bold};
    font-size:${grid.scale(3)};
    color:${color.white};
    display:flex;
    justify-content:center;
    align-items:center;
    flex-grow:1.5;
  }
  .left-bar-menu-navigation-container{
    flex-grow:8;
    padding: 0 ${grid.scale(1.15)};
    .side-bar-button-item{
      display:flex;
      border-radius:${grid.half};
      font-size:${grid.scale(1.5)};
      color:${color.grey1};
      padding: ${grid.scale(1.5)} ${grid.scale(2)};
      cursor:pointer;
      transition: background-color 0.75s ease, border-left 0.1s ease, color 0.75s ease;
      .side-bar-menu-navigation-label{
        display:flex;
        justify-content:flex-start;
      }
      i {
        font-size:${grid.scale(2)};
        width:${grid.scale(5)};
      }
      &.active{
        background-color:${color.grey0};
        border-left:3px solid ${color.purple};
        color:${color.purple};
      }
    }
  }
  .left-bar-menu-profile-container{
    flex-grow:4;
  }
  .left-bar-menu-control-container{
    flex-grow:2;
  }
`
