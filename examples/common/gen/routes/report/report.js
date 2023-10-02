const { 
    ReportsMetadataSchema
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
    AdmitPeriodQuerySchema,
    DateStartQuerySchema,
    DateEndQuerySchema,
    NameQuerySchema,
    PaginationParameterQuerySchema,
    LimitQuerySchema,
    CursorQuerySchema
 } = require('../../ParameterSchemas.js')
const { Tags } = require('../../constants.js')
const { Type } = require('@sinclair/typebox')

const reportRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/', {
        schema: {
            tags: [Tags.Applications],
            summary: 'Retrieve application service report information',
            response: {
                200: Type.Object({}, { additionalProperties: true }),
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            },
            querystring: Type.Object({
                admit_period: Type.Optional(AdmitPeriodQuerySchema),
                date_start: Type.Optional(DateStartQuerySchema),
                date_end: Type.Optional(DateEndQuerySchema),
                name: NameQuerySchema,
                pagination_parameter: Type.Optional(PaginationParameterQuerySchema),
                limit: Type.Optional(LimitQuerySchema),
                cursor: Type.Optional(CursorQuerySchema)
            })
        }
    }, async (request, reply) => {
        // TODO: make this route work
    })

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
        // TODO: make this route work
    })
}

module.exports = { default: reportRoute }