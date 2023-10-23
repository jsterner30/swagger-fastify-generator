const { 
    ErrorResponseSchema
 } = require('./DefinitionSchemas')


/**
* DESCRIPTION: Invalid Request - unable to interpret request
*/
const Response400Schema = ErrorResponseSchema

/**
* DESCRIPTION: Authentication required to access data
*/
const Response401Schema = ErrorResponseSchema

/**
* DESCRIPTION: Access denied to protected data
*/
const Response403Schema = ErrorResponseSchema

/**
* DESCRIPTION: Application not found
*/
const Response404Schema = ErrorResponseSchema

/**
* DESCRIPTION: Query parameters conflict or are malformed
*/
const Response409Schema = ErrorResponseSchema

/**
* DESCRIPTION: Internal Server Error
*/
const Response500Schema = ErrorResponseSchema

/**
* DESCRIPTION: Unexpected error
*/
const ResponseDefaultSchema = ErrorResponseSchema

module.exports = {
    Response400Schema, Response401Schema, Response403Schema, 
    Response404Schema, Response409Schema, Response500Schema, 
    ResponseDefaultSchema
}