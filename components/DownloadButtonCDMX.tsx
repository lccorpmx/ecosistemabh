import React from 'react'
import { FaFileDownload } from 'react-icons/fa';

export default function DownloadButtonCDMX() {
    const downloadPDFs = async () => {
        try {
          // Reemplaza estas URLs con las URL directas a tus archivos PDF en GitHub.

          const pdf2URL = 'https://raw.githubusercontent.com/lccorpmx/MBH/main/MenuBeeHighCDMX.pdf';
        
          // Descarga el segundo PDF
          const response2 = await fetch(pdf2URL);
          const blob2 = await response2.blob();
          const url2 = window.URL.createObjectURL(blob2);
    
    
          const pdf2Link = document.createElement('a');
          pdf2Link.href = url2;
          pdf2Link.download = 'MenuBeeHighCDMX.pdf';
          document.body.appendChild(pdf2Link);
          pdf2Link.click();
          document.body.removeChild(pdf2Link);
        } catch (error) {
          console.error('Error al descargar los archivos PDF', error);
        }
      };
    
      return (
        <div className='flex items-center gap-4 pt-4'>
        <div>
        <FaFileDownload
        onClick={downloadPDFs}
        className="text-2xl animate-pulse transition duration-5000">
        </FaFileDownload>
        </div>

        <div>
            <p onClick={downloadPDFs} className='text-lg text-yellow-400'>Menu BeeHigh CDMX</p>
        </div>
        </div>
      );
}
