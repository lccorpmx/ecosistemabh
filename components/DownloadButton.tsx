import React from 'react'
import { FaFileDownload } from 'react-icons/fa';

export default function DownloadButton() {
    const downloadPDFs = async () => {
        try {
          // Reemplaza estas URLs con las URL directas a tus archivos PDF en GitHub.
          const pdf1URL = 'https://raw.githubusercontent.com/lccorpmx/MBH/main/MenuBeeHigh.pdf';
          
          // Descarga el primer PDF
          const response1 = await fetch(pdf1URL);
          const blob1 = await response1.blob();
          const url1 = window.URL.createObjectURL(blob1);
        
          // Crea enlaces de descarga para los PDFs
          const pdf1Link = document.createElement('a');
          pdf1Link.href = url1;
          pdf1Link.download = 'MenuBeeHigh.pdf';
          document.body.appendChild(pdf1Link);
          pdf1Link.click();
          document.body.removeChild(pdf1Link);
    
        } catch (error) {
          console.error('Error al descargar los archivos PDF', error);
        }
      };
    
      return ( 
      <div className='flex items-center gap-4 pt-4'>
        <div>
        <FaFileDownload
        onClick={downloadPDFs}
        className="text-2xl text-white animate-pulse transition duration-5000">
        </FaFileDownload>
        </div>

        <div>
            <p onClick={downloadPDFs} className='text-lg text-yellow-400'>Menu BeeHigh</p>
        </div>
        </div>
      );
}
