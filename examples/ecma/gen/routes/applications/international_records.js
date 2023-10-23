import { 
   InternationalRecordsSchema,
   InternationalRecordsModifySchema
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
   getInternationalRecords,
   modifyInternationalRecords
 } from '../../controllers/international_records'
import { Tags } from '../../models/constants'
import { Type } from '@sinclair/typebox'

const internationalRecordsRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

   fastify.get('/:application_id/international_records', {
      schema: {
         tags: [Tags.Profile],
         summary: 'Get applicant confidential international records',
         response: {
            200: InternationalRecordsSchema,
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
      await getInternationalRecords(request, reply)
   })

   fastify.put('/:application_id/international_records', {
      schema: {
         tags: [Tags.InternationalRecords],
         summary: 'Modify applicant confidential international records',
         response: {
            200: InternationalRecordsSchema,
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
         body: InternationalRecordsModifySchema
      }
   }, async (request, reply) => {
      await modifyInternationalRecords(request, reply)
   })
}

export default internationalRecordsRoute