import { 
   ReportsMetadataSchema
 } from '../../DefinitionSchemas.js'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../ResponseSchemas.js'
import { Tags } from '../../constants.js'
import { Type } from '@sinclair/typebox'

const reportRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

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