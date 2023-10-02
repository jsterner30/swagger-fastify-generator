import { 
   HighSchoolSummariesSchema,
   HighSchoolSummarySchema,
   HighSchoolSummaryModifySchema
 } from '../../DefinitionSchemas.ts'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response404Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../ResponseSchemas.ts'
import { 
   ApplicationIdPathSchema,
   HighSchoolPathSchema,
   StartMonthPathSchema,
   EndMonthPathSchema
 } from '../../ParameterSchemas.ts'
import { Tags } from '../../constants.ts'
import { 
   getHighSchools,
   addHighSchoolSummary,
   modifyHighSchoolSummary,
   deleteHighSchoolSummary
 } from '../connectors/high_school_summaries.ts'
import { Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const highSchoolSummariesRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

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
      const applicationId: string = request.params.application_id

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
      const highSchoolBody: HighSchoolSummaryModifySchema = request.body.high_school_body
      const applicationId: string = request.params.application_id

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
      const highSchoolBody: HighSchoolSummaryModifySchema = request.body.high_school_body
      const applicationId: string = request.params.application_id
      const highSchool: string = request.params.high_school
      const startMonth: string = request.params.start_month
      const endMonth: string = request.params.end_month

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
      const applicationId: string = request.params.application_id
      const highSchool: string = request.params.high_school
      const startMonth: string = request.params.start_month
      const endMonth: string = request.params.end_month

      const res = await deleteHighSchoolSummary(applicationId, highSchool, startMonth, endMonth)
      // TODO: make the above work
   })
}