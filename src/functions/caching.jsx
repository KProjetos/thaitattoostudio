import { useState, useEffect } from 'react';

const useImageCache = (imageUrls) => {
  const [cachedImages, setCachedImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      try {
        const newCachedImages = {};
        let count = 0
        // Itera sobre cada URL de imagem
        for (const imageUrl of imageUrls) {
          // Tenta obter a imagem do cache (por exemplo, localStorage)
          const cachedImageData = localStorage.getItem(imageUrl);

          if (cachedImageData) {
            // Se a imagem estiver em cache, usa-a
            newCachedImages[imageUrl] = cachedImageData;
          } else {
            // Se a imagem não estiver em cache, carrega-a e a armazena em cache
            const response = await fetch(imageUrl,  { mode: 'no-cors' });
            const blob = await response.blob();
            const dataUrl = URL.createObjectURL(blob);

            // Armazena a imagem em cache (por exemplo, localStorage)
            localStorage.setItem(count, dataUrl);

            // Adiciona a imagem carregada ao objeto de imagens em cache
            newCachedImages[`image${count}`] = dataUrl;
            count++
          }
        }

        // Atualiza o estado com as imagens em cache
        setCachedImages(newCachedImages);
      } catch (error) {
        console.error('Erro ao carregar ou armazenar em cache as imagens:', error);
      }
    };

    loadImages();
  }, [imageUrls]);

  return cachedImages;
};

export default useImageCache;
