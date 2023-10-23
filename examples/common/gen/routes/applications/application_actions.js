const { 
    ApplicationActionsSchema,
    ApplicationActionSchema,
    ApplicationActionNewSchema
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
    getApplicationActions,
    applyApplicationAction
 } = require('../../controllers/application_actions')
const { Tags } = require('../../models/constants')
const { Type } = require('@sinclair/typebox')

const applicationActionsRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/:application_id/application_actions', {
        schema: {
            tags: [Tags.ApplicationActions],
            summary: 'Get application actions',
            response: {
                200: ApplicationActionsSchema,
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
        await getApplicationActions(request, reply)
    })

    fastify.post('/:application_id/application_actions', {
        schema: {
            tags: [Tags.ApplicationActions],
            summary: 'Apply application actions',
            response: {
                201: ApplicationActionSchema,
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
            body: ApplicationActionNewSchema
        }
    }, async (request, reply) => {
        await applyApplicationAction(request, reply)
    })
}

module.exports = { default: applicationActionsRoute }