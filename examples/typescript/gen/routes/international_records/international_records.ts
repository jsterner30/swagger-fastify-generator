import { 
   InternationalRecordsSchema,
   InternationalRecordsModifySchema
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
   getInternationalRecords,
   modifyInternationalRecords
 } from '../connectors/international_records.ts'
import { Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const internationalRecordsRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

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
      const applicationId: string = request.params.application_id

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
      const internationalRecords: InternationalRecordsModifySchema = request.body.international_records
      const applicationId: string = request.params.application_id

      const res = await modifyInternationalRecords(internationalRecords, applicationId)
      // TODO: make the above work
   })
}