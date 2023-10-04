import { 
   ConceptsSchema,
   ErrorResponseSchema,
   ClaimBodySchema,
   ClaimArrayResponseSchema,
   ClaimArraySchema
 } from '../../DefinitionSchemas.js'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response404Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../ResponseSchemas.js'
import { Tags } from '../../constants.js'
import { Type } from '@sinclair/typebox'

const claimsRoute = async (fastifyApp) => {
   const fastify = fastifyApp.withTypeProvider()

   fastify.get('/', {
      schema: {
         tags: [Tags.Claims],
         summary: 'Retrieve Properties',
         response: {
            200: ConceptsSchema,
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            404: Response404Schema,
            409: Response409Schema,
            500: Response500Schema,
            default: ResponseDefaultSchema
         }
      }
   }, async (request, reply) => {
      // TODO: make this route work
   })

   fastify.put('/', {
      schema: {
         tags: [Tags.Claims],
         summary: 'Submit Claim',
         response: {
            200: ErrorResponseSchema,
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            404: Response404Schema,
            409: Response409Schema,
            500: Response500Schema,
            default: ResponseDefaultSchema
         },
         body: Type.Object({
            claim_body: ClaimBodySchema
         })
      }
   }, async (request, reply) => {
      // TODO: make this route work
   })

   fastify.put('/batch', {
      schema: {
         tags: [Tags.Claims],
         summary: 'Submit Claim',
         response: {
            200: ClaimArrayResponseSchema,
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            404: Response404Schema,
            409: Response409Schema,
            default: ResponseDefaultSchema
         },
         body: Type.Object({
            claim_array: ClaimArraySchema
         })
      }
   }, async (request, reply) => {
      // TODO: make this route work
   })
}

export default claimsRoute