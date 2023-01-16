/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 98:
/*!**************************************!*\
  !*** ./src/controller/controller.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.controller = void 0;\nvar getIdFromUrl_1 = __webpack_require__(/*! ../utils/getIdFromUrl */ 930);\nvar userModel_1 = __webpack_require__(/*! ../models/userModel */ 158);\nvar writeResponse_1 = __webpack_require__(/*! ../utils/writeResponse */ 345);\nvar getBody_1 = __webpack_require__(/*! ../utils/getBody */ 987);\nvar checkIfValidUUID_1 = __webpack_require__(/*! ../utils/checkIfValidUUID */ 905);\nvar controller = {\n    getUsers: function (req, res) {\n        try {\n            var users = userModel_1.userModel.getUsers();\n            console.log(req);\n            (0, writeResponse_1.writeSuccess)(res, users);\n        }\n        catch (error) {\n            (0, writeResponse_1.writeServerError)(res, error);\n        }\n    },\n    addUser: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var body, _a, username, age, hobbies, user, error_1;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    _b.trys.push([0, 4, , 5]);\n                    return [4 /*yield*/, (0, getBody_1.getBody)(req)];\n                case 1:\n                    body = _b.sent();\n                    _a = JSON.parse(body), username = _a.username, age = _a.age, hobbies = _a.hobbies;\n                    if (!(username && age && hobbies)) return [3 /*break*/, 3];\n                    return [4 /*yield*/, userModel_1.userModel.createUser({ id: '', username: username, age: age, hobbies: hobbies })];\n                case 2:\n                    user = _b.sent();\n                    (0, writeResponse_1.writeCreated)(res, user);\n                    _b.label = 3;\n                case 3: return [3 /*break*/, 5];\n                case 4:\n                    error_1 = _b.sent();\n                    (0, writeResponse_1.writeServerError)(res, error_1);\n                    return [3 /*break*/, 5];\n                case 5: return [2 /*return*/];\n            }\n        });\n    }); },\n    getSingleUser: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var url, userId, isValidId, singleUser;\n        return __generator(this, function (_a) {\n            url = req.url;\n            userId = (0, getIdFromUrl_1.getIdFromUrl)(url);\n            if (userId) {\n                isValidId = (0, checkIfValidUUID_1.checkIfValidUUID)(userId);\n                if (!isValidId) {\n                    (0, writeResponse_1.writeInvalidUUID)(res);\n                    return [2 /*return*/];\n                }\n                singleUser = userModel_1.userModel.getUserByUserId(userId);\n                if (singleUser) {\n                    (0, writeResponse_1.writeSuccess)(res, singleUser);\n                }\n                else {\n                    (0, writeResponse_1.writeNotFound)(res, userId);\n                }\n            }\n            else {\n                (0, writeResponse_1.writeNotFound)(res, userId);\n            }\n            return [2 /*return*/];\n        });\n    }); },\n    editUser: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var url, userId, isValidId, user, body, updatedUserData, updatedUserFields, updatedUser, error_2;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    url = req.url;\n                    userId = (0, getIdFromUrl_1.getIdFromUrl)(url);\n                    if (!!userId) return [3 /*break*/, 1];\n                    (0, writeResponse_1.writeNotFound)(res, userId);\n                    return [3 /*break*/, 5];\n                case 1:\n                    isValidId = (0, checkIfValidUUID_1.checkIfValidUUID)(userId);\n                    if (!isValidId) {\n                        (0, writeResponse_1.writeInvalidUUID)(res);\n                        return [2 /*return*/];\n                    }\n                    user = userModel_1.userModel.getUserByUserId(userId);\n                    if (!user) {\n                        (0, writeResponse_1.writeNotFound)(res, userId);\n                        return [2 /*return*/];\n                    }\n                    _a.label = 2;\n                case 2:\n                    _a.trys.push([2, 4, , 5]);\n                    return [4 /*yield*/, (0, getBody_1.getBody)(req)];\n                case 3:\n                    body = _a.sent();\n                    updatedUserData = JSON.parse(body);\n                    if (updatedUserData.username || updatedUserData.age || updatedUserData.hobbies) {\n                        updatedUserFields = {\n                            id: '',\n                            username: updatedUserData.username || (user === null || user === void 0 ? void 0 : user.username),\n                            age: updatedUserData.age || (user === null || user === void 0 ? void 0 : user.age),\n                            hobbies: updatedUserData.hobbies || (user === null || user === void 0 ? void 0 : user.hobbies)\n                        };\n                        updatedUser = userModel_1.userModel.updateUser(userId, updatedUserFields);\n                        (0, writeResponse_1.writeSuccess)(res, updatedUser);\n                    }\n                    return [3 /*break*/, 5];\n                case 4:\n                    error_2 = _a.sent();\n                    (0, writeResponse_1.writeServerError)(res, error_2);\n                    return [3 /*break*/, 5];\n                case 5: return [2 /*return*/];\n            }\n        });\n    }); },\n    deleteUser: function (req, res) {\n        var url = req.url;\n        var userId = (0, getIdFromUrl_1.getIdFromUrl)(url);\n        if (!userId) {\n            (0, writeResponse_1.writeNotFound)(res, userId);\n            return;\n        }\n        else {\n            var isValidId = (0, checkIfValidUUID_1.checkIfValidUUID)(userId);\n            if (!isValidId) {\n                (0, writeResponse_1.writeInvalidUUID)(res);\n                return;\n            }\n            try {\n                var deletingUser = userModel_1.userModel.getUserByUserId(userId);\n                if (!deletingUser) {\n                    (0, writeResponse_1.writeNotFound)(res, userId);\n                }\n                else {\n                    var deletedUser = userModel_1.userModel.deleteUser(userId);\n                    (0, writeResponse_1.writeDeleted)(res, deletedUser);\n                }\n            }\n            catch (error) {\n                (0, writeResponse_1.writeServerError)(res, error);\n            }\n        }\n    }\n};\nexports.controller = controller;\n\n\n//# sourceURL=webpack://simple-crud-api/./src/controller/controller.ts?");

