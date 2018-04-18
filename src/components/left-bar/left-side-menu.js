import React from 'react';
import { LeftBarStyle } from './style/';

export default ({onAddClientClick}) => (
      <LeftBarStyle>
        <div className='left-bar-menu-brand-container'>
          <i className='servicestack icon' />
          BridgeLink
        </div>
        <div className='left-bar-menu-navigation-container'>
          <div className={`side-bar-button-item`}>
            <i className='home icon' onClick={onAddClientClick}/>
            <div className='side-bar-menu-navigation-label'>Home</div>
          </div>
          <div
            className={`side-bar-button-item`}>
            <i className='user circle icon' />
            <div className='side-bar-menu-navigation-label'>Sales Order</div>
          </div>
          <div
            className={`side-bar-button-item`}>
            <i className='fas fa-clipboard-list' />
            <div className='side-bar-menu-navigation-label'>Purchase Order</div>
          </div>
          <div
            className={`side-bar-button-item`}>
            <div className='side-bar-menu-navigation-label'>New Customer</div>
          </div>
        </div>
      </LeftBarStyle>
);
