import React from 'react';
import PropTypes from 'prop-types';

const BotonPersonalizado = ({ texto, colorF, colorT }) => {
  const claseColorFondo = `${colorF}`;
  const claseColorTexto = `${colorT}`;

  return (
    <button
      className={`${claseColorTexto} rounded-full py-2 px-4 ${claseColorFondo}`}
    >
      {texto}
    </button>
  );
};

BotonPersonalizado.propTypes = {
  texto: PropTypes.string.isRequired,
  colorF: PropTypes.string.isRequired,
  colorT: PropTypes.string.isRequired,
};

export default BotonPersonalizado;
