const { 
    QuestionsSchema,
    QuestionSchema,
    QuestionAnswerSchema
 } = require('../../models/DefinitionSchemas')
const { 
    Response400Schema,
    Response401Schema,
    Response403Schema,
    Response404Schema,
    Response409Schema,
    Response500Schema,
    ResponseDefaultSchema
 } = require('../../models/ResponseSchemas')
const { 
    ApplicationIdPathSchema,
    QuestionIdPathSchema
 } = require('../../models/ParameterSchemas')
const { 
    getQuestions,
    getQuestion,
    answerQuestion
 } = require('../../controllers/questions')
const { Tags } = require('../../models/constants')
const { Type } = require('@sinclair/typebox')

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

module.exports = { default: questionsRoute }