const { 
    GeiProgramsSchema,
    GeiProgramModifySchema
 } = require('../../DefinitionSchemas.js')
const { 
    Response400Schema,
    Response401Schema,
    Response403Schema,
    Response404Schema,
    Response409Schema,
    Response500Schema,
    ResponseDefaultSchema
 } = require('../../ResponseSchemas.js')
const { 
    ApplicationIdPathSchema
 } = require('../../ParameterSchemas.js')
const { Tags } = require('../../constants.js')
const { 
    getGEIPrograms,
    modifyGEIPrograms
 } = require('../connectors/gei_programs.js')
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
        const applicationId = request.params.application_id

        const res = await getGEIPrograms(applicationId)
        // TODO: make the above work
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
            body: Type.Object({
                gei_program: GeiProgramModifySchema
            })
        }
    }, async (request, reply) => {
        const geiProgram = request.body.gei_program
        const applicationId = request.params.application_id

        const res = await modifyGEIPrograms(geiProgram, applicationId)
        // TODO: make the above work
    })
}