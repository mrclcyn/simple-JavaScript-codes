const chooser = (array) => {
    let chosen = Math.floor(Math.random() * array.length);
    return array[chosen];
}



const subject = ['I', 'You', 'He', 'She', 'We', 'They'];
const modalVerb = ['can', "can't", 'will', "won't", 'should', "shouldn't"];
const verb = ['swim', 'die soon', 'learn new things', 'stop learning', 'make new friends', 'live a full life', 'travel through time'];

console.log(`${chooser(subject)} ${chooser(modalVerb)} ${chooser(verb)}.`);