//shorten the name of products
const short =(title)=>{
    const splited =title.split(" ");
    const splittitle =`${splited[0]} ${splited[1]} ${splited[2]}`;

    return splittitle;
}
//check product is in cart or not
const IsInCart = (state , id)=>{
   const result= !!state.selectedItem.find(item => item.id ===id)  
    return result;
}   
//check number of each product in cart
const quantityCount =(state , id)=>{
    const index = state.selectedItem.findIndex(item=> item.id ===id)
    if (index === -1){
        return false
    }else{
        return state.selectedItem[index].quantity;
    }
}


export {short , IsInCart ,quantityCount };