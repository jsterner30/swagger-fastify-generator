import { 
   SeminarySummariesSchema
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
   getSeminarySummaries
 } from '../connectors/seminary_summaries.js'
import { Type } from '@sinclair/typebox'

const seminarySummariesRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

   fastify.get('/:application_id/seminary_summaries', {
      schema: {
         tags: [Tags.LDS],
         summary: 'Applicant Religious History',
         response: {
            200: SeminarySummariesSchema,
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

      const res = await getSeminarySummaries(applicationId)
      // TODO: make the above work
   })
}