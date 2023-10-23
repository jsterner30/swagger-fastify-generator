const { 
    BackgroundQuestionsSchema,
    BackgroundQuestionsModifySchema
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
    ApplicationIdPathSchema
 } = require('../../models/ParameterSchemas')
const { 
    getBackgroundQuestions,
    modifyBackgroundQuestions
 } = require('../../controllers/background_questions')
const { Tags } = require('../../models/constants')
const { Type } = require('@sinclair/typebox')

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
        await getBackgroundQuestions(request, reply)
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
            body: BackgroundQuestionsModifySchema
        }
    }, async (request, reply) => {
        await modifyBackgroundQuestions(request, reply)
    })
}

module.exports = { default: backgroundQuestionsRoute }