const { 
    ApplicationDeliverablesSchema,
    ApplicationDeliverableSchema,
    ApplicationDeliverableModifySchema
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
    ApplicationIdPathSchema,
    DeliverableIdPathSchema
 } = require('../../models/ParameterSchemas')
const { 
    getApplicationDeliverables,
    modifyApplicationDeliverable
 } = require('../../controllers/application_deliverables')
const { Tags } = require('../../models/constants')
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
        await getApplicationDeliverables(request, reply)
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
            body: ApplicationDeliverableModifySchema
        }
    }, async (request, reply) => {
        await modifyApplicationDeliverable(request, reply)
    })
}

module.exports = { default: applicationDeliverablesRoute }