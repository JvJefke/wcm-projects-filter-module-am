"use strict";

/**
 * @api {POST} /api/1.0.0/projects-am/map Get filtered projects for the map.
 * @apiGroup Map
 * @apiVersion 1.0.0
 *
 * @apiParam (body) {Object} MapBodyQuery query object
 * @apiParam (body) {String} MapBodyQuery.q search query
 * @apiParam (body) {String[]} MapBodyQuery.visions Uuid's of selected visions
 * @apiParam (body) {Boolean} MapBodyQuery.participate Defines if only projects should be return that have participations in the future
 * @apiParam (body) {Number} [MapBodyQuery.skip=0] items to skip
 * @apiParam (body) {Number} [MapBodyQuery.limit=10] items to skip
 *
 * @apiSuccess (200) {Object} Map200Query Success
 * @apiSuccess (200) {Object[]} Map200Query.result Result
 * @apiSuccess (200) {String} Map200Query.result.uuid Project uuid
 * @apiSuccess (200) {String} Map200Query.result.title Project title
 * @apiSuccess (200) {String} Map200Query.result.description Project description
 * @apiSuccess (200) {Object} Map200Query.result.thumbnail Project thumbnail reference
 * @apiSuccess (200) {Object} Map200Query.result.geoJSON Project geoJSON data
 * @apiSuccess (200) {String[]} Map200Query.result.related Related projects (uuid)
 * @apiSuccess (200) {String[]} Map200Query.result.childs Child projects (uuid)
 * @apiSuccess (200) {Number} Map200Query.skip Skip
 * @apiSuccess (200) {Object} Map200Query.limit Limit
 * @apiSuccess (200) {Object} Map200Query.total Total items
 *
 * @apiError (400) {Object} Error Bad request
 *
 * @apiError (500) {Object} Error Internal server error
 */
module.exports.filtered = (req, res) => {

};
