export const getIsValidNumber = (elem) => {
    if (typeof elem === 'number' && elem > 0) return { text : "not a number", isError : true }  
    return {text : elem, isError : false}
}


export const getIsValidPassword = (elem) => {
    const elemWthSpace = elem.trim()
    if (elemWthSpace.length >= 5 && elemWthSpace.length <= 15) return { text : "password is not acceptable", isError : true }  
    return {text : elem, isError : false}
}


export const getIsValidChatId = (idFrom : string, idTo : string) : {text : string, isError : boolean} => {
    if (idFrom.trim() === "" || idTo.trim() === "") return { text : "id is not correct", isError : true }               
    const chatId = idFrom > idTo ? idFrom + "-" + idTo : idTo + "-" + idFrom
    return {text : chatId, isError : false}
}






