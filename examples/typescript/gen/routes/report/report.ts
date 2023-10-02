import { 
   ReportsMetadataSchema
 } from '../../DefinitionSchemas.ts'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../ResponseSchemas.ts'
import { 
   AdmitPeriodQuerySchema,
   DateStartQuerySchema,
   DateEndQuerySchema,
   NameQuerySchema,
   PaginationParameterQuerySchema,
   LimitQuerySchema,
   CursorQuerySchema
 } from '../../ParameterSchemas.ts'
import { Tags } from '../../constants.ts'
import { 
   getReport,
   getReportMetadata
 } from '../connectors/report.ts'
import { Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const reportRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

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
      const admitPeriod: string = request.query.admit_period
      const dateStart: string = request.query.date_start
      const dateEnd: string = request.query.date_end
      const name: string = request.query.name
      const paginationParameter: string = request.query.pagination_parameter
      const limit: string = request.query.limit
      const cursor: string = request.query.cursor

      const res = await getReport(admitPeriod, dateStart, dateEnd, name, paginationParameter, limit, cursor)
      // TODO: make the above work
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

      const res = await getReportMetadata()
      // TODO: make the above work
   })
}