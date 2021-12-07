import React, { useState } from 'react';

import logo from '../../assets/logo.png';

import {
  Container,
} from './styles';

interface IProps {
  setPage(str: any): void;
}
const Header = ({
  setPage,
}: IProps) => {

    return (
    <Container>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}>
        
        <div style={{display: 'flex', flexDirection: 'row', width: '40%', justifyContent: 'space-between', alignItems: 'center'}}>
          <img style={{height: 60}} src={logo} />
          <div style={{flex: '0 1 auto', padding: '8px', width: '60%', order: 3, gridColumn: 1/3}}>
            <small style={{color: '#fff', fontWeight: 'normal', fontSize: 17, marginRight: 17}}>Visão Geral</small>
            <small style={{color: '#fff', fontWeight: 'normal', backgroundColor: '#6c7293', padding: 13, borderRadius: 6, fontSize: 17, marginRight: 16}}>Packs</small>
            <small style={{color: '#fff', fontWeight: 'normal', fontSize: 17, marginRight: 17}}>Usuários</small>
        </div>
        </div>
        <div>
          <small style={{color: '#6c7293', fontWeight: '600', fontSize: 17, marginRight: 6}}>Hi, </small>
          <span style={{color: '#fff', fontWeight: '600', fontSize: 17, marginRight: 16}}>Sean</span>
          <span style={{color: '#fff', fontWeight: '600', backgroundColor: '#6c7293', padding: 17, borderRadius: 6, fontSize: 17, marginRight: 9}}>S</span>
        </div>

      </div>
    </Container>)
};
export default Header;
