(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Products.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Products.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products_service */ "./resources/js/services/products_service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Product',
  data: function data() {
    return {
      categories: [],
      products: {},
      productData: {
        category_id: '',
        name: '',
        image: '',
        description: ''
      },
      moreExists: true,
      nextPage: 0,
      editproductData: {},
      errors: {},
      customPagination: {},
      search: {
        keywords: ''
      }
    };
  },
  mounted: function mounted() {
    this.loadCategories();
    this.loadProducts();
    this.getResults();
  },
  methods: {
    getResults: function getResults() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      _services_products_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](page).then(function (response) {
        _this.products = response.data;
      });
    },
    loadCategories: function () {
      var _loadCategories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_products_service__WEBPACK_IMPORTED_MODULE_1__["loadCategories"]();

              case 3:
                response = _context.sent;
                // console.log(response);
                this.categories = response.data; // console.log(this.categories);

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Some error to get data Product, please try again',
                  time: 5000
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function loadCategories() {
        return _loadCategories.apply(this, arguments);
      }

      return loadCategories;
    }(),
    loadProducts: function () {
      var _loadProducts = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_products_service__WEBPACK_IMPORTED_MODULE_1__["loadProducts"]().then(function (_ref) {
                  var data = _ref.data;
                  return _this2.products = data;
                }).then(function (res) {
                  _this2.customPagination = {
                    current_page: res.current_page,
                    from: res.from,
                    last_page: res.last_page,
                    total: res.total,
                    to: res.to
                  };
                });

              case 3:
                response = _context2.sent;
                _context2.next = 10;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                this.flashMessage.error({
                  message: 'Some error to get data Product, please try again',
                  time: 5000
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function loadProducts() {
        return _loadProducts.apply(this, arguments);
      }

      return loadProducts;
    }(),
    attachImage: function attachImage() {
      this.productData.image = this.$refs.newProductImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.newProductImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.productData.image);
    },
    hideNewProductModal: function hideNewProductModal() {
      this.$refs.newProductModal.hide();
    },
    showProductModal: function showProductModal() {
      this.$refs.newProductModal.show();
    },
    createProduct: function () {
      var _createProduct = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formData = new FormData();
                formData.append('category_id', this.productData.category_id);
                formData.append('name', this.productData.name);
                formData.append('description', this.productData.description);
                formData.append('image', this.productData.image);
                _context3.prev = 5;
                _context3.next = 8;
                return _services_products_service__WEBPACK_IMPORTED_MODULE_1__["createProduct"](formData);

              case 8:
                response = _context3.sent;
                // var listProduct = Array.prototype.slice.call(response.data);
                this.products.data.unshift(response.data);
                console.log(response); // console.log(this.products.unshift(response.data));
                // var data = this.products.data;
                // console.log(data);
                // var result = response.data;
                // var mapList = Object.keys(data)
                // .map(key=> ({id: Number(key), category_id: Number(key), name: data[key], image: data[key], description: data[key], created_at: data[key], updated_at: data[key]}));
                // console.log(mapList);

                this.hideNewProductModal();
                this.flashMessage.success({
                  message: 'Product store successfully',
                  time: 5000
                });
                this.productData = {
                  name: '',
                  image: ''
                };
                _context3.next = 25;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](5);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 21 : 23;
                break;

              case 21:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 25);

              case 23:
                this.flashMessage.error({
                  message: 'Some error occured, Please try again',
                  time: 5000
                });
                return _context3.abrupt("break", 25);

              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 16]]);
      }));

      function createProduct() {
        return _createProduct.apply(this, arguments);
      }

      return createProduct;
    }(),
    deleteProduct: function deleteProduct(Product) {
      var _this3 = this;

      // if(!window.confirm(`Apakah anda yakin akan menghapus kategori ${Product.name} ?`)){
      //     return;
      // }
      this.$confirm({
        message: "Are you sure delete product ".concat(Product.name, " ?"),
        button: {
          no: 'No',
          yes: 'Yes'
        },
        callback: function callback(confirm) {
          if (confirm) {
            try {
              var response = _services_products_service__WEBPACK_IMPORTED_MODULE_1__["deleteProduct"](Product.id);

              var ProductIndex = _this3.products.data.findIndex(function (p) {
                return p.id === Product.id;
              });

              _this3.products.data.splice(ProductIndex, 1);

              _this3.flashMessage.success({
                message: 'Product delete successfully',
                time: 5000
              });
            } catch (error) {
              console.log(error);

              _this3.flashMessage.error({
                message: "error",
                time: 5000
              });
            }
          } else {
            return;
          }
        }
      });
    },
    hideEditProductModal: function hideEditProductModal() {
      this.$refs.editProductModal.hide();
    },
    showEditProductModal: function showEditProductModal() {
      this.$refs.editProductModal.show();
    },
    editProduct: function editProduct(Product) {
      this.editproductData = _objectSpread({}, Product);
      this.showEditProductModal();
    },
    editAttachImage: function editAttachImage() {
      this.editproductData.image = this.$refs.editProductImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editProductImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editproductData.image);
    },
    updateProduct: function () {
      var _updateProduct = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                formData = new FormData();
                formData.append('category_id', this.editproductData.category_id);
                formData.append('name', this.editproductData.name);
                formData.append('description', this.editproductData.description);
                formData.append('image', this.editproductData.image);
                formData.append('_method', 'put');
                _context4.next = 9;
                return _services_products_service__WEBPACK_IMPORTED_MODULE_1__["updateProduct"](this.editproductData.id, formData);

              case 9:
                response = _context4.sent;
                console.log(response);
                this.products.data.map(function (Product) {
                  if (Product.id == response.data.id) {
                    for (var key in response.data) {
                      Product[key] = response.data[key];
                    }
                  }
                });
                this.hideEditProductModal();
                this.flashMessage.success({
                  message: 'Product updated successfully',
                  time: 5000
                });
                _context4.next = 21;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);
                this.hideEditProductModal();
                this.flashMessage.error({
                  message: _context4.t0.response.data.message,
                  time: 5000
                });

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 16]]);
      }));

      function updateProduct() {
        return _updateProduct.apply(this, arguments);
      }

      return updateProduct;
    }(),
    loadMore: function () {
      var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this4 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_products_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage);

              case 3:
                response = _context5.sent;
                console.log(response);
                response.data.data.forEach(function (data) {
                  _this4.products.push(data);
                });
                _context5.next = 12;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);
                this.flashMessage.error({
                  message: "Some error during more Product",
                  time: 5000
                });

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }(),
    findCategory: function findCategory(id) {
      var category_name = '';
      this.categories.forEach(function (category) {
        if (category.id === id) {
          category_name = category.name;
        }
      });
      return category_name;
    },
    searchit: function searchit() {
      var _this5 = this;

      var query = this.search.keywords;
      _services_products_service__WEBPACK_IMPORTED_MODULE_1__["searching"](query).then(function (data) {
        var count = data.data.data;
        var resultCount = count.length;
        _this5.products = data.data;

        if (resultCount == 0) {
          _this5.flashMessage.info({
            message: "Product ".concat(query, " is not found"),
            time: 5000
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Products.vue?vue&type=style&index=0&id=897a6d62&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Products.vue?vue&type=style&index=0&id=897a6d62&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pagination[data-v-897a6d62] {\n    display: flex;\n    padding-left: 0;\n    margin-left: -15px;\n    list-style: none;\n    border-radius: 0.25rem;\n}\n.btn.btn-info.btn-sm.ml-auto[data-v-897a6d62]{\n    margin-left: 0px !important;\n}\n.d-none.d-md-inline-block.form-inline.ml-auto.mr-0.mr-md-3.my-2.my-md-0.search[data-v-897a6d62]{\n    margin-left: 0px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Products.vue?vue&type=style&index=0&id=897a6d62&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Products.vue?vue&type=style&index=0&id=897a6d62&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&id=897a6d62&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Products.vue?vue&type=style&index=0&id=897a6d62&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Products.vue?vue&type=template&id=897a6d62&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Products.vue?vue&type=template&id=897a6d62&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", [
    _c(
      "div",
      { staticClass: "container-fluid" },
      [
        _c("ol", { staticClass: "breadcrumb mb-4" }, [
          _c(
            "li",
            { staticClass: "breadcrumb-item active" },
            [
              _c("router-link", { attrs: { to: "/dashboard" } }, [
                _vm._v("Dashboard")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item active" }, [
            _vm._v("Products")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card mb-12" }, [
              _c("div", { staticClass: "card-header d-flex" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass:
                      "d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"
                  },
                  [
                    _c("div", { staticClass: "input-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.search.keywords,
                            expression: "search.keywords"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Search product",
                          "aria-label": "Search",
                          "aria-describedby": "basic-addon2"
                        },
                        domProps: { value: _vm.search.keywords },
                        on: {
                          keyup: _vm.searchit,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.search,
                              "keywords",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group-append" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "button" },
                            on: { click: _vm.search }
                          },
                          [_c("i", { staticClass: "fas fa-search" })]
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info btn-sm ml-auto",
                    on: { click: _vm.showProductModal }
                  },
                  [_c("span", { staticClass: "fa fa-plus" }), _vm._v(" Create")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "table",
                  {
                    staticClass: "table table-bordered",
                    attrs: { id: "datatable" }
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.products.data, function(Product, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(index + 1))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(Product.name))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm.findCategory(Product.category_id))
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(Product.description))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("img", {
                              staticClass: "table-image",
                              attrs: {
                                src:
                                  _vm.$store.state.serverPath +
                                  "/storage/" +
                                  Product.image,
                                alt: Product.name
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-info btn-sm",
                                on: {
                                  click: function($event) {
                                    return _vm.editProduct(Product)
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "fa fa-edit" }),
                                _vm._v(" Edit")
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-warning btn-sm",
                                on: {
                                  click: function($event) {
                                    return _vm.deleteProduct(Product)
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "fa fa-trash" }),
                                _vm._v(" Hapus")
                              ]
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-8" },
                  [
                    _c(
                      "pagination",
                      {
                        attrs: { data: _vm.products },
                        on: { "pagination-change-page": _vm.getResults }
                      },
                      [
                        _c(
                          "span",
                          { attrs: { slot: "prev-nav" }, slot: "prev-nav" },
                          [_vm._v("< Sebelumnya")]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          { attrs: { slot: "next-nav" }, slot: "next-nav" },
                          [_vm._v("Selanjutnya >")]
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            ref: "newProductModal",
            attrs: { "hide-footer": "", title: "Add New Product" }
          },
          [
            _c("div", { staticClass: "d-block" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createProduct($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "category_id" } }, [
                      _vm._v("Category")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.productData.category_id,
                            expression: "productData.category_id"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "category_id" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.productData,
                              "category_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Choose Category")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.categories, function(category, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: category.id } },
                            [_vm._v(_vm._s(category.name))]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.errors.category_id
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.category_id[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Enter Name")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.productData.name,
                          expression: "productData.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "name",
                        placeholder: "Enter Product Name"
                      },
                      domProps: { value: _vm.productData.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.productData, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.name[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "description" } }, [
                      _vm._v("Enter Description Product")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.productData.description,
                          expression: "productData.description"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "description" },
                      domProps: { value: _vm.productData.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.productData,
                            "description",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.name[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Choose Image")
                    ]),
                    _vm._v(" "),
                    _vm.productData.image.name
                      ? _c("div", { staticClass: "imageShow" }, [
                          _c("img", {
                            ref: "newProductImageDisplay",
                            staticClass: "w-150px",
                            attrs: { src: "" }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("input", {
                      ref: "newProductImage",
                      staticClass: "form-control",
                      attrs: { type: "file", id: "image" },
                      on: { change: _vm.attachImage }
                    }),
                    _vm._v(" "),
                    _vm.errors.image
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.image[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-warning",
                        attrs: { type: "button" },
                        on: { click: _vm.hideNewProductModal }
                      },
                      [_vm._v("Cancel")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Save")]
                    )
                  ])
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            ref: "editProductModal",
            attrs: { "hide-footer": "", title: "Edit Product" }
          },
          [
            _c("div", { staticClass: "d-block" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateProduct($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "category_id" } }, [
                      _vm._v("Category")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.editproductData.category_id,
                            expression: "editproductData.category_id"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "category_id" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.editproductData,
                              "category_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Choose Category")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.categories, function(category, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: category.id } },
                            [_vm._v(_vm._s(category.name))]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.errors.category_id
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.category_id[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Enter Name")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editproductData.name,
                          expression: "editproductData.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "name",
                        placeholder: "Enter Product Name"
                      },
                      domProps: { value: _vm.editproductData.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editproductData,
                            "name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.name[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Choose Image")
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("img", {
                        ref: "editProductImageDisplay",
                        staticClass: "w-150px",
                        attrs: {
                          src:
                            _vm.$store.state.serverPath +
                            "/storage/" +
                            _vm.editproductData.image
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      ref: "editProductImage",
                      staticClass: "form-control",
                      attrs: { type: "file", id: "image" },
                      on: { change: _vm.editAttachImage }
                    }),
                    _vm._v(" "),
                    _vm.errors.image
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.image[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-warning",
                        attrs: { type: "button" },
                        on: { click: _vm.hideEditProductModal }
                      },
                      [_vm._v("Cancel")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Update")]
                    )
                  ])
                ]
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-chart-area mr-1" }),
      _vm._v(
        "\n                            Product Management\n                        "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_c("b", [_vm._v("No")])]),
        _vm._v(" "),
        _c("td", { staticStyle: { width: "20%" } }, [
          _c("b", [_vm._v("Name")])
        ]),
        _vm._v(" "),
        _c("td", { staticStyle: { width: "20%" } }, [
          _c("b", [_vm._v("Category")])
        ]),
        _vm._v(" "),
        _c("td", { staticStyle: { width: "30%" } }, [
          _c("b", [_vm._v("Descriptions")])
        ]),
        _vm._v(" "),
        _c("td", { staticStyle: { width: "20%" } }, [
          _c("b", [_vm._v("Image")])
        ]),
        _vm._v(" "),
        _c("td", { staticStyle: { width: "25%" } }, [
          _c("b", [_vm._v("Actions")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/Products.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/admin/Products.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_897a6d62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=897a6d62&scoped=true& */ "./resources/js/components/admin/Products.vue?vue&type=template&id=897a6d62&scoped=true&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Products_vue_vue_type_style_index_0_id_897a6d62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products.vue?vue&type=style&index=0&id=897a6d62&scoped=true&lang=css& */ "./resources/js/components/admin/Products.vue?vue&type=style&index=0&id=897a6d62&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_897a6d62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_897a6d62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "897a6d62",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Products.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/Products.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Products.vue?vue&type=style&index=0&id=897a6d62&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/admin/Products.vue?vue&type=style&index=0&id=897a6d62&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_897a6d62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&id=897a6d62&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Products.vue?vue&type=style&index=0&id=897a6d62&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_897a6d62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_897a6d62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_897a6d62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_897a6d62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_897a6d62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/Products.vue?vue&type=template&id=897a6d62&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/Products.vue?vue&type=template&id=897a6d62&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_897a6d62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=897a6d62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Products.vue?vue&type=template&id=897a6d62&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_897a6d62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_897a6d62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/products_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/products_service.js ***!
  \***************************************************/
/*! exports provided: createProduct, loadProducts, loadCategories, deleteProduct, updateProduct, loadMore, searching, findByCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProduct", function() { return createProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProducts", function() { return loadProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProduct", function() { return updateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searching", function() { return searching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findByCategory", function() { return findByCategory; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function createProduct(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/products', data);
}
function loadProducts() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/products');
}
function loadCategories() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-categories');
}
function deleteProduct(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/products/".concat(id));
}
function updateProduct(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/products/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("products?page=".concat(nextPage));
}
function searching(keyword) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('findProduct?q=' + keyword);
}
function findByCategory(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("findByCategory/".concat(id));
}

/***/ })

}]);