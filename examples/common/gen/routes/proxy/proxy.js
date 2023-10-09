const { 
    ErrorResponseSchema,
    ActionParameterSchema,
    DecisionReasonsSchema,
    IncidentBodyParameterSchema,
    ReportsMetadataSchema
 } = require('../../DefinitionSchemas.js')
const { 
    Response400Schema,
    Response401Schema,
    Response403Schema,
    Response409Schema,
    Response500Schema,
    ResponseDefaultSchema,
    Response404Schema
 } = require('../../ResponseSchemas.js')
const { 
    ApplicantIdQuerySchema,
    InstitutionQuerySchema,
    ApplicantNameQuerySchema,
    EmailQuerySchema,
    AdmitPeriodQuerySchema,
    ApplicantTypeQuerySchema,
    CitizenshipQuerySchema,
    CountryQuerySchema,
    SexQuerySchema,
    StateQuerySchema,
    SubsetStartQuerySchema,
    SubsetSizeQuerySchema,
    SearchQuerySchema,
    ApplicationIdQuerySchema,
    ApplicationIdPathSchema,
    ContextQuerySchema,
    FieldSetsQuerySchema,
    SchoolQuerySchema,
    ComponentIdPathSchema,
    DateStartQuerySchema,
    DateEndQuerySchema,
    TemplateSetsQuerySchema,
    NameQuerySchema,
    PaginationParameterQuerySchema,
    CursorQuerySchema,
    LimitQuerySchema
 } = require('../../ParameterSchemas.js')
const { Tags } = require('../../constants.js')
const { Type } = require('@sinclair/typebox')

const proxyRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/', {
        schema: {
            tags: [Tags.Proxy],
            summary: 'Get Applications through Proxy',
            response: {
                200: Type.Object({}, { additionalProperties: true }),
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                404: ErrorResponseSchema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            },
            querystring: Type.Object({
                applicant_id: Type.Optional(ApplicantIdQuerySchema),
                institution: Type.Optional(InstitutionQuerySchema),
                applicant_name: Type.Optional(ApplicantNameQuerySchema),
                email: Type.Optional(EmailQuerySchema),
                admit_period: Type.Optional(AdmitPeriodQuerySchema),
                applicant_type: Type.Optional(ApplicantTypeQuerySchema),
                citizenship: Type.Optional(CitizenshipQuerySchema),
                country: Type.Optional(CountryQuerySchema),
                sex: Type.Optional(SexQuerySchema),
                state: Type.Optional(StateQuerySchema),
                subset_start: Type.Optional(SubsetStartQuerySchema),
                subset_size: Type.Optional(SubsetSizeQuerySchema),
                search: Type.Optional(SearchQuerySchema),
                application_id: Type.Optional(ApplicationIdQuerySchema)
            })
        }
    }, async (request, reply) => {
        // TODO: make this route work
    })

    fastify.get('/applications', {
        schema: {
            tags: [Tags.Proxy],
            summary: 'Get Applications through Proxy',
            response: {
                200: Type.Object({}, { additionalProperties: true }),
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                404: ErrorResponseSchema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            },
            querystring: Type.Object({
                applicant_id: Type.Optional(ApplicantIdQuerySchema),
                institution: Type.Optional(InstitutionQuerySchema),
                applicant_name: Type.Optional(ApplicantNameQuerySchema),
                email: Type.Optional(EmailQuerySchema),
                admit_period: Type.Optional(AdmitPeriodQuerySchema),
                applicant_type: Type.Optional(ApplicantTypeQuerySchema),
                citizenship: Type.Optional(CitizenshipQuerySchema),
                country: Type.Optional(CountryQuerySchema),
                sex: Type.Optional(SexQuerySchema),
                state: Type.Optional(StateQuerySchema),
                subset_start: Type.Optional(SubsetStartQuerySchema),
                subset_size: Type.Optional(SubsetSizeQuerySchema),
                search: Type.Optional(SearchQuerySchema)
            })
        }
    }, async (request, reply) => {
        // TODO: make this route work
    })

    fastify.get('/applications/:application_id', {
        schema: {
            tags: [Tags.Proxy],
            summary: 'Get an application through proxy',
            response: {
                200: Type.Object({}, { additionalProperties: true }),
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
            }),
            querystring: Type.Object({
                context: Type.Optional(ContextQuerySchema),
                field_sets: Type.Optional(FieldSetsQuerySchema),
                school: Type.Optional(SchoolQuerySchema)
            })
        }
    }, async (request, reply) => {
        // TODO: make this route work
    })

    fastify.put('/applications/:application_id', {
        schema: {
            tags: [Tags.Proxy],
            summary: 'Apply an action to the application.',
            response: {
                200: Type.Object({}, { additionalProperties: true }),
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
            body: ActionParameterSchema
        }
    }, async (request, reply) => {
        // TODO: make this route work
    })

    fastify.put('/applications/:application_id/components/:component_id', {
        schema: {
            tags: [Tags.Proxy],
            summary: 'Apply an update action to the application component.',
            response: {
                200: Type.Object({}, { additionalProperties: true }),
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            },
            params: Type.Object({
                application_id: ApplicationIdPathSchema,
                component_id: ComponentIdPathSchema
            }),
            body: ActionParameterSchema
        }
    }, async (request, reply) => {
        // TODO: make this route work
    })

    fastify.get('/actions', {
        schema: {
            tags: [Tags.Proxy],
            summary: 'Get Applications through Proxy',
            response: {
                200: Type.Object({}, { additionalProperties: true }),
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                404: Response404Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            },
            querystring: Type.Object({
                application_id: Type.Optional(ApplicationIdQuerySchema),
                date_start: Type.Optional(DateStartQuerySchema),
                date_end: Type.Optional(DateEndQuerySchema)
            })
        }
    }, async (request, reply) => {
        // TODO: make this route work
    })

    fastify.get('/decisionReasons', {
        schema: {
            tags: [Tags.Proxy],
            summary: 'Get a list of decision reasons through Proxy',
            response: {
                200: DecisionReasonsSchema,
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                404: Response404Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            },
            querystring: Type.Object({
                template_sets: TemplateSetsQuerySchema
            })
        }
    }, async (request, reply) => {
        // TODO: make this route work
    })

    fastify.post('/incident', {
        schema: {
            tags: [Tags.Proxy],
            summary: 'Submit incident to ServiceNow',
            response: {
                201: Type.Object({}, { additionalProperties: true }),
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                404: Response404Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            },
            body: IncidentBodyParameterSchema
        }
    }, async (request, reply) => {
        // TODO: make this route work
    })

    fastify.get('/report', {
        schema: {
            tags: [Tags.Proxy],
            summary: 'Get a specific report through Proxy',
            response: {
                200: Type.Object({}, { additionalProperties: true }),
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                404: Response404Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            },
            querystring: Type.Object({
                name: NameQuerySchema,
                admit_period: Type.Optional(AdmitPeriodQuerySchema),
                pagination_parameter: Type.Optional(PaginationParameterQuerySchema),
                cursor: Type.Optional(CursorQuerySchema),
                limit: Type.Optional(LimitQuerySchema)
            })
        }
    }, async (request, reply) => {
        // TODO: make this route work
    })

    fastify.get('/reports', {
        schema: {
            tags: [Tags.Proxy],
            summary: 'Get metadata for all reports through Proxy',
            response: {
                200: ReportsMetadataSchema,
                400: Response400Schema,
                401: Response401Schema,
                403: Response403Schema,
                404: Response404Schema,
                409: Response409Schema,
                500: Response500Schema,
                default: ResponseDefaultSchema
            }
        }
    }, async (request, reply) => {
        // TODO: make this route work
    })

    fastify.get('/:application_id', {
        schema: {
            tags: [Tags.Proxy],
            summary: 'Get an application through proxy',
            response: {
                200: Type.Object({}, { additionalProperties: true }),
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
            }),
            querystring: Type.Object({
                context: Type.Optional(ContextQuerySchema),
                field_sets: Type.Optional(FieldSetsQuerySchema),
                school: Type.Optional(SchoolQuerySchema),
                application_id: Type.Optional(ApplicationIdQuerySchema),
                date_start: Type.Optional(DateStartQuerySchema),
                date_end: Type.Optional(DateEndQuerySchema),
                applicant_id: Type.Optional(ApplicantIdQuerySchema),
                institution: Type.Optional(InstitutionQuerySchema),
                applicant_name: Type.Optional(ApplicantNameQuerySchema),
                email: Type.Optional(EmailQuerySchema),
                admit_period: Type.Optional(AdmitPeriodQuerySchema),
                applicant_type: Type.Optional(ApplicantTypeQuerySchema),
                citizenship: Type.Optional(CitizenshipQuerySchema),
                country: Type.Optional(CountryQuerySchema),
                sex: Type.Optional(SexQuerySchema),
                state: Type.Optional(StateQuerySchema),
                subset_start: Type.Optional(SubsetStartQuerySchema),
                subset_size: Type.Optional(SubsetSizeQuerySchema),
                search: Type.Optional(SearchQuerySchema)
            })
        }
    }, async (request, reply) => {
        // TODO: make this route work
    })
}

module.exports = { default: proxyRoute }