import { 
   GovernmentRecordsSchema,
   GovernmentRecordsModifySchema
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
   getGovRecs,
   modifyGovRecs
 } from '../connectors/government_records.js'
import { Type } from '@sinclair/typebox'

const governmentRecordsRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

   fastify.get('/:application_id/government_records', {
      schema: {
         tags: [Tags.Profile],
         summary: 'Get applicant confidential government records',
         response: {
            200: GovernmentRecordsSchema,
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

      const res = await getGovRecs(applicationId)
      // TODO: make the above work
   })

   fastify.put('/:application_id/government_records', {
      schema: {
         tags: [Tags.Profile],
         summary: 'Modify applicant confidential government records',
         response: {
            200: GovernmentRecordsSchema,
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
            government_records: GovernmentRecordsModifySchema
         })
      }
   }, async (request, reply) => {
      const governmentRecords = request.body.government_records
      const applicationId = request.params.application_id

      const res = await modifyGovRecs(governmentRecords, applicationId)
      // TODO: make the above work
   })
}