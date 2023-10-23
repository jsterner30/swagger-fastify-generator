import { 
   ErrorResponseSchema
 } from './DefinitionSchemas'


/**
* DESCRIPTION: Invalid Request - unable to interpret request
*/
export const Response400Schema = ErrorResponseSchema

/**
* DESCRIPTION: Authentication required to access data
*/
export const Response401Schema = ErrorResponseSchema

/**
* DESCRIPTION: Access denied to protected data
*/
export const Response403Schema = ErrorResponseSchema

/**
* DESCRIPTION: Application not found
*/
export const Response404Schema = ErrorResponseSchema

/**
* DESCRIPTION: Query parameters conflict or are malformed
*/
export const Response409Schema = ErrorResponseSchema

/**
* DESCRIPTION: Internal Server Error
*/
export const Response500Schema = ErrorResponseSchema

/**
* DESCRIPTION: Unexpected error
*/
export const ResponseDefaultSchema = ErrorResponseSchema