import { User } from '../user.model'

export class ModelFactory {
    /**
     * @function getUserModel
     */
    public static getUserModel(
        firstname: string,
        middlename: string = null,
        surname: string,
        secondSurname: string = null,
        email: string,
        password: string,
    ): User {
        const user = new User()
        user.firstname = firstname
        user.middlename = middlename
        user.surname = surname
        user.secondSurname = secondSurname
        user.email = email
        user.password = password
        return user
    }

}
