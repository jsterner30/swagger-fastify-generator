import { 
   GovernmentRecordsSchema,
   GovernmentRecordsModifySchema
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
   getGovRecs,
   modifyGovRecs
 } from '../../controllers/government_records'
import { Tags } from '../../models/constants'
import { Static, Type } from '@sinclair/typebox'
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
      await getGovRecs(request, reply)
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
         body: GovernmentRecordsModifySchema
      }
   }, async (request, reply) => {
      await modifyGovRecs(request, reply)
   })
}

export default governmentRecordsRoute