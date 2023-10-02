import { 
   QuestionsSchema,
   QuestionSchema,
   QuestionAnswerSchema
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
   ApplicationIdPathSchema,
   QuestionIdPathSchema
 } from '../../ParameterSchemas.ts'
import { Tags } from '../../constants.ts'
import { 
   getQuestions,
   getQuestion,
   answerQuestion
 } from '../connectors/questions.ts'
import { Type } from '@sinclair/typebox'
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
      const applicationId: string = request.params.application_id

      const res = await getQuestions(applicationId)
      // TODO: make the above work
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
      const applicationId: string = request.params.application_id
      const questionId: string = request.params.question_id

      const res = await getQuestion(applicationId, questionId)
      // TODO: make the above work
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
         body: Type.Object({
            question_answer: QuestionAnswerSchema
         })
      }
   }, async (request, reply) => {
      const questionAnswer: QuestionAnswerSchema = request.body.question_answer
      const applicationId: string = request.params.application_id
      const questionId: string = request.params.question_id

      const res = await answerQuestion(questionAnswer, applicationId, questionId)
      // TODO: make the above work
   })
}