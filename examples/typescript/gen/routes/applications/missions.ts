import { 
   MissionsSchema,
   MissionsModifySchema
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
   getMissions,
   modifyMissions
 } from '../../controllers/missions'
import { Tags } from '../../models/constants'
import { Static, Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const missionsRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

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

export default missionsRoute