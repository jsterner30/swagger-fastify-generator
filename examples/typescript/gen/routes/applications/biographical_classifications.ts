import { 
   BiographicalClassificationsSchema,
   BiographicalClassificationsModifySchema
 } from '../../DefinitionSchemas'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response404Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../ResponseSchemas'
import { 
   ApplicationIdPathSchema
 } from '../../ParameterSchemas'
import { Tags } from '../../constants'
import { Static, Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const biographicalClassificationsRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

   fastify.get('/:application_id/biographical_classifications', {
      schema: {
         tags: [Tags.Profile],
         summary: 'Get applicant biographical profile',
         response: {
            200: BiographicalClassificationsSchema,
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

   fastify.put('/:application_id/biographical_classifications', {
      schema: {
         tags: [Tags.Profile],
         summary: 'Modify applicant biographical profile',
         response: {
            200: BiographicalClassificationsSchema,
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
         body: BiographicalClassificationsModifySchema
      }
   }, async (request, reply) => {
      // TODO: make this route work
   })
}

export default biographicalClassificationsRoute