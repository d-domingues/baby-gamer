(self["webpackChunkbaby_gamer"] = self["webpackChunkbaby_gamer"] || []).push([["default-src_app_pages_family-gallery_family-gallery_page_ts"],{

/***/ 6977:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/bootstrap.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReady": () => (/* binding */ checkReady)
/* harmony export */ });
function checkReady() {
    if (typeof process === 'undefined') {
        var win_1 = typeof window !== 'undefined' ? window : {};
        var DEVICE_READY_TIMEOUT_1 = 5000;
        // To help developers using cordova, we listen for the device ready event and
        // log an error if it didn't fire in a reasonable amount of time. Generally,
        // when this happens, developers should remove and reinstall plugins, since
        // an inconsistent plugin is often the culprit.
        var before_1 = Date.now();
        var didFireReady_1 = false;
        win_1.document.addEventListener('deviceready', function () {
            console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
            didFireReady_1 = true;
        });
        setTimeout(function () {
            if (!didFireReady_1 && win_1.cordova) {
                console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
            }
        }, DEVICE_READY_TIMEOUT_1);
    }
}
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ 9870:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/common.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERR_CORDOVA_NOT_AVAILABLE": () => (/* binding */ ERR_CORDOVA_NOT_AVAILABLE),
/* harmony export */   "ERR_PLUGIN_NOT_INSTALLED": () => (/* binding */ ERR_PLUGIN_NOT_INSTALLED),
/* harmony export */   "getPromise": () => (/* binding */ getPromise),
/* harmony export */   "wrapPromise": () => (/* binding */ wrapPromise),
/* harmony export */   "checkAvailability": () => (/* binding */ checkAvailability),
/* harmony export */   "instanceAvailability": () => (/* binding */ instanceAvailability),
/* harmony export */   "setIndex": () => (/* binding */ setIndex),
/* harmony export */   "callCordovaPlugin": () => (/* binding */ callCordovaPlugin),
/* harmony export */   "callInstance": () => (/* binding */ callInstance),
/* harmony export */   "getPlugin": () => (/* binding */ getPlugin),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "pluginWarn": () => (/* binding */ pluginWarn),
/* harmony export */   "cordovaWarn": () => (/* binding */ cordovaWarn),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapInstance": () => (/* binding */ wrapInstance)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2759);

var ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
var ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };
function getPromise(callback) {
    var tryNativePromise = function () {
        if (Promise) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    if (typeof window !== 'undefined' && window.angular) {
        var doc = window.document;
        var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();
        if (injector) {
            var $q = injector.get('$q');
            return $q(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
    }
    return tryNativePromise();
}
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    var pluginResult, rej;
    var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return resolve(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return reject(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej = reject;
    });
    // Angular throws an error on unhandled rejection, but in this case we have already printed
    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
    // to error
    if (pluginResult && pluginResult.error) {
        p.catch(function () { });
        typeof rej === 'function' && rej(pluginResult.error);
    }
    return p;
}
function wrapOtherPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return getPromise(function (resolve, reject) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
        if (pluginResult) {
            if (pluginResult.error) {
                reject(pluginResult.error);
            }
            else if (pluginResult.then) {
                pluginResult.then(resolve).catch(reject);
            }
        }
        else {
            reject({ error: 'unexpected_error' });
        }
    });
}
function wrapObservable(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var pluginResult;
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.next(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.error(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }
        if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
            observer.complete();
        }
        return function () {
            try {
                if (opts.clearFunction) {
                    if (opts.clearWithArgs) {
                        return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                    }
                    return callCordovaPlugin(pluginObj, opts.clearFunction, []);
                }
            }
            catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                console.warn(e);
            }
        };
    });
}
/**
 * Wrap the event with an observable
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event, element) {
    element =
        typeof window !== 'undefined' && element
            ? get(window, element)
            : element || (typeof window !== 'undefined' ? window : {});
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, event);
}
function checkAvailability(plugin, methodName, pluginName) {
    var pluginRef, pluginInstance, pluginPackage;
    if (typeof plugin === 'string') {
        pluginRef = plugin;
    }
    else {
        pluginRef = plugin.constructor.getPluginRef();
        pluginName = plugin.constructor.getPluginName();
        pluginPackage = plugin.constructor.getPluginInstallName();
    }
    pluginInstance = getPlugin(pluginRef);
    if (!pluginInstance || (!!methodName && typeof pluginInstance[methodName] === 'undefined')) {
        if (typeof window === 'undefined' || !window.cordova) {
            cordovaWarn(pluginName, methodName);
            return ERR_CORDOVA_NOT_AVAILABLE;
        }
        pluginWarn(pluginName, pluginPackage, methodName);
        return ERR_PLUGIN_NOT_INSTALLED;
    }
    return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 * @private
 */
function instanceAvailability(pluginObj, methodName) {
    return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
function setIndex(args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // ignore resolve and reject in case sync
    if (opts.sync) {
        return args;
    }
    // If the plugin method expects myMethod(success, err, options)
    if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (opts.callbackStyle === 'node') {
        args.push(function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }
    else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
        var obj = {};
        obj[opts.successName] = resolve;
        obj[opts.errorName] = reject;
        args.push(obj);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        var setSuccessIndex = function () {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
                args[opts.successIndex] = resolve;
            }
            else {
                args.splice(opts.successIndex, 0, resolve);
            }
        };
        var setErrorIndex = function () {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
            // defined and thus causing non expected behavior.
            if (opts.errorIndex > args.length) {
                args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            }
            else {
                args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
        };
        if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
        }
        else {
            setSuccessIndex();
            setErrorIndex();
        }
    }
    else {
        // Otherwise, let's tack them on to the end of the argument list
        // which is 90% of cases
        args.push(resolve);
        args.push(reject);
    }
    return args;
}
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // Try to figure out where the success/error callbacks need to be bound
    // to our promise resolve/reject handlers.
    args = setIndex(args, opts, resolve, reject);
    var availabilityCheck = checkAvailability(pluginObj, methodName);
    if (availabilityCheck === true) {
        var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
        return pluginInstance[methodName].apply(pluginInstance, args);
    }
    else {
        return availabilityCheck;
    }
}
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    if (instanceAvailability(pluginObj, methodName)) {
        return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
    }
}
function getPlugin(pluginRef) {
    if (typeof window !== 'undefined') {
        return get(window, pluginRef);
    }
    return null;
}
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
function pluginWarn(pluginName, plugin, method) {
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
    }
    else {
        console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
    }
    if (plugin) {
        console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
    }
}
/**
 * @private
 * @param pluginName
 * @param method
 */
function cordovaWarn(pluginName, method) {
    if (typeof process === 'undefined') {
        if (method) {
            console.warn('Native: tried calling ' +
                pluginName +
                '.' +
                method +
                ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
        else {
            console.warn('Native: tried accessing the ' +
                pluginName +
                ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    }
}
/**
 * @private
 */
var wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callCordovaPlugin(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
        }
        else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event, opts.element);
        }
        else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
        }
        else {
            return wrapPromise(pluginObj, methodName, args, opts);
        }
    };
};
/**
 * @private
 */
function wrapInstance(pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            return callInstance(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
                var pluginResult;
                if (opts.destruct) {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.next(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.error(args);
                    });
                }
                else {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }
                if (pluginResult && pluginResult.error) {
                    observer.error(pluginResult.error);
                }
                return function () {
                    try {
                        if (opts.clearWithArgs) {
                            return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                        }
                        return callInstance(pluginObj, opts.clearFunction, []);
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                        console.warn(e);
                    }
                };
            });
        }
        else if (opts.otherPromise) {
            return getPromise(function (resolve, reject) {
                var result;
                if (opts.destruct) {
                    result = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                if (result && result.then) {
                    result.then(resolve, reject);
                }
                else {
                    reject();
                }
            });
        }
        else {
            var pluginResult_1, rej_1;
            var p = getPromise(function (resolve, reject) {
                if (opts.destruct) {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                rej_1 = reject;
            });
            // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error
            if (pluginResult_1 && pluginResult_1.error) {
                p.catch(function () { });
                typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
            }
            return p;
        }
    };
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 9849:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaFunctionOverride": () => (/* binding */ cordovaFunctionOverride)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9870);


function overrideFunction(pluginObj, methodName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
        var availabilityCheck = (0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, methodName);
        if (availabilityCheck === true) {
            var pluginInstance_1 = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef());
            pluginInstance_1[methodName] = observer.next.bind(observer);
            return function () { return (pluginInstance_1[methodName] = function () { }); };
        }
        else {
            observer.error(availabilityCheck);
            observer.complete();
        }
    });
}
function cordovaFunctionOverride(pluginObj, methodName, args) {
    if (args === void 0) { args = []; }
    return overrideFunction(pluginObj, methodName);
}
//# sourceMappingURL=cordova-function-override.js.map

/***/ }),

/***/ 1784:
/*!*************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaInstance": () => (/* binding */ cordovaInstance)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9870);

function cordovaInstance(pluginObj, methodName, config, args) {
    args = Array.from(args);
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova-instance.js.map

/***/ }),

/***/ 9418:
/*!*************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-property.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaPropertyGet": () => (/* binding */ cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* binding */ cordovaPropertySet)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9870);

function cordovaPropertyGet(pluginObj, key) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        return (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
    }
    return null;
}
function cordovaPropertySet(pluginObj, key, value) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
    }
}
//# sourceMappingURL=cordova-property.js.map

/***/ }),

/***/ 4234:
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordova": () => (/* binding */ cordova)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9870);

function cordova(pluginObj, methodName, config, args) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova.js.map

/***/ }),

/***/ 5938:
/*!**************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/instance-property.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instancePropertyGet": () => (/* binding */ instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* binding */ instancePropertySet)
/* harmony export */ });
function instancePropertyGet(pluginObj, key) {
    if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
        return pluginObj._objectInstance[key];
    }
    return null;
}
function instancePropertySet(pluginObj, key, value) {
    if (pluginObj._objectInstance) {
        pluginObj._objectInstance[key] = value;
    }
}
//# sourceMappingURL=instance-property.js.map

/***/ }),

/***/ 6264:
/*!*******************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/interfaces.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ 399:
/*!***************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonicNativePlugin": () => (/* reexport safe */ _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__.IonicNativePlugin),
/* harmony export */   "checkAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability),
/* harmony export */   "instanceAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability),
/* harmony export */   "wrap": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap),
/* harmony export */   "getPromise": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise),
/* harmony export */   "cordova": () => (/* reexport safe */ _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova),
/* harmony export */   "cordovaFunctionOverride": () => (/* reexport safe */ _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride),
/* harmony export */   "cordovaInstance": () => (/* reexport safe */ _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance),
/* harmony export */   "cordovaPropertyGet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet),
/* harmony export */   "instancePropertyGet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ 6977);
/* harmony import */ var _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-native-plugin */ 2948);
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ 9870);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ 4234);
/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ 9849);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ 1784);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ 9418);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ 5938);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ 6264);


// Decorators







(0,_bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)();

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2948:
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/ionic-native-plugin.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonicNativePlugin": () => (/* binding */ IonicNativePlugin)
/* harmony export */ });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ 9870);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 9746);


var IonicNativePlugin = /** @class */ (function () {
    function IonicNativePlugin() {
    }
    /**
     * Returns a boolean that indicates whether the plugin is installed
     * @return {boolean}
     */
    IonicNativePlugin.installed = function () {
        var isAvailable = (0,_decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
        return isAvailable;
    };
    /**
     * Returns the original plugin object
     */
    IonicNativePlugin.getPlugin = function () {
        if (typeof window !== 'undefined') {
            return (0,_util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
        }
        return null;
    };
    /**
     * Returns the plugin's name
     */
    IonicNativePlugin.getPluginName = function () {
        var pluginName = this.pluginName;
        return pluginName;
    };
    /**
     * Returns the plugin's reference
     */
    IonicNativePlugin.getPluginRef = function () {
        var pluginRef = this.pluginRef;
        return pluginRef;
    };
    /**
     * Returns the plugin's install name
     */
    IonicNativePlugin.getPluginInstallName = function () {
        var plugin = this.plugin;
        return plugin;
    };
    /**
     * Returns the plugin's supported platforms
     */
    IonicNativePlugin.getSupportedPlatforms = function () {
        var platform = this.platforms;
        return platform;
    };
    IonicNativePlugin.pluginName = '';
    IonicNativePlugin.pluginRef = '';
    IonicNativePlugin.plugin = '';
    IonicNativePlugin.repo = '';
    IonicNativePlugin.platforms = [];
    IonicNativePlugin.install = '';
    return IonicNativePlugin;
}());

//# sourceMappingURL=ionic-native-plugin.js.map

/***/ }),

/***/ 9746:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/util.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPromise": () => (/* binding */ getPromise)
/* harmony export */ });
/**
 * @private
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @private
 */
function getPromise(callback) {
    if (callback === void 0) { callback = function () { }; }
    var tryNativePromise = function () {
        if (typeof Promise === 'function' || (typeof window !== 'undefined' && window.Promise)) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    return tryNativePromise();
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 7125:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic-native/native-audio/__ivy_ngcc__/ngx/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NativeAudio": () => (/* binding */ NativeAudio)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 399);




var NativeAudio = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(NativeAudio, _super);
    function NativeAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeAudio.prototype.preloadSimple = function (id, assetPath) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "preloadSimple", {}, arguments); };
    NativeAudio.prototype.preloadComplex = function (id, assetPath, volume, voices, delay) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "preloadComplex", {}, arguments); };
    NativeAudio.prototype.play = function (id, completeCallback) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "play", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    NativeAudio.prototype.stop = function (id) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stop", {}, arguments); };
    NativeAudio.prototype.loop = function (id) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "loop", {}, arguments); };
    NativeAudio.prototype.unload = function (id) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "unload", {}, arguments); };
    NativeAudio.prototype.setVolumeForComplexAsset = function (id, volume) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setVolumeForComplexAsset", {}, arguments); };
    NativeAudio.pluginName = "NativeAudio";
    NativeAudio.plugin = "cordova-plugin-nativeaudio";
    NativeAudio.pluginRef = "plugins.NativeAudio";
    NativeAudio.repo = "https://github.com/floatinghotpot/cordova-plugin-nativeaudio";
    NativeAudio.platforms = ["Android", "Browser", "iOS"];
NativeAudio.ɵfac = /*@__PURE__*/ function () { var ɵNativeAudio_BaseFactory; return function NativeAudio_Factory(t) { return (ɵNativeAudio_BaseFactory || (ɵNativeAudio_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NativeAudio)))(t || NativeAudio); }; }();
NativeAudio.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NativeAudio, factory: function (t) { return NativeAudio.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NativeAudio, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return NativeAudio;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvbmF0aXZlLWF1ZGlvL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUUyQixJQW1DTSwrQkFBaUI7QUFBQztBQUU5QjtBQUF5RTtBQUFNLElBTWxHLG1DQUFhLGFBQUMsRUFBVSxFQUFFLFNBQWlCO0FBS3pCLElBU2xCLG9DQUFjLGFBQUMsRUFBVSxFQUFFLFNBQWlCLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxLQUFhO0FBS3hFLElBU25CLDBCQUFJLGFBQUMsRUFBVSxFQUFFLGdCQUEyQjtBQU0zQixJQUlqQiwwQkFBSSxhQUFDLEVBQVU7QUFLTixJQUtULDBCQUFJLGFBQUMsRUFBVTtBQUtOLElBS1QsNEJBQU0sYUFBQyxFQUFVO0FBS04sSUFNWCw4Q0FBd0IsYUFBQyxFQUFVLEVBQUUsTUFBYztBQUlqQjtBQUE0QztBQUF1RDtBQUFtRDtBQUF1RjsrQ0FsRmhSLFVBQVU7Ozs7MEJBQ0w7QUFBQyxzQkF2Q1A7QUFBRSxFQXVDK0IsaUJBQWlCO0FBQ2pELFNBRFksV0FBVztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG4vKipcbiAqIEBuYW1lIE5hdGl2ZSBBdWRpb1xuICogQGRlc2NyaXB0aW9uIE5hdGl2ZSBBdWRpbyBQbGF5YmFja1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOYXRpdmVBdWRpbyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmF0aXZlLWF1ZGlvL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuYXRpdmVBdWRpbzogTmF0aXZlQXVkaW8pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8ucHJlbG9hZFNpbXBsZSgndW5pcXVlSWQxJywgJ3BhdGgvdG8vZmlsZS5tcDMnKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnByZWxvYWRDb21wbGV4KCd1bmlxdWVJZDInLCAncGF0aC90by9maWxlMi5tcDMnLCAxLCAxLCAwKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5wbGF5KCd1bmlxdWVJZDEnKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKlxuICogLy8gY2FuIG9wdGlvbmFsbHkgcGFzcyBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBmaWxlIGlzIGRvbmUgcGxheWluZ1xuICogdGhpcy5uYXRpdmVBdWRpby5wbGF5KCd1bmlxdWVJZDEnLCAoKSA9PiBjb25zb2xlLmxvZygndW5pcXVlSWQxIGlzIGRvbmUgcGxheWluZycpKTtcbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLmxvb3AoJ3VuaXF1ZUlkMicpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnNldFZvbHVtZUZvckNvbXBsZXhBc3NldCgndW5pcXVlSWQyJywgMC42KS50aGVuKG9uU3VjY2VzcyxvbkVycm9yKTtcbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnN0b3AoJ3VuaXF1ZUlkMScpLnRoZW4ob25TdWNjZXNzLG9uRXJyb3IpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8udW5sb2FkKCd1bmlxdWVJZDEnKS50aGVuKG9uU3VjY2VzcyxvbkVycm9yKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOYXRpdmVBdWRpbycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5hdGl2ZWF1ZGlvJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5OYXRpdmVBdWRpbycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZmxvYXRpbmdob3Rwb3QvY29yZG92YS1wbHVnaW4tbmF0aXZlYXVkaW8nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXRpdmVBdWRpbyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIExvYWRzIGFuIGF1ZGlvIGZpbGUgaW50byBtZW1vcnkuIE9wdGltaXplZCBmb3Igc2hvcnQgY2xpcHMgLyBzaW5nbGUgc2hvdHMgKHVwIHRvIGZpdmUgc2Vjb25kcykuIENhbm5vdCBiZSBzdG9wcGVkIC8gbG9vcGVkLlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcGFyYW0gYXNzZXRQYXRoIHtzdHJpbmd9ICB0aGUgcmVsYXRpdmUgcGF0aCBvciBhYnNvbHV0ZSBVUkwgKGlubHVkaW5nIGh0dHA6Ly8pIHRvIHRoZSBhdWRpbyBhc3NldC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJlbG9hZFNpbXBsZShpZDogc3RyaW5nLCBhc3NldFBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGFuIGF1ZGlvIGZpbGUgaW50byBtZW1vcnkuIE9wdGltaXplZCBmb3IgYmFja2dyb3VuZCBtdXNpYyAvIGFtYmllbnQgc291bmQuIFVzZXMgaGlnaGxldmVsIG5hdGl2ZSBBUElzIHdpdGggYSBsYXJnZXIgZm9vdHByaW50LiAoaU9TOiBBVkF1ZGlvUGxheWVyKS4gQ2FuIGJlIHN0b3BwZWQgLyBsb29wZWQgYW5kIHVzZWQgd2l0aCBtdWx0aXBsZSB2b2ljZXMuIENhbiBiZSBmYWRlZCBpbiBhbmQgb3V0IHVzaW5nIHRoZSBkZWxheSBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEBwYXJhbSBhc3NldFBhdGgge3N0cmluZ30gIHRoZSByZWxhdGl2ZSBwYXRoIG9yIGFic29sdXRlIFVSTCAoaW5sdWRpbmcgaHR0cDovLykgdG8gdGhlIGF1ZGlvIGFzc2V0LlxuICAgKiBAcGFyYW0gdm9sdW1lIHtudW1iZXJ9IHRoZSB2b2x1bWUgb2YgdGhlIHByZWxvYWRlZCBzb3VuZCAoMC4xIHRvIDEuMClcbiAgICogQHBhcmFtIHZvaWNlcyB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIG11bHRpY2hhbm5lbCB2b2ljZXMgYXZhaWxhYmxlXG4gICAqIEBwYXJhbSBkZWxheSB7bnVtYmVyfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmVsb2FkQ29tcGxleChpZDogc3RyaW5nLCBhc3NldFBhdGg6IHN0cmluZywgdm9sdW1lOiBudW1iZXIsIHZvaWNlczogbnVtYmVyLCBkZWxheTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGxheXMgYW4gYXVkaW8gYXNzZXRcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHBhcmFtIGNvbXBsZXRlQ2FsbGJhY2sge0Z1bmN0aW9ufSBvcHRpb25hbC4gQ2FsbGJhY2sgdG8gYmUgaW52b2tlZCB3aGVuIGF1ZGlvIGlzIGRvbmUgcGxheWluZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBwbGF5KGlkOiBzdHJpbmcsIGNvbXBsZXRlQ2FsbGJhY2s/OiBGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHBsYXlpbmcgYW4gYXVkaW9cbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9vcHMgYW4gYXVkaW8gYXNzZXQgaW5maW5pdGVseSwgdGhpcyBvbmx5IHdvcmtzIGZvciBjb21wbGV4IGFzc2V0c1xuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvb3AoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVubG9hZHMgYW4gYXVkaW8gZmlsZSBmcm9tIG1lbW9yeVxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bmxvYWQoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHZvbHVtZSBmb3IgcHJlbG9hZGVkIGNvbXBsZXggYXNzZXRzLlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcGFyYW0gdm9sdW1lIHtudW1iZXJ9IHRoZSB2b2x1bWUgb2YgdGhlIGF1ZGlvIGFzc2V0ICgwLjEgdG8gMS4wKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRWb2x1bWVGb3JDb21wbGV4QXNzZXQoaWQ6IHN0cmluZywgdm9sdW1lOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ 7642:
/*!*********************************************************************************!*\
  !*** ./node_modules/@ionic-native/speech-recognition/__ivy_ngcc__/ngx/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechRecognition": () => (/* binding */ SpeechRecognition)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 399);





var SpeechRecognition = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SpeechRecognition, _super);
    function SpeechRecognition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechRecognition.prototype.isRecognitionAvailable = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "isRecognitionAvailable", {}, arguments); };
    SpeechRecognition.prototype.startListening = function (options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "startListening", { "callbackOrder": "reverse", "observable": true }, arguments); };
    SpeechRecognition.prototype.stopListening = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stopListening", {}, arguments); };
    SpeechRecognition.prototype.getSupportedLanguages = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getSupportedLanguages", {}, arguments); };
    SpeechRecognition.prototype.hasPermission = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hasPermission", {}, arguments); };
    SpeechRecognition.prototype.requestPermission = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "requestPermission", {}, arguments); };
    SpeechRecognition.pluginName = "SpeechRecognition";
    SpeechRecognition.plugin = "cordova-plugin-speechrecognition";
    SpeechRecognition.pluginRef = "plugins.speechRecognition";
    SpeechRecognition.repo = "https://github.com/pbakondy/cordova-plugin-speechrecognition";
    SpeechRecognition.platforms = ["Android", "iOS"];
SpeechRecognition.ɵfac = /*@__PURE__*/ function () { var ɵSpeechRecognition_BaseFactory; return function SpeechRecognition_Factory(t) { return (ɵSpeechRecognition_BaseFactory || (ɵSpeechRecognition_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SpeechRecognition)))(t || SpeechRecognition); }; }();
SpeechRecognition.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SpeechRecognition, factory: function (t) { return SpeechRecognition.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SpeechRecognition, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return SpeechRecognition;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvc3BlZWNoLXJlY29nbml0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBQ2xDO0FBRVUsSUF3RzZCLHFDQUFpQjtBQUFDO0FBRTlCO0FBSVA7QUFBTSxJQUF4QixrREFBc0I7QUFNdEIsSUFNQSwwQ0FBYyxhQUFDLE9BQTJDO0FBUXBELElBQU4seUNBQWE7QUFLZ0IsSUFJN0IsaURBQXFCO0FBTVYsSUFHWCx5Q0FBYTtBQU1aLElBR0QsNkNBQWlCO0FBSXFCO0FBQXdEO0FBQW1FO0FBQStEO0FBQTZGO3FEQTFEOVQsVUFBVTs7OzswQkFDTDtBQUFDLDRCQTdHUDtBQUFFLEVBNkdxQyxpQkFBaUI7QUFDdkQsU0FEWSxpQkFBaUI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgdHlwZSBTcGVlY2hSZWNvZ25pdGlvbkxpc3RlbmluZ09wdGlvbnMgPVxuICB8IFNwZWVjaFJlY29nbml0aW9uTGlzdGVuaW5nT3B0aW9uc0lPU1xuICB8IFNwZWVjaFJlY29nbml0aW9uTGlzdGVuaW5nT3B0aW9uc0FuZHJvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BlZWNoUmVjb2duaXRpb25MaXN0ZW5pbmdPcHRpb25zSU9TIHtcbiAgLyoqXG4gICAqIHVzZWQgbGFuZ3VhZ2UgZm9yIHJlY29nbml0aW9uIChkZWZhdWx0IGBcImVuLVVTXCJgKVxuICAgKi9cbiAgbGFuZ3VhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHVtYmVyIG9mIHJldHVybiBtYXRjaGVzIChkZWZhdWx0IGA1YClcbiAgICovXG4gIG1hdGNoZXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFsbG93IHBhcnRpYWwgcmVzdWx0cyB0byBiZSByZXR1cm5lZCAoZGVmYXVsdCBgZmFsc2VgKVxuICAgKi9cbiAgc2hvd1BhcnRpYWw/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNwZWVjaFJlY29nbml0aW9uTGlzdGVuaW5nT3B0aW9uc0FuZHJvaWQge1xuICAvKipcbiAgICogdXNlZCBsYW5ndWFnZSBmb3IgcmVjb2duaXRpb24gKGRlZmF1bHQgYFwiZW4tVVNcImApXG4gICAqL1xuICBsYW5ndWFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogbnVtYmVyIG9mIHJldHVybiBtYXRjaGVzIChtYXhpbXVtIG51bWJlciBvZiBtYXRjaGVzKVxuICAgKi9cbiAgbWF0Y2hlcz86IG51bWJlcjtcblxuICAvKipcbiAgICogZGlzcGxheWVkIHByb21wdCBvZiBsaXN0ZW5lciBwb3B1cCB3aW5kb3dcbiAgICovXG4gIHByb21wdD86IHN0cmluZztcblxuICAvKipcbiAgICogZGlzcGxheSBsaXN0ZW5lciBwb3B1cCB3aW5kb3cgd2l0aCBwcm9tcHQgKGRlZmF1bHQgYHRydWVgKVxuICAgKi9cbiAgc2hvd1BvcHVwPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWxsb3cgcGFydGlhbCByZXN1bHRzIHRvIGJlIHJldHVybmVkIChkZWZhdWx0IGBmYWxzZWApXG4gICAqL1xuICBzaG93UGFydGlhbD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgU3BlZWNoIFJlY29nbml0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc3BlZWNoIHJlY29nbml0aW9uIHVzaW5nIGNsb3VkIHNlcnZpY2VzXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTcGVlY2hSZWNvZ25pdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BlZWNoLXJlY29nbml0aW9uL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcGVlY2hSZWNvZ25pdGlvbjogU3BlZWNoUmVjb2duaXRpb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKlxuICogLy8gQ2hlY2sgZmVhdHVyZSBhdmFpbGFibGVcbiAqIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uaXNSZWNvZ25pdGlvbkF2YWlsYWJsZSgpXG4gKiAgIC50aGVuKChhdmFpbGFibGU6IGJvb2xlYW4pID0+IGNvbnNvbGUubG9nKGF2YWlsYWJsZSkpXG4gKlxuICogLy8gU3RhcnQgdGhlIHJlY29nbml0aW9uIHByb2Nlc3NcbiAqIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uc3RhcnRMaXN0ZW5pbmcob3B0aW9ucylcbiAqICAgLnN1YnNjcmliZShcbiAqICAgICAobWF0Y2hlczogc3RyaW5nW10pID0+IGNvbnNvbGUubG9nKG1hdGNoZXMpLFxuICogICAgIChvbmVycm9yKSA9PiBjb25zb2xlLmxvZygnZXJyb3I6Jywgb25lcnJvcilcbiAqICAgKVxuICpcbiAqIC8vIFN0b3AgdGhlIHJlY29nbml0aW9uIHByb2Nlc3MgKGlPUyBvbmx5KVxuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5zdG9wTGlzdGVuaW5nKClcbiAqXG4gKiAvLyBHZXQgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGxhbmd1YWdlc1xuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5nZXRTdXBwb3J0ZWRMYW5ndWFnZXMoKVxuICogICAudGhlbihcbiAqICAgICAobGFuZ3VhZ2VzOiBzdHJpbmdbXSkgPT4gY29uc29sZS5sb2cobGFuZ3VhZ2VzKSxcbiAqICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICogICApXG4gKlxuICogLy8gQ2hlY2sgcGVybWlzc2lvblxuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5oYXNQZXJtaXNzaW9uKClcbiAqICAgLnRoZW4oKGhhc1Blcm1pc3Npb246IGJvb2xlYW4pID0+IGNvbnNvbGUubG9nKGhhc1Blcm1pc3Npb24pKVxuICpcbiAqIC8vIFJlcXVlc3QgcGVybWlzc2lvbnNcbiAqIHRoaXMuc3BlZWNoUmVjb2duaXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKVxuICogICAudGhlbihcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnR3JhbnRlZCcpLFxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdEZW5pZWQnKVxuICogICApXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3BlZWNoUmVjb2duaXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zcGVlY2hyZWNvZ25pdGlvbicsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuc3BlZWNoUmVjb2duaXRpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3BiYWtvbmR5L2NvcmRvdmEtcGx1Z2luLXNwZWVjaHJlY29nbml0aW9uJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNwZWVjaFJlY29nbml0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sgZmVhdHVyZSBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNSZWNvZ25pdGlvbkF2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHJlY29nbml0aW9uIHByb2Nlc3NcbiAgICogQHJldHVybiB7UHJvbWlzZTwgc3RyaW5nW10gPn0gbGlzdCBvZiByZWNvZ25pemVkIHRlcm1zXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHN0YXJ0TGlzdGVuaW5nKG9wdGlvbnM/OiBTcGVlY2hSZWNvZ25pdGlvbkxpc3RlbmluZ09wdGlvbnMpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgdGhlIHJlY29nbml0aW9uIHByb2Nlc3NcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcExpc3RlbmluZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBsYW5ndWFnZXNcbiAgICogQHJldHVybiB7UHJvbWlzZTwgc3RyaW5nW10gPn0gbGlzdCBvZiBsYW5ndWFnZXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwcG9ydGVkTGFuZ3VhZ2VzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgcGVybWlzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBoYXMgcGVybWlzc2lvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ 74:
/*!*************************************************************!*\
  !*** ./src/app/pages/family-gallery/family-gallery.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilyGalleryPage": () => (/* binding */ FamilyGalleryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_family_gallery_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./family-gallery.page.html */ 7679);
/* harmony import */ var _family_gallery_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./family-gallery.page.scss */ 3360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ 7125);
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ 7642);
/* harmony import */ var src_app_services_figure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/figure.service */ 2433);







let FamilyGalleryPage = class FamilyGalleryPage {
    constructor(figService, speechRecognition, nativeAudio) {
        this.figService = figService;
        this.speechRecognition = speechRecognition;
        this.nativeAudio = nativeAudio;
        this.figures = this.figService.figures;
        this.options = { language: 'pt-PT' };
        this.matches = [];
        this.onSpeech = () => this.speechRecognition.startListening(this.options).subscribe((matches) => (this.matches = matches), (onerror) => console.log('error:', onerror));
        /* this.speechRecognition
          .isRecognitionAvailable()
          .then((available: boolean) => console.log(available));
    
        this.speechRecognition.hasPermission().then((hasPermission: boolean) => {
          if (!hasPermission) {
            this.speechRecognition.requestPermission().then(
              () => console.log('Granted'),
              () => console.log('Denied')
            );
          }
        }); */
    }
    ngOnInit() {
        this.nativeAudio
            .preloadSimple('bat1', 'bat.mp3')
            .then((next) => console.log(next));
        this.nativeAudio
            .preloadSimple('bat2', 'bat.wav')
            .then((next) => console.log(next));
    }
    onPlay() {
        this.nativeAudio.play('bat1');
        this.nativeAudio.play('bat2');
    }
};
FamilyGalleryPage.ctorParameters = () => [
    { type: src_app_services_figure_service__WEBPACK_IMPORTED_MODULE_4__.FigureService },
    { type: _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_3__.SpeechRecognition },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeAudio }
];
FamilyGalleryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'bbg-family-gallery',
        template: _raw_loader_family_gallery_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_family_gallery_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FamilyGalleryPage);



/***/ }),

/***/ 2433:
/*!********************************************!*\
  !*** ./src/app/services/figure.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FigureService": () => (/* binding */ FigureService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let FigureService = class FigureService {
    constructor() {
        this.figures = [];
        this.resolve = () => fetch('assets/data/family.json')
            .then((resp) => resp.json())
            .then((resp) => (this.figures = resp));
        this.shuffleFigures = (figures) => figures.sort(() => Math.random() - 0.5);
        this.getShuffledFigures = () => this.shuffleFigures(this.figures);
        this.getNShuffledPais = (n) => {
            const shuffled = this.getShuffledFigures();
            const figs = shuffled.slice(0, n);
            const pairs = [...figs, ...figs];
            return this.shuffleFigures(pairs);
        };
    }
};
FigureService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], FigureService);



/***/ }),

/***/ 3360:
/*!***************************************************************!*\
  !*** ./src/app/pages/family-gallery/family-gallery.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".gallery-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 0.8em;\n  margin: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbWlseS1nYWxsZXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiZmFtaWx5LWdhbGxlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnktZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ3JpZC1nYXA6IDAuOGVtO1xyXG4gIG1hcmdpbjogMC41ZW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 7679:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/family-gallery/family-gallery.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>family-gallery</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  v12\n\n  <div class=\"gallery-grid\">\n    <img bonbon *ngFor=\"let fig of figures\" [src]=\"fig.src\">\n  </div>\n\n  <button bonbon (click)=\"onPlay()\">PLAY</button>\n  <button bonbon (click)=\"onSpeech()\">SPEECH</button>\n\n  {{matches | json}}\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_family-gallery_family-gallery_page_ts.js.map