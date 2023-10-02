import { 
   MissionsSchema,
   MissionsModifySchema
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
   ApplicationIdPathSchema
 } from '../../ParameterSchemas.ts'
import { Tags } from '../../constants.ts'
import { Type } from '@sinclair/typebox'
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
      // TODO: make this route work
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
         body: Type.Object({
            missions: MissionsModifySchema
         })
      }
   }, async (request, reply) => {
      // TODO: make this route work
   })
}

export default missionsRoute