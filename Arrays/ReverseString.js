




function reverseString(address){
    
    const backwards = [];
    const totalItem = address.length -1;
    for(let i = totalItem; i >= 0; i--){
        backwards.push(address[i]);
    }
    return backwards.join('');
}

console.log(reverseString('hi who are you'));
