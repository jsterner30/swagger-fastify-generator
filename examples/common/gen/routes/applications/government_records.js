const { 
    GovernmentRecordsSchema,
    GovernmentRecordsModifySchema
 } = require('../../DefinitionSchemas.js')
const { 
    Response400Schema,
    Response401Schema,
    Response403Schema,
    Response404Schema,
    Response409Schema,
    Response500Schema,
    ResponseDefaultSchema
 } = require('../../ResponseSchemas.js')
const { 
    ApplicationIdPathSchema
 } = require('../../ParameterSchemas.js')
const { Tags } = require('../../constants.js')
const { Type } = require('@sinclair/typebox')

const governmentRecordsRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/:application_id/government_records', {
        schema: {
            tags: [Tags.Profile],
            summary: 'Get applicant confidential government records',
            response: {
                200: GovernmentRecordsSchema,
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
        // TODO: make this route work
    })

    fastify.put('/:application_id/government_records', {
        schema: {
            tags: [Tags.Profile],
            summary: 'Modify applicant confidential government records',
            response: {
                200: GovernmentRecordsSchema,
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
            body: Type.Object({
                government_records: GovernmentRecordsModifySchema
            })
        }
    }, async (request, reply) => {
        // TODO: make this route work
    })
}

module.exports = { default: governmentRecordsRoute }