const { 
    InstituteSummariesSchema
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
    getInstituteSummary
 } = require('../connectors/institute_summaries.js')
const { Type } = require('@sinclair/typebox')

const instituteSummariesRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/:application_id/institute_summaries', {
        schema: {
            tags: [Tags.LDS],
            summary: 'Applicant Religious History',
            response: {
                200: InstituteSummariesSchema,
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

        const res = await getInstituteSummary(applicationId)
        // TODO: make the above work
    })
}