const { 
    StatusSchema
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
    DateStartQuerySchema,
    DateEndQuerySchema
 } = require('../../models/ParameterSchemas')
const { 
    getStatus
 } = require('../../controllers/status')
const { Tags } = require('../../models/constants')
const { Type } = require('@sinclair/typebox')

const statusRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/', {
        schema: {
            tags: [Tags.Status],
            summary: 'Get status',
            response: {
                200: StatusSchema,
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            },
            querystring: Type.Object({
                date_start: Type.Optional(DateStartQuerySchema),
                date_end: Type.Optional(DateEndQuerySchema)
            })
        }
    }, async (request, reply) => {
        await getStatus(request, reply)
    })
}

module.exports = { default: statusRoute }