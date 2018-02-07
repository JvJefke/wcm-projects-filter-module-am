"use strict";

/**
 * @api {POST} /api/1.0.0/projects-am/projects Get filtered projects.
 * @apiGroup Projects
 * @apiVersion 1.0.0
 *
 * @apiParam (body) {Object} ProjectsBodyQuery query object
 * @apiParam (body) {String} ProjectsBodyQuery.q search query
 * @apiParam (body) {String[]} ProjectsBodyQuery.visions Uuid's of selected visions
 * @apiParam (body) {Boolean} ProjectsBodyQuery.participate Defines if only projects should be return that have participations in the future
 * @apiParam (body) {Number} [ProjectsBodyQuery.skip=0] items to skip
 * @apiParam (body) {Number} [ProjectsBodyQuery.limit=10] items to skip
 *
 * @apiSuccess (200) {Object} Projects200Query Success
 * @apiSuccess (200) {Object[]} Projects200Query.result Success
 * @apiSuccess (200) {String} Projects200Query.result._id Mongo _id
 * @apiSuccess (200) {String} Projects200Query.result.uuid Content uuid
 * @apiSuccess (200) {Object} Projects200Query.result.fields All fields of the content
 * @apiSuccess (200) {Object} Projects200Query.result.meta Meta data of the content object
 * @apiSuccess (200) {String} Projects200Query.result.meta.label Content label
 * @apiSuccess (200) {Object} Projects200Query.result.meta.taxonomy Content taxonomy
 * @apiSuccess (200) {Array} Projects200Query.result.meta.taxonomy.available Taxonomy available
 * @apiSuccess (200) {String} Projects200Query.result.meta.taxonomy.dataType Taxonomy data type
 * @apiSuccess (200) {Array} Projects200Query.result.meta.taxonomy.tags Taxonomy tags
 * @apiSuccess (200) {Date} Projects200Query.result.meta.created Created at
 * @apiSuccess (200) {Date} Projects200Query.result.meta.lastModified Last modified at
 * @apiSuccess (200) {Boolean} Projects200Query.result.meta.published Published
 * @apiSuccess (200) {Number} Projects200Query.result.meta.hitCount Hit counter
 * @apiSuccess (200) {Array} Projects200Query.result.meta.activeLanguages Active languages
 * @apiSuccess (200) {String} Projects200Query.result.meta.contentType Content type
 * @apiSuccess (200) {String} Projects200Query.result.meta.safeLabel Safe label
 * @apiSuccess (200) {Boolean} Projects200Query.result.meta.deleted Deleted
 * @apiSuccess (200) {Number} Projects200Query.skip Skip
 * @apiSuccess (200) {Number} Projects200Query.limit Limit
 * @apiSuccess (200) {Number} Projects200Query.total Total
 *
 * @apiError (400) {Object} Error Bad request
 *
 * @apiError (500) {Object} Error Internal server error
 */
module.exports.filtered = (req, res) => {

};
