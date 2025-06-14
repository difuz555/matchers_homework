export default function healthSort(characters) {
    let sortedArray = [];
    let healthes = characters.map((item) => item.health).sort((a, b) => b - a);
    for (let healthCharacter of healthes) {
        for (let i = 0; characters.length; i++) {
            if (healthCharacter === characters[i].health) {
                sortedArray.push(characters[i]);
                characters.splice(i, 1);
                break;
            }
        }
    }
    return sortedArray;
}