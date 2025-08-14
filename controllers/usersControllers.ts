import {User} from '../scheme/user.scheme'



export const createUserController = async (data : {name : string, age : number, email : string, password : string}) => {
    const userInstance = new User(data)
    return await userInstance.save()
}


export const getUserByIdController = async (userId : number) => {
    const user = await User.findById(userId)
    return user
}


export const getUsersController = async (page : number, count : number) => {
    const users = await User.find().skip((page-1)*count).limit(count)
    return users
}


export const editUserByIdController = async (userId : string, data : {name : string, age : number}) => {
    const editedUser = await User.findByIdAndUpdate(
        userId,
        data,
        { new: true, runValidators: true }
    )
    return editedUser
}


export const editUserPasswordController = async (userId : string, data : {password : string}) => {
    const editedPasswordUser = await User.findByIdAndUpdate(
        userId,
        data,
        { new: true, runValidators: true }
    )
    return editedPasswordUser
}


export const deleteUserByIdController = async (userId : number) => {
    const deletedUser = await User.findByIdAndDelete(userId)
    return deletedUser
}
