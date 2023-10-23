const { 
    BiographicalClassificationsSchema,
    BiographicalClassificationsModifySchema
 } = require('../../models/DefinitionSchemas')
const { 
    Response400Schema,
    Response401Schema,
    Response403Schema,
    Response404Schema,
    Response409Schema,
    Response500Schema,
    ResponseDefaultSchema
 } = require('../../models/ResponseSchemas')
const { 
    ApplicationIdPathSchema
 } = require('../../models/ParameterSchemas')
const { 
    getBioClassifications,
    modifyBioClassification
 } = require('../../controllers/biographical_classifications')
const { Tags } = require('../../models/constants')
const { Type } = require('@sinclair/typebox')

const biographicalClassificationsRoute = async (fastifyApp) => {
    const fastify = fastifyApp.withTypeProvider()

    fastify.get('/:application_id/biographical_classifications', {
        schema: {
            tags: [Tags.Profile],
            summary: 'Get applicant biographical profile',
            response: {
                200: BiographicalClassificationsSchema,
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
        await getBioClassifications(request, reply)
    })

    fastify.put('/:application_id/biographical_classifications', {
        schema: {
            tags: [Tags.Profile],
            summary: 'Modify applicant biographical profile',
            response: {
                200: BiographicalClassificationsSchema,
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
            body: BiographicalClassificationsModifySchema
        }
    }, async (request, reply) => {
        await modifyBioClassification(request, reply)
    })
}

module.exports = { default: biographicalClassificationsRoute }