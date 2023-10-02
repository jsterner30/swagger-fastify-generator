import { 
   ErrorResponseSchema,
   ActionSchema,
   DecisionReasonsSchema,
   IncidentBodySchema,
   ReportsMetadataSchema
 } from '../../DefinitionSchemas.js'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema,
   Response404Schema
 } from '../../ResponseSchemas.js'
import { 
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
 } from '../../ParameterSchemas.js'
import { Tags } from '../../constants.js'
import { 
   getApplications,
   getApplication,
   applyApplicationAction,
   applyApplicationComponentAction,
   getApplicationActions,
   getDecisionReasons,
   submitIncident,
   getReport,
   getReportsMetadata
 } from '../connectors/proxy.js'
import { Type } from '@sinclair/typebox'

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
      const applicantId = request.query.applicant_id
      const institution = request.query.institution
      const applicantName = request.query.applicant_name
      const email = request.query.email
      const admitPeriod = request.query.admit_period
      const applicantType = request.query.applicant_type
      const citizenship = request.query.citizenship
      const country = request.query.country
      const sex = request.query.sex
      const state = request.query.state
      const subsetStart = request.query.subset_start
      const subsetSize = request.query.subset_size
      const search = request.query.search
      const queryApplicationId = request.query.application_id

      const res = await getApplications(applicantId, institution, applicantName, email, admitPeriod, applicantType, citizenship, country, sex, state, subsetStart, subsetSize, search, queryApplicationId)
      // TODO: make the above work
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
      const applicantId = request.query.applicant_id
      const institution = request.query.institution
      const applicantName = request.query.applicant_name
      const email = request.query.email
      const admitPeriod = request.query.admit_period
      const applicantType = request.query.applicant_type
      const citizenship = request.query.citizenship
      const country = request.query.country
      const sex = request.query.sex
      const state = request.query.state
      const subsetStart = request.query.subset_start
      const subsetSize = request.query.subset_size
      const search = request.query.search

      const res = await getApplications(applicantId, institution, applicantName, email, admitPeriod, applicantType, citizenship, country, sex, state, subsetStart, subsetSize, search)
      // TODO: make the above work
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
      const context = request.query.context
      const fieldSets = request.query.field_sets
      const school = request.query.school
      const applicationId = request.params.application_id

      const res = await getApplication(context, fieldSets, school, applicationId)
      // TODO: make the above work
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
         body: Type.Object({
            action: ActionSchema
         })
      }
   }, async (request, reply) => {
      const action = request.body.action
      const applicationId = request.params.application_id

      const res = await applyApplicationAction(action, applicationId)
      // TODO: make the above work
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
         body: Type.Object({
            action: ActionSchema
         })
      }
   }, async (request, reply) => {
      const action = request.body.action
      const applicationId = request.params.application_id
      const componentId = request.params.component_id

      const res = await applyApplicationComponentAction(action, applicationId, componentId)
      // TODO: make the above work
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
      const queryApplicationId = request.query.application_id
      const dateStart = request.query.date_start
      const dateEnd = request.query.date_end

      const res = await getApplicationActions(queryApplicationId, dateStart, dateEnd)
      // TODO: make the above work
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
      const templateSets = request.query.template_sets

      const res = await getDecisionReasons(templateSets)
      // TODO: make the above work
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
         body: Type.Object({
            incident_body: IncidentBodySchema
         })
      }
   }, async (request, reply) => {
      const incidentBody = request.body.incident_body

      const res = await submitIncident(incidentBody)
      // TODO: make the above work
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
      const name = request.query.name
      const admitPeriod = request.query.admit_period
      const paginationParameter = request.query.pagination_parameter
      const cursor = request.query.cursor
      const limit = request.query.limit

      const res = await getReport(name, admitPeriod, paginationParameter, cursor, limit)
      // TODO: make the above work
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

      const res = await getReportsMetadata()
      // TODO: make the above work
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
      const context = request.query.context
      const fieldSets = request.query.field_sets
      const school = request.query.school
      const queryApplicationId = request.query.application_id
      const dateStart = request.query.date_start
      const dateEnd = request.query.date_end
      const applicantId = request.query.applicant_id
      const institution = request.query.institution
      const applicantName = request.query.applicant_name
      const email = request.query.email
      const admitPeriod = request.query.admit_period
      const applicantType = request.query.applicant_type
      const citizenship = request.query.citizenship
      const country = request.query.country
      const sex = request.query.sex
      const state = request.query.state
      const subsetStart = request.query.subset_start
      const subsetSize = request.query.subset_size
      const search = request.query.search
      const applicationId = request.params.application_id

      const res = await getApplication(context, fieldSets, school, queryApplicationId, dateStart, dateEnd, applicantId, institution, applicantName, email, admitPeriod, applicantType, citizenship, country, sex, state, subsetStart, subsetSize, search, applicationId)
      // TODO: make the above work
   })
}