import { 
   InternationalRecordsSchema,
   InternationalRecordsModifySchema
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
   getInternationalRecords,
   modifyInternationalRecords
 } from '../connectors/international_records.js'
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
      const applicationId = request.params.application_id

      const res = await getInternationalRecords(applicationId)
      // TODO: make the above work
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
         body: Type.Object({
            international_records: InternationalRecordsModifySchema
         })
      }
   }, async (request, reply) => {
      const internationalRecords = request.body.international_records
      const applicationId = request.params.application_id

      const res = await modifyInternationalRecords(internationalRecords, applicationId)
      // TODO: make the above work
   })
}