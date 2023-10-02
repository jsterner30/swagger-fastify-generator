const { 
    BiographicalClassificationsSchema,
    BiographicalClassificationsModifySchema
 } = require('../../DefinitionSchemas.js')
const { 
    Response400Schema,
    Response401Schema,
    Response403Schema,
    Response404Schema,
    Response409Schema,
    Response500Schema,
    ResponseDefaultSchema
 } = require('../../ResponseSchemas.js')
const { 
    ApplicationIdPathSchema
 } = require('../../ParameterSchemas.js')
const { Tags } = require('../../constants.js')
const { 
    getBioClassifications,
    modifyBioClassification
 } = require('../connectors/biographical_classifications.js')
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
        const applicationId = request.params.application_id

        const res = await getBioClassifications(applicationId)
        // TODO: make the above work
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
            body: Type.Object({
                biographical_classifications: BiographicalClassificationsModifySchema
            })
        }
    }, async (request, reply) => {
        const biographicalClassifications = request.body.biographical_classifications
        const applicationId = request.params.application_id

        const res = await modifyBioClassification(biographicalClassifications, applicationId)
        // TODO: make the above work
    })
}