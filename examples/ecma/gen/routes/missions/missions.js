import { 
   MissionsSchema,
   MissionsModifySchema
 } from '../../DefinitionSchemas.js'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response404Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../ResponseSchemas.js'
import { 
   ApplicationIdPathSchema
 } from '../../ParameterSchemas.js'
import { Tags } from '../../constants.js'
import { 
   getMissions,
   modifyMissions
 } from '../connectors/missions.js'
import { Type } from '@sinclair/typebox'

const missionsRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

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
      const applicationId = request.params.application_id

      const res = await getMissions(applicationId)
      // TODO: make the above work
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
      const missions = request.body.missions
      const applicationId = request.params.application_id

      const res = await modifyMissions(missions, applicationId)
      // TODO: make the above work
   })
}