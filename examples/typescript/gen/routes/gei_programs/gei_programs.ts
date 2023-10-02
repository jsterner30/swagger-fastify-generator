import { 
   GeiProgramsSchema,
   GeiProgramModifySchema
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
import { 
   ApplicationIdPathSchema
 } from '../../ParameterSchemas.ts'
import { Tags } from '../../constants.ts'
import { 
   getGEIPrograms,
   modifyGEIPrograms
 } from '../connectors/gei_programs.ts'
import { Type } from '@sinclair/typebox'
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
      const applicationId: string = request.params.application_id

      const res = await getGEIPrograms(applicationId)
      // TODO: make the above work
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
         body: Type.Object({
            gei_program: GeiProgramModifySchema
         })
      }
   }, async (request, reply) => {
      const geiProgram: GeiProgramModifySchema = request.body.gei_program
      const applicationId: string = request.params.application_id

      const res = await modifyGEIPrograms(geiProgram, applicationId)
      // TODO: make the above work
   })
}