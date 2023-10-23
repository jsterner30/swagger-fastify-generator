import { 
   QuestionsSchema,
   QuestionSchema,
   QuestionAnswerSchema
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
   ApplicationIdPathSchema,
   QuestionIdPathSchema
 } from '../../models/ParameterSchemas'
import { 
   getQuestions,
   getQuestion,
   answerQuestion
 } from '../../controllers/questions'
import { Tags } from '../../models/constants'
import { Static, Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const questionsRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

   fastify.get('/:application_id/questions', {
      schema: {
         tags: [Tags.Questions],
         summary: 'Retrieve application questions',
         response: {
            200: QuestionsSchema,
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
      await getQuestions(request, reply)
   })

   fastify.get('/:application_id/questions/:question_id', {
      schema: {
         tags: [Tags.Questions],
         summary: 'Retrieve a question',
         response: {
            200: QuestionSchema,
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            404: Response404Schema,
            409: Response409Schema,
            500: Response500Schema,
            default: ResponseDefaultSchema
         },
         params: Type.Object({
            application_id: ApplicationIdPathSchema,
            question_id: QuestionIdPathSchema
         })
      }
   }, async (request, reply) => {
      await getQuestion(request, reply)
   })

   fastify.put('/:application_id/questions/:question_id', {
      schema: {
         tags: [Tags.Questions],
         summary: 'Answer a question',
         response: {
            200: QuestionSchema,
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            404: Response404Schema,
            409: Response409Schema,
            500: Response500Schema,
            default: ResponseDefaultSchema
         },
         params: Type.Object({
            application_id: ApplicationIdPathSchema,
            question_id: QuestionIdPathSchema
         }),
         body: QuestionAnswerSchema
      }
   }, async (request, reply) => {
      await answerQuestion(request, reply)
   })
}

export default questionsRoute