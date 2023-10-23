import { 
   ReportsMetadataSchema
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
   getReportMetadata
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
      await getReportMetadata(request, reply)
   })
}

export default reportRoute