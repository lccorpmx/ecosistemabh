import React from 'react'
import { FaFileDownload } from 'react-icons/fa';

export default function DownloadButton() {
    const downloadPDFs = async () => {
        try {
          // Reemplaza estas URLs con las URL directas a tus archivos PDF en GitHub.
          const pdf1URL = 'https://raw.githubusercontent.com/lccorpmx/MBH/main/MenuBeeHigh.pdf';
          const pdf2URL = 'https://raw.githubusercontent.com/lccorpmx/MBH/main/MenuBeeHighCDMX.pdf';
          
          // Descarga el primer PDF
          const response1 = await fetch(pdf1URL);
          const blob1 = await response1.blob();
          const url1 = window.URL.createObjectURL(blob1);
          
          // Descarga el segundo PDF
          const response2 = await fetch(pdf2URL);
          const blob2 = await response2.blob();
          const url2 = window.URL.createObjectURL(blob2);
    
          // Crea enlaces de descarga para los PDFs
          const pdf1Link = document.createElement('a');
          pdf1Link.href = url1;
          pdf1Link.download = 'MenuBeeHigh.pdf';
          document.body.appendChild(pdf1Link);
          pdf1Link.click();
          document.body.removeChild(pdf1Link);
    
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
        <FaFileDownload
        onClick={downloadPDFs}
        className="text-2xl animate-pulse transition duration-5000">
        </FaFileDownload>
      );
}
