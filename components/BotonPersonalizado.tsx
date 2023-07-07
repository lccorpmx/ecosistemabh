import React from 'react';
import PropTypes from 'prop-types';

interface BotonPersonalizadoProps {
  texto: string;
  colorF: string;
  colorT: string;
}

const BotonPersonalizado: React.FC<BotonPersonalizadoProps> = ({
  texto,
  colorF,
  colorT,
}) => {
  const claseColorFondo = `${colorF}`;
  const claseColorTexto = `${colorT}`;

  return (
    <button className={`${claseColorTexto}  whitespace-nowrap rounded-full py-2 px-4 font-bold text-s ${claseColorFondo}`}>
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
