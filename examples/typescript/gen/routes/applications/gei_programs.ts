import { 
   GeiProgramsSchema,
   GeiProgramModifySchema
 } from '../../models/DefinitionSchemas'
import { 
   Response400Schema,
   Response401Schema,
   Response403Schema,
   Response404Schema,
   Response409Schema,
   Response500Schema,
   ResponseDefaultSchema
 } from '../../models/ResponseSchemas'
import { 
   ApplicationIdPathSchema
 } from '../../models/ParameterSchemas'
import { 
   getGEIPrograms,
   modifyGEIPrograms
 } from '../../controllers/gei_programs'
import { Tags } from '../../models/constants'
import { Static, Type } from '@sinclair/typebox'
import { FastifyPluginAsync } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

// TODO define your own OptionsInterface
const geiProgramsRoute: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {
   const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()

   fastify.get('/:application_id/gei_programs', {
      schema: {
         tags: [Tags.LDS],
         summary: 'Get applicant GEI program information',
         response: {
            200: GeiProgramsSchema,
            400: Response400Schema,
            401: Response401Schema,
            403: Response403Schema,
            404: Response404Schema,
            409: Response409Schema,
            500: Response500Schema,
            default: ResponseDefaultSchema
         },
         params: Type.Object({
            application_id: ApplicationIdPathSchema
         })
      }
   }, async (request, reply) => {
      await getGEIPrograms(request, reply)
   })

   fastify.put('/:application_id/gei_programs', {
      schema: {
         tags: [Tags.LDS],
         summary: 'Modify applicant GEI program information',
         response: {
            200: GeiProgramsSchema,
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
         body: GeiProgramModifySchema
      }
   }, async (request, reply) => {
      await modifyGEIPrograms(request, reply)
   })
}

export default geiProgramsRoute