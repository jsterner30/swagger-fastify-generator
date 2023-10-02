const { 
    ApplicationActionsSchema,
    ApplicationActionSchema,
    ApplicationActionNewSchema
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
const { 
    getApplicationActions,
    applyApplicationAction
 } = require('../connectors/application_actions.js')
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
        const applicationId = request.params.application_id

        const res = await getApplicationActions(applicationId)
        // TODO: make the above work
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
            body: Type.Object({
                application_action: ApplicationActionNewSchema
            })
        }
    }, async (request, reply) => {
        const applicationAction = request.body.application_action
        const applicationId = request.params.application_id

        const res = await applyApplicationAction(applicationAction, applicationId)
        // TODO: make the above work
    })
}