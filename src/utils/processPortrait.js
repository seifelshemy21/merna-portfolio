// Utility to extract Merna's profile portrait from hero image and make black background transparent

let cachedPortrait = null;

export function getTransparentPortrait(imageSrc) {
  if (cachedPortrait) {
    return Promise.resolve(cachedPortrait);
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageSrc;

    img.onload = () => {
      try {
        const fullWidth = img.width;
        const fullHeight = img.height;

        // Crop bounding box to isolate portrait and eliminate perimeter text (PORT, FOLIO, UX/UI, DESIGNER)
        // Merna is centered in the image
        const cropX = Math.floor(fullWidth * 0.20);
        const cropY = Math.floor(fullHeight * 0.22);
        const cropW = Math.floor(fullWidth * 0.60);
        const cropH = Math.floor(fullHeight * 0.58);

        const canvas = document.createElement('canvas');
        canvas.width = cropW;
        canvas.height = cropH;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

        const imageData = ctx.getImageData(0, 0, cropW, cropH);
        const data = imageData.data;
        const w = cropW;
        const h = cropH;

        // Flood fill from corners to clear solid black background
        const visited = new Uint8Array(w * h);
        const queue = [];

        // Add border pixels as initial seeds if they are black/dark background
        for (let x = 0; x < w; x++) {
          queue.push(x); // top edge
          queue.push((h - 1) * w + x); // bottom edge
          visited[x] = 1;
          visited[(h - 1) * w + x] = 1;
        }
        for (let y = 0; y < h; y++) {
          const leftIdx = y * w;
          const rightIdx = y * w + (w - 1);
          if (!visited[leftIdx]) { queue.push(leftIdx); visited[leftIdx] = 1; }
          if (!visited[rightIdx]) { queue.push(rightIdx); visited[rightIdx] = 1; }
        }

        let head = 0;
        while (head < queue.length) {
          const idx = queue[head++];
          const pxIdx = idx * 4;
          const r = data[pxIdx];
          const g = data[pxIdx + 1];
          const b = data[pxIdx + 2];

          // Threshold for black background
          if (r < 25 && g < 25 && b < 25) {
            data[pxIdx + 3] = 0; // Make transparent

            const x = idx % w;
            const y = Math.floor(idx / w);

            // 4-directional neighbors
            if (x > 0 && !visited[idx - 1]) { visited[idx - 1] = 1; queue.push(idx - 1); }
            if (x < w - 1 && !visited[idx + 1]) { visited[idx + 1] = 1; queue.push(idx + 1); }
            if (y > 0 && !visited[idx - w]) { visited[idx - w] = 1; queue.push(idx - w); }
            if (y < h - 1 && !visited[idx + w]) { visited[idx + w] = 1; queue.push(idx + w); }
          }
        }

        // Smooth anti-aliasing edge softening for dark hair outline against transparent background
        for (let y = 1; y < h - 1; y++) {
          for (let x = 1; x < w - 1; x++) {
            const idx = y * w + x;
            const pxIdx = idx * 4;

            if (data[pxIdx + 3] > 0) {
              const n1 = (idx - 1) * 4 + 3;
              const n2 = (idx + 1) * 4 + 3;
              const n3 = (idx - w) * 4 + 3;
              const n4 = (idx + w) * 4 + 3;

              if (data[n1] === 0 || data[n2] === 0 || data[n3] === 0 || data[n4] === 0) {
                const r = data[pxIdx];
                const g = data[pxIdx + 1];
                const b = data[pxIdx + 2];
                const avg = (r + g + b) / 3;

                if (avg < 35) {
                  data[pxIdx + 3] = Math.max(0, Math.min(255, Math.floor((avg / 35) * 255)));
                }
              }
            }
          }
        }

        ctx.putImageData(imageData, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        cachedPortrait = dataUrl;
        resolve(dataUrl);
      } catch (err) {
        console.error('Error processing portrait image:', err);
        resolve(imageSrc);
      }
    };

    img.onerror = () => {
      resolve(imageSrc);
    };
  });
}
