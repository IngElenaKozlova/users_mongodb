export const getIsValidNumber = (elem) => {
    if (typeof elem === 'number' && elem > 0) return true
    return false
}


export const getIsValidPassword = (elem) => {
    const elemWthSpace = elem.trim()
    if (elemWthSpace.length >= 5 && elemWthSpace.length <= 15) return true
    return false
}


export const getIsValidChatId = (idFrom : string, idTo : string) : {text : string, isError : boolean} => {
    if (idFrom.trim() === "" || idTo.trim() === "") return { text : "id is not correct", isError : true }               
    const chatId = idFrom > idTo ? idFrom + "-" + idTo : idTo + "-" + idFrom
    return {text : chatId, isError : false}
}