/***/ }),

/***/ 341:
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ 142));\ndotenv.config();\nvar server_1 = __importDefault(__webpack_require__(/*! ./server/server */ 5));\nserver_1.default.startServer();\nexports[\"default\"] = {};\n\n\n//# sourceURL=webpack://simple-crud-api/./src/index.ts?");

/***/ }),

/***/ 158:
/*!*********************************!*\
  !*** ./src/models/userModel.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.userModel = void 0;\nvar uuid_1 = __webpack_require__(/*! uuid */ 828);\nvar data_json_1 = __importDefault(__webpack_require__(/*! ../data/data.json */ 801));\nvar usersForUserModal = data_json_1.default;\nvar userModel = {\n    getUsers: function () {\n        return usersForUserModal;\n    },\n    getUserByUserId: function (id) {\n        var user = usersForUserModal.find(function (user) { return user.id == id; });\n        return user;\n    },\n    createUser: function (userData) { return __awaiter(void 0, void 0, void 0, function () {\n        var user;\n        return __generator(this, function (_a) {\n            user = __assign(__assign({}, userData), { id: (0, uuid_1.v4)() });\n            usersForUserModal.push(user);\n            return [2 /*return*/, user];\n        });\n    }); },\n    updateUser: function (id, userData) {\n        var userIndex = usersForUserModal.findIndex(function (user) { return user.id === id; });\n        var existingUser = usersForUserModal[userIndex];\n        usersForUserModal[userIndex] = __assign(__assign({}, existingUser), userData);\n        usersForUserModal[userIndex].id = existingUser.id;\n        return usersForUserModal[userIndex];\n    },\n    deleteUser: function (id) {\n        var userIndex = usersForUserModal.findIndex(function (user) { return user.id === id; });\n        var deletedUser = __spreadArray([], usersForUserModal, true)[userIndex];\n        usersForUserModal = usersForUserModal.filter(function (user) { return user.id !== id; });\n        return deletedUser;\n    }\n};\nexports.userModel = userModel;\n\n\n//# sourceURL=webpack://simple-crud-api/./src/models/userModel.ts?");

/***/ }),

/***/ 906:
/*!******************************!*\
  !*** ./src/router/router.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Router = void 0;\nvar url_1 = __importDefault(__webpack_require__(/*! url */ 310));\nvar Router = /** @class */ (function () {\n    function class_1(routes) {\n        this.routes = routes;\n    }\n    class_1.prototype.makeRequest = function (req, res) {\n        var method = req.method, url = req.url;\n        var route = this.getRoute(method, url);\n        if (route.handleRoute) {\n            route.handleRoute(req, res);\n        }\n        else {\n            res.writeHead(404, { 'Content-Type': 'application/json' });\n            res.end(JSON.stringify({ 'message': \"404 - no such route with url \".concat(route.url) }));\n        }\n    };\n    class_1.prototype.getRoute = function (method, url) {\n        var _this = this;\n        var routeId = this.getRouteId(url);\n        var route = this.routes.filter(function (route) {\n            if (routeId && route.url.includes(':')) {\n                return route.method === method && _this.getSingleRoute(route.url, url) === url;\n            }\n            else {\n                return route.method === method && route.url === url;\n            }\n        })[0];\n        var undefinedRoute = {\n            url: url,\n            method: method,\n            handleRoute: null\n        };\n        return route ? route : undefinedRoute;\n    };\n    class_1.prototype.getRouteId = function (route) {\n        if (typeof route !== 'string') {\n            return '';\n        }\n        var routeUrl = url_1.default.parse(route);\n        var path = routeUrl.pathname;\n        var id = path === null || path === void 0 ? void 0 : path.split('/').slice(1)[1];\n        return id || '';\n    };\n    class_1.prototype.getSingleRoute = function (routeUrl, url) {\n        return routeUrl.split(':')[0] + this.getRouteId(url);\n    };\n    return class_1;\n}());\nexports.Router = Router;\n\n\n//# sourceURL=webpack://simple-crud-api/./src/router/router.ts?");

/***/ }),

/***/ 249:
/*!******************************!*\
  !*** ./src/router/routes.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.routes = void 0;\nvar controller_1 = __webpack_require__(/*! ../controller/controller */ 98);\nvar routes = [\n    {\n        url: '/users/',\n        method: 'GET',\n        handleRoute: controller_1.controller.getUsers\n    },\n    {\n        url: '/users/:id/',\n        method: 'GET',\n        handleRoute: controller_1.controller.getSingleUser\n    },\n    {\n        url: '/users/',\n        method: 'POST',\n        handleRoute: controller_1.controller.addUser\n    },\n    {\n        url: '/users/:id',\n        method: 'PUT',\n        handleRoute: controller_1.controller.editUser\n    },\n    {\n        url: '/users/:id',\n        method: 'DELETE',\n        handleRoute: controller_1.controller.deleteUser\n    }\n];\nexports.routes = routes;\n\n\n//# sourceURL=webpack://simple-crud-api/./src/router/routes.ts?");

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar http_1 = __importDefault(__webpack_require__(/*! http */ 685));\nvar router_1 = __webpack_require__(/*! ../router/router */ 906);\nvar routes_1 = __webpack_require__(/*! ../router/routes */ 249);\nvar writeResponse_1 = __webpack_require__(/*! ../utils/writeResponse */ 345);\nvar logServerIsRunning_1 = __webpack_require__(/*! ../utils/logServerIsRunning */ 433);\nvar PORT = process.env.PORT || 3000;\nvar Server = /** @class */ (function () {\n    function Server(Router, routes) {\n        this.router = new Router(routes);\n        this.server = null;\n        this.createServer();\n    }\n    Server.prototype.createServer = function () {\n        var _this = this;\n        var server = http_1.default.createServer(function (req, res) {\n            try {\n                _this.router.makeRequest(req, res);\n            }\n            catch (err) {\n                (0, writeResponse_1.writeServerError)(res, err);\n            }\n        });\n        this.server = server;\n        return server;\n    };\n    Server.prototype.startServer = function () {\n        var _a;\n        (_a = this.server) === null || _a === void 0 ? void 0 : _a.listen(PORT, function () {\n            (0, logServerIsRunning_1.logServerIsRunning)(PORT);\n        });\n    };\n    return Server;\n}());\nvar server = new Server(router_1.Router, routes_1.routes);\nexports[\"default\"] = server;\n\n\n//# sourceURL=webpack://simple-crud-api/./src/server/server.ts?");

/***/ }),

/***/ 905:
/*!***************************************!*\
  !*** ./src/utils/checkIfValidUUID.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.checkIfValidUUID = void 0;\nfunction checkIfValidUUID(uuid) {\n    var regExp = /^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$/gi;\n    return regExp.test(uuid);\n}\nexports.checkIfValidUUID = checkIfValidUUID;\n;\n\n\n//# sourceURL=webpack://simple-crud-api/./src/utils/checkIfValidUUID.ts?");

/***/ }),

/***/ 987:
/*!******************************!*\
  !*** ./src/utils/getBody.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getBody = void 0;\nfunction getBody(req) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            return [2 /*return*/, new Promise(function (resolve, reject) {\n                    var body = [];\n                    req.on('error', function (err) {\n                        console.error(err);\n                        reject(err);\n                    }).on('data', function (chunk) {\n                        body.push(chunk);\n                    }).on('end', function () {\n                        body = Buffer.concat(body).toString();\n                        resolve(body);\n                    });\n                })];\n        });\n    });\n}\nexports.getBody = getBody;\n\n\n//# sourceURL=webpack://simple-crud-api/./src/utils/getBody.ts?");

/***/ }),

/***/ 930:
/*!***********************************!*\
  !*** ./src/utils/getIdFromUrl.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getIdFromUrl = void 0;\nfunction getIdFromUrl(url) {\n    return (url === null || url === void 0 ? void 0 : url.split('/')[2]) || null;\n}\nexports.getIdFromUrl = getIdFromUrl;\n\n\n//# sourceURL=webpack://simple-crud-api/./src/utils/getIdFromUrl.ts?");

/***/ }),

/***/ 433:
/*!*****************************************!*\
  !*** ./src/utils/logServerIsRunning.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.logServerIsRunning = void 0;\nfunction logServerIsRunning(PORT) {\n    console.log(\"Server is running on port: \".concat(PORT));\n}\nexports.logServerIsRunning = logServerIsRunning;\n\n\n//# sourceURL=webpack://simple-crud-api/./src/utils/logServerIsRunning.ts?");

/***/ }),

/***/ 345:
/*!************************************!*\
  !*** ./src/utils/writeResponse.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.writeInvalidUUID = exports.writeDeleted = exports.writeSuccess = exports.writeCreated = exports.writeServerError = exports.writeNotFound = void 0;\nfunction writeNotFound(res, userId) {\n    res.writeHead(404, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify({ message: \"User with id \".concat(userId, \" not found\") }));\n}\nexports.writeNotFound = writeNotFound;\nfunction writeServerError(res, error) {\n    res.writeHead(500, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify({ message: error.message }));\n}\nexports.writeServerError = writeServerError;\nfunction writeCreated(res, user) {\n    res.writeHead(201, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify(user));\n}\nexports.writeCreated = writeCreated;\nfunction writeSuccess(res, data) {\n    res.writeHead(200, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify(data));\n}\nexports.writeSuccess = writeSuccess;\nfunction writeDeleted(res, data) {\n    res.writeHead(204, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify(data));\n}\nexports.writeDeleted = writeDeleted;\nfunction writeInvalidUUID(res) {\n    res.writeHead(400, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify({ message: 'User id has invalid formatting' }));\n}\nexports.writeInvalidUUID = writeInvalidUUID;\n\n\n//# sourceURL=webpack://simple-crud-api/./src/utils/writeResponse.ts?");

/***/ }),

/***/ 142:
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 828:
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ 685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 801:
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = [];\n\n//# sourceURL=webpack://simple-crud-api/./src/data/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(341);
/******/ 	
/******/ })()
;