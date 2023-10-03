import React, { useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';

export default function DownloadButtonBeeHeatlhy() {
  const [downloadMessage, setDownloadMessage] = useState('Menu BeeHealthy');

  const downloadPDFs = async () => {
    setDownloadMessage('Descargando Menu...'); // Cambiar el mensaje antes de la descarga

    try {
      // Reemplaza estas URLs con las URL directas a tus archivos PDF en GitHub.
      const pdf2URL = 'https://raw.githubusercontent.com/lccorpmx/MBH/main/MenuBeeHighCDMX.pdf' + `?t=${Date.now()}`;

      // Descarga el segundo PDF
      const response2 = await fetch(pdf2URL);
      const blob2 = await response2.blob();
      const url2 = window.URL.createObjectURL(blob2);

      // Crea enlaces de descarga para los PDFs
      const pdf2Link = document.createElement('a');
      pdf2Link.href = url2;
      pdf2Link.download = 'MenuBeeHealthy.pdf';
      document.body.appendChild(pdf2Link);
      pdf2Link.click();
      document.body.removeChild(pdf2Link);

      setDownloadMessage('Menu Descargado!'); // Restaurar el mensaje después de la descarga
    } catch (error) {
      console.error('Error al descargar los archivos PDF', error);
      setDownloadMessage('Error al descargar PDF');
    }
  };

  return (
    <div className='flex items-center gap-4 pt-4'>
      <div>
        <FaFileDownload
          onClick={downloadPDFs}
          className="text-2xl text-white animate-pulse transition duration-5000"
        />
      </div>

      <div>
        <p
          onClick={downloadPDFs}
          className={`text-lg text-yellow-400 hover:text-white ${
            downloadMessage === 'Descargando Menu...' ? 'animate-pulse transition duration-5000' : ''
          }`}
        >
          {downloadMessage}
        </p>
      </div>
    </div>
  );
}
