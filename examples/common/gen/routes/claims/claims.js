const { 
    ConceptsSchema,
    ErrorResponseSchema,
    ClaimBodySchema,
    ClaimArrayResponseSchema,
    ClaimArraySchema
 } = require('../../models/DefinitionSchemas')
const { 
    Response400Schema,
    Response401Schema,
    Response403Schema,
    Response404Schema,
    Response409Schema,
    Response500Schema,
    ResponseDefaultSchema
 } = require('../../models/ResponseSchemas')
const { 
    getConcepts,
    validateClaim,
    validateClaimArray
 } = require('../../controllers/claims')
const { Tags } = require('../../models/constants')
const { Type } = require('@sinclair/typebox')

const claimsRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/', {
        schema: {
            tags: [Tags.Claims],
            summary: 'Retrieve Properties',
            response: {
                200: ConceptsSchema,
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                404: Response404Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            }
        }
    }, async (request, reply) => {
        await getConcepts(request, reply)
    })

    fastify.put('/', {
        schema: {
            tags: [Tags.Claims],
            summary: 'Submit Claim',
            response: {
                200: ErrorResponseSchema,
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                404: Response404Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            },
            body: ClaimBodySchema
        }
    }, async (request, reply) => {
        await validateClaim(request, reply)
    })

    fastify.put('/batch', {
        schema: {
            tags: [Tags.Claims],
            summary: 'Submit Claim',
            response: {
                200: ClaimArrayResponseSchema,
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                404: Response404Schema,
                409: Response409Schema,
                default: ResponseDefaultSchema
            },
            body: ClaimArraySchema
        }
    }, async (request, reply) => {
        await validateClaimArray(request, reply)
    })
}

module.exports = { default: claimsRoute }