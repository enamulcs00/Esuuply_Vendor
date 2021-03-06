(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-email-mail-module"], {
    /***/
    "./node_modules/rxjs-compat/Subject.js":
    /*!*********************************************!*\
      !*** ./node_modules/rxjs-compat/Subject.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatSubjectJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      exports.Subject = rxjs_1.Subject; //# sourceMappingURL=Subject.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/add/operator/switchMap.js":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/switchMap.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatAddOperatorSwitchMapJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var switchMap_1 = __webpack_require__(
      /*! ../../operator/switchMap */
      "./node_modules/rxjs-compat/operator/switchMap.js");

      rxjs_1.Observable.prototype.switchMap = switchMap_1.switchMap; //# sourceMappingURL=switchMap.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/operator/switchMap.js":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/switchMap.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatOperatorSwitchMapJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /**
       * Projects each source value to an Observable which is merged in the output
       * Observable, emitting values only from the most recently projected Observable.
       *
       * <span class="informal">Maps each value to an Observable, then flattens all of
       * these inner Observables using {@link switch}.</span>
       *
       * <img src="./img/switchMap.png" width="100%">
       *
       * Returns an Observable that emits items based on applying a function that you
       * supply to each item emitted by the source Observable, where that function
       * returns an (so-called "inner") Observable. Each time it observes one of these
       * inner Observables, the output Observable begins emitting the items emitted by
       * that inner Observable. When a new inner Observable is emitted, `switchMap`
       * stops emitting items from the earlier-emitted inner Observable and begins
       * emitting items from the new one. It continues to behave like this for
       * subsequent inner Observables.
       *
       * @example <caption>Rerun an interval Observable on every click event</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
       * result.subscribe(x => console.log(x));
       *
       * @see {@link concatMap}
       * @see {@link exhaustMap}
       * @see {@link mergeMap}
       * @see {@link switch}
       * @see {@link switchMapTo}
       *
       * @param {function(value: T, ?index: number): ObservableInput} project A function
       * that, when applied to an item emitted by the source Observable, returns an
       * Observable.
       * @return {Observable} An Observable that emits the result of applying the
       * projection function (and the optional `resultSelector`) to each item emitted
       * by the source Observable and taking only the values from the most recently
       * projected inner Observable.
       * @method switchMap
       * @owner Observable
       */


      function switchMap(project) {
        return operators_1.switchMap(project)(this);
      }

      exports.switchMap = switchMap; //# sourceMappingURL=switchMap.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs/Subject.js":
    /*!**************************************!*\
      !*** ./node_modules/rxjs/Subject.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsSubjectJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/Subject */
      "./node_modules/rxjs-compat/Subject.js")); //# sourceMappingURL=Subject.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/add/operator/switchMap.js":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs/add/operator/switchMap.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsAddOperatorSwitchMapJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __webpack_require__(
      /*! rxjs-compat/add/operator/switchMap */
      "./node_modules/rxjs-compat/add/operator/switchMap.js"); //# sourceMappingURL=switchMap.js.map

      /***/

    },

    /***/
    "./src/app/apps/email/app.state.ts":
    /*!*****************************************!*\
      !*** ./src/app/apps/email/app.state.ts ***!
      \*****************************************/

    /*! exports provided: AppState */

    /***/
    function srcAppAppsEmailAppStateTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppState", function () {
        return AppState;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/Subject */
      "./node_modules/rxjs/Subject.js");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__);

      var AppState = /*#__PURE__*/function () {
        function AppState() {
          var _this = this;

          _classCallCheck(this, AppState);

          this._data = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this._dataStream$ = this._data.asObservable();
          this._subscriptions = new Map();

          this._dataStream$.subscribe(function (data) {
            return _this._onEvent(data);
          });
        }

        _createClass(AppState, [{
          key: "notifyDataChanged",
          value: function notifyDataChanged(event, value) {// const current:any = this._data[event];
            // if (current !== value) {
            //   this._data[event] = value;
            //   this._data.next({
            //     event: event,
            //     data: this._data[event]
            //   });
            // }
          }
        }, {
          key: "subscribe",
          value: function subscribe(event, callback) {
            var subscribers = this._subscriptions.get(event) || [];
            subscribers.push(callback);

            this._subscriptions.set(event, subscribers);
          }
        }, {
          key: "_onEvent",
          value: function _onEvent(data) {
            var subscribers = this._subscriptions.get(data['event']) || [];
            subscribers.forEach(function (callback) {
              callback.call(null, data['data']);
            });
          }
        }]);

        return AppState;
      }();

      AppState.??fac = function AppState_Factory(t) {
        return new (t || AppState)();
      };

      AppState.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AppState,
        factory: AppState.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppState, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/apps/email/mail-compose/mail-compose.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/apps/email/mail-compose/mail-compose.component.ts ***!
      \*******************************************************************/

    /*! exports provided: MailComposeComponent */

    /***/
    function srcAppAppsEmailMailComposeMailComposeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailComposeComponent", function () {
        return MailComposeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var _c0 = function _c0() {
        return ["../mail-list/inbox"];
      };

      var MailComposeComponent = function MailComposeComponent() {
        _classCallCheck(this, MailComposeComponent);
      };

      MailComposeComponent.??fac = function MailComposeComponent_Factory(t) {
        return new (t || MailComposeComponent)();
      };

      MailComposeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MailComposeComponent,
        selectors: [["app-mail-compose"]],
        decls: 15,
        vars: 2,
        consts: [[1, "card-body", "compose"], ["method", "get", "action", "#"], [1, "form-group"], ["type", "text", "placeholder", "To", 1, "form-control"], ["type", "text", "placeholder", "Cc / Bcc", 1, "form-control"], ["type", "text", "placeholder", "Subject", 1, "form-control"], ["placeholder", "Message", "rows", "10", 1, "form-control"], [1, "form-group", "float-right"], [1, "btn", "btn-secondary", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-main"]],
        template: function MailComposeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Send");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MailComposeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mail-compose',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            templateUrl: './mail-compose.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/apps/email/mail-detail/mail-detail.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/apps/email/mail-detail/mail-detail.component.ts ***!
      \*****************************************************************/

    /*! exports provided: MailDetailComponent */

    /***/
    function srcAppAppsEmailMailDetailMailDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailDetailComponent", function () {
        return MailDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../mail.service */
      "./src/app/apps/email/mail.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function MailDetailComponent_div_0_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("<", ctx_r1.mail.senderMail, ">");
        }
      }

      function MailDetailComponent_div_0_div_17_section_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " 457K \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var attachment_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", attachment_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("image-", i_r5 + 1, ".jpg");
        }
      }

      function MailDetailComponent_div_0_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " \xA0-\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Download all attachments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "View all Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, MailDetailComponent_div_0_div_17_section_13_Template, 11, 2, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r2.mail.attachments.length, " attachments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.mail.attachments);
        }
      }

      function MailDetailComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MailDetailComponent_div_0_span_10_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "to me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, MailDetailComponent_div_0_div_17_Template, 14, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.mail.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.mail.sender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.mail.senderMail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.mail.date, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx_r0.mail.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.mail.attachments.length > 0);
        }
      }

      var MailDetailComponent = /*#__PURE__*/function () {
        function MailDetailComponent(service, route, router) {
          _classCallCheck(this, MailDetailComponent);

          this.service = service;
          this.route = route;
          this.router = router;
          this.mail = undefined;
          this.replyMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(MailDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // this.route.params
            // .switchMap((params: Params) => this.service.getMail(+params['id']))
            // .subscribe((mail: Mail) => this.mail = mail);
            this.route.params.forEach(function (params) {
              if (params['id'] !== undefined) {
                var id = +params['id'];

                _this2.service.getMail(id).then(function (mail) {
                  return _this2.mail = mail;
                });
              }
            });
          }
        }, {
          key: "goToReply",
          value: function goToReply(mail) {
            this.replyMessage.emit(mail);
          }
        }, {
          key: "trash",
          value: function trash(id) {
            this.service.getMail(id).then(function (mail) {
              if (mail !== undefined) {
                mail.trash = true;
                mail.sent = false;
                mail.draft = false;
                mail.starred = false;
              }
            });
            this.router.navigate(['apps/email/mail-list/inbox']);
          }
        }]);

        return MailDetailComponent;
      }();

      MailDetailComponent.??fac = function MailDetailComponent_Factory(t) {
        return new (t || MailDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      MailDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MailDetailComponent,
        selectors: [["app-mail-detail"]],
        outputs: {
          replyMessage: "replyMessage"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "card-body"], [1, "mb-3"], [1, "d-flex", "mt-4", "mb-4"], [1, "round", "mr-2", "flex-shrink-0"], ["aria-hidden", "true", 1, "fa", "fa-user"], [1, ""], [1, "font-bold"], ["class", "email text-truncate d-block w-75", 4, "ngIf"], [1, "receiver"], [1, "ml-auto"], [1, "mail-date"], [1, "mailbox-body", 3, "innerHTML"], ["class", "mail-attachments", 4, "ngIf"], [1, "email", "text-truncate", "d-block", "w-75"], [1, "mail-attachments"], [1, "row"], [1, "col-sm-6"], ["href", "#"], ["class", "attachment", 4, "ngFor", "ngForOf"], [1, "attachment"], ["alt", "", 3, "src"], [1, "title"]],
        template: function MailDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, MailDetailComponent_div_0_Template, 18, 6, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.mail);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MailDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mail-detail',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            templateUrl: './mail-detail.component.html'
          }]
        }], function () {
          return [{
            type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          replyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/apps/email/mail-list/mail-list.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/apps/email/mail-list/mail-list.component.ts ***!
      \*************************************************************/

    /*! exports provided: MailListComponent */

    /***/
    function srcAppAppsEmailMailListMailListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailListComponent", function () {
        return MailListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/operator/switchMap */
      "./node_modules/rxjs/add/operator/switchMap.js");
      /* harmony import */


      var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../mail.service */
      "./src/app/apps/email/mail.service.ts");
      /* harmony import */


      var _app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.state */
      "./src/app/apps/email/app.state.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _pipes_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/mail-search.pipe */
      "./src/app/apps/email/pipes/mail-search.pipe.ts");

      var _c0 = function _c0(a0, a1) {
        return {
          "fas": a0,
          "far": a1
        };
      };

      function MailListComponent_tr_10_td_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MailListComponent_tr_10_td_5_Template_i_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var mail_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.changeStarStatus(mail_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var mail_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](1, _c0, mail_r1.starred, !mail_r1.starred));
        }
      }

      function MailListComponent_tr_10_i_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 22);
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "unread": a0,
          "selected": a1
        };
      };

      function MailListComponent_tr_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MailListComponent_tr_10_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var mail_r1 = ctx.$implicit;
            return mail_r1.selected = $event;
          })("ngModelChange", function MailListComponent_tr_10_Template_input_ngModelChange_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r10.toggleOne();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, MailListComponent_tr_10_td_5_Template, 2, 4, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MailListComponent_tr_10_Template_td_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var mail_r1 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r11.goToDetail(mail_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MailListComponent_tr_10_Template_td_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var mail_r1 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r12.goToDetail(mail_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MailListComponent_tr_10_Template_td_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var mail_r1 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r13.goToDetail(mail_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MailListComponent_tr_10_i_10_Template, 1, 0, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MailListComponent_tr_10_Template_td_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var mail_r1 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r14.goToDetail(mail_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var mail_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](9, _c1, mail_r1.unread, mail_r1.selected));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "checkbox", mail_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", mail_r1.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attributeInterpolate1"]("for", "checkbox", mail_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.router.url != "/pages/mail/mail-list/trash");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mail_r1.sender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", mail_r1.subject, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", mail_r1.attachment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mail_r1.date);
        }
      }

      var MailListComponent = /*#__PURE__*/function () {
        function MailListComponent(service, route, router, state) {
          var _this3 = this;

          _classCallCheck(this, MailListComponent);

          this.service = service;
          this.route = route;
          this.router = router;
          this.state = state;
          this.mails = null;
          this.type = null;
          this.isAllSelected = false;
          this.searchText = null;
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              _this3.unSelectAll();

              _this3.searchText = '';
            }
          });
          this.state.subscribe('markAsRead', function () {
            _this3.markAllAsRead();
          });
          this.state.subscribe('markAsUnRead', function () {
            _this3.markAllAsUnRead();
          });
          this.state.subscribe('deleteChecked', function () {
            _this3.deleteAllCheckedMail();
          });
        }

        _createClass(MailListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMails();
          }
        }, {
          key: "getMails",
          value: function getMails() {
            var _this4 = this;

            this.mails = this.route.params.switchMap(function (params) {
              _this4.type = params['type'];

              switch (_this4.type) {
                case 'inbox':
                  return _this4.service.getInboxMails();

                case 'starred':
                  return _this4.service.getStarredMails();

                case 'sent':
                  return _this4.service.getSentMails();

                case 'drafts':
                  return _this4.service.getDraftMails();

                case 'trash':
                  return _this4.service.getTrashMails();

                default:
                  return _this4.service.getInboxMails();
              }
            });
          }
        }, {
          key: "toggleAll",
          value: function toggleAll() {
            var _a;

            var toggleStatus = !this.isAllSelected;
            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              result.forEach(function (mail) {
                mail.selected = toggleStatus;
              });
            });
          }
        }, {
          key: "toggleOne",
          value: function toggleOne() {
            var _this5 = this;

            var _a;

            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              _this5.isAllSelected = result.every(function (mail) {
                return mail.selected === true;
              });
            });
          }
        }, {
          key: "unSelectAll",
          value: function unSelectAll() {
            this.isAllSelected = false;

            if (this.mails) {
              this.mails.subscribe(function (result) {
                result.forEach(function (mail) {
                  mail.selected = false;
                });
              });
            }
          }
        }, {
          key: "markAllAsRead",
          value: function markAllAsRead() {
            var _a;

            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              result.forEach(function (mail) {
                if (mail.selected) {
                  mail.unread = false;
                }
              });
            });
          }
        }, {
          key: "markAllAsUnRead",
          value: function markAllAsUnRead() {
            var _a;

            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              result.forEach(function (mail) {
                if (mail.selected) {
                  mail.unread = true;
                }
              });
            });
          }
        }, {
          key: "deleteAllCheckedMail",
          value: function deleteAllCheckedMail() {
            var _a;

            (_a = this.mails) === null || _a === void 0 ? void 0 : _a.subscribe(function (result) {
              result.forEach(function (mail) {
                if (mail.selected) {
                  mail.trash = true;
                  mail.sent = false;
                  mail.draft = false;
                  mail.starred = false;
                }
              });
            });
            this.getMails();
            this.isAllSelected = false;
          }
        }, {
          key: "goToDetail",
          value: function goToDetail(mail) {
            mail.unread = false;
            this.router.navigate(['apps/email/mail-list/' + this.type, mail.id]);
          }
        }, {
          key: "changeStarStatus",
          value: function changeStarStatus(mail) {
            mail.starred = !mail.starred;
          }
        }]);

        return MailListComponent;
      }();

      MailListComponent.??fac = function MailListComponent_Factory(t) {
        return new (t || MailListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"]));
      };

      MailListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MailListComponent,
        selectors: [["app-inbox-list"]],
        decls: 13,
        vars: 8,
        consts: [[1, "d-flex", "mailbox-header-bar", "p-3", "bg-white", "align-items-center", "border-top"], [1, "custom-control", "custom-checkbox"], ["id", "toggle-all", "type", "checkbox", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "click"], ["for", "toggle-all", 1, "custom-control-label"], [1, "ml-auto"], ["id", "table-search-input", "type", "text", "placeholder", "Search mail...", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "table-responsive"], [1, "table", "table-hover", "no-wrap", "bg-white"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "mail-checkbox", "pl-3", "width-50"], [1, "custom-control", "custom-checkbox", "mycustomcheckbox"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "ngModel", "ngModelChange"], [1, "custom-control-label"], ["class", "mail-star width-50", 4, "ngIf"], [1, "sender", 3, "click"], [1, "subject", 3, "innerHTML", "click"], [1, "attachment", 3, "click"], ["class", "fa fa-paperclip", 4, "ngIf"], [1, "date", 3, "click"], [1, "mail-star", "width-50"], [1, "fa-star", 3, "ngClass", "click"], [1, "fa", "fa-paperclip"]],
        template: function MailListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MailListComponent_Template_input_ngModelChange_2_listener($event) {
              return ctx.isAllSelected = $event;
            })("click", function MailListComponent_Template_input_click_2_listener() {
              return ctx.toggleAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Check all");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MailListComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.searchText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MailListComponent_tr_10_Template, 13, 12, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "MailSearch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.isAllSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.searchText);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](11, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 6, ctx.mails), ctx.searchText));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        pipes: [_pipes_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MailListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-inbox-list',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            templateUrl: './mail-list.component.html'
          }]
        }], function () {
          return [{
            type: _mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/apps/email/mail.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/apps/email/mail.component.ts ***!
      \**********************************************/

    /*! exports provided: MailComponent */

    /***/
    function srcAppAppsEmailMailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailComponent", function () {
        return MailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mail.service */
      "./src/app/apps/email/mail.service.ts");
      /* harmony import */


      var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.state */
      "./src/app/apps/email/app.state.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      function MailComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MailComponent_div_12_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r1.trash();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["mail-compose"];
      };

      var _c1 = function _c1() {
        return ["mail-list/inbox"];
      };

      var _c2 = function _c2() {
        return ["mail-list/sent"];
      };

      var _c3 = function _c3() {
        return ["mail-list/drafts"];
      };

      var _c4 = function _c4() {
        return ["mail-list/trash"];
      };

      var _c5 = function _c5() {
        return ["mail-list/starred"];
      };

      var MailComponent = /*#__PURE__*/function () {
        function MailComponent(service, route, router, state) {
          var _this6 = this;

          _classCallCheck(this, MailComponent);

          this.service = service;
          this.route = route;
          this.router = router;
          this.state = state;
          this.mails = Object.create(null);
          this.id = 0;
          this.type = null;
          this.markAsRead = '';
          this.markAsUnRead = '';
          this.deleteChecked = '';
          this.status = false;
          this.router.events.subscribe(function (event) {
            var _a, _b, _c, _d, _e, _f;

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this6.id = (_c = (_b = (_a = _this6.route) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.firstChild) === null || _c === void 0 ? void 0 : _c.params['id'];
              _this6.type = (_f = (_e = (_d = _this6.route) === null || _d === void 0 ? void 0 : _d.snapshot) === null || _e === void 0 ? void 0 : _e.firstChild) === null || _f === void 0 ? void 0 : _f.params['type'];
              setTimeout(function () {// jQuery('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });
              });
            }
          });
        }

        _createClass(MailComponent, [{
          key: "getBack",
          value: function getBack() {
            if (this.type) {
              this.router.navigate(['apps/email/mail-list/' + this.type]);
            } else {
              this.router.navigate(['apps/email/mail-list/inbox']);
            }
          }
        }, {
          key: "trash",
          value: function trash() {
            // jQuery('[data-toggle="tooltip"]').tooltip('hide');
            this.service.getMail(this.id).then(function (mail) {
              if (mail !== undefined) {
                mail.trash = true;
                mail.sent = false;
                mail.draft = false;
                mail.starred = false;
              }
            });
            this.router.navigate(['apps/email/mail-list/inbox']);
          }
        }, {
          key: "setAsRead",
          value: function setAsRead() {
            this.markAsRead = this.markAsRead;
            this.state.notifyDataChanged('markAsRead', this.markAsRead);
          }
        }, {
          key: "setAsUnRead",
          value: function setAsUnRead() {
            this.markAsUnRead = this.markAsUnRead;
            this.state.notifyDataChanged('markAsUnRead', this.markAsUnRead);
          }
        }, {
          key: "deleteCheckedMail",
          value: function deleteCheckedMail() {
            this.deleteChecked = this.deleteChecked;
            this.state.notifyDataChanged('deleteChecked', this.deleteChecked);
          }
        }, {
          key: "openClleft",
          value: function openClleft() {
            this.status = !this.status;
          }
        }]);

        return MailComponent;
      }();

      MailComponent.??fac = function MailComponent_Factory(t) {
        return new (t || MailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"]));
      };

      MailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MailComponent,
        selectors: [["app-mail"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]])],
        decls: 98,
        vars: 21,
        consts: [[1, "email-container", "px-3"], [1, "row"], [1, "col-sm-3", "col-md-3", "col-lg-3", "col-xl-2", "bg-white", "border-right"], [1, "mb-0", "pt-4", "text-center", "font-weight-bold"], ["href", "javascript:void(0)", 1, "text-dark", "float-right", "custom-control-button", 3, "click"], [1, "ti-menu"], [1, "col-sm-9", "col-md-9", "col-lg-9", "col-xl-10", "bg-white"], [1, "pb-3", "pt-3", "d-flex", "align-items-center"], ["data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", 1, "b-btn", "mr-1", 3, "title"], ["type", "button", 1, "btn", "btn-dark", "btn-sm", 3, "click"], [1, "fa", "fa-arrow-left"], ["class", "b-btn mr-1", "data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", "title", "Delete", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", "title", "Refresh", 1, "b-btn", "mr-1"], ["type", "button", 1, "btn", "btn-dark", "btn-sm"], [1, "fas", "fa-sync-alt"], ["ngbDropdown", "", 1, "btn-group"], ["type", "button", "ngbDropdownToggle", "", "aria-controls", "dropdown-basic", 1, "btn", "btn-warning", "btn-sm"], ["id", "dropdown-basic", "ngbDropdownMenu", "", 1, ""], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "ml-auto"], [1, "mr-1", "text-dark"], [1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-dark"], [1, "fa", "fa-chevron-left"], [1, "fa", "fa-chevron-right"], [1, "col-md-3", "col-lg-3", "col-xl-2", "bg-white", "border-right"], [1, "inbox-panel", "p-2", "bg-white", 3, "ngClass"], ["role", "button", 1, "btn", "btn-danger", "rounded-pill", "btn-block", "mt-3", 3, "routerLink"], [1, "mailbox", "bg-white"], [1, "list-group", "custom-group", "message-center", 2, "height", "unset"], [1, "py-2"], [1, "font-weight-normal", "text-muted", "text-uppercase", "mb-0", "mt-3", "font-12"], [1, "list-group-item", "p-0"], [1, "message-item", "d-flex", "align-items-center", "border-0", "py-3", "font-weight-normal", 3, "routerLink"], [1, "fa-inbox", "fas", "font-18", "mr-2"], [1, "badge", "badge-info", "badge-pill"], [1, "fa-paper-plane", "fas", "font-18", "mr-2"], [1, "fa-box", "fas", "font-18", "mr-2"], [1, "fa-history", "fas", "font-18", "mr-2"], [1, "fas", "fa-star", "font-18", "mr-2"], ["href", "#", 1, "message-item", "d-flex", "align-items-center", "border-0", "py-3", "font-weight-normal"], [1, "fa", "fa-circle", "text-danger", "font-18", "mr-2"], [1, "fa", "fa-circle", "text-warning", "font-18", "mr-2"], [1, "fa", "fa-circle", "text-info", "font-18", "mr-2"], [1, "col-md-9", "col-lg-9", "col-xl-10", "bg-white"], [1, "inbox-right-panel"], ["data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", "title", "Delete", 1, "b-btn", "mr-1"], [1, "fa", "fa-trash"]],
        template: function MailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Mailbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MailComponent_Template_a_click_5_listener() {
              return ctx.openClleft();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MailComponent_Template_button_click_10_listener() {
              return ctx.getBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MailComponent_div_12_Template, 3, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " More ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MailComponent_Template_a_click_20_listener() {
              return ctx.setAsRead();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Mark as read");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MailComponent_Template_a_click_22_listener() {
              return ctx.setAsUnRead();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Mark as unread");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MailComponent_Template_a_click_24_listener() {
              return ctx.deleteCheckedMail();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\u2013");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "COMPOSE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "ul", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h6", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Mailbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Inbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " Sent Mail ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " Drafts ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " Trash ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "li", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h6", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Filters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "i", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " Starred ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "h6", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "i", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " Notes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "i", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " Personal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " Travel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", ctx.id || !ctx.type ? "inline-block" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("title", "Back to ", ctx.type, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", ctx.router.url == "/apps/email/mail-compose" || ctx.id ? "none" : "inline-block");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("display", ctx.router.url == "/apps/email/mail-compose" ? "none" : "block");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.status ? "showlpanel" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](15, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](16, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](17, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](18, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](19, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](20, _c5));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".email-container {\n  overflow: hidden;\n}\n\n.email-container .unread {\n  font-weight: 800;\n}\n\n.email-container .mail-star .fa-star {\n  color: #f9a913;\n}\n\n.email-container .inbox-right-panel,\n.email-container .inbox-panel {\n  min-height: calc(100vh - 300px);\n}\n\n.email-container .inbox-right-panel {\n  margin: 0 -10px;\n}\n\n.email-container .inbox-right-panel .table tr {\n  cursor: pointer;\n}\n\n.email-container .subject,\n.email-container .sender {\n  max-width: 350px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.email-container .sender {\n  max-width: 150px;\n}\n\n.email-container .custom-control-button {\n  display: none;\n}\n\n.email-container .width-50 {\n  width: 50px;\n}\n\n.email-container .custom-group .list-group-item {\n  border: 0px;\n  padding: 0.75rem 0.25rem;\n}\n\n.email-container .custom-group .list-group-item a {\n  color: #3e556a;\n}\n\n@media (max-width: 767px) {\n  .email-container .inbox-panel {\n    position: absolute;\n    width: 200px;\n    min-height: 100vh;\n    height: 100%;\n    background: white;\n    left: -202px;\n    z-index: 10;\n    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n    padding: 0 10px;\n  }\n  .email-container .inbox-panel.showlpanel {\n    left: 0px;\n  }\n  .email-container .custom-control-button {\n    display: block;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy9lbWFpbC9tYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUZBO0VBSUksZ0JBQWdCO0FBRXBCOztBQU5BO0VBT0ksY0FBYztBQUdsQjs7QUFWQTs7RUFXSSwrQkFBK0I7QUFJbkM7O0FBZkE7RUFjSSxlQUFlO0FBS25COztBQW5CQTtFQWdCTSxlQUFlO0FBT3JCOztBQXZCQTs7RUFxQkksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFPM0I7O0FBOUJBO0VBMEJJLGdCQUFnQjtBQVFwQjs7QUFsQ0E7RUE2QkksYUFBYTtBQVNqQjs7QUF0Q0E7RUFpQ0ksV0FBVztBQVNmOztBQTFDQTtFQXFDTSxXQUFXO0VBQ1gsd0JBQXdCO0FBUzlCOztBQS9DQTtFQXdDUSxjQUFjO0FBV3RCOztBQVBFO0VBNUNGO0lBOENNLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsZUFBZTtFQVVuQjtFQWhFRjtJQXdEUSxTQUFTO0VBV2Y7RUFuRUY7SUE2RE0sY0FBYztFQVNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwcy9lbWFpbC9tYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLnVucmVhZCB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAubWFpbC1zdGFyIC5mYS1zdGFyIHtcbiAgICBjb2xvcjogI2Y5YTkxMztcbiAgfVxuICAuaW5ib3gtcmlnaHQtcGFuZWwsXG4gIC5pbmJveC1wYW5lbCB7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcbiAgfVxuICAuaW5ib3gtcmlnaHQtcGFuZWwge1xuICAgIG1hcmdpbjogMCAtMTBweDtcbiAgICAudGFibGUgdHIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICAuc3ViamVjdCxcbiAgLnNlbmRlciB7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIC5zZW5kZXIge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cbiAgLmN1c3RvbS1jb250cm9sLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC53aWR0aC01MCB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLmN1c3RvbS1ncm91cCB7XG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICBib3JkZXI6IDBweDtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMC4yNXJlbTtcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzNlNTU2YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmluYm94LXBhbmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBsZWZ0OiAtMjAycHg7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgJi5zaG93bHBhbmVsIHtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jdXN0b20tY29udHJvbC1idXR0b24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG59XG4iXX0= */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mail',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            templateUrl: './mail.component.html',
            styleUrls: ['./mail.component.scss'],
            providers: [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]]
          }]
        }], function () {
          return [{
            type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/apps/email/mail.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/apps/email/mail.module.ts ***!
      \*******************************************/

    /*! exports provided: routes, MailModule */

    /***/
    function srcAppAppsEmailMailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailModule", function () {
        return MailModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pipes/pipes.module */
      "./src/app/apps/email/pipes/pipes.module.ts");
      /* harmony import */


      var _app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.state */
      "./src/app/apps/email/app.state.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mail.component */
      "./src/app/apps/email/mail.component.ts");
      /* harmony import */


      var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mail-compose/mail-compose.component */
      "./src/app/apps/email/mail-compose/mail-compose.component.ts");
      /* harmony import */


      var _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./mail-list/mail-list.component */
      "./src/app/apps/email/mail-list/mail-list.component.ts");
      /* harmony import */


      var _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./mail-detail/mail-detail.component */
      "./src/app/apps/email/mail-detail/mail-detail.component.ts");

      var routes = [{
        path: '',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
        children: [{
          path: '',
          redirectTo: 'mail-list/inbox',
          pathMatch: 'full'
        }, {
          path: 'mail-list/:type',
          component: _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"]
        }, {
          path: 'mail-compose',
          component: _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"]
        }, {
          path: 'mail-list/:type/:id',
          component: _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"]
        }]
      }];

      var MailModule = function MailModule() {
        _classCallCheck(this, MailModule);
      };

      MailModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: MailModule
      });
      MailModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function MailModule_Factory(t) {
          return new (t || MailModule)();
        },
        providers: [_app_state__WEBPACK_IMPORTED_MODULE_5__["AppState"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MailModule, {
          declarations: [_mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"], _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"], _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"], _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MailModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"], _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"], _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"], _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"]],
            providers: [_app_state__WEBPACK_IMPORTED_MODULE_5__["AppState"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/apps/email/mail.service.ts":
    /*!********************************************!*\
      !*** ./src/app/apps/email/mail.service.ts ***!
      \********************************************/

    /*! exports provided: Mail, MailService */

    /***/
    function srcAppAppsEmailMailServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Mail", function () {
        return Mail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailService", function () {
        return MailService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Mail = function Mail(id, sender, senderMail, subject, date, body, attachment, attachments, unread, sent, starred, draft, trash, selected) {
        _classCallCheck(this, Mail);

        this.id = id;
        this.sender = sender;
        this.senderMail = senderMail;
        this.subject = subject;
        this.date = date;
        this.body = body;
        this.attachment = attachment;
        this.attachments = attachments;
        this.unread = unread;
        this.sent = sent;
        this.starred = starred;
        this.draft = draft;
        this.trash = trash;
        this.selected = selected;
      };

      var Mails = [new Mail(1, 'Seth Wright', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '6:08 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], true, false, false, false, false, false), new Mail(2, 'Leo Jons', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '12:55 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', true, ['assets/images/product/chair.png', 'assets/images/product/chair2.png'], true, false, true, false, false, false), new Mail(3, 'Aron Shaur', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '01.11.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(4, 'Emily Rhodes', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '21.07.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], true, false, false, false, false, false), new Mail(5, 'Draft', '', 'no subject', '2:14 PM', '', false, [], false, false, false, true, false, false), new Mail(6, 'Draft', '', 'Please confirm your account for furthur process', 'Jan 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet. ', false, [], false, false, false, true, false, false), new Mail(7, 'Kendra', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '27.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(8, 'Jimmy Fallon', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '14.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, true, false, false, false), new Mail(9, 'Sam Tighe', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '03.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(10, 'Saul', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', '30.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, true, false, false, false, false), new Mail(11, 'Nathan James', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '24.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(12, 'Mia Green', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '11.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false), new Mail(13, 'Mario Gomez', 'info@wrappixel.com', 'Download the freebies from the site wrappixel.com all the admin template for free', '24.02.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>', false, [], false, false, false, false, false, false)];
      var mailsPromise = Promise.resolve(Mails);

      var MailService = /*#__PURE__*/function () {
        function MailService() {
          _classCallCheck(this, MailService);
        }

        _createClass(MailService, [{
          key: "getInboxMails",
          value: function getInboxMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.sent === false && mail.draft === false && mail.trash === false;
              });
            });
          }
        }, {
          key: "getStarredMails",
          value: function getStarredMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.starred === true;
              });
            });
          }
        }, {
          key: "getSentMails",
          value: function getSentMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.sent === true;
              });
            });
          }
        }, {
          key: "getDraftMails",
          value: function getDraftMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.draft === true;
              });
            });
          }
        }, {
          key: "getTrashMails",
          value: function getTrashMails() {
            return mailsPromise.then(function (mails) {
              return mails.filter(function (mail) {
                return mail.trash === true;
              });
            });
          }
        }, {
          key: "getMail",
          value: function getMail(id) {
            return mailsPromise.then(function (mails) {
              return mails.find(function (mail) {
                return mail.id === +id;
              });
            });
          }
        }]);

        return MailService;
      }();

      MailService.??fac = function MailService_Factory(t) {
        return new (t || MailService)();
      };

      MailService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: MailService,
        factory: MailService.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MailService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/apps/email/pipes/mail-search.pipe.ts":
    /*!******************************************************!*\
      !*** ./src/app/apps/email/pipes/mail-search.pipe.ts ***!
      \******************************************************/

    /*! exports provided: MailSearchPipe */

    /***/
    function srcAppAppsEmailPipesMailSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function () {
        return MailSearchPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MailSearchPipe = /*#__PURE__*/function () {
        function MailSearchPipe() {
          _classCallCheck(this, MailSearchPipe);
        }

        _createClass(MailSearchPipe, [{
          key: "transform",
          value: function transform(value, args) {
            var searchText = new RegExp(args, 'ig');

            if (value) {
              return value.filter(function (mail) {
                if (mail.sender || mail.subject) {
                  if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                    return true;
                  }
                }
              });
            }
          }
        }]);

        return MailSearchPipe;
      }();

      MailSearchPipe.??fac = function MailSearchPipe_Factory(t) {
        return new (t || MailSearchPipe)();
      };

      MailSearchPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({
        name: "MailSearch",
        type: MailSearchPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MailSearchPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'MailSearch'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/apps/email/pipes/pipes.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/apps/email/pipes/pipes.module.ts ***!
      \**************************************************/

    /*! exports provided: PipesModule */

    /***/
    function srcAppAppsEmailPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mail-search.pipe */
      "./src/app/apps/email/pipes/mail-search.pipe.ts");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: PipesModule
      });
      PipesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function PipesModule_Factory(t) {
          return new (t || PipesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PipesModule, {
          declarations: [_mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PipesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]],
            exports: [_mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=apps-email-mail-module-es5.js.map