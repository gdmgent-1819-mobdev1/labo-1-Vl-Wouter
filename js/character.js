const ctx = document.getElementById('char').getContext('2d');

function draw(x, y) {
    ctx.beginPath();
    ctx.rect(20 + x * 40, 20 + y * 40, 40, 40);
    ctx.fillStyle = '#fff';
    ctx.fill();
}

for( let x = 0; x < 7; x++) {
    for(let y = 0; y < 13; y++) {
        if(Math.random() < 0.5) {
            draw(x, y);
            if(x < 6) {
                draw(12 - x, y);
            }
        }
    }
}