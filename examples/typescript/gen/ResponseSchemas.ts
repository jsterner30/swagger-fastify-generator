import { Static, Type } from '@sinclair/typebox'
import { 
   ErrorResponseSchema
 } from './DefinitionSchemas'


/**
* DESCRIPTION: Invalid Request - unable to interpret request
*/
export const Response400Schema = ErrorResponseSchema
export type Response400 = Static<typeof Response400Schema>

/**
* DESCRIPTION: Authentication required to access data
*/
export const Response401Schema = ErrorResponseSchema
export type Response401 = Static<typeof Response401Schema>

/**
* DESCRIPTION: Access denied to protected data
*/
export const Response403Schema = ErrorResponseSchema
export type Response403 = Static<typeof Response403Schema>

/**
* DESCRIPTION: Application not found
*/
export const Response404Schema = ErrorResponseSchema
export type Response404 = Static<typeof Response404Schema>

/**
* DESCRIPTION: Query parameters conflict or are malformed
*/
export const Response409Schema = ErrorResponseSchema
export type Response409 = Static<typeof Response409Schema>

/**
* DESCRIPTION: Internal Server Error
*/
export const Response500Schema = ErrorResponseSchema
export type Response500 = Static<typeof Response500Schema>

/**
* DESCRIPTION: Unexpected error
*/
export const ResponseDefaultSchema = ErrorResponseSchema
export type ResponseDefault = Static<typeof ResponseDefaultSchema>