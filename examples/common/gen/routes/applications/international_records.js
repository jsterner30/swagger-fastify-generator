const { 
    InternationalRecordsSchema,
    InternationalRecordsModifySchema
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
    getInternationalRecords,
    modifyInternationalRecords
 } = require('../../controllers/international_records')
const { Tags } = require('../../models/constants')
const { Type } = require('@sinclair/typebox')

const internationalRecordsRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/:application_id/international_records', {
        schema: {
            tags: [Tags.Profile],
            summary: 'Get applicant confidential international records',
            response: {
                200: InternationalRecordsSchema,
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
        await getInternationalRecords(request, reply)
    })

    fastify.put('/:application_id/international_records', {
        schema: {
            tags: [Tags.InternationalRecords],
            summary: 'Modify applicant confidential international records',
            response: {
                200: InternationalRecordsSchema,
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
            body: InternationalRecordsModifySchema
        }
    }, async (request, reply) => {
        await modifyInternationalRecords(request, reply)
    })
}

module.exports = { default: internationalRecordsRoute }