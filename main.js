function createPiece(type){
    
    switch(type){
        case 'T':
            return [
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0]
            ];
        case 'O':
            return [
                [2, 2],
                [2, 2]
            ];
        case 'L':
            return [
                [0, 3, 0],
                [0, 3, 0],
                [0, 3, 3]
            ];
        case 'J':
            return [
                [0, 4, 0],
                [0, 4, 0],
                [4, 4, 0]
            ];
        case 'I':
            return [
                [0, 5, 0, 0],
                [0, 5, 0, 0],
                [0, 5, 0, 0],
                [0, 5, 0, 0]
            ];
        case 'S':
            return [
                [0, 6, 6],
                [6, 6, 0],
                [0, 0, 0]
            ];
        case 'Z':
        return [
                [7, 7, 0],
                [0, 7, 7],
                [0, 0, 0]
            ]; 
    }
}

let lastTime  = 0;
function update(time = 0){
    const deltaTime = time - lastTime;
    lastTime = time;

    player.update(deltaTime);

    tetris.draw();
    requestAnimationFrame(update);
}

function updateScore(){
    document.getElementById('score').innerText = player.score;
}

const tetris = new Tetris(document.getElementById('gamearea'));
const player = tetris.player;
document.addEventListener('keydown', event => {
    if(event.keyCode === 37)//left
        player.move(-1);
    else if(event.keyCode === 39)//right
        player.move(1);
    else if(event.keyCode === 40)//down
        player.drop();
    else if(event.keyCode === 81)//Q
        player.rotate(-1);
    else if(event.keyCode === 87)//W
        player.rotate(1);

});
updateScore();