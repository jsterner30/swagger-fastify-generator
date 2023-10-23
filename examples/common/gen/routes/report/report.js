const { 
    Response400Schema,
    Response401Schema,
    Response403Schema,
    Response409Schema,
    Response500Schema,
    ResponseDefaultSchema
 } = require('../../models/ResponseSchemas')
const { 
    AdmitPeriodQuerySchema,
    DateStartQuerySchema,
    DateEndQuerySchema,
    NameQuerySchema,
    PaginationParameterQuerySchema,
    LimitQuerySchema,
    CursorQuerySchema
 } = require('../../models/ParameterSchemas')
const { 
    getReport
 } = require('../../controllers/report')
const { Tags } = require('../../models/constants')
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
        await getReport(request, reply)
    })
}

module.exports = { default: reportRoute }