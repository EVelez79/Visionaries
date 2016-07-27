"use strict";
var iNaturalistAPI = require( "../inaturalist_api" ),
    ObservationFieldValue = require( "../models/observation_field_value" );

var observationFieldValues = class observationFieldValues {
  static create( params, options ) {
    return iNaturalistAPI.post( "observation_field_values", params, options ).
      then( ObservationFieldValue.typifyInstanceResponse );
  }

  static update( params, options ) {
    return iNaturalistAPI.put( "observation_field_values/:id", params, options ).
      then( ObservationFieldValue.typifyInstanceResponse );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "observation_field_values/:id", params, options );
  }
};

module.exports = observationFieldValues;
