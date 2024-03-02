export class PlayGame {
    constructor(element) {
        this._element = element;
    }

    paintGnom() {
        const img = document.createElement('img');
        img.classList.add('gnom-img');

        const fieldCells = document.querySelectorAll('.gnom');

        for (const fieldCell of fieldCells) { 
            if (fieldCell.firstElementChild) {
                fieldCell.firstElementChild.remove();
            }
        }
        const rookieGnom = Math.floor(Math.random() * fieldCells.length);
        fieldCells[rookieGnom].append(img);
    }
}