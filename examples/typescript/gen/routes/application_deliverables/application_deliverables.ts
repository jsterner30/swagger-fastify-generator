import { 
   ApplicationDeliverablesSchema,
   ApplicationDeliverableSchema,
   ApplicationDeliverableModifySchema
 } from '../../DefinitionSchemas.ts'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response404Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../ResponseSchemas.ts'
import { 
   ApplicationIdPathSchema,
   DeliverableIdPathSchema
 } from '../../ParameterSchemas.ts'
import { Tags } from '../../constants.ts'
import { 
   getApplicationDeliverables,
   modifyApplicationDeliverable
 } from '../connectors/application_deliverables.ts'
import { Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const applicationDeliverablesRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

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
      const applicationId: string = request.params.application_id

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
      const applicationDeliverable: ApplicationDeliverableModifySchema = request.body.application_deliverable
      const applicationId: string = request.params.application_id
      const deliverableId: string = request.params.deliverable_id

      const res = await modifyApplicationDeliverable(applicationDeliverable, applicationId, deliverableId)
      // TODO: make the above work
   })
}