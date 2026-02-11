import { useState } from 'react';

export function useGenerarReportes() {
  const [cargando, setCargando] = useState(false);

  const ejecutarConsultaBD = async (filtros) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(filtros);
        resolve(true);
      }, 2000);
    });
  };

  const procesarDescargaPDF = async (sucursal) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(sucursal);
        resolve(true);
      }, 1500);
    });
  };

  return {
    ejecutarConsultaBD,
    procesarDescargaPDF
  };
}