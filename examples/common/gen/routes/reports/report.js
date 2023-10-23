const { 
    ReportsMetadataSchema
 } = require('../../models/DefinitionSchemas')
const { 
    Response400Schema,
    Response401Schema,
    Response403Schema,
    Response409Schema,
    Response500Schema,
    ResponseDefaultSchema
 } = require('../../models/ResponseSchemas')
const { 
    getReportMetadata
 } = require('../../controllers/report')
const { Tags } = require('../../models/constants')
const { Type } = require('@sinclair/typebox')

const reportRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/', {
        schema: {
            tags: [Tags.Report],
            summary: 'Retrieve application service reports meta data',
            response: {
                200: ReportsMetadataSchema,
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            }
        }
    }, async (request, reply) => {
        await getReportMetadata(request, reply)
    })
}

module.exports = { default: reportRoute }