const { 
    MissionsSchema,
    MissionsModifySchema
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
    getMissions,
    modifyMissions
 } = require('../../controllers/missions')
const { Tags } = require('../../models/constants')
const { Type } = require('@sinclair/typebox')

const missionsRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/:application_id/missions', {
        schema: {
            tags: [Tags.LDS],
            summary: 'Applicant Religious History',
            response: {
                200: MissionsSchema,
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
        await getMissions(request, reply)
    })

    fastify.put('/:application_id/missions', {
        schema: {
            tags: [Tags.Profile],
            summary: 'Modify applicant religious history',
            response: {
                200: MissionsSchema,
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
            body: MissionsModifySchema
        }
    }, async (request, reply) => {
        await modifyMissions(request, reply)
    })
}

module.exports = { default: missionsRoute }