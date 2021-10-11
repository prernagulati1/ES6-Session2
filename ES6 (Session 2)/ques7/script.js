const flat = () => {
    let array=[
        ['1' , '2'],
        ['3', '4'],
        ['5'],
    ];
    let newArray = [].concat(...array);
    return newArray;
}
console.log(flat())