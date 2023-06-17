function processor(transmission){
    if(transmission.indexOf("::") < 0){
        return -1;
    }
    let parts = transmission.split("::");
    if(parts[1].indexOf("<") != 0 || parts[1].indexOf(">") != parts[1].length -1){
        return -1;
    }
    return {
        id: Number(parts[0]),
        rawData: parts[1]
    };
}
module.exports = processor;