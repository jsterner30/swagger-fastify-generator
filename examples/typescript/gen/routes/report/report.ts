import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../models/ResponseSchemas'
import { 
   AdmitPeriodQuerySchema,
   DateStartQuerySchema,
   DateEndQuerySchema,
   NameQuerySchema,
   PaginationParameterQuerySchema,
   LimitQuerySchema,
   CursorQuerySchema
 } from '../../models/ParameterSchemas'
import { 
   getReport
 } from '../../controllers/report'
import { Tags } from '../../models/constants'
import { Static, Type } from '@sinclair/typebox'
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
      await getReport(request, reply)
   })
}

export default reportRoute