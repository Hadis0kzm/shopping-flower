const short =(title)=>{
    const splited =title.split(" ");
    const splittitle =`${splited[0]} ${splited[1]} ${splited[2]}`;

    return splittitle;
}
export {short};