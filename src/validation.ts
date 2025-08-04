export const getIsValidNumber = (elem) => {
    if (typeof elem === 'number' && elem > 0) return true
    return false
}


export const getIsValidPassword = (elem) => {
    const elemWthSpace = elem.trim()
    if (elemWthSpace.length >= 5 && elemWthSpace.length <= 15) return true
    return false
}






