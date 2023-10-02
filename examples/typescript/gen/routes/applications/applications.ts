import { 
   ApplicationsSchema,
   ErrorResponseSchema,
   ApplicationSchema,
   ApplicationNewSchema
 } from '../../DefinitionSchemas.ts'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema,
   Response404Schema
 } from '../../ResponseSchemas.ts'
import { 
   AdmitPeriodQuerySchema,
   ApplicantTypeQuerySchema,
   CitizenshipQuerySchema,
   CountryQuerySchema,
   SexQuerySchema,
   StateQuerySchema,
   ApplicantIdQuerySchema,
   ApplicantNameQuerySchema,
   InstitutionIdQuerySchema,
   EmailQuerySchema,
   PageStartQuerySchema,
   PageSizeQuerySchema,
   SearchQuerySchema,
   ApplicationIdPathSchema,
   ContextQuerySchema,
   FieldSetsQuerySchema
 } from '../../ParameterSchemas.ts'
import { Tags } from '../../constants.ts'
import { 
   getApplications,
   createApplication,
   getApplication,
   deleteApplication
 } from '../connectors/applications.ts'
import { Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const applicationsRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

   fastify.get('/', {
      schema: {
         tags: [Tags.Applications],
         summary: 'Get Applications',
         response: {
            200: ApplicationsSchema,
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            404: ErrorResponseSchema,
            409: Response409Schema,
            500: Response500Schema,
            default: ResponseDefaultSchema
         },
         querystring: Type.Object({
            admit_period: Type.Optional(AdmitPeriodQuerySchema),
            applicant_type: Type.Optional(ApplicantTypeQuerySchema),
            citizenship: Type.Optional(CitizenshipQuerySchema),
            country: Type.Optional(CountryQuerySchema),
            sex: Type.Optional(SexQuerySchema),
            state: Type.Optional(StateQuerySchema),
            applicant_id: Type.Optional(ApplicantIdQuerySchema),
            applicant_name: Type.Optional(ApplicantNameQuerySchema),
            institution_id: Type.Optional(InstitutionIdQuerySchema),
            email: Type.Optional(EmailQuerySchema),
            page_start: Type.Optional(PageStartQuerySchema),
            page_size: Type.Optional(PageSizeQuerySchema),
            search: Type.Optional(SearchQuerySchema)
         })
      }
   }, async (request, reply) => {
      const admitPeriod: string = request.query.admit_period
      const applicantType: string = request.query.applicant_type
      const citizenship: string = request.query.citizenship
      const country: string = request.query.country
      const sex: string = request.query.sex
      const state: string = request.query.state
      const applicantId: string = request.query.applicant_id
      const applicantName: string = request.query.applicant_name
      const institutionId: string = request.query.institution_id
      const email: string = request.query.email
      const pageStart: string = request.query.page_start
      const pageSize: string = request.query.page_size
      const search: string = request.query.search

      const res = await getApplications(admitPeriod, applicantType, citizenship, country, sex, state, applicantId, applicantName, institutionId, email, pageStart, pageSize, search)
      // TODO: make the above work
   })

   fastify.post('/', {
      schema: {
         tags: [Tags.Applications],
         summary: 'Create Application',
         response: {
            201: ApplicationSchema,
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            409: Response409Schema,
            500: Response500Schema,
            default: ResponseDefaultSchema
         },
         body: Type.Object({
            application: ApplicationNewSchema
         })
      }
   }, async (request, reply) => {
      const application: ApplicationNewSchema = request.body.application

      const res = await createApplication(application)
      // TODO: make the above work
   })

   fastify.get('/:application_id', {
      schema: {
         tags: [Tags.Applications],
         summary: 'Get an application',
         response: {
            200: ApplicationSchema,
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
            field_sets: Type.Optional(FieldSetsQuerySchema)
         })
      }
   }, async (request, reply) => {
      const context: string = request.query.context
      const fieldSets: string = request.query.field_sets
      const applicationId: string = request.params.application_id

      const res = await getApplication(context, fieldSets, applicationId)
      // TODO: make the above work
   })

   fastify.delete('/:application_id', {
      schema: {
         tags: [Tags.Applications],
         summary: 'Delete an application',
         response: {
            204: Type.Object({}, { additionalProperties: true }),
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            default: ResponseDefaultSchema
         },
         params: Type.Object({
            application_id: ApplicationIdPathSchema
         })
      }
   }, async (request, reply) => {
      const applicationId: string = request.params.application_id

      const res = await deleteApplication(applicationId)
      // TODO: make the above work
   })
}