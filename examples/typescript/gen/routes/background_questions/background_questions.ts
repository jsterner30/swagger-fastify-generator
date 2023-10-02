import { 
   BackgroundQuestionsSchema,
   BackgroundQuestionsModifySchema
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
   getBackgroundQuestions,
   modifyBackgroundQuestions
 } from '../connectors/background_questions.ts'
import { Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const backgroundQuestionsRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

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
      const applicationId: string = request.params.application_id

      const res = await getBackgroundQuestions(applicationId)
      // TODO: make the above work
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
            background: BackgroundQuestionsModifySchema
         })
      }
   }, async (request, reply) => {
      const background: BackgroundQuestionsModifySchema = request.body.background
      const applicationId: string = request.params.application_id

      const res = await modifyBackgroundQuestions(background, applicationId)
      // TODO: make the above work
   })
}