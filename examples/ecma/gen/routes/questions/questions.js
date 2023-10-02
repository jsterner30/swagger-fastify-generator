import { 
   QuestionsSchema,
   QuestionSchema,
   QuestionAnswerSchema
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
   ApplicationIdPathSchema,
   QuestionIdPathSchema
 } from '../../ParameterSchemas.js'
import { Tags } from '../../constants.js'
import { 
   getQuestions,
   getQuestion,
   answerQuestion
 } from '../connectors/questions.js'
import { Type } from '@sinclair/typebox'

const questionsRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

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
      const applicationId = request.params.application_id

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
      const applicationId = request.params.application_id
      const questionId = request.params.question_id

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
      const questionAnswer = request.body.question_answer
      const applicationId = request.params.application_id
      const questionId = request.params.question_id

      const res = await answerQuestion(questionAnswer, applicationId, questionId)
      // TODO: make the above work
   })
}