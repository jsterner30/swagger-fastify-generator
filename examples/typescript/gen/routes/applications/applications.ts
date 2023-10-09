import { 
   ApplicationsSchema,
   ErrorResponseSchema,
   ApplicationSchema,
   ApplicationNewSchema
 } from '../../DefinitionSchemas'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema,
   Response404Schema
 } from '../../ResponseSchemas'
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
 } from '../../ParameterSchemas'
import { Tags } from '../../constants'
import { Static, Type } from '@sinclair/typebox'
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
      // TODO: make this route work
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
         body: ApplicationNewSchema
      }
   }, async (request, reply) => {
      // TODO: make this route work
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
      // TODO: make this route work
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
      // TODO: make this route work
   })
}

export default applicationsRoute