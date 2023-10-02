import { 
   StatusSchema
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
   DateStartQuerySchema,
   DateEndQuerySchema
 } from '../../ParameterSchemas.ts'
import { Tags } from '../../constants.ts'
import { Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const statusRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

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
      // TODO: make this route work
   })
}

export default statusRoute