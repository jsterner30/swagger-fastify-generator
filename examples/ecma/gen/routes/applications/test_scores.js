import { 
   TestScoresSchema
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
   getTests
 } from '../../controllers/test_scores'
import { Tags } from '../../models/constants'
import { Type } from '@sinclair/typebox'

const testScoresRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

   fastify.get('/:application_id/test_scores', {
      schema: {
         tags: [Tags.EducationalHistory],
         summary: 'Applicant Test Scores',
         response: {
            200: TestScoresSchema,
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
      await getTests(request, reply)
   })
}

export default testScoresRoute