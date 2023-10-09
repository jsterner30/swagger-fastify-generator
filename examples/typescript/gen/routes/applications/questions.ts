import { 
   QuestionsSchema,
   QuestionSchema,
   QuestionAnswerSchema
 } from '../../DefinitionSchemas'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response404Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../ResponseSchemas'
import { 
   ApplicationIdPathSchema,
   QuestionIdPathSchema
 } from '../../ParameterSchemas'
import { Tags } from '../../constants'
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
      // TODO: make this route work
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
      // TODO: make this route work
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
      // TODO: make this route work
   })
}

export default questionsRoute