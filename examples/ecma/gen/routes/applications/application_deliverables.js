import { 
   ApplicationDeliverablesSchema,
   ApplicationDeliverableSchema,
   ApplicationDeliverableModifySchema
 } from '../../models/DefinitionSchemas'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response404Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../models/ResponseSchemas'
import { 
   ApplicationIdPathSchema,
   DeliverableIdPathSchema
 } from '../../models/ParameterSchemas'
import { 
   getApplicationDeliverables,
   modifyApplicationDeliverable
 } from '../../controllers/application_deliverables'
import { Tags } from '../../models/constants'
import { Type } from '@sinclair/typebox'

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

export default applicationDeliverablesRoute