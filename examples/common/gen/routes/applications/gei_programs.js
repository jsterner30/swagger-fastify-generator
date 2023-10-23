const { 
    GeiProgramsSchema,
    GeiProgramModifySchema
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
    getGEIPrograms,
    modifyGEIPrograms
 } = require('../../controllers/gei_programs')
const { Tags } = require('../../models/constants')
const { Type } = require('@sinclair/typebox')

const geiProgramsRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/:application_id/gei_programs', {
        schema: {
            tags: [Tags.LDS],
            summary: 'Get applicant GEI program information',
            response: {
                200: GeiProgramsSchema,
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
        await getGEIPrograms(request, reply)
    })

    fastify.put('/:application_id/gei_programs', {
        schema: {
            tags: [Tags.LDS],
            summary: 'Modify applicant GEI program information',
            response: {
                200: GeiProgramsSchema,
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
            body: GeiProgramModifySchema
        }
    }, async (request, reply) => {
        await modifyGEIPrograms(request, reply)
    })
}

module.exports = { default: geiProgramsRoute }