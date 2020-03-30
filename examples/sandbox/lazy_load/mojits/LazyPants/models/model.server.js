/*
 * Copyright (c) 2011-2013, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

YUI.add('lazypants-model', function(Y, NAME) {

/**
 * The lazypants-model module.
 *
 * @module LazyPants
 */

    /**
     * Constructor for the lazypants-model class.
     *
     * @class lazypants-model
     * @constructor
     */
    Y.namespace("mojito.models")[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {Function} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {
            callback({some:'data'});
        }

    };

}, '0.0.1', {requires: []});
