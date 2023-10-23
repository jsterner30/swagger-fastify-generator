import { 
   ApplicationActionsSchema,
   ApplicationActionSchema,
   ApplicationActionNewSchema
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
   ApplicationIdPathSchema
 } from '../../models/ParameterSchemas'
import { 
   getApplicationActions,
   applyApplicationAction
 } from '../../controllers/application_actions'
import { Tags } from '../../models/constants'
import { Static, Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const applicationActionsRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

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

export default applicationActionsRoute