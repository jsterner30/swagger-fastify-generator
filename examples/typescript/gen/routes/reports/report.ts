import { 
   ReportsMetadataSchema
 } from '../../DefinitionSchemas'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../ResponseSchemas'
import { Tags } from '../../constants'
import { Static, Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const reportRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

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
      // TODO: make this route work
   })
}

export default reportRoute