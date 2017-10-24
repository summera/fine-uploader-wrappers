'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var thenable = exports.thenable = ['onCancel', 'onPasteReceived', 'onSubmit', 'onSubmitDelete', 'onUpload', 'onUploadChunk', 'onValidate', 'onValidateBatch'];

var traditional = exports.traditional = ['onAutoRetry', 'onCancel', 'onComplete', 'onAllComplete', 'onDelete', 'onDeleteComplete', 'onError', 'onManualRetry', 'onPasteReceived', 'onProgress', 'onResume', 'onSessionRequestComplete', 'onStatusChange', 'onSubmit', 'onSubmitDelete', 'onSubmitted', 'onTotalProgress', 'onUpload', 'onUploadChunk', 'onUploadChunkSuccess', 'onValidate', 'onValidateBatch'];

var s3 = exports.s3 = traditional.concat(['onCredentialsExpired']);