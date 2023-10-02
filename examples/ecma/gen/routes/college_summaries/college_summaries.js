import { 
   CollegeSummariesSchema,
   CollegeSummaryModifySchema,
   CollegeSummarySchema,
   ErrorResponseSchema
 } from '../../DefinitionSchemas.js'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response404Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../ResponseSchemas.js'
import { 
   ApplicationIdPathSchema,
   CollegePathSchema,
   StartMonthPathSchema,
   EndMonthPathSchema
 } from '../../ParameterSchemas.js'
import { Tags } from '../../constants.js'
import { 
   getCollegeSummaries,
   modifyCollegeSummaries,
   modifyApplicantCollegeSummary,
   deleteApplicantCollegeSummary
 } from '../connectors/college_summaries.js'
import { Type } from '@sinclair/typebox'

const collegeSummariesRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

   fastify.get('/:application_id/college_summaries', {
      schema: {
         tags: [Tags.EducationalHistory],
         summary: 'Get college summaries',
         response: {
            200: CollegeSummariesSchema,
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

      const res = await getCollegeSummaries(applicationId)
      // TODO: make the above work
   })

   fastify.put('/:application_id/college_summaries', {
      schema: {
         tags: [Tags.CollegeSummaries],
         summary: 'Add college summaries',
         response: {
            200: CollegeSummariesSchema,
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
            college_summary: Type.Optional(CollegeSummaryModifySchema)
         })
      }
   }, async (request, reply) => {
      const collegeSummary = request.body.college_summary
      const applicationId = request.params.application_id

      const res = await modifyCollegeSummaries(collegeSummary, applicationId)
      // TODO: make the above work
   })

   fastify.put('/:application_id/college_summaries/:college,:start_month,:end_month', {
      schema: {
         tags: [Tags.CollegeSummaries],
         summary: 'Applicant College Summary',
         response: {
            200: CollegeSummarySchema,
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            404: ErrorResponseSchema,
            409: Response409Schema,
            500: Response500Schema,
            default: ResponseDefaultSchema
         },
         params: Type.Object({
            application_id: ApplicationIdPathSchema,
            college: CollegePathSchema,
            start_month: StartMonthPathSchema,
            end_month: EndMonthPathSchema
         }),
         body: Type.Object({
            college_summary: CollegeSummaryModifySchema
         })
      }
   }, async (request, reply) => {
      const collegeSummary = request.body.college_summary
      const applicationId = request.params.application_id
      const college = request.params.college
      const startMonth = request.params.start_month
      const endMonth = request.params.end_month

      const res = await modifyApplicantCollegeSummary(collegeSummary, applicationId, college, startMonth, endMonth)
      // TODO: make the above work
   })

   fastify.delete('/:application_id/college_summaries/:college,:start_month,:end_month', {
      schema: {
         tags: [Tags.CollegeSummaries],
         summary: 'Applicant Educational History College Summary',
         response: {
            204: Type.Object({}, { additionalProperties: true }),
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            default: ResponseDefaultSchema
         },
         params: Type.Object({
            application_id: ApplicationIdPathSchema,
            college: CollegePathSchema,
            start_month: StartMonthPathSchema,
            end_month: EndMonthPathSchema
         })
      }
   }, async (request, reply) => {
      const applicationId = request.params.application_id
      const college = request.params.college
      const startMonth = request.params.start_month
      const endMonth = request.params.end_month

      const res = await deleteApplicantCollegeSummary(applicationId, college, startMonth, endMonth)
      // TODO: make the above work
   })
}