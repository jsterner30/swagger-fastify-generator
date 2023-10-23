import { 
   CollegeSummariesSchema,
   CollegeSummaryModifySchema,
   CollegeSummarySchema,
   ErrorResponseSchema
 } from '../../models/DefinitionSchemas'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response404Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../models/ResponseSchemas'
import { 
   ApplicationIdPathSchema,
   CollegePathSchema,
   StartMonthPathSchema,
   EndMonthPathSchema
 } from '../../models/ParameterSchemas'
import { 
   getCollegeSummaries,
   modifyCollegeSummaries,
   modifyApplicantCollegeSummary,
   deleteApplicantCollegeSummary
 } from '../../controllers/college_summaries'
import { Tags } from '../../models/constants'
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
      await getCollegeSummaries(request, reply)
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
         body: CollegeSummaryModifySchema
      }
   }, async (request, reply) => {
      await modifyCollegeSummaries(request, reply)
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
         body: CollegeSummaryModifySchema
      }
   }, async (request, reply) => {
      await modifyApplicantCollegeSummary(request, reply)
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
      await deleteApplicantCollegeSummary(request, reply)
   })
}

export default collegeSummariesRoute