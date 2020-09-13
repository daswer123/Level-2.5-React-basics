const polyndr = "racfdeecar";

function turnBack(word){
    const lenght = word.length;
    let newWord = [];
    for (let i = 1; i <= lenght; i++){
        newWord += word[lenght-i];
    }
    return newWord
}

function isPolyndr(world = "koraarok"){
    const lenght = world.length;
    if (lenght % 2 == 0){
        let left = world.slice(lenght / 2);
        left = turnBack(left);

        if(left == world.slice(0,lenght/2)){
            return true;
        }

        return false;
    } else {
        return false;
    }
}

console.log(isPolyndr(polyndr));