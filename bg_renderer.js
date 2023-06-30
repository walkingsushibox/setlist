function draw() {
    const canvas = document.getElementById('bg_screen');
    if (!canvas || !canvas.getContext) {
      return false;
    }

    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = function onImageLoad() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    }
   
    img.src = '../assets/img/IMG_5564.jpg'; //相対URLの場合    
}