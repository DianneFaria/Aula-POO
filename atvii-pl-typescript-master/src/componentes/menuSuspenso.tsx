import React, { useState } from 'react';
import '../menuSuspenso.css';

const MenuSuspenso = (props: {
  titulo: string;
  nomeLink1: string;
  link1: string;
  nomeLink2: string;
  link2: string; 
  nomeLink3: string;
  link3: string;
  nomeLink4: string;
  link4: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu}>
        {props.titulo}
      </button>
      {isOpen && (
        <ul className='dropdown-men'>
          <li className='item-lista'><a href={props.link1}>{props.nomeLink1}</a></li>
          <li className='item-lista'><a href={props.link2}>{props.nomeLink2}</a></li>
          <li className='item-lista'><a href={props.link3}>{props.nomeLink3}</a></li>
          <li className='item-lista'><a href={props.link4}>{props.nomeLink4}</a></li>
        </ul>
      )}
    </div>
  );
};

export default MenuSuspenso;