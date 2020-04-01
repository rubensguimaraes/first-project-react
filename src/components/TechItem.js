import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto',
}

TechItem.propTypes = {
  tech: PropTypes.string, // indicamos que a propriedade tech é do tipo PropTypes.string
  onDelete: PropTypes.func.isRequired, // na função onDelete, precisamos dizer que ela é do tipo PropTypes.func
}                                      // ou seja ela é uma função, e obrigatória

export default TechItem;