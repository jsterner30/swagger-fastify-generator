const { 
    ApplicationDeliverablesSchema,
    ApplicationDeliverableSchema,
    ApplicationDeliverableModifySchema
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
    ApplicationIdPathSchema,
    DeliverableIdPathSchema
 } = require('../../ParameterSchemas.js')
const { Tags } = require('../../constants.js')
const { 
    getApplicationDeliverables,
    modifyApplicationDeliverable
 } = require('../connectors/application_deliverables.js')
const { Type } = require('@sinclair/typebox')

const applicationDeliverablesRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/:application_id/application_deliverables', {
        schema: {
            tags: [Tags.ApplicationDeliverables],
            summary: 'Get application deliverables',
            response: {
                200: ApplicationDeliverablesSchema,
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

        const res = await getApplicationDeliverables(applicationId)
        // TODO: make the above work
    })

    fastify.put('/:application_id/application_deliverables/:deliverable_id', {
        schema: {
            tags: [Tags.ApplicationDeliverables],
            summary: 'Modify Application Deliverable',
            response: {
                200: ApplicationDeliverableSchema,
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            },
            params: Type.Object({
                application_id: ApplicationIdPathSchema,
                deliverable_id: DeliverableIdPathSchema
            }),
            body: Type.Object({
                application_deliverable: ApplicationDeliverableModifySchema
            })
        }
    }, async (request, reply) => {
        const applicationDeliverable = request.body.application_deliverable
        const applicationId = request.params.application_id
        const deliverableId = request.params.deliverable_id

        const res = await modifyApplicationDeliverable(applicationDeliverable, applicationId, deliverableId)
        // TODO: make the above work
    })
}