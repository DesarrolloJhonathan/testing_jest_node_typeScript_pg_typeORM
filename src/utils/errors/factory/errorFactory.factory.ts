import { StatusCodes } from 'http-status-codes'
import { ConnectionDatabaseError } from '../connectionDatabase.error'
import { ErrorDetails } from '../errorDetails.error'
import { UsertNotFoundError } from '../userNotFound.error'

export class ErrorFactory {
    public static getErrorDetails(
        statusCode: StatusCodes,
        msg: string,
    ): ErrorDetails {
        return new ErrorDetails(statusCode, msg)
    }

    /**
     *
     * @param description
     * @param previusException
     * @returns ConnectionDatabaseError
     */
    public static getConnectionDatabaseError(
        description: string,
        previusException: Error = null,
    ): ConnectionDatabaseError {
        return new ConnectionDatabaseError(description, previusException)
    }
    /**
     *
     * @param description
     * @param previusException
     * @returns UsetNotFoundError
     */
    public static getUsertNotFoundError(
        description: string,
        previusException: Error = null,
    ): UsertNotFoundError {
        return new UsertNotFoundError(description, previusException)
    }
}
