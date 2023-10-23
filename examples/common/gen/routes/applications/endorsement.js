const { 
    EndorsementSchema
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
    ApplicationIdPathSchema
 } = require('../../models/ParameterSchemas')
const { 
    getEndorsement
 } = require('../../controllers/endorsement')
const { Tags } = require('../../models/constants')
const { Type } = require('@sinclair/typebox')

const endorsementRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/:application_id/endorsement', {
        schema: {
            tags: [Tags.LDS],
            summary: 'Get endorsement status',
            response: {
                200: EndorsementSchema,
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                404: Response404Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            },
            params: Type.Object({
                application_id: ApplicationIdPathSchema
            })
        }
    }, async (request, reply) => {
        await getEndorsement(request, reply)
    })
}

module.exports = { default: endorsementRoute }