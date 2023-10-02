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
import { 
   getConcepts,
   validateClaim,
   validateClaimArray
 } from '../connectors/claims.js'
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

      const res = await getConcepts()
      // TODO: make the above work
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
      const claimBody = request.body.claim_body

      const res = await validateClaim(claimBody)
      // TODO: make the above work
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
      const claimArray = request.body.claim_array

      const res = await validateClaimArray(claimArray)
      // TODO: make the above work
   })
}