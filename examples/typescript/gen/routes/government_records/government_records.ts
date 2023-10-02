import { 
   GovernmentRecordsSchema,
   GovernmentRecordsModifySchema
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
import { 
   getGovRecs,
   modifyGovRecs
 } from '../connectors/government_records.ts'
import { Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const governmentRecordsRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

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
      const applicationId: string = request.params.application_id

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
      const governmentRecords: GovernmentRecordsModifySchema = request.body.government_records
      const applicationId: string = request.params.application_id

      const res = await modifyGovRecs(governmentRecords, applicationId)
      // TODO: make the above work
   })
}