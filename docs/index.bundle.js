"use strict";
(self["webpackChunkapi_based_webapp"] = self["webpackChunkapi_based_webapp"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/init.js */ "./src/modules/init.js");
/* harmony import */ var _modules_handleSearchInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/handleSearchInput.js */ "./src/modules/handleSearchInput.js");



(0,_modules_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_handleSearchInput_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/modules/cardCounter.js":
/*!************************************!*\
  !*** ./src/modules/cardCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var cardCounter = function cardCounter() {
  var cards = document.getElementById('section');
  var cardscount = document.getElementById('cards-count');
  cardscount.innerHTML = "Albums(".concat(cards.childNodes.length - 1, ")");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardCounter);

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Comment)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var popUp = document.querySelector('.comment-popup');

var Comment = /*#__PURE__*/_createClass(function Comment() {
  _classCallCheck(this, Comment);
});

_defineProperty(Comment, "createCommentPopUp", function (data) {
  var newArticle = document.createElement('article');
  newArticle.innerHTML = "<div class= \"wrapper\">\n    <div class= \"flex\"> \n  <img class=\"pop-image\" src= ".concat(data.artworkUrl100, " alt=\"Image\"/> \n  <span class='material-symbols-outlined white'>close</span>\n  </div>\n  <h2 class=\"white\">Collection Name: ").concat(data.collectionName, "</h2>\n  <div class= \"pop-details\">\n    <a class=\"white border link\" href=\"").concat(data.collectionViewUrl, "\" target=\"_blank\">Click Here To Listen</a>\n    <p class=\"white border\">Release Date: ").concat(data.releaseDate, "</p>\n    <p class=\"white border\">Price: $").concat(data.collectionPrice, "</p>\n    <p class=\"white border\">Genre Type: ").concat(data.primaryGenreName, "</p>\n  </div>\n  <fieldset class=\"fieldset\">\n  <legend class=\"count white\"></legend>\n  <ul class=\"store-comments white\"></ul>\n </fieldset>\n  <div>\n  <h4 class= \"white comment-header\">Add a Comment</h4>\n  <form id=\"form\">\n  <input\n  type=\"text\"\n  name=\"name\"\n  maxlength=\"20\"\n              id=\"input\"\n              placeholder=\"Add your Name\"\n            />\n            <br />\n            <textarea name=\"\" id=\"textarea\" cols=\"30\" rows=\"10\" maxlength=\"100\" placeholder= \"insights\"></textarea>\n            <button type=\"submit\" class=\"btn\">Comment</button>\n            </form>\n            </div>\n            </div>\n  ");
  popUp.appendChild(newArticle);
});

_defineProperty(Comment, "displayCommentPopUp", function (event, element) {
  if (event.target.id === element.collectionId.toString()) {
    Comment.createCommentPopUp(element);
  }
});

_defineProperty(Comment, "closePopUp", function (event) {
  var child = event.target;
  var parentContainer = child.parentElement.parentElement.parentElement.parentElement;

  if (child.classList.contains('material-symbols-outlined')) {
    parentContainer.removeChild(child.parentElement.parentElement.parentElement);
  }
});

_defineProperty(Comment, "postAComment", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, id, userName, comment) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify({
                item_id: id,
                username: userName,
                comment: comment
              })
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());

_defineProperty(Comment, "getComment", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
    var fetchData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(url);

          case 2:
            fetchData = _context2.sent;
            return _context2.abrupt("return", fetchData.json());

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x5) {
    return _ref2.apply(this, arguments);
  };
}());

_defineProperty(Comment, "getStorage", function () {
  return JSON.parse(localStorage.getItem('appId'));
});

_defineProperty(Comment, "clearField", function () {
  var name = document.querySelector('#input');
  var text = document.querySelector('#textarea');
  name.value = '';
  text.value = '';
});

_defineProperty(Comment, "showComment", function (comments) {
  var fieldset = document.querySelector('fieldset');

  if (comments.length > 0) {
    comments.forEach(function (comment) {
      var commentContainer = document.querySelector('.store-comments');
      var container = document.createElement('li');
      container.innerHTML = "".concat(comment.creation_date, " ").concat(comment.username, ": ").concat(comment.comment);
      commentContainer.appendChild(container);
    });
  } else {
    fieldset.style.display = 'none';
  }
});

_defineProperty(Comment, "showPer", function (nameValue, textValue) {
  var date = new Date();
  var newDate = "".concat(date.getFullYear(), "-0").concat(date.getMonth() + 1, "-").concat(date.getDate());
  var commentContainer = document.querySelector('.store-comments');
  var container = document.createElement('li');
  container.innerHTML = "".concat(newDate, " ").concat(nameValue, ": ").concat(textValue);
  commentContainer.appendChild(container);
});

_defineProperty(Comment, "count", function (data) {
  return data.length;
});

_defineProperty(Comment, "countComment", function (comments) {
  var count = document.querySelector('.count');

  if (comments.length > 0) {
    count.innerHTML = "Comment ( ".concat(Comment.count(comments), ")");
  } else {
    count.innerHTML = '';
  }

  return comments.length;
});



/***/ }),

/***/ "./src/modules/displayCard.js":
/*!************************************!*\
  !*** ./src/modules/displayCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _likeButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeButton.js */ "./src/modules/likeButton.js");
/* harmony import */ var _Assets_images_icons8_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Assets/images/icons8.png */ "./Assets/images/icons8.png");

 // Display single card/item

var displayCard = function displayCard(container) {
  var albumImg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'unknown';
  var albumName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'no-name';
  var likes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var index = arguments.length > 4 ? arguments[4] : undefined;
  var likesCounter = likes;
  var div = document.createElement('div');
  var img = document.createElement('img');
  var i = document.createElement('i');
  var h3 = document.createElement('h3');
  var titleContainer = document.createElement('div');
  var likeIcon = document.createElement('img');
  var likesContainer = document.createElement('div');
  var descriptionText = document.createElement('p');
  var commentsButton = document.createElement('button');
  var reservationsButton = document.createElement('button');
  var itemId = document.querySelectorAll('#section > div').length;
  likeIcon.setAttribute('data-likes', likesCounter);
  likeIcon.setAttribute('data-itemId', itemId);
  descriptionText.setAttribute('data-cardid', itemId);
  descriptionText.textContent = "".concat(likeIcon.dataset.likes, " likes");
  likeIcon.setAttribute('src', _Assets_images_icons8_png__WEBPACK_IMPORTED_MODULE_1__);
  likeIcon.classList.add('icon-size');
  likesContainer.classList.add('description-container');
  h3.innerHTML = albumName;
  img.setAttribute('src', albumImg);
  commentsButton.classList.add('comment');
  commentsButton.setAttribute('type', 'button');
  commentsButton.setAttribute('id', index);
  reservationsButton.setAttribute('type', 'button');
  commentsButton.textContent = 'Comments';
  reservationsButton.textContent = 'Reservation';
  div.classList.add('items-container');
  titleContainer.classList.add('title-like');
  i.addEventListener('click', _likeButton_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  likesContainer.append(i, descriptionText);
  i.append(likeIcon);
  titleContainer.append(h3, likesContainer);
  div.append(img, titleContainer, commentsButton, reservationsButton);
  container.append(div);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCard);

/***/ }),

/***/ "./src/modules/displayItems.js":
/*!*************************************!*\
  !*** ./src/modules/displayItems.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayCard.js */ "./src/modules/displayCard.js");
/* harmony import */ var _cardCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardCounter.js */ "./src/modules/cardCounter.js");
/* harmony import */ var _likesData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likesData.js */ "./src/modules/likesData.js");
/* harmony import */ var _searchArtistId_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchArtistId.js */ "./src/modules/searchArtistId.js");
/* harmony import */ var _searchArtistAlbums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchArtistAlbums.js */ "./src/modules/searchArtistAlbums.js");
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment.js */ "./src/modules/comment.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var displayItems = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(artistName) {
    var artistId, container, obj, index, element, btns;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0,_searchArtistId_js__WEBPACK_IMPORTED_MODULE_3__["default"])(artistName);

          case 2:
            artistId = _context3.sent;
            container = document.getElementById('section');
            container.innerHTML = '';
            _context3.next = 7;
            return (0,_searchArtistAlbums_js__WEBPACK_IMPORTED_MODULE_4__["default"])(artistId, 12);

          case 7:
            obj = _context3.sent;

            for (index = 1; index < obj.results.length; index += 1) {
              element = obj.results[index];
              (0,_displayCard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(container, element.artworkUrl100, element.collectionCensoredName, 0, element.collectionId);
            }

            btns = document.querySelectorAll('.comment');
            Array.from(btns).forEach(function (btn, index) {
              var element = obj.results[index + 1];
              btn.addEventListener('click', /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
                  var form, commentUrl, getComment, sand;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _comment_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayCommentPopUp(event, element);
                          form = document.querySelector('#form');
                          commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VonFwyCfU4bUnxbvPNPN/comments/';
                          _context2.next = 5;
                          return "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VonFwyCfU4bUnxbvPNPN/comments?item_id=".concat(index + 1);

                        case 5:
                          getComment = _context2.sent;
                          form.addEventListener('submit', /*#__PURE__*/function () {
                            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
                              var name, text, nameValue, textValue;
                              return _regeneratorRuntime().wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      event.preventDefault();
                                      name = document.querySelector('#input');
                                      text = document.querySelector('#textarea');
                                      nameValue = name.value;
                                      textValue = text.value;
                                      _context.next = 7;
                                      return _comment_js__WEBPACK_IMPORTED_MODULE_5__["default"].postAComment(commentUrl, index + 1, nameValue, textValue);

                                    case 7:
                                      _comment_js__WEBPACK_IMPORTED_MODULE_5__["default"].clearField();
                                      _context.next = 10;
                                      return _comment_js__WEBPACK_IMPORTED_MODULE_5__["default"].getComment(getComment);

                                    case 10:
                                      _comment_js__WEBPACK_IMPORTED_MODULE_5__["default"].showPer(nameValue, textValue);

                                    case 11:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee);
                            }));

                            return function (_x3) {
                              return _ref3.apply(this, arguments);
                            };
                          }());
                          _context2.next = 9;
                          return _comment_js__WEBPACK_IMPORTED_MODULE_5__["default"].getComment(getComment);

                        case 9:
                          sand = _context2.sent;
                          _comment_js__WEBPACK_IMPORTED_MODULE_5__["default"].showComment(sand);
                          _comment_js__WEBPACK_IMPORTED_MODULE_5__["default"].countComment(sand);

                        case 12:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }());
            });
            (0,_cardCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            (0,_likesData_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function displayItems(_x) {
    return _ref.apply(this, arguments);
  };
}();

document.querySelector('.comment-popup').addEventListener('click', function (event) {
  return _comment_js__WEBPACK_IMPORTED_MODULE_5__["default"].closePopUp(event);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayItems);

/***/ }),

/***/ "./src/modules/handleSearchInput.js":
/*!******************************************!*\
  !*** ./src/modules/handleSearchInput.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayItems.js */ "./src/modules/displayItems.js");


var updaterArtistTitle = function updaterArtistTitle(artistName) {
  var artistTitle = document.body.querySelector('.dra');
  artistTitle.innerHTML = artistName;
};

var handleSearchInput = function handleSearchInput(event) {
  if (event.key === 'Enter') {
    (0,_displayItems_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target.value);
    updaterArtistTitle(event.target.value);
  }
};

document.getElementById('artistInput').addEventListener('keypress', handleSearchInput);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleSearchInput);

/***/ }),

/***/ "./src/modules/init.js":
/*!*****************************!*\
  !*** ./src/modules/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* Init App id */
// Check for an existing App id, if there isn't create one
var initId = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var id;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (localStorage.getItem('appId') === null) {
              id = 'VonFwyCfU4bUnxbvPNPN';
              localStorage.setItem('appId', JSON.stringify(id));
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function initId() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initId);

/***/ }),

/***/ "./src/modules/likeButton.js":
/*!***********************************!*\
  !*** ./src/modules/likeButton.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateLikeCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateLikeCounter.js */ "./src/modules/updateLikeCounter.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // Add like to item using Involvement API

function setLike() {
  return _setLike.apply(this, arguments);
}

function _setLike() {
  _setLike = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var likeIcon, likesNumber, cardId, appId;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            likeIcon = this.firstChild;
            likesNumber = likeIcon.dataset.likes;
            cardId = likeIcon.dataset.itemid;
            appId = JSON.parse(localStorage.getItem('appId'));
            _context.next = 6;
            return fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/".concat(appId, "/likes/"), {
              method: 'POST',
              body: JSON.stringify({
                item_id: "".concat(cardId)
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
            });

          case 6:
            likeIcon.setAttribute('data-likes', likesNumber = Number(likesNumber) + 1);
            (0,_updateLikeCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cardId, likesNumber);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _setLike.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLike);

/***/ }),

/***/ "./src/modules/likesData.js":
/*!**********************************!*\
  !*** ./src/modules/likesData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateLikeCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateLikeCounter.js */ "./src/modules/updateLikeCounter.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var updateAllLikes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var appId, response, obj, list;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            appId = JSON.parse(localStorage.getItem('appId'));
            _context.next = 3;
            return fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/".concat(appId, "/likes/"), {
              method: 'GET',
              headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            obj = _context.sent;
            _context.next = 9;
            return obj;

          case 9:
            list = _context.sent;
            list = list.slice(0);
            list.forEach(function (element) {
              (0,_updateLikeCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element.item_id, element.likes);
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateAllLikes() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateAllLikes);

/***/ }),

/***/ "./src/modules/searchArtistAlbums.js":
/*!*******************************************!*\
  !*** ./src/modules/searchArtistAlbums.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var searchArtistAlbums = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(artistId, numberOfAlbums) {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://itunes.apple.com/lookup?id=".concat(artistId, "&entity=album&limit=").concat(numberOfAlbums), {
              method: 'POST',
              headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.json());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function searchArtistAlbums(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchArtistAlbums);

/***/ }),

/***/ "./src/modules/searchArtistId.js":
/*!***************************************!*\
  !*** ./src/modules/searchArtistId.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var searchArtistId = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var artist,
        response,
        obj,
        _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            artist = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'Michael Jackson';
            _context.next = 3;
            return fetch("https://itunes.apple.com/search?term=".concat(artist, "&entity=musicArtist"), {
              method: 'POST',
              headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            obj = _context.sent;
            return _context.abrupt("return", obj.results[0].artistId);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function searchArtistId() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchArtistId);

/***/ }),

/***/ "./src/modules/updateLikeCounter.js":
/*!******************************************!*\
  !*** ./src/modules/updateLikeCounter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var updateLikeCounter = function updateLikeCounter(cardId, likes) {
  var pElement = document.querySelector("[data-cardid=\"".concat(cardId, "\"]"));
  var likeIcon = document.querySelector("[data-itemid=\"".concat(cardId, "\"]"));
  likeIcon.setAttribute('data-likes', likes);
  pElement.textContent = "".concat(likes, " likes");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLikeCounter);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/hacim-simple-sans-serif-font/TTF/Hacim-Medium.ttf */ "./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/hacim-simple-sans-serif-font/TTF/Hacim-Round.ttf */ "./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Round.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/hacim-simple-sans-serif-font/TTF/Hacim-Light.ttf */ "./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/images/pexels-stephan-seeber-1261728.jpg */ "./Assets/images/pexels-stephan-seeber-1261728.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/images/pexels-sebastiaan-stam-1097456.jpg */ "./Assets/images/pexels-sebastiaan-stam-1097456.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'Hacim-medium';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Hacim-bold';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Hacim-light';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family:\r\n    'Hacim-medium',\r\n    'Gill Sans',\r\n    'Gill Sans MT',\r\n    Calibri,\r\n    'Trebuchet MS',\r\n    sans-serif;\r\n}\r\n\r\nbody {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n\r\n  /* Full height */\r\n  height: 100%;\r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: auto;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  margin: 16px auto;\r\n  padding: 16px;\r\n  border-bottom: 3px solid #303638;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.white {\r\n  color: white;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  width: max-content;\r\n  padding: 4px;\r\n  height: max-content;\r\n  border: 1px solid white;\r\n  background-color: black;\r\n}\r\n\r\n.material-symbols-outlined:hover {\r\n  background-color: red;\r\n  color: white;\r\n  border-radius: 3px;\r\n  border: 3px solid white;\r\n  cursor: pointer;\r\n}\r\n\r\n.border {\r\n  margin-bottom: 4px;\r\n  padding: 5px;\r\n  text-decoration: none;\r\n  border-radius: 3px;\r\n  border: 2px solid white;\r\n  width: max-content;\r\n  background-color: black;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.pop-image {\r\n  width: 20%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.count {\r\n  padding: 7px;\r\n}\r\n\r\n.link:hover {\r\n  color: #ff8a53;\r\n  border-color: #ff8a53;\r\n  background-color: white;\r\n}\r\n\r\n.comment-header {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#input {\r\n  width: 50%;\r\n  height: 30px;\r\n  margin-bottom: 5px;\r\n  padding: 5px;\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: 3px solid #ff8a53;\r\n}\r\n\r\n#input:focus {\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\n#textarea {\r\n  width: 50%;\r\n  height: 100px;\r\n  padding: 5px;\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: 3px solid #ff8a53;\r\n}\r\n\r\n#textarea:focus {\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\nfieldset {\r\n  padding: 5px;\r\n}\r\n\r\n.pop-details {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  margin: 5px;\r\n  padding: 10px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\narticle {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  left: 0;\r\n  bottom: 0;\r\n  padding: 2%;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow-y: scroll;\r\n  background-color: rgba(255, 255, 255, 0.932);\r\n  background-blend-mode: soft-light;\r\n}\r\n\r\n.items-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 26%;\r\n  gap: 15px;\r\n\r\n  /* Card style */\r\n  margin: 10px;\r\n  background-color: #afbbc159;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);\r\n  overflow: hidden;\r\n}\r\n\r\nimg {\r\n  width: 70%;\r\n  align-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n#section {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.icon-size {\r\n  width: 28px;\r\n}\r\n\r\n.description-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.title-like {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.items-container > img {\r\n  /* Card style */\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\nbutton {\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  position: relative;\r\n  width: 50%;\r\n  height: 10%;\r\n  line-height: 64px;\r\n  transition: all 0.3s;\r\n  transform: scale(1, 1);\r\n  align-self: center;\r\n  border-radius: 10px;\r\n  color: #ff8a53;\r\n  background: #07070700;\r\n  border: 1px solid #fccab3;\r\n  font-weight: normal;\r\n  margin: 6px 0;\r\n  margin-right: 12px;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  font-family: 'Open Sans', sans-serif;\r\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #303638;\r\n  border-radius: 3px;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  height: 40px;\r\n  margin: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: #f8d2c1;\r\n  font-size: 20px;\r\n  font-family:\r\n    hacim-medium,\r\n    'Gill Sans',\r\n    'Gill Sans MT',\r\n    Calibri,\r\n    'Trebuchet MS',\r\n    sans-serif;\r\n}\r\n\r\nheader p {\r\n  color: #323838;\r\n  font-family:\r\n    Hacim-bold,\r\n    'Gill Sans',\r\n    'Gill Sans MT',\r\n    Calibri,\r\n    'Trebuchet MS',\r\n    sans-serif;\r\n  font-size: 30px;\r\n}\r\n\r\n.flexbox {\r\n  background: linear-gradient(155deg, #55c7ed00, #2bb3e000, #f8d2c100);\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.search {\r\n  margin: 20px;\r\n}\r\n\r\n.search > h3 {\r\n  font-weight: normal;\r\n}\r\n\r\n.search > div {\r\n  display: inline-block;\r\n  position: relative;\r\n  filter: drop-shadow(0 1px #0092c200);\r\n}\r\n\r\n.search > div::after {\r\n  content: '';\r\n  background: #2a2c2a;\r\n  width: 4px;\r\n  height: 20px;\r\n  position: absolute;\r\n  top: 21px;\r\n  right: -5px;\r\n  transform: rotate(135deg);\r\n}\r\n\r\n.search > div > input {\r\n  color: #2a2c2a;\r\n  font-size: 16px;\r\n  background: transparent;\r\n  width: 25px;\r\n  height: 25px;\r\n  padding: 10px;\r\n  border: solid 3px #2a2c2a;\r\n  outline: none;\r\n  border-radius: 35px;\r\n  transition: width 0.5s;\r\n  cursor: pointer;\r\n}\r\n\r\n.search > div > input::placeholder {\r\n  color: #2a2c2a;\r\n  opacity: 0;\r\n  transition: opacity 150ms ease-out;\r\n}\r\n\r\n.search > div > input:focus::placeholder {\r\n  opacity: 1;\r\n}\r\n\r\n.search > div > input:focus,\r\n.search > div > input:not(:placeholder-shown) {\r\n  width: 250px;\r\n}\r\n\r\n.art {\r\n  margin-right: 5px;\r\n}\r\n\r\n.dra {\r\n  margin-right: 30px;\r\n}\r\n\r\n.clickable {\r\n  cursor: pointer;\r\n}\r\n\r\n.title-like > h3 {\r\n  font-family: Hacim-light, Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n}\r\n\r\n#init-title {\r\n  margin: 21%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'Hacim-medium';\r\n  src: url(../Assets/hacim-simple-sans-serif-font/TTF/Hacim-Medium.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Hacim-bold';\r\n  src: url(../Assets/hacim-simple-sans-serif-font/TTF/Hacim-Round.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Hacim-light';\r\n  src: url(../Assets/hacim-simple-sans-serif-font/TTF/Hacim-Light.ttf);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family:\r\n    'Hacim-medium',\r\n    'Gill Sans',\r\n    'Gill Sans MT',\r\n    Calibri,\r\n    'Trebuchet MS',\r\n    sans-serif;\r\n}\r\n\r\nbody {\r\n  background-image: url(../Assets/images/pexels-stephan-seeber-1261728.jpg);\r\n\r\n  /* Full height */\r\n  height: 100%;\r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: auto;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  margin: 16px auto;\r\n  padding: 16px;\r\n  border-bottom: 3px solid #303638;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.white {\r\n  color: white;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  width: max-content;\r\n  padding: 4px;\r\n  height: max-content;\r\n  border: 1px solid white;\r\n  background-color: black;\r\n}\r\n\r\n.material-symbols-outlined:hover {\r\n  background-color: red;\r\n  color: white;\r\n  border-radius: 3px;\r\n  border: 3px solid white;\r\n  cursor: pointer;\r\n}\r\n\r\n.border {\r\n  margin-bottom: 4px;\r\n  padding: 5px;\r\n  text-decoration: none;\r\n  border-radius: 3px;\r\n  border: 2px solid white;\r\n  width: max-content;\r\n  background-color: black;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.pop-image {\r\n  width: 20%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.count {\r\n  padding: 7px;\r\n}\r\n\r\n.link:hover {\r\n  color: #ff8a53;\r\n  border-color: #ff8a53;\r\n  background-color: white;\r\n}\r\n\r\n.comment-header {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#input {\r\n  width: 50%;\r\n  height: 30px;\r\n  margin-bottom: 5px;\r\n  padding: 5px;\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: 3px solid #ff8a53;\r\n}\r\n\r\n#input:focus {\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\n#textarea {\r\n  width: 50%;\r\n  height: 100px;\r\n  padding: 5px;\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: 3px solid #ff8a53;\r\n}\r\n\r\n#textarea:focus {\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\nfieldset {\r\n  padding: 5px;\r\n}\r\n\r\n.pop-details {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  margin: 5px;\r\n  padding: 10px;\r\n  background-image: url(../Assets/images/pexels-sebastiaan-stam-1097456.jpg);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\narticle {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  left: 0;\r\n  bottom: 0;\r\n  padding: 2%;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow-y: scroll;\r\n  background-color: rgba(255, 255, 255, 0.932);\r\n  background-blend-mode: soft-light;\r\n}\r\n\r\n.items-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 26%;\r\n  gap: 15px;\r\n\r\n  /* Card style */\r\n  margin: 10px;\r\n  background-color: #afbbc159;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);\r\n  overflow: hidden;\r\n}\r\n\r\nimg {\r\n  width: 70%;\r\n  align-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n#section {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.icon-size {\r\n  width: 28px;\r\n}\r\n\r\n.description-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.title-like {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.items-container > img {\r\n  /* Card style */\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\nbutton {\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  position: relative;\r\n  width: 50%;\r\n  height: 10%;\r\n  line-height: 64px;\r\n  transition: all 0.3s;\r\n  transform: scale(1, 1);\r\n  align-self: center;\r\n  border-radius: 10px;\r\n  color: #ff8a53;\r\n  background: #07070700;\r\n  border: 1px solid #fccab3;\r\n  font-weight: normal;\r\n  margin: 6px 0;\r\n  margin-right: 12px;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  font-family: 'Open Sans', sans-serif;\r\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #303638;\r\n  border-radius: 3px;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  height: 40px;\r\n  margin: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: #f8d2c1;\r\n  font-size: 20px;\r\n  font-family:\r\n    hacim-medium,\r\n    'Gill Sans',\r\n    'Gill Sans MT',\r\n    Calibri,\r\n    'Trebuchet MS',\r\n    sans-serif;\r\n}\r\n\r\nheader p {\r\n  color: #323838;\r\n  font-family:\r\n    Hacim-bold,\r\n    'Gill Sans',\r\n    'Gill Sans MT',\r\n    Calibri,\r\n    'Trebuchet MS',\r\n    sans-serif;\r\n  font-size: 30px;\r\n}\r\n\r\n.flexbox {\r\n  background: linear-gradient(155deg, #55c7ed00, #2bb3e000, #f8d2c100);\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.search {\r\n  margin: 20px;\r\n}\r\n\r\n.search > h3 {\r\n  font-weight: normal;\r\n}\r\n\r\n.search > div {\r\n  display: inline-block;\r\n  position: relative;\r\n  filter: drop-shadow(0 1px #0092c200);\r\n}\r\n\r\n.search > div::after {\r\n  content: '';\r\n  background: #2a2c2a;\r\n  width: 4px;\r\n  height: 20px;\r\n  position: absolute;\r\n  top: 21px;\r\n  right: -5px;\r\n  transform: rotate(135deg);\r\n}\r\n\r\n.search > div > input {\r\n  color: #2a2c2a;\r\n  font-size: 16px;\r\n  background: transparent;\r\n  width: 25px;\r\n  height: 25px;\r\n  padding: 10px;\r\n  border: solid 3px #2a2c2a;\r\n  outline: none;\r\n  border-radius: 35px;\r\n  transition: width 0.5s;\r\n  cursor: pointer;\r\n}\r\n\r\n.search > div > input::placeholder {\r\n  color: #2a2c2a;\r\n  opacity: 0;\r\n  transition: opacity 150ms ease-out;\r\n}\r\n\r\n.search > div > input:focus::placeholder {\r\n  opacity: 1;\r\n}\r\n\r\n.search > div > input:focus,\r\n.search > div > input:not(:placeholder-shown) {\r\n  width: 250px;\r\n}\r\n\r\n.art {\r\n  margin-right: 5px;\r\n}\r\n\r\n.dra {\r\n  margin-right: 30px;\r\n}\r\n\r\n.clickable {\r\n  cursor: pointer;\r\n}\r\n\r\n.title-like > h3 {\r\n  font-family: Hacim-light, Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n}\r\n\r\n#init-title {\r\n  margin: 21%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Light.ttf":
/*!*****************************************************************!*\
  !*** ./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Light.ttf ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3909911086b67fad6e8.ttf";

/***/ }),

/***/ "./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Medium.ttf":
/*!******************************************************************!*\
  !*** ./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Medium.ttf ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a643f8609757b4fef183.ttf";

/***/ }),

/***/ "./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Round.ttf":
/*!*****************************************************************!*\
  !*** ./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Round.ttf ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "887b10527333c9164337.ttf";

/***/ }),

/***/ "./Assets/images/icons8.png":
/*!**********************************!*\
  !*** ./Assets/images/icons8.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bcd9c81b52c3e63977d.png";

/***/ }),

/***/ "./Assets/images/pexels-sebastiaan-stam-1097456.jpg":
/*!**********************************************************!*\
  !*** ./Assets/images/pexels-sebastiaan-stam-1097456.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e291456bfcb5e488e6d4.jpg";

/***/ }),

/***/ "./Assets/images/pexels-stephan-seeber-1261728.jpg":
/*!*********************************************************!*\
  !*** ./Assets/images/pexels-stephan-seeber-1261728.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "695e6576103e0f48e480.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLHFDQUFxQyxrQ0FBa0MsNEVBQTRFLEtBQUssb0JBQW9CLGdDQUFnQywyRUFBMkUsS0FBSyxvQkFBb0IsaUNBQWlDLDJFQUEyRSxLQUFLLFdBQVcsNkJBQTZCLGlCQUFpQixnQkFBZ0IsOElBQThJLEtBQUssY0FBYyxnRkFBZ0YsOENBQThDLG1GQUFtRixtQ0FBbUMsNEJBQTRCLEtBQUssZ0JBQWdCLG9CQUFvQixrQkFBa0Isb0NBQW9DLHdCQUF3QixvQkFBb0IsdUNBQXVDLEtBQUssZUFBZSxvQkFBb0IscUNBQXFDLGtCQUFrQixLQUFLLGdCQUFnQixtQkFBbUIsS0FBSyxvQ0FBb0MseUJBQXlCLG1CQUFtQiwwQkFBMEIsOEJBQThCLDhCQUE4QixLQUFLLDBDQUEwQyw0QkFBNEIsbUJBQW1CLHlCQUF5Qiw4QkFBOEIsc0JBQXNCLEtBQUssaUJBQWlCLHlCQUF5QixtQkFBbUIsNEJBQTRCLHlCQUF5Qiw4QkFBOEIseUJBQXlCLDhCQUE4QixLQUFLLFlBQVksdUJBQXVCLEtBQUssb0JBQW9CLGlCQUFpQix5QkFBeUIsS0FBSyxnQkFBZ0IsbUJBQW1CLEtBQUsscUJBQXFCLHFCQUFxQiw0QkFBNEIsOEJBQThCLEtBQUsseUJBQXlCLHNCQUFzQix5QkFBeUIsS0FBSyxnQkFBZ0IsaUJBQWlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHVCQUF1Qix3QkFBd0IseUJBQXlCLHVDQUF1QyxLQUFLLHNCQUFzQixvQkFBb0IsbUJBQW1CLEtBQUssbUJBQW1CLGlCQUFpQixvQkFBb0IsbUJBQW1CLHVCQUF1Qix3QkFBd0IseUJBQXlCLHVDQUF1QyxLQUFLLHlCQUF5QixvQkFBb0IsbUJBQW1CLEtBQUssa0JBQWtCLG1CQUFtQixLQUFLLHNCQUFzQixvQkFBb0IscUNBQXFDLEtBQUssa0JBQWtCLGtCQUFrQix5QkFBeUIsa0JBQWtCLG9CQUFvQixpRkFBaUYsNkJBQTZCLG1DQUFtQyxLQUFLLGlCQUFpQixzQkFBc0Isb0JBQW9CLGNBQWMsZ0JBQWdCLGtCQUFrQixhQUFhLGtCQUFrQixvQkFBb0IseUJBQXlCLG1EQUFtRCx3Q0FBd0MsS0FBSywwQkFBMEIsb0JBQW9CLDZCQUE2QixxQ0FBcUMsaUJBQWlCLGdCQUFnQiw2Q0FBNkMsa0NBQWtDLDBCQUEwQixnREFBZ0QsdUJBQXVCLEtBQUssYUFBYSxpQkFBaUIseUJBQXlCLHNCQUFzQixLQUFLLGtCQUFrQixvQkFBb0Isb0NBQW9DLHNCQUFzQixLQUFLLG9CQUFvQixrQkFBa0IsS0FBSyxnQ0FBZ0Msb0JBQW9CLDZCQUE2QiwwQkFBMEIsS0FBSyxxQkFBcUIsb0JBQW9CLHFDQUFxQywwQkFBMEIscUJBQXFCLHNCQUFzQixLQUFLLGdDQUFnQyx3Q0FBd0Msd0JBQXdCLEtBQUssZ0JBQWdCLHNCQUFzQixzQkFBc0IseUJBQXlCLCtCQUErQiw0QkFBNEIseUJBQXlCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDJCQUEyQiw2QkFBNkIseUJBQXlCLDBCQUEwQixxQkFBcUIsNEJBQTRCLGdDQUFnQywwQkFBMEIsb0JBQW9CLHlCQUF5Qiw0QkFBNEIsNEJBQTRCLDJDQUEyQyxnREFBZ0QsS0FBSyxzQkFBc0IsZ0NBQWdDLHlCQUF5QixLQUFLLGdCQUFnQixrQkFBa0IsbUJBQW1CLG1CQUFtQixvQkFBb0IsOEJBQThCLHFCQUFxQixzQkFBc0IsNElBQTRJLEtBQUssa0JBQWtCLHFCQUFxQiwwSUFBMEksc0JBQXNCLEtBQUssa0JBQWtCLDJFQUEyRSxrQkFBa0IsbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssaUJBQWlCLG1CQUFtQixLQUFLLHNCQUFzQiwwQkFBMEIsS0FBSyx1QkFBdUIsNEJBQTRCLHlCQUF5QiwyQ0FBMkMsS0FBSyw4QkFBOEIsa0JBQWtCLDBCQUEwQixpQkFBaUIsbUJBQW1CLHlCQUF5QixnQkFBZ0Isa0JBQWtCLGdDQUFnQyxLQUFLLCtCQUErQixxQkFBcUIsc0JBQXNCLDhCQUE4QixrQkFBa0IsbUJBQW1CLG9CQUFvQixnQ0FBZ0Msb0JBQW9CLDBCQUEwQiw2QkFBNkIsc0JBQXNCLEtBQUssNENBQTRDLHFCQUFxQixpQkFBaUIseUNBQXlDLEtBQUssa0RBQWtELGlCQUFpQixLQUFLLHVGQUF1RixtQkFBbUIsS0FBSyxjQUFjLHdCQUF3QixLQUFLLGNBQWMseUJBQXlCLEtBQUssb0JBQW9CLHNCQUFzQixLQUFLLDBCQUEwQiw2REFBNkQsc0JBQXNCLEtBQUsscUJBQXFCLGtCQUFrQixLQUFLLHVCQUF1QjtBQUM3Z2hCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbEIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL2NhcmRDb3VudGVyLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5Q2FyZC5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZXMvZGlzcGxheUl0ZW1zLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9oYW5kbGVTZWFyY2hJbnB1dC5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZXMvaW5pdC5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZXMvbGlrZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZXMvbGlrZXNEYXRhLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9zZWFyY2hBcnRpc3RBbGJ1bXMuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL3NlYXJjaEFydGlzdElkLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy91cGRhdGVMaWtlQ291bnRlci5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGluaXRJZCBmcm9tICcuL21vZHVsZXMvaW5pdC5qcyc7XG5pbXBvcnQgaGFuZGxlU2VhcmNoSW5wdXQgZnJvbSAnLi9tb2R1bGVzL2hhbmRsZVNlYXJjaElucHV0LmpzJztcblxuaW5pdElkKCk7XG5oYW5kbGVTZWFyY2hJbnB1dCgpO1xuIiwiY29uc3QgY2FyZENvdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24nKTtcbiAgY29uc3QgY2FyZHNjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkcy1jb3VudCcpO1xuICBjYXJkc2NvdW50LmlubmVySFRNTCA9IGBBbGJ1bXMoJHtjYXJkcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDF9KWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXJkQ291bnRlcjsiLCJjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcHVwJyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IHtcbiAgc3RhdGljIGNyZWF0ZUNvbW1lbnRQb3BVcCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgbmV3QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICBuZXdBcnRpY2xlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSBcIndyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPSBcImZsZXhcIj4gXG4gIDxpbWcgY2xhc3M9XCJwb3AtaW1hZ2VcIiBzcmM9ICR7ZGF0YS5hcnR3b3JrVXJsMTAwfSBhbHQ9XCJJbWFnZVwiLz4gXG4gIDxzcGFuIGNsYXNzPSdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHdoaXRlJz5jbG9zZTwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxoMiBjbGFzcz1cIndoaXRlXCI+Q29sbGVjdGlvbiBOYW1lOiAke2RhdGEuY29sbGVjdGlvbk5hbWV9PC9oMj5cbiAgPGRpdiBjbGFzcz0gXCJwb3AtZGV0YWlsc1wiPlxuICAgIDxhIGNsYXNzPVwid2hpdGUgYm9yZGVyIGxpbmtcIiBocmVmPVwiJHtkYXRhLmNvbGxlY3Rpb25WaWV3VXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPkNsaWNrIEhlcmUgVG8gTGlzdGVuPC9hPlxuICAgIDxwIGNsYXNzPVwid2hpdGUgYm9yZGVyXCI+UmVsZWFzZSBEYXRlOiAke2RhdGEucmVsZWFzZURhdGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid2hpdGUgYm9yZGVyXCI+UHJpY2U6ICQke2RhdGEuY29sbGVjdGlvblByaWNlfTwvcD5cbiAgICA8cCBjbGFzcz1cIndoaXRlIGJvcmRlclwiPkdlbnJlIFR5cGU6ICR7ZGF0YS5wcmltYXJ5R2VucmVOYW1lfTwvcD5cbiAgPC9kaXY+XG4gIDxmaWVsZHNldCBjbGFzcz1cImZpZWxkc2V0XCI+XG4gIDxsZWdlbmQgY2xhc3M9XCJjb3VudCB3aGl0ZVwiPjwvbGVnZW5kPlxuICA8dWwgY2xhc3M9XCJzdG9yZS1jb21tZW50cyB3aGl0ZVwiPjwvdWw+XG4gPC9maWVsZHNldD5cbiAgPGRpdj5cbiAgPGg0IGNsYXNzPSBcIndoaXRlIGNvbW1lbnQtaGVhZGVyXCI+QWRkIGEgQ29tbWVudDwvaDQ+XG4gIDxmb3JtIGlkPVwiZm9ybVwiPlxuICA8aW5wdXRcbiAgdHlwZT1cInRleHRcIlxuICBuYW1lPVwibmFtZVwiXG4gIG1heGxlbmd0aD1cIjIwXCJcbiAgICAgICAgICAgICAgaWQ9XCJpbnB1dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgTmFtZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIlwiIGlkPVwidGV4dGFyZWFcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBtYXhsZW5ndGg9XCIxMDBcIiBwbGFjZWhvbGRlcj0gXCJpbnNpZ2h0c1wiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0blwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gIGA7XG4gICAgcG9wVXAuYXBwZW5kQ2hpbGQobmV3QXJ0aWNsZSk7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUNvbW1lbnRQb3BVcCA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09IGVsZW1lbnQuY29sbGVjdGlvbklkLnRvU3RyaW5nKCkpIHtcbiAgICAgIENvbW1lbnQuY3JlYXRlQ29tbWVudFBvcFVwKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbG9zZVBvcFVwID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2hpbGQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gY2hpbGQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBpZiAoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJykpIHtcbiAgICAgIHBhcmVudENvbnRhaW5lci5yZW1vdmVDaGlsZChcbiAgICAgICAgY2hpbGQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwb3N0QUNvbW1lbnQgPSBhc3luYyAodXJsLCBpZCwgdXNlck5hbWUsIGNvbW1lbnQpID0+IHtcbiAgICBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpZCxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJOYW1lLFxuICAgICAgICBjb21tZW50LFxuICAgICAgfSksXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0Q29tbWVudCA9IGFzeW5jICh1cmwpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIHJldHVybiBmZXRjaERhdGEuanNvbigpO1xuICB9XG5cbiAgc3RhdGljIGdldFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHBJZCcpKVxuXG4gIHN0YXRpYyBjbGVhckZpZWxkID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQnKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRhcmVhJyk7XG4gICAgbmFtZS52YWx1ZSA9ICcnO1xuICAgIHRleHQudmFsdWUgPSAnJztcbiAgfVxuXG4gIHN0YXRpYyBzaG93Q29tbWVudCA9IChjb21tZW50cykgPT4ge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZmllbGRzZXQnKTtcbiAgICBpZiAoY29tbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBjb21tZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0b3JlLWNvbW1lbnRzJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgJHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fWA7XG4gICAgICAgIGNvbW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZHNldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzaG93UGVyID0gKG5hbWVWYWx1ZSwgdGV4dFZhbHVlKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgbmV3RGF0ZSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tMCR7XG4gICAgICBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XG4gICAgY29uc3QgY29tbWVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdG9yZS1jb21tZW50cycpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGAke25ld0RhdGV9ICR7bmFtZVZhbHVlfTogJHt0ZXh0VmFsdWV9YDtcbiAgICBjb21tZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICBzdGF0aWMgY291bnQgPSAoZGF0YSkgPT4gZGF0YS5sZW5ndGg7XG5cbiAgc3RhdGljIGNvdW50Q29tbWVudCA9IChjb21tZW50cykgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50Jyk7XG4gICAgaWYgKGNvbW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvdW50LmlubmVySFRNTCA9IGBDb21tZW50ICggJHtDb21tZW50LmNvdW50KGNvbW1lbnRzKX0pYDtcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuICAgIHJldHVybiBjb21tZW50cy5sZW5ndGg7XG4gIH1cbn0iLCJpbXBvcnQgc2V0TGlrZSBmcm9tICcuL2xpa2VCdXR0b24uanMnO1xuaW1wb3J0IGxpa2VVcmwgZnJvbSAnLi4vLi4vQXNzZXRzL2ltYWdlcy9pY29uczgucG5nJztcblxuLy8gRGlzcGxheSBzaW5nbGUgY2FyZC9pdGVtXG5jb25zdCBkaXNwbGF5Q2FyZCA9IChjb250YWluZXIsIGFsYnVtSW1nID0gJ3Vua25vd24nLCBhbGJ1bU5hbWUgPSAnbm8tbmFtZScsIGxpa2VzID0gMCwgaW5kZXgpID0+IHtcbiAgY29uc3QgbGlrZXNDb3VudGVyID0gbGlrZXM7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsaWtlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBsaWtlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGNvbW1lbnRzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHJlc2VydmF0aW9uc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBpdGVtSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2VjdGlvbiA+IGRpdicpLmxlbmd0aDtcblxuICBsaWtlSWNvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlrZXMnLCBsaWtlc0NvdW50ZXIpO1xuICBsaWtlSWNvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaXRlbUlkJywgaXRlbUlkKTtcbiAgZGVzY3JpcHRpb25UZXh0LnNldEF0dHJpYnV0ZSgnZGF0YS1jYXJkaWQnLCBpdGVtSWQpO1xuICBkZXNjcmlwdGlvblRleHQudGV4dENvbnRlbnQgPSBgJHtsaWtlSWNvbi5kYXRhc2V0Lmxpa2VzfSBsaWtlc2A7XG4gIGxpa2VJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgbGlrZVVybCk7XG4gIGxpa2VJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24tc2l6ZScpO1xuICBsaWtlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1jb250YWluZXInKTtcbiAgaDMuaW5uZXJIVE1MID0gYWxidW1OYW1lO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBhbGJ1bUltZyk7XG4gIGNvbW1lbnRzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQnKTtcbiAgY29tbWVudHNCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBjb21tZW50c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5kZXgpO1xuICByZXNlcnZhdGlvbnNCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBjb21tZW50c0J1dHRvbi50ZXh0Q29udGVudCA9ICdDb21tZW50cyc7XG4gIHJlc2VydmF0aW9uc0J1dHRvbi50ZXh0Q29udGVudCA9ICdSZXNlcnZhdGlvbic7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtcy1jb250YWluZXInKTtcbiAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGl0bGUtbGlrZScpO1xuICBpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0TGlrZSk7XG5cbiAgbGlrZXNDb250YWluZXIuYXBwZW5kKGksIGRlc2NyaXB0aW9uVGV4dCk7XG4gIGkuYXBwZW5kKGxpa2VJY29uKTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kKGgzLCBsaWtlc0NvbnRhaW5lcik7XG4gIGRpdi5hcHBlbmQoaW1nLCB0aXRsZUNvbnRhaW5lciwgY29tbWVudHNCdXR0b24sIHJlc2VydmF0aW9uc0J1dHRvbik7XG4gIGNvbnRhaW5lci5hcHBlbmQoZGl2KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDYXJkOyIsImltcG9ydCBkaXNwbGF5Q2FyZCBmcm9tICcuL2Rpc3BsYXlDYXJkLmpzJztcbmltcG9ydCBjYXJkQ291bnRlciBmcm9tICcuL2NhcmRDb3VudGVyLmpzJztcbmltcG9ydCB1cGRhdGVBbGxMaWtlcyBmcm9tICcuL2xpa2VzRGF0YS5qcyc7XG5pbXBvcnQgc2VhcmNoQXJ0aXN0SWQgZnJvbSAnLi9zZWFyY2hBcnRpc3RJZC5qcyc7XG5pbXBvcnQgc2VhcmNoQXJ0aXN0QWxidW1zIGZyb20gJy4vc2VhcmNoQXJ0aXN0QWxidW1zLmpzJztcbmltcG9ydCBDb21tZW50IGZyb20gJy4vY29tbWVudC5qcyc7XG5cbmNvbnN0IGRpc3BsYXlJdGVtcyA9IGFzeW5jIChhcnRpc3ROYW1lKSA9PiB7XG4gIGNvbnN0IGFydGlzdElkID0gYXdhaXQgc2VhcmNoQXJ0aXN0SWQoYXJ0aXN0TmFtZSk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uJyk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3Qgb2JqID0gYXdhaXQgc2VhcmNoQXJ0aXN0QWxidW1zKGFydGlzdElkLCAxMik7XG4gIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBvYmoucmVzdWx0cy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gb2JqLnJlc3VsdHNbaW5kZXhdO1xuICAgIGRpc3BsYXlDYXJkKFxuICAgICAgY29udGFpbmVyLFxuICAgICAgZWxlbWVudC5hcnR3b3JrVXJsMTAwLFxuICAgICAgZWxlbWVudC5jb2xsZWN0aW9uQ2Vuc29yZWROYW1lLFxuICAgICAgMCxcbiAgICAgIGVsZW1lbnQuY29sbGVjdGlvbklkLFxuICAgICk7XG4gIH1cbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50Jyk7XG4gIEFycmF5LmZyb20oYnRucykuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBvYmoucmVzdWx0c1tpbmRleCArIDFdO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgQ29tbWVudC5kaXNwbGF5Q29tbWVudFBvcFVwKGV2ZW50LCBlbGVtZW50KTtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybScpO1xuICAgICAgY29uc3QgY29tbWVudFVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9Wb25Gd3lDZlU0YlVueGJ2UE5QTi9jb21tZW50cy8nO1xuICAgICAgY29uc3QgZ2V0Q29tbWVudCA9IGF3YWl0IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9Wb25Gd3lDZlU0YlVueGJ2UE5QTi9jb21tZW50cz9pdGVtX2lkPSR7XG4gICAgICAgIGluZGV4ICsgMVxuICAgICAgfWA7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dGFyZWEnKTtcbiAgICAgICAgY29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGV4dFZhbHVlID0gdGV4dC52YWx1ZTtcbiAgICAgICAgYXdhaXQgQ29tbWVudC5wb3N0QUNvbW1lbnQoXG4gICAgICAgICAgY29tbWVudFVybCxcbiAgICAgICAgICBpbmRleCArIDEsXG4gICAgICAgICAgbmFtZVZhbHVlLFxuICAgICAgICAgIHRleHRWYWx1ZSxcbiAgICAgICAgKTtcbiAgICAgICAgQ29tbWVudC5jbGVhckZpZWxkKCk7XG4gICAgICAgIGF3YWl0IENvbW1lbnQuZ2V0Q29tbWVudChnZXRDb21tZW50KTtcbiAgICAgICAgQ29tbWVudC5zaG93UGVyKG5hbWVWYWx1ZSwgdGV4dFZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc2FuZCA9IGF3YWl0IENvbW1lbnQuZ2V0Q29tbWVudChnZXRDb21tZW50KTtcbiAgICAgIENvbW1lbnQuc2hvd0NvbW1lbnQoc2FuZCk7XG4gICAgICBDb21tZW50LmNvdW50Q29tbWVudChzYW5kKTtcbiAgICB9KTtcbiAgfSk7XG4gIGNhcmRDb3VudGVyKCk7XG4gIHVwZGF0ZUFsbExpa2VzKCk7XG59O1xuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtcG9wdXAnKVxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IENvbW1lbnQuY2xvc2VQb3BVcChldmVudCkpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SXRlbXM7IiwiaW1wb3J0IGRpc3BsYXlJdGVtcyBmcm9tICcuL2Rpc3BsYXlJdGVtcy5qcyc7XG5cbmNvbnN0IHVwZGF0ZXJBcnRpc3RUaXRsZSA9IChhcnRpc3ROYW1lKSA9PiB7XG4gIGNvbnN0IGFydGlzdFRpdGxlID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuZHJhJyk7XG4gIGFydGlzdFRpdGxlLmlubmVySFRNTCA9IGFydGlzdE5hbWU7XG59O1xuXG5jb25zdCBoYW5kbGVTZWFyY2hJbnB1dCA9IChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZGlzcGxheUl0ZW1zKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgdXBkYXRlckFydGlzdFRpdGxlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnRpc3RJbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgaGFuZGxlU2VhcmNoSW5wdXQpO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVTZWFyY2hJbnB1dDsiLCIvKiBJbml0IEFwcCBpZCAqL1xuLy8gQ2hlY2sgZm9yIGFuIGV4aXN0aW5nIEFwcCBpZCwgaWYgdGhlcmUgaXNuJ3QgY3JlYXRlIG9uZVxuXG5jb25zdCBpbml0SWQgPSBhc3luYyAoKSA9PiB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwSWQnKSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGlkID0gJ1ZvbkZ3eUNmVTRiVW54YnZQTlBOJztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBwSWQnLCBKU09OLnN0cmluZ2lmeShpZCkpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0SWQ7IiwiaW1wb3J0IHVwZGF0ZUxpa2VDb3VudGVyIGZyb20gJy4vdXBkYXRlTGlrZUNvdW50ZXIuanMnO1xuXG4vLyBBZGQgbGlrZSB0byBpdGVtIHVzaW5nIEludm9sdmVtZW50IEFQSVxuYXN5bmMgZnVuY3Rpb24gc2V0TGlrZSgpIHtcbiAgY29uc3QgbGlrZUljb24gPSB0aGlzLmZpcnN0Q2hpbGQ7XG4gIGxldCBsaWtlc051bWJlciA9IGxpa2VJY29uLmRhdGFzZXQubGlrZXM7XG4gIGNvbnN0IGNhcmRJZCA9IGxpa2VJY29uLmRhdGFzZXQuaXRlbWlkO1xuICBjb25zdCBhcHBJZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcElkJykpO1xuXG4gIGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9saWtlcy9gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogYCR7Y2FyZElkfWAsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgbGlrZUljb24uc2V0QXR0cmlidXRlKCdkYXRhLWxpa2VzJywgbGlrZXNOdW1iZXIgPSBOdW1iZXIobGlrZXNOdW1iZXIpICsgMSk7XG4gIHVwZGF0ZUxpa2VDb3VudGVyKGNhcmRJZCwgbGlrZXNOdW1iZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRMaWtlOyIsImltcG9ydCB1cGRhdGVMaWtlQ291bnRlciBmcm9tICcuL3VwZGF0ZUxpa2VDb3VudGVyLmpzJztcblxuY29uc3QgdXBkYXRlQWxsTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFwcElkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwSWQnKSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwSWR9L2xpa2VzL2AsXG4gICAge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKTtcbiAgY29uc3Qgb2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBsZXQgbGlzdCA9IGF3YWl0IG9iajtcbiAgbGlzdCA9IGxpc3Quc2xpY2UoMCk7XG4gIGxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUxpa2VDb3VudGVyKGVsZW1lbnQuaXRlbV9pZCwgZWxlbWVudC5saWtlcyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQWxsTGlrZXM7IiwiY29uc3Qgc2VhcmNoQXJ0aXN0QWxidW1zID0gYXN5bmMgKGFydGlzdElkLCBudW1iZXJPZkFsYnVtcykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vbG9va3VwP2lkPSR7YXJ0aXN0SWR9JmVudGl0eT1hbGJ1bSZsaW1pdD0ke251bWJlck9mQWxidW1zfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0sXG4gICk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hBcnRpc3RBbGJ1bXM7IiwiY29uc3Qgc2VhcmNoQXJ0aXN0SWQgPSBhc3luYyAoYXJ0aXN0ID0gJ01pY2hhZWwgSmFja3NvbicpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3NlYXJjaD90ZXJtPSR7YXJ0aXN0fSZlbnRpdHk9bXVzaWNBcnRpc3RgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgY29uc3Qgb2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gb2JqLnJlc3VsdHNbMF0uYXJ0aXN0SWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hBcnRpc3RJZDsiLCJjb25zdCB1cGRhdGVMaWtlQ291bnRlciA9IChjYXJkSWQsIGxpa2VzKSA9PiB7XG4gIGNvbnN0IHBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY2FyZGlkPVwiJHtjYXJkSWR9XCJdYCk7XG4gIGNvbnN0IGxpa2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaXRlbWlkPVwiJHtjYXJkSWR9XCJdYCk7XG4gIGxpa2VJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS1saWtlcycsIGxpa2VzKTtcbiAgcEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtsaWtlc30gbGlrZXNgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlTGlrZUNvdW50ZXI7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL0Fzc2V0cy9oYWNpbS1zaW1wbGUtc2Fucy1zZXJpZi1mb250L1RURi9IYWNpbS1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vQXNzZXRzL2hhY2ltLXNpbXBsZS1zYW5zLXNlcmlmLWZvbnQvVFRGL0hhY2ltLVJvdW5kLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL0Fzc2V0cy9oYWNpbS1zaW1wbGUtc2Fucy1zZXJpZi1mb250L1RURi9IYWNpbS1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvaW1hZ2VzL3BleGVscy1zdGVwaGFuLXNlZWJlci0xMjYxNzI4LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL0Fzc2V0cy9pbWFnZXMvcGV4ZWxzLXNlYmFzdGlhYW4tc3RhbS0xMDk3NDU2LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSGFjaW0tbWVkaXVtJztcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0hhY2ltLWJvbGQnO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSGFjaW0tbGlnaHQnO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6XFxyXFxuICAgICdIYWNpbS1tZWRpdW0nLFxcclxcbiAgICAnR2lsbCBTYW5zJyxcXHJcXG4gICAgJ0dpbGwgU2FucyBNVCcsXFxyXFxuICAgIENhbGlicmksXFxyXFxuICAgICdUcmVidWNoZXQgTVMnLFxcclxcbiAgICBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuXFxyXFxuICAvKiBGdWxsIGhlaWdodCAqL1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBtYXJnaW46IDE2cHggYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzMwMzYzODtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC1pbWFnZSB7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnQge1xcclxcbiAgcGFkZGluZzogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGluazpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmOGE1MztcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmOGE1MztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1oZWFkZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxyXFxuICBib3JkZXItbGVmdDogbm9uZTtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmY4YTUzO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjhhNTM7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3AtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkzMik7XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMjYlO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcblxcclxcbiAgLyogQ2FyZCBzdHlsZSAqL1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYmJjMTU5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tc2l6ZSB7XFxyXFxuICB3aWR0aDogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1saWtlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1jb250YWluZXIgPiBpbWcge1xcclxcbiAgLyogQ2FyZCBzdHlsZSAqL1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmY4YTUzO1xcclxcbiAgYmFja2dyb3VuZDogIzA3MDcwNzAwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZjY2FiMztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBtYXJnaW46IDZweCAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYm94LXNoYWRvdzogMCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNjM4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW46IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2Y4ZDJjMTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OlxcclxcbiAgICBoYWNpbS1tZWRpdW0sXFxyXFxuICAgICdHaWxsIFNhbnMnLFxcclxcbiAgICAnR2lsbCBTYW5zIE1UJyxcXHJcXG4gICAgQ2FsaWJyaSxcXHJcXG4gICAgJ1RyZWJ1Y2hldCBNUycsXFxyXFxuICAgIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBwIHtcXHJcXG4gIGNvbG9yOiAjMzIzODM4O1xcclxcbiAgZm9udC1mYW1pbHk6XFxyXFxuICAgIEhhY2ltLWJvbGQsXFxyXFxuICAgICdHaWxsIFNhbnMnLFxcclxcbiAgICAnR2lsbCBTYW5zIE1UJyxcXHJcXG4gICAgQ2FsaWJyaSxcXHJcXG4gICAgJ1RyZWJ1Y2hldCBNUycsXFxyXFxuICAgIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5mbGV4Ym94IHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTVkZWcsICM1NWM3ZWQwMCwgIzJiYjNlMDAwLCAjZjhkMmMxMDApO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCA+IGgzIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggPiBkaXYge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAjMDA5MmMyMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoID4gZGl2OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGJhY2tncm91bmQ6ICMyYTJjMmE7XFxyXFxuICB3aWR0aDogNHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMXB4O1xcclxcbiAgcmlnaHQ6IC01cHg7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoID4gZGl2ID4gaW5wdXQge1xcclxcbiAgY29sb3I6ICMyYTJjMmE7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4ICMyYTJjMmE7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggPiBkaXYgPiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICMyYTJjMmE7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCA+IGRpdiA+IGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoID4gZGl2ID4gaW5wdXQ6Zm9jdXMsXFxyXFxuLnNlYXJjaCA+IGRpdiA+IGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtbGlrZSA+IGgzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBIYWNpbS1saWdodCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2luaXQtdGl0bGUge1xcclxcbiAgbWFyZ2luOiAyMSU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsNENBQXFFO0FBQ3ZFOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRDQUFvRTtBQUN0RTs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw0Q0FBb0U7QUFDdEU7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7RUFDVDs7Ozs7O2NBTVk7QUFDZDs7QUFFQTtFQUNFLHlEQUF5RTs7RUFFekUsZ0JBQWdCO0VBQ2hCLFlBQVk7O0VBRVosc0NBQXNDO0VBQ3RD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ZGl1bSc7XFxyXFxuICBzcmM6IHVybCguLi9Bc3NldHMvaGFjaW0tc2ltcGxlLXNhbnMtc2VyaWYtZm9udC9UVEYvSGFjaW0tTWVkaXVtLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdIYWNpbS1ib2xkJztcXHJcXG4gIHNyYzogdXJsKC4uL0Fzc2V0cy9oYWNpbS1zaW1wbGUtc2Fucy1zZXJpZi1mb250L1RURi9IYWNpbS1Sb3VuZC50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSGFjaW0tbGlnaHQnO1xcclxcbiAgc3JjOiB1cmwoLi4vQXNzZXRzL2hhY2ltLXNpbXBsZS1zYW5zLXNlcmlmLWZvbnQvVFRGL0hhY2ltLUxpZ2h0LnR0Zik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTpcXHJcXG4gICAgJ0hhY2ltLW1lZGl1bScsXFxyXFxuICAgICdHaWxsIFNhbnMnLFxcclxcbiAgICAnR2lsbCBTYW5zIE1UJyxcXHJcXG4gICAgQ2FsaWJyaSxcXHJcXG4gICAgJ1RyZWJ1Y2hldCBNUycsXFxyXFxuICAgIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL0Fzc2V0cy9pbWFnZXMvcGV4ZWxzLXN0ZXBoYW4tc2VlYmVyLTEyNjE3MjguanBnKTtcXHJcXG5cXHJcXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIG1hcmdpbjogMTZweCBhdXRvO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMzAzNjM4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jb3VudCB7XFxyXFxuICBwYWRkaW5nOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5saW5rOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmY4YTUzO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmY4YTUzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhlYWRlciB7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNpbnB1dCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjhhNTM7XFxyXFxufVxcclxcblxcclxcbiNpbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxyXFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmOGE1MztcXHJcXG59XFxyXFxuXFxyXFxuI3RleHRhcmVhOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL0Fzc2V0cy9pbWFnZXMvcGV4ZWxzLXNlYmFzdGlhYW4tc3RhbS0xMDk3NDU2LmpwZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkzMik7XFxyXFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMjYlO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcblxcclxcbiAgLyogQ2FyZCBzdHlsZSAqL1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYmJjMTU5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tc2l6ZSB7XFxyXFxuICB3aWR0aDogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1saWtlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1jb250YWluZXIgPiBpbWcge1xcclxcbiAgLyogQ2FyZCBzdHlsZSAqL1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmY4YTUzO1xcclxcbiAgYmFja2dyb3VuZDogIzA3MDcwNzAwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZjY2FiMztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBtYXJnaW46IDZweCAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYm94LXNoYWRvdzogMCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNjM4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW46IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2Y4ZDJjMTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OlxcclxcbiAgICBoYWNpbS1tZWRpdW0sXFxyXFxuICAgICdHaWxsIFNhbnMnLFxcclxcbiAgICAnR2lsbCBTYW5zIE1UJyxcXHJcXG4gICAgQ2FsaWJyaSxcXHJcXG4gICAgJ1RyZWJ1Y2hldCBNUycsXFxyXFxuICAgIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBwIHtcXHJcXG4gIGNvbG9yOiAjMzIzODM4O1xcclxcbiAgZm9udC1mYW1pbHk6XFxyXFxuICAgIEhhY2ltLWJvbGQsXFxyXFxuICAgICdHaWxsIFNhbnMnLFxcclxcbiAgICAnR2lsbCBTYW5zIE1UJyxcXHJcXG4gICAgQ2FsaWJyaSxcXHJcXG4gICAgJ1RyZWJ1Y2hldCBNUycsXFxyXFxuICAgIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5mbGV4Ym94IHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTVkZWcsICM1NWM3ZWQwMCwgIzJiYjNlMDAwLCAjZjhkMmMxMDApO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCA+IGgzIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggPiBkaXYge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAjMDA5MmMyMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoID4gZGl2OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGJhY2tncm91bmQ6ICMyYTJjMmE7XFxyXFxuICB3aWR0aDogNHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMXB4O1xcclxcbiAgcmlnaHQ6IC01cHg7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoID4gZGl2ID4gaW5wdXQge1xcclxcbiAgY29sb3I6ICMyYTJjMmE7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4ICMyYTJjMmE7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggPiBkaXYgPiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICMyYTJjMmE7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCA+IGRpdiA+IGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoID4gZGl2ID4gaW5wdXQ6Zm9jdXMsXFxyXFxuLnNlYXJjaCA+IGRpdiA+IGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtbGlrZSA+IGgzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBIYWNpbS1saWdodCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2luaXQtdGl0bGUge1xcclxcbiAgbWFyZ2luOiAyMSU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiaW5pdElkIiwiaGFuZGxlU2VhcmNoSW5wdXQiLCJjYXJkQ291bnRlciIsImNhcmRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhcmRzY291bnQiLCJpbm5lckhUTUwiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwicG9wVXAiLCJxdWVyeVNlbGVjdG9yIiwiQ29tbWVudCIsImRhdGEiLCJuZXdBcnRpY2xlIiwiY3JlYXRlRWxlbWVudCIsImFydHdvcmtVcmwxMDAiLCJjb2xsZWN0aW9uTmFtZSIsImNvbGxlY3Rpb25WaWV3VXJsIiwicmVsZWFzZURhdGUiLCJjb2xsZWN0aW9uUHJpY2UiLCJwcmltYXJ5R2VucmVOYW1lIiwiYXBwZW5kQ2hpbGQiLCJldmVudCIsImVsZW1lbnQiLCJ0YXJnZXQiLCJpZCIsImNvbGxlY3Rpb25JZCIsInRvU3RyaW5nIiwiY3JlYXRlQ29tbWVudFBvcFVwIiwiY2hpbGQiLCJwYXJlbnRDb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmVDaGlsZCIsInVybCIsInVzZXJOYW1lIiwiY29tbWVudCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaXRlbV9pZCIsInVzZXJuYW1lIiwiZmV0Y2hEYXRhIiwianNvbiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm5hbWUiLCJ0ZXh0IiwidmFsdWUiLCJjb21tZW50cyIsImZpZWxkc2V0IiwiZm9yRWFjaCIsImNvbW1lbnRDb250YWluZXIiLCJjb250YWluZXIiLCJjcmVhdGlvbl9kYXRlIiwic3R5bGUiLCJkaXNwbGF5IiwibmFtZVZhbHVlIiwidGV4dFZhbHVlIiwiZGF0ZSIsIkRhdGUiLCJuZXdEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJjb3VudCIsInNldExpa2UiLCJsaWtlVXJsIiwiZGlzcGxheUNhcmQiLCJhbGJ1bUltZyIsImFsYnVtTmFtZSIsImxpa2VzIiwiaW5kZXgiLCJsaWtlc0NvdW50ZXIiLCJkaXYiLCJpbWciLCJpIiwiaDMiLCJ0aXRsZUNvbnRhaW5lciIsImxpa2VJY29uIiwibGlrZXNDb250YWluZXIiLCJkZXNjcmlwdGlvblRleHQiLCJjb21tZW50c0J1dHRvbiIsInJlc2VydmF0aW9uc0J1dHRvbiIsIml0ZW1JZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImRhdGFzZXQiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kIiwidXBkYXRlQWxsTGlrZXMiLCJzZWFyY2hBcnRpc3RJZCIsInNlYXJjaEFydGlzdEFsYnVtcyIsImRpc3BsYXlJdGVtcyIsImFydGlzdE5hbWUiLCJhcnRpc3RJZCIsIm9iaiIsInJlc3VsdHMiLCJjb2xsZWN0aW9uQ2Vuc29yZWROYW1lIiwiYnRucyIsIkFycmF5IiwiZnJvbSIsImJ0biIsImRpc3BsYXlDb21tZW50UG9wVXAiLCJmb3JtIiwiY29tbWVudFVybCIsImdldENvbW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3RBQ29tbWVudCIsImNsZWFyRmllbGQiLCJzaG93UGVyIiwic2FuZCIsInNob3dDb21tZW50IiwiY291bnRDb21tZW50IiwiY2xvc2VQb3BVcCIsInVwZGF0ZXJBcnRpc3RUaXRsZSIsImFydGlzdFRpdGxlIiwia2V5Iiwic2V0SXRlbSIsInVwZGF0ZUxpa2VDb3VudGVyIiwiZmlyc3RDaGlsZCIsImxpa2VzTnVtYmVyIiwiY2FyZElkIiwiaXRlbWlkIiwiYXBwSWQiLCJOdW1iZXIiLCJyZXNwb25zZSIsImxpc3QiLCJzbGljZSIsIm51bWJlck9mQWxidW1zIiwiYXJ0aXN0IiwicEVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9