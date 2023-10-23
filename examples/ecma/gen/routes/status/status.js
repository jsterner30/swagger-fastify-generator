import { 
   StatusSchema
 } from '../../models/DefinitionSchemas'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../models/ResponseSchemas'
import { 
   DateStartQuerySchema,
   DateEndQuerySchema
 } from '../../models/ParameterSchemas'
import { 
   getStatus
 } from '../../controllers/status'
import { Tags } from '../../models/constants'
import { Type } from '@sinclair/typebox'

const statusRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

   fastify.get('/', {
      schema: {
         tags: [Tags.Status],
         summary: 'Get status',
         response: {
            200: StatusSchema,
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            409: Response409Schema,
            500: Response500Schema,
            default: ResponseDefaultSchema
         },
         querystring: Type.Object({
            date_start: Type.Optional(DateStartQuerySchema),
            date_end: Type.Optional(DateEndQuerySchema)
         })
      }
   }, async (request, reply) => {
      await getStatus(request, reply)
   })
}

export default statusRoute