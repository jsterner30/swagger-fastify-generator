import { 
   BackgroundQuestionsSchema,
   BackgroundQuestionsModifyParameterSchema
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
import { Type } from '@sinclair/typebox'

const backgroundQuestionsRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

   fastify.get('/:application_id/background_questions', {
      schema: {
         tags: [Tags.Profile],
         summary: 'Get background questions',
         response: {
            200: BackgroundQuestionsSchema,
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
      // TODO: make this route work
   })

   fastify.put('/:application_id/background_questions', {
      schema: {
         tags: [Tags.Profile],
         summary: 'Modify applicant confidential background',
         response: {
            200: BackgroundQuestionsSchema,
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
            background: BackgroundQuestionsModifyParameterSchema
         })
      }
   }, async (request, reply) => {
      // TODO: make this route work
   })
}

export default backgroundQuestionsRoute