const { 
    BasicSchema,
    ContactModifySchema
 } = require('../../models/DefinitionSchemas')
const { 
    Response400Schema,
    Response401Schema,
    Response403Schema,
    Response409Schema,
    Response500Schema,
    ResponseDefaultSchema
 } = require('../../models/ResponseSchemas')
const { 
    ApplicationIdPathSchema
 } = require('../../models/ParameterSchemas')
const { 
    modifyContactInfo
 } = require('../../controllers/contact')
const { Tags } = require('../../models/constants')
const { Type } = require('@sinclair/typebox')

const contactRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.put('/:application_id/contact', {
        schema: {
            tags: [Tags.Profile],
            summary: 'Update contact information',
            response: {
                200: BasicSchema,
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            },
            params: Type.Object({
                application_id: ApplicationIdPathSchema
            }),
            body: ContactModifySchema
        }
    }, async (request, reply) => {
        await modifyContactInfo(request, reply)
    })
}

module.exports = { default: contactRoute }