import { 
   ConceptsSchema,
   ErrorResponseSchema,
   ClaimBodySchema,
   ClaimArrayResponseSchema,
   ClaimArraySchema
 } from '../../DefinitionSchemas.ts'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response404Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../ResponseSchemas.ts'
import { Tags } from '../../constants.ts'
import { 
   getConcepts,
   validateClaim,
   validateClaimArray
 } from '../connectors/claims.ts'
import { Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const claimsRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

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
      const claimBody: ClaimBodySchema = request.body.claim_body

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
      const claimArray: ClaimArraySchema = request.body.claim_array

      const res = await validateClaimArray(claimArray)
      // TODO: make the above work
   })
}