import { 
   PersonalRecordsSchema
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
   getPersonalRecords
 } from '../../controllers/personal_records'
import { Tags } from '../../models/constants'
import { Type } from '@sinclair/typebox'

const personalRecordsRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

   fastify.get('/:application_id/personal_records', {
      schema: {
         tags: [Tags.Profile],
         summary: 'Applicant Confidential',
         response: {
            200: PersonalRecordsSchema,
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
      await getPersonalRecords(request, reply)
   })
}

export default personalRecordsRoute