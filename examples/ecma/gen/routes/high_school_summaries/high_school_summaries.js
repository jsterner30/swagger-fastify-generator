import { 
   HighSchoolSummariesSchema,
   HighSchoolSummarySchema,
   HighSchoolSummaryModifySchema
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
   HighSchoolPathSchema,
   StartMonthPathSchema,
   EndMonthPathSchema
 } from '../../ParameterSchemas.js'
import { Tags } from '../../constants.js'
import { 
   getHighSchools,
   addHighSchoolSummary,
   modifyHighSchoolSummary,
   deleteHighSchoolSummary
 } from '../connectors/high_school_summaries.js'
import { Type } from '@sinclair/typebox'

const highSchoolSummariesRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

   fastify.get('/:application_id/high_school_summaries', {
      schema: {
         tags: [Tags.EducationalHistory],
         summary: 'Applicant High School Summaries',
         response: {
            200: HighSchoolSummariesSchema,
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

      const res = await getHighSchools(applicationId)
      // TODO: make the above work
   })

   fastify.post('/:application_id/high_school_summaries', {
      schema: {
         tags: [Tags.HighSchoolSummaries],
         summary: 'Applicant High School Summary',
         response: {
            201: HighSchoolSummarySchema,
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
            high_school_body: HighSchoolSummaryModifySchema
         })
      }
   }, async (request, reply) => {
      const highSchoolBody = request.body.high_school_body
      const applicationId = request.params.application_id

      const res = await addHighSchoolSummary(highSchoolBody, applicationId)
      // TODO: make the above work
   })

   fastify.put('/:application_id/high_school_summaries/:high_school,:start_month,:end_month', {
      schema: {
         tags: [Tags.HighSchoolSummaries],
         summary: 'Applicant High School Summary',
         response: {
            200: HighSchoolSummarySchema,
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            409: Response409Schema,
            500: Response500Schema,
            default: ResponseDefaultSchema
         },
         params: Type.Object({
            application_id: ApplicationIdPathSchema,
            high_school: HighSchoolPathSchema,
            start_month: StartMonthPathSchema,
            end_month: EndMonthPathSchema
         }),
         body: Type.Object({
            high_school_body: HighSchoolSummaryModifySchema
         })
      }
   }, async (request, reply) => {
      const highSchoolBody = request.body.high_school_body
      const applicationId = request.params.application_id
      const highSchool = request.params.high_school
      const startMonth = request.params.start_month
      const endMonth = request.params.end_month

      const res = await modifyHighSchoolSummary(highSchoolBody, applicationId, highSchool, startMonth, endMonth)
      // TODO: make the above work
   })

   fastify.delete('/:application_id/high_school_summaries/:high_school,:start_month,:end_month', {
      schema: {
         tags: [Tags.HighSchoolSummaries],
         summary: 'Applicant High School Summary',
         response: {
            204: Type.Object({}, { additionalProperties: true }),
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            default: ResponseDefaultSchema
         },
         params: Type.Object({
            application_id: ApplicationIdPathSchema,
            high_school: HighSchoolPathSchema,
            start_month: StartMonthPathSchema,
            end_month: EndMonthPathSchema
         })
      }
   }, async (request, reply) => {
      const applicationId = request.params.application_id
      const highSchool = request.params.high_school
      const startMonth = request.params.start_month
      const endMonth = request.params.end_month

      const res = await deleteHighSchoolSummary(applicationId, highSchool, startMonth, endMonth)
      // TODO: make the above work
   })
}