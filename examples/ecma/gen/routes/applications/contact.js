import { 
   BasicSchema,
   ContactModifyParameterSchema
 } from '../../DefinitionSchemas.js'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../ResponseSchemas.js'
import { 
   ApplicationIdPathSchema
 } from '../../ParameterSchemas.js'
import { Tags } from '../../constants.js'
import { Type } from '@sinclair/typebox'

const contactRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

   fastify.put('/:application_id/contact', {
      schema: {
         tags: [Tags.Profile],
         summary: 'Update contact information',
         response: {
            200: BasicSchema,
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
            contact: ContactModifyParameterSchema
         })
      }
   }, async (request, reply) => {
      // TODO: make this route work
   })
}

export default contactRoute