const { 
    StatusSchema
 } = require('../../DefinitionSchemas.js')
const { 
    Response400Schema,
    Response401Schema,
    Response403Schema,
    Response409Schema,
    Response500Schema,
    ResponseDefaultSchema
 } = require('../../ResponseSchemas.js')
const { 
    DateStartQuerySchema,
    DateEndQuerySchema
 } = require('../../ParameterSchemas.js')
const { Tags } = require('../../constants.js')
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
        // TODO: make this route work
    })
}

module.exports = { default: statusRoute }