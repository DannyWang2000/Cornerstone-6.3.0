(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");



function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var Account = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Account, _PageManager);

  function Account(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = Object(_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__["createTranslationDictionary"])(context);
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }

  var _proto = Account.prototype;

  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context); // Injected via template

    this.passwordRequirements = this.context.passwordRequirements; // Instantiates wish list JS

    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);

    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);

      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }

    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);

      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }

    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }

    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }

    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }

    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }
  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */
  ;

  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;

    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });

      if (!submitForm) {
        event.preventDefault();
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
          text: _this2.context.selectItem,
          icon: 'error'
        });
      }
    });
  };

  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var _this3 = this;

    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm, this.context);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    addressValidator.add(validationModel);

    if ($stateElement) {
      var $last; // Requests the states for a country with AJAX

      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }

        var $field = $(field);

        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }

        if ($last) {
          addressValidator.remove($last);
        }

        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(addressValidator, field, _this3.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
        }
      });
    }

    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();

      if (addressValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false; // Iterate until we find a non-zero value in the dropdown for quantity

      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true; // Exit out of loop if we found at least one return

          return true;
        }
      });

      if (formSubmit) {
        return true;
      }

      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
        text: errorMessage,
        icon: 'error'
      });
      return event.preventDefault();
    });
  };

  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this4 = this;

    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm, this.context);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }

      var $field = $(field);

      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }

      if ($last) {
        paymentMethodValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(paymentMethodValidator, field, _this4.validationDictionary.field_not_blank);
      } else {
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
      }
    }); // Use credit card number input listener to highlight credit card type

    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["creditCardType"])(target.value);

      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    }); // Set of credit card validation

    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    }); // Set of credit card format

    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]"); // Billing address validation

    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault(); // Perform final form validation

      paymentMethodValidator.performCheck();

      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {}); // Assign country and state code


        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this4.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });

        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });

        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state; // Default Instrument

        data.default_instrument = !!data.default_instrument; // Store credit card

        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["storeInstrument"])(_this4.context, data, function () {
          window.location.href = _this4.context.paymentMethodsUrl;
        }, function () {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
            text: _this4.context.generic_error,
            icon: 'error'
          });
        });
      }
    });
  };

  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm, this.context);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: '${formEditSelector} input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector); // This only handles the custom fields, standard fields are added below

    editValidator.add(validationModel);

    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setEmailValidation(editValidator, emailSelector, this.validationDictionary.valid_email);
    }

    if ($passwordElement && $password2Element) {
      var _this$validationDicti = this.validationDictionary,
          enterPassword = _this$validationDicti.password,
          matchPassword = _this$validationDicti.password_match;
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["createPasswordValidationErrorTextObject"])(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error), true);
    }

    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;

          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }

          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }

    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();

      if (editValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();

      if (inboxValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */

var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};
/**
 * Get credit card type from credit card number
 * @param {string} value
 */


var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(value), true);
};
/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */

var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
      shopperId = _ref.shopperId,
      storeHash = _ref.storeHash,
      vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
      currency_code = _ref2.currency_code,
      credit_card_number = _ref2.credit_card_number,
      expiration = _ref2.expiration,
      name_on_card = _ref2.name_on_card,
      cvv = _ref2.cvv,
      default_instrument = _ref2.default_instrument,
      address1 = _ref2.address1,
      address2 = _ref2.address2,
      city = _ref2.city,
      postal_code = _ref2.postal_code,
      state_or_province_code = _ref2.state_or_province_code,
      country_code = _ref2.country_code,
      company = _ref2.company,
      first_name = _ref2.first_name,
      last_name = _ref2.last_name,
      email = _ref2.email,
      phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(target.value));
      });
    }
  },

  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
            which = _ref4.which;
        var refTarget = target;

        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");


function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urls) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urls.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var noCompareMessage = _ref.noCompareMessage,
      urls = _ref.urls;
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urls);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urls);
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])(noCompareMessage);
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJBY2NvdW50IiwiY29udGV4dCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiJHN0YXRlIiwiJCIsIiRib2R5Iiwib25SZWFkeSIsIiRlZGl0QWNjb3VudEZvcm0iLCJjbGFzc2lmeUZvcm0iLCIkYWRkcmVzc0Zvcm0iLCIkaW5ib3hGb3JtIiwiJGFjY291bnRSZXR1cm5Gb3JtIiwiJHBheW1lbnRNZXRob2RGb3JtIiwiJHJlb3JkZXJGb3JtIiwiJGludm9pY2VCdXR0b24iLCJjb21wYXJlUHJvZHVjdHMiLCJwYXNzd29yZFJlcXVpcmVtZW50cyIsIldpc2hsaXN0IiwibG9hZCIsImxlbmd0aCIsInJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uIiwiaXMiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwib24iLCJsZWZ0Iiwid2luZG93Iiwic2NyZWVuIiwiYXZhaWxXaWR0aCIsInRvcCIsImF2YWlsSGVpZ2h0IiwidXJsIiwiZGF0YSIsIm9wZW4iLCJpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uIiwicmVnaXN0ZXJJbmJveFZhbGlkYXRpb24iLCJpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uIiwiaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbiIsImluaXRSZW9yZGVyRm9ybSIsImJpbmREZWxldGVBZGRyZXNzIiwiYmluZERlbGV0ZVBheW1lbnRNZXRob2QiLCJldmVudCIsIm1lc3NhZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY29uZmlybSIsInByZXZlbnREZWZhdWx0IiwiJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyIsInN1Ym1pdEZvcm0iLCJmaW5kIiwicmVtb3ZlIiwiZWFjaCIsImluZGV4IiwicHJvZHVjdENoZWNrYm94IiwicHJvZHVjdElkIiwidmFsIiwiJGlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFwcGVuZCIsInN3YWwiLCJmaXJlIiwidGV4dCIsInNlbGVjdEl0ZW0iLCJpY29uIiwidmFsaWRhdGlvbk1vZGVsIiwidmFsaWRhdGlvbiIsInN0YXRlU2VsZWN0b3IiLCIkc3RhdGVFbGVtZW50IiwiYWRkcmVzc1ZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsInRhcCIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJhZGQiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJWYWxpZGF0b3JzIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImZpZWxkX25vdF9ibGFuayIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJlcnJvck1lc3NhZ2UiLCJmb3JtU3VibWl0IiwiaSIsImVsZSIsInBhcnNlSW50IiwiYXR0ciIsImZpcnN0TmFtZUxhYmVsIiwibGFzdE5hbWVMYWJlbCIsImNvbXBhbnlMYWJlbCIsInBob25lTGFiZWwiLCJhZGRyZXNzMUxhYmVsIiwiYWRkcmVzczJMYWJlbCIsImNpdHlMYWJlbCIsImNvdW50cnlMYWJlbCIsImNob29zZUNvdW50cnlMYWJlbCIsInN0YXRlTGFiZWwiLCJwb3N0YWxDb2RlTGFiZWwiLCJwYXltZW50TWV0aG9kU2VsZWN0b3IiLCJwYXltZW50TWV0aG9kVmFsaWRhdG9yIiwiY2FyZFR5cGUiLCJ0YXJnZXQiLCJjcmVkaXRDYXJkVHlwZSIsInNpYmxpbmdzIiwiY3NzIiwiQ0NWYWxpZGF0b3JzIiwic2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24iLCJjcmVkaXRDYXJkTnVtYmVyIiwic2V0RXhwaXJhdGlvblZhbGlkYXRpb24iLCJleHBpcmF0aW9uIiwic2V0TmFtZU9uQ2FyZFZhbGlkYXRpb24iLCJuYW1lT25DYXJkIiwic2V0Q3Z2VmFsaWRhdGlvbiIsImN2diIsIkNDRm9ybWF0dGVycyIsInNldENyZWRpdENhcmROdW1iZXJGb3JtYXQiLCJzZXRFeHBpcmF0aW9uRm9ybWF0Iiwic2VyaWFsaXplQXJyYXkiLCJvYmoiLCJpdGVtIiwicmVmT2JqIiwiY291bnRyeSIsImNvdW50cmllcyIsInN0YXRlIiwic3RhdGVzIiwiY291bnRyeV9jb2RlIiwiY29kZSIsInN0YXRlX29yX3Byb3ZpbmNlX2NvZGUiLCJkZWZhdWx0X2luc3RydW1lbnQiLCJzdG9yZUluc3RydW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJwYXltZW50TWV0aG9kc1VybCIsImdlbmVyaWNfZXJyb3IiLCJmb3JtRWRpdFNlbGVjdG9yIiwiZWRpdFZhbGlkYXRvciIsImVtYWlsU2VsZWN0b3IiLCIkZW1haWxFbGVtZW50IiwicGFzc3dvcmRTZWxlY3RvciIsIiRwYXNzd29yZEVsZW1lbnQiLCJwYXNzd29yZDJTZWxlY3RvciIsIiRwYXNzd29yZDJFbGVtZW50IiwiY3VycmVudFBhc3N3b3JkU2VsZWN0b3IiLCIkY3VycmVudFBhc3N3b3JkIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRfZW1haWwiLCJlbnRlclBhc3N3b3JkIiwicGFzc3dvcmQiLCJtYXRjaFBhc3N3b3JkIiwicGFzc3dvcmRfbWF0Y2giLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QiLCJlcnJvciIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImN1cnJlbnRQYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaW5ib3hWYWxpZGF0b3IiLCJOdW1iZXIiLCJlbnRlck9yZGVyTnVtIiwiZW50ZXJTdWJqZWN0IiwiZW50ZXJNZXNzYWdlIiwiUGFnZU1hbmFnZXIiLCJvbWl0TnVsbFN0cmluZyIsImtleSIsImNyZWRpdGNhcmRzIiwiY2FyZCIsInBhcnNlIiwiZG9uZSIsImZhaWwiLCJwYXltZW50c1VybCIsInNob3BwZXJJZCIsInN0b3JlSGFzaCIsInZhdWx0VG9rZW4iLCJwcm92aWRlcl9pZCIsImN1cnJlbmN5X2NvZGUiLCJjcmVkaXRfY2FyZF9udW1iZXIiLCJuYW1lX29uX2NhcmQiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsInBvc3RhbF9jb2RlIiwiY29tcGFueSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInBob25lIiwiZXhwaXJ5Iiwic3BsaXQiLCJhamF4IiwiZGF0YVR5cGUiLCJtZXRob2QiLCJjYWNoZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQWNjZXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsImluc3RydW1lbnQiLCJjYXJkaG9sZGVyX25hbWUiLCJudW1iZXIiLCJleHBpcnlfbW9udGgiLCJtb250aCIsImV4cGlyeV95ZWFyIiwieWVhciIsInZlcmlmaWNhdGlvbl92YWx1ZSIsImJpbGxpbmdfYWRkcmVzcyIsIkZvcm1hdHRlcnMiLCJyZWZUYXJnZXQiLCJmb3JtYXQiLCJ3aGljaCIsInRlc3QiLCJzbGljZSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJpc1ZhbGlkIiwiaXNQYXN0IiwiY3ZjIiwiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInB1c2giLCJ1cGRhdGVDb3VudGVyTmF2IiwiJGxpbmsiLCJ1cmxzIiwiYWRkQ2xhc3MiLCJjb21wYXJlIiwiam9pbiIsImh0bWwiLCJyZW1vdmVDbGFzcyIsIm5vQ29tcGFyZU1lc3NhZ2UiLCJjb21wYXJlQ291bnRlciIsIiRjb21wYXJlTGluayIsIiRjaGVja2VkIiwibWFwIiwiZWxlbWVudCIsImdldCIsInRyaWdnZXJIYW5kbGVyIiwicHJvZHVjdCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiLCJzaG93QWxlcnRNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxPOzs7RUFDakIsaUJBQVlDLE9BQVosRUFBcUI7SUFBQTs7SUFDakIsZ0NBQU1BLE9BQU47SUFDQSxNQUFLQyxvQkFBTCxHQUE0QkMsb0dBQTJCLENBQUNGLE9BQUQsQ0FBdkQ7SUFDQSxNQUFLRyxNQUFMLEdBQWNDLENBQUMsQ0FBQywyQkFBRCxDQUFmO0lBQ0EsTUFBS0MsS0FBTCxHQUFhRCxDQUFDLENBQUMsTUFBRCxDQUFkO0lBSmlCO0VBS3BCOzs7O1NBRURFLE8sR0FBQSxtQkFBVTtJQUNOLElBQU1DLGdCQUFnQixHQUFHQyw2RUFBWSxDQUFDLDhCQUFELENBQXJDO0lBQ0EsSUFBTUMsWUFBWSxHQUFHRCw2RUFBWSxDQUFDLHlCQUFELENBQWpDO0lBQ0EsSUFBTUUsVUFBVSxHQUFHRiw2RUFBWSxDQUFDLHVCQUFELENBQS9CO0lBQ0EsSUFBTUcsa0JBQWtCLEdBQUdILDZFQUFZLENBQUMsNEJBQUQsQ0FBdkM7SUFDQSxJQUFNSSxrQkFBa0IsR0FBR0osNkVBQVksQ0FBQyxnQ0FBRCxDQUF2QztJQUNBLElBQU1LLFlBQVksR0FBR0wsNkVBQVksQ0FBQyw2QkFBRCxDQUFqQztJQUNBLElBQU1NLGNBQWMsR0FBR1YsQ0FBQyxDQUFDLHNCQUFELENBQXhCO0lBRUFXLHlFQUFlLENBQUMsS0FBS2YsT0FBTixDQUFmLENBVE0sQ0FXTjs7SUFDQSxLQUFLZ0Isb0JBQUwsR0FBNEIsS0FBS2hCLE9BQUwsQ0FBYWdCLG9CQUF6QyxDQVpNLENBY047O0lBQ0FDLGlEQUFRLENBQUNDLElBQVQsQ0FBYyxLQUFLbEIsT0FBbkI7O0lBRUEsSUFBSU8sZ0JBQWdCLENBQUNZLE1BQXJCLEVBQTZCO01BQ3pCLEtBQUtDLDZCQUFMLENBQW1DYixnQkFBbkM7O01BQ0EsSUFBSSxLQUFLSixNQUFMLENBQVlrQixFQUFaLENBQWUsT0FBZixDQUFKLEVBQTZCO1FBQ3pCQyx1RkFBc0IsQ0FBQyxLQUFLbkIsTUFBTixDQUF0QjtNQUNIO0lBQ0o7O0lBRUQsSUFBSVcsY0FBYyxDQUFDSyxNQUFuQixFQUEyQjtNQUN2QkwsY0FBYyxDQUFDUyxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFlBQU07UUFDN0IsSUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsVUFBZCxHQUEyQixDQUEzQixHQUErQixHQUE1QztRQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDQyxNQUFQLENBQWNHLFdBQWQsR0FBNEIsQ0FBNUIsR0FBZ0MsR0FBNUM7UUFDQSxJQUFNQyxHQUFHLEdBQUdoQixjQUFjLENBQUNpQixJQUFmLENBQW9CLGNBQXBCLENBQVo7UUFFQU4sTUFBTSxDQUFDTyxJQUFQLENBQVlGLEdBQVosRUFBaUIsY0FBakIsaUNBQThETixJQUE5RCxhQUEwRUksR0FBMUU7TUFDSCxDQU5EO0lBT0g7O0lBRUQsSUFBSW5CLFlBQVksQ0FBQ1UsTUFBakIsRUFBeUI7TUFDckIsS0FBS2MseUJBQUwsQ0FBK0J4QixZQUEvQjs7TUFFQSxJQUFJLEtBQUtOLE1BQUwsQ0FBWWtCLEVBQVosQ0FBZSxPQUFmLENBQUosRUFBNkI7UUFDekJDLHVGQUFzQixDQUFDLEtBQUtuQixNQUFOLENBQXRCO01BQ0g7SUFDSjs7SUFFRCxJQUFJTyxVQUFVLENBQUNTLE1BQWYsRUFBdUI7TUFDbkIsS0FBS2UsdUJBQUwsQ0FBNkJ4QixVQUE3QjtJQUNIOztJQUVELElBQUlDLGtCQUFrQixDQUFDUSxNQUF2QixFQUErQjtNQUMzQixLQUFLZ0IsK0JBQUwsQ0FBcUN4QixrQkFBckM7SUFDSDs7SUFFRCxJQUFJQyxrQkFBa0IsQ0FBQ08sTUFBdkIsRUFBK0I7TUFDM0IsS0FBS2lCLCtCQUFMLENBQXFDeEIsa0JBQXJDO0lBQ0g7O0lBRUQsSUFBSUMsWUFBWSxDQUFDTSxNQUFqQixFQUF5QjtNQUNyQixLQUFLa0IsZUFBTCxDQUFxQnhCLFlBQXJCO0lBQ0g7O0lBRUQsS0FBS3lCLGlCQUFMO0lBQ0EsS0FBS0MsdUJBQUw7RUFDSDtFQUVEO0FBQ0o7QUFDQTs7O1NBQ0lELGlCLEdBQUEsNkJBQW9CO0lBQ2hCbEMsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJtQixFQUEzQixDQUE4QixRQUE5QixFQUF3QyxVQUFBaUIsS0FBSyxFQUFJO01BQzdDLElBQU1DLE9BQU8sR0FBR3JDLENBQUMsQ0FBQ29DLEtBQUssQ0FBQ0UsYUFBUCxDQUFELENBQXVCWCxJQUF2QixDQUE0QixlQUE1QixDQUFoQjs7TUFFQSxJQUFJLENBQUNOLE1BQU0sQ0FBQ2tCLE9BQVAsQ0FBZUYsT0FBZixDQUFMLEVBQThCO1FBQzFCRCxLQUFLLENBQUNJLGNBQU47TUFDSDtJQUNKLENBTkQ7RUFPSCxDOztTQUVETCx1QixHQUFBLG1DQUEwQjtJQUN0Qm5DLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDbUIsRUFBbEMsQ0FBcUMsUUFBckMsRUFBK0MsVUFBQWlCLEtBQUssRUFBSTtNQUNwRCxJQUFNQyxPQUFPLEdBQUdyQyxDQUFDLENBQUNvQyxLQUFLLENBQUNFLGFBQVAsQ0FBRCxDQUF1QlgsSUFBdkIsQ0FBNEIscUJBQTVCLENBQWhCOztNQUVBLElBQUksQ0FBQ04sTUFBTSxDQUFDa0IsT0FBUCxDQUFlRixPQUFmLENBQUwsRUFBOEI7UUFDMUJELEtBQUssQ0FBQ0ksY0FBTjtNQUNIO0lBQ0osQ0FORDtFQU9ILEM7O1NBRURQLGUsR0FBQSx5QkFBZ0J4QixZQUFoQixFQUE4QjtJQUFBOztJQUMxQkEsWUFBWSxDQUFDVSxFQUFiLENBQWdCLFFBQWhCLEVBQTBCLFVBQUFpQixLQUFLLEVBQUk7TUFDL0IsSUFBTUsseUJBQXlCLEdBQUd6QyxDQUFDLENBQUMsMENBQUQsQ0FBbkM7TUFDQSxJQUFJMEMsVUFBVSxHQUFHLEtBQWpCO01BRUFqQyxZQUFZLENBQUNrQyxJQUFiLENBQWtCLHVCQUFsQixFQUEyQ0MsTUFBM0M7TUFFQUgseUJBQXlCLENBQUNJLElBQTFCLENBQStCLFVBQUNDLEtBQUQsRUFBUUMsZUFBUixFQUE0QjtRQUN2RCxJQUFNQyxTQUFTLEdBQUdoRCxDQUFDLENBQUMrQyxlQUFELENBQUQsQ0FBbUJFLEdBQW5CLEVBQWxCO1FBQ0EsSUFBTUMsTUFBTSxHQUFHbEQsQ0FBQyxDQUFDLFNBQUQsRUFBWTtVQUN4Qm1ELElBQUksRUFBRSxRQURrQjtVQUV4QkMsSUFBSSxtQkFBaUJKLFNBQWpCLE1BRm9CO1VBR3hCSyxLQUFLLEVBQUU7UUFIaUIsQ0FBWixDQUFoQjtRQU1BWCxVQUFVLEdBQUcsSUFBYjtRQUVBakMsWUFBWSxDQUFDNkMsTUFBYixDQUFvQkosTUFBcEI7TUFDSCxDQVhEOztNQWFBLElBQUksQ0FBQ1IsVUFBTCxFQUFpQjtRQUNiTixLQUFLLENBQUNJLGNBQU47UUFDQWUsNERBQUksQ0FBQ0MsSUFBTCxDQUFVO1VBQ05DLElBQUksRUFBRSxNQUFJLENBQUM3RCxPQUFMLENBQWE4RCxVQURiO1VBRU5DLElBQUksRUFBRTtRQUZBLENBQVY7TUFJSDtJQUNKLENBMUJEO0VBMkJILEM7O1NBRUQ5Qix5QixHQUFBLG1DQUEwQnhCLFlBQTFCLEVBQXdDO0lBQUE7O0lBQ3BDLElBQU11RCxlQUFlLEdBQUdDLHVFQUFVLENBQUN4RCxZQUFELEVBQWUsS0FBS1QsT0FBcEIsQ0FBbEM7SUFDQSxJQUFNa0UsYUFBYSxHQUFHLG1EQUF0QjtJQUNBLElBQU1DLGFBQWEsR0FBRy9ELENBQUMsQ0FBQzhELGFBQUQsQ0FBdkI7SUFDQSxJQUFNRSxnQkFBZ0IsR0FBR0MsMkRBQUcsQ0FBQztNQUN6QkMsTUFBTSxFQUFFLDhDQURpQjtNQUV6QkMsR0FBRyxFQUFFQyxrRkFBeUJBO0lBRkwsQ0FBRCxDQUE1QjtJQUtBSixnQkFBZ0IsQ0FBQ0ssR0FBakIsQ0FBcUJULGVBQXJCOztJQUVBLElBQUlHLGFBQUosRUFBbUI7TUFDZixJQUFJTyxLQUFKLENBRGUsQ0FHZjs7TUFDQUMscUVBQVksQ0FBQ1IsYUFBRCxFQUFnQixLQUFLbkUsT0FBckIsRUFBOEIsVUFBQzRFLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtRQUN0RCxJQUFJRCxHQUFKLEVBQVM7VUFDTCxNQUFNLElBQUlFLEtBQUosQ0FBVUYsR0FBVixDQUFOO1FBQ0g7O1FBRUQsSUFBTUcsTUFBTSxHQUFHM0UsQ0FBQyxDQUFDeUUsS0FBRCxDQUFoQjs7UUFFQSxJQUFJVCxnQkFBZ0IsQ0FBQ1ksU0FBakIsQ0FBMkJiLGFBQTNCLE1BQThDLFdBQWxELEVBQStEO1VBQzNEQyxnQkFBZ0IsQ0FBQ3BCLE1BQWpCLENBQXdCbUIsYUFBeEI7UUFDSDs7UUFFRCxJQUFJTyxLQUFKLEVBQVc7VUFDUE4sZ0JBQWdCLENBQUNwQixNQUFqQixDQUF3QjBCLEtBQXhCO1FBQ0g7O1FBRUQsSUFBSUssTUFBTSxDQUFDMUQsRUFBUCxDQUFVLFFBQVYsQ0FBSixFQUF5QjtVQUNyQnFELEtBQUssR0FBR0csS0FBUjtVQUNBSSxtRUFBVSxDQUFDQyx5QkFBWCxDQUFxQ2QsZ0JBQXJDLEVBQXVEUyxLQUF2RCxFQUE4RCxNQUFJLENBQUM1RSxvQkFBTCxDQUEwQmtGLGVBQXhGO1FBQ0gsQ0FIRCxNQUdPO1VBQ0hGLG1FQUFVLENBQUNHLHNCQUFYLENBQWtDUCxLQUFsQztRQUNIO01BQ0osQ0FyQlcsQ0FBWjtJQXNCSDs7SUFFRHBFLFlBQVksQ0FBQ2MsRUFBYixDQUFnQixRQUFoQixFQUEwQixVQUFBaUIsS0FBSyxFQUFJO01BQy9CNEIsZ0JBQWdCLENBQUNpQixZQUFqQjs7TUFFQSxJQUFJakIsZ0JBQWdCLENBQUNrQixNQUFqQixDQUF3QixPQUF4QixDQUFKLEVBQXNDO1FBQ2xDO01BQ0g7O01BRUQ5QyxLQUFLLENBQUNJLGNBQU47SUFDSCxDQVJEO0VBU0gsQzs7U0FFRFQsK0IsR0FBQSx5Q0FBZ0N4QixrQkFBaEMsRUFBb0Q7SUFDaEQsSUFBTTRFLFlBQVksR0FBRzVFLGtCQUFrQixDQUFDb0IsSUFBbkIsQ0FBd0Isd0JBQXhCLENBQXJCO0lBRUFwQixrQkFBa0IsQ0FBQ1ksRUFBbkIsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBQWlCLEtBQUssRUFBSTtNQUNyQyxJQUFJZ0QsVUFBVSxHQUFHLEtBQWpCLENBRHFDLENBR3JDOztNQUNBcEYsQ0FBQyxDQUFDLHNCQUFELEVBQXlCTyxrQkFBekIsQ0FBRCxDQUE4Q3NDLElBQTlDLENBQW1ELFVBQUN3QyxDQUFELEVBQUlDLEdBQUosRUFBWTtRQUMzRCxJQUFJQyxRQUFRLENBQUN2RixDQUFDLENBQUNzRixHQUFELENBQUQsQ0FBT3JDLEdBQVAsRUFBRCxFQUFlLEVBQWYsQ0FBUixLQUErQixDQUFuQyxFQUFzQztVQUNsQ21DLFVBQVUsR0FBRyxJQUFiLENBRGtDLENBR2xDOztVQUNBLE9BQU8sSUFBUDtRQUNIO01BQ0osQ0FQRDs7TUFTQSxJQUFJQSxVQUFKLEVBQWdCO1FBQ1osT0FBTyxJQUFQO01BQ0g7O01BRUQ3Qiw0REFBSSxDQUFDQyxJQUFMLENBQVU7UUFDTkMsSUFBSSxFQUFFMEIsWUFEQTtRQUVOeEIsSUFBSSxFQUFFO01BRkEsQ0FBVjtNQUtBLE9BQU92QixLQUFLLENBQUNJLGNBQU4sRUFBUDtJQUNILENBdkJEO0VBd0JILEM7O1NBRURSLCtCLEdBQUEseUNBQWdDeEIsa0JBQWhDLEVBQW9EO0lBQUE7O0lBQ2hEO0lBQ0FBLGtCQUFrQixDQUFDbUMsSUFBbkIsQ0FBd0Isd0JBQXhCLEVBQWtENkMsSUFBbEQsQ0FBdUQsaUJBQXZELGdEQUErRyxLQUFLNUYsT0FBTCxDQUFhNkYsY0FBNUg7SUFDQWpGLGtCQUFrQixDQUFDbUMsSUFBbkIsQ0FBd0IsdUJBQXhCLEVBQWlENkMsSUFBakQsQ0FBc0QsaUJBQXRELGdEQUE4RyxLQUFLNUYsT0FBTCxDQUFhOEYsYUFBM0g7SUFDQWxGLGtCQUFrQixDQUFDbUMsSUFBbkIsQ0FBd0IscUJBQXhCLEVBQStDNkMsSUFBL0MsQ0FBb0QsaUJBQXBELGdEQUE0RyxLQUFLNUYsT0FBTCxDQUFhK0YsWUFBekg7SUFDQW5GLGtCQUFrQixDQUFDbUMsSUFBbkIsQ0FBd0IsbUJBQXhCLEVBQTZDNkMsSUFBN0MsQ0FBa0QsaUJBQWxELGdEQUEwRyxLQUFLNUYsT0FBTCxDQUFhZ0csVUFBdkg7SUFDQXBGLGtCQUFrQixDQUFDbUMsSUFBbkIsQ0FBd0Isc0JBQXhCLEVBQWdENkMsSUFBaEQsQ0FBcUQsaUJBQXJELGdEQUE2RyxLQUFLNUYsT0FBTCxDQUFhaUcsYUFBMUg7SUFDQXJGLGtCQUFrQixDQUFDbUMsSUFBbkIsQ0FBd0Isc0JBQXhCLEVBQWdENkMsSUFBaEQsQ0FBcUQsaUJBQXJELGdEQUE2RyxLQUFLNUYsT0FBTCxDQUFha0csYUFBMUg7SUFDQXRGLGtCQUFrQixDQUFDbUMsSUFBbkIsQ0FBd0Isa0JBQXhCLEVBQTRDNkMsSUFBNUMsQ0FBaUQsaUJBQWpELGdEQUF5RyxLQUFLNUYsT0FBTCxDQUFhbUcsU0FBdEg7SUFDQXZGLGtCQUFrQixDQUFDbUMsSUFBbkIsQ0FBd0IscUJBQXhCLEVBQStDNkMsSUFBL0MsQ0FBb0QsaUJBQXBELGtEQUE4RyxLQUFLNUYsT0FBTCxDQUFhb0csWUFBM0gsMENBQXdLLEtBQUtwRyxPQUFMLENBQWFxRyxrQkFBckw7SUFDQXpGLGtCQUFrQixDQUFDbUMsSUFBbkIsQ0FBd0IsbUJBQXhCLEVBQTZDNkMsSUFBN0MsQ0FBa0QsaUJBQWxELGdEQUEwRyxLQUFLNUYsT0FBTCxDQUFhc0csVUFBdkg7SUFDQTFGLGtCQUFrQixDQUFDbUMsSUFBbkIsQ0FBd0IseUJBQXhCLEVBQW1ENkMsSUFBbkQsQ0FBd0QsaUJBQXhELGdEQUFnSCxLQUFLNUYsT0FBTCxDQUFhdUcsZUFBN0g7SUFFQSxJQUFNdkMsZUFBZSxHQUFHQyx1RUFBVSxDQUFDckQsa0JBQUQsRUFBcUIsS0FBS1osT0FBMUIsQ0FBbEM7SUFDQSxJQUFNd0cscUJBQXFCLEdBQUcsZ0NBQTlCO0lBQ0EsSUFBTUMsc0JBQXNCLEdBQUdwQywyREFBRyxDQUFDO01BQy9CQyxNQUFNLEVBQUtrQyxxQkFBTCw0QkFEeUI7TUFFL0JqQyxHQUFHLEVBQUVDLGtGQUF5QkE7SUFGQyxDQUFELENBQWxDO0lBSUEsSUFBTUwsYUFBYSxHQUFHL0QsQ0FBQyxDQUFJb0cscUJBQUosa0NBQXZCO0lBRUEsSUFBSTlCLEtBQUosQ0FyQmdELENBc0JoRDs7SUFDQUMscUVBQVksQ0FBQ1IsYUFBRCxFQUFnQixLQUFLbkUsT0FBckIsRUFBOEIsVUFBQzRFLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtNQUN0RCxJQUFJRCxHQUFKLEVBQVM7UUFDTCxNQUFNLElBQUlFLEtBQUosQ0FBVUYsR0FBVixDQUFOO01BQ0g7O01BRUQsSUFBTUcsTUFBTSxHQUFHM0UsQ0FBQyxDQUFDeUUsS0FBRCxDQUFoQjs7TUFFQSxJQUFJNEIsc0JBQXNCLENBQUN6QixTQUF2QixDQUFpQ2IsYUFBakMsTUFBb0QsV0FBeEQsRUFBcUU7UUFDakVzQyxzQkFBc0IsQ0FBQ3pELE1BQXZCLENBQThCbUIsYUFBOUI7TUFDSDs7TUFFRCxJQUFJTyxLQUFKLEVBQVc7UUFDUCtCLHNCQUFzQixDQUFDekQsTUFBdkIsQ0FBOEIwQixLQUE5QjtNQUNIOztNQUVELElBQUlLLE1BQU0sQ0FBQzFELEVBQVAsQ0FBVSxRQUFWLENBQUosRUFBeUI7UUFDckJxRCxLQUFLLEdBQUdHLEtBQVI7UUFDQUksbUVBQVUsQ0FBQ0MseUJBQVgsQ0FBcUN1QixzQkFBckMsRUFBNkQ1QixLQUE3RCxFQUFvRSxNQUFJLENBQUM1RSxvQkFBTCxDQUEwQmtGLGVBQTlGO01BQ0gsQ0FIRCxNQUdPO1FBQ0hGLG1FQUFVLENBQUNHLHNCQUFYLENBQWtDUCxLQUFsQztNQUNIO0lBQ0osQ0FyQlcsQ0FBWixDQXZCZ0QsQ0E4Q2hEOztJQUNBLElBQUk2QixRQUFKO0lBQ0F0RyxDQUFDLENBQUlvRyxxQkFBSix5Q0FBRCxDQUErRGpGLEVBQS9ELENBQWtFLE9BQWxFLEVBQTJFLGdCQUFnQjtNQUFBLElBQWJvRixNQUFhLFFBQWJBLE1BQWE7TUFDdkZELFFBQVEsR0FBR0UsNkVBQWMsQ0FBQ0QsTUFBTSxDQUFDbEQsS0FBUixDQUF6Qjs7TUFDQSxJQUFJaUQsUUFBSixFQUFjO1FBQ1Z0RyxDQUFDLENBQUlvRyxxQkFBSixtQkFBc0NFLFFBQXRDLFNBQUQsQ0FBcURHLFFBQXJELEdBQWdFQyxHQUFoRSxDQUFvRSxTQUFwRSxFQUErRSxJQUEvRTtNQUNILENBRkQsTUFFTztRQUNIMUcsQ0FBQyxDQUFJb0cscUJBQUosVUFBRCxDQUFrQ00sR0FBbEMsQ0FBc0MsU0FBdEMsRUFBaUQsR0FBakQ7TUFDSDtJQUNKLENBUEQsRUFoRGdELENBeURoRDs7SUFDQUMsaUVBQVksQ0FBQ0MsNkJBQWIsQ0FBMkNQLHNCQUEzQyxFQUFzRUQscUJBQXRFLDBDQUFnSSxLQUFLeEcsT0FBTCxDQUFhaUgsZ0JBQTdJO0lBQ0FGLGlFQUFZLENBQUNHLHVCQUFiLENBQXFDVCxzQkFBckMsRUFBZ0VELHFCQUFoRSxrQ0FBa0gsS0FBS3hHLE9BQUwsQ0FBYW1ILFVBQS9IO0lBQ0FKLGlFQUFZLENBQUNLLHVCQUFiLENBQXFDWCxzQkFBckMsRUFBZ0VELHFCQUFoRSxvQ0FBb0gsS0FBS3hHLE9BQUwsQ0FBYXFILFVBQWpJO0lBQ0FOLGlFQUFZLENBQUNPLGdCQUFiLENBQThCYixzQkFBOUIsRUFBeURELHFCQUF6RCwyQkFBb0csS0FBS3hHLE9BQUwsQ0FBYXVILEdBQWpILEVBQXNIO01BQUEsT0FBTWIsUUFBTjtJQUFBLENBQXRILEVBN0RnRCxDQStEaEQ7O0lBQ0FjLGlFQUFZLENBQUNDLHlCQUFiLENBQTBDakIscUJBQTFDO0lBQ0FnQixpRUFBWSxDQUFDRSxtQkFBYixDQUFvQ2xCLHFCQUFwQyxrQ0FqRWdELENBbUVoRDs7SUFDQUMsc0JBQXNCLENBQUNoQyxHQUF2QixDQUEyQlQsZUFBM0I7SUFFQXBELGtCQUFrQixDQUFDVyxFQUFuQixDQUFzQixRQUF0QixFQUFnQyxVQUFBaUIsS0FBSyxFQUFJO01BQ3JDQSxLQUFLLENBQUNJLGNBQU4sR0FEcUMsQ0FFckM7O01BQ0E2RCxzQkFBc0IsQ0FBQ3BCLFlBQXZCOztNQUNBLElBQUlvQixzQkFBc0IsQ0FBQ25CLE1BQXZCLENBQThCLE9BQTlCLENBQUosRUFBNEM7UUFDeEM7UUFDQSxJQUFNdkQsSUFBSSxHQUFHLHFEQUFTbkIsa0JBQWtCLENBQUMrRyxjQUFuQixFQUFULEVBQThDLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO1VBQ3RFLElBQU1DLE1BQU0sR0FBR0YsR0FBZjtVQUNBRSxNQUFNLENBQUNELElBQUksQ0FBQ3JFLElBQU4sQ0FBTixHQUFvQnFFLElBQUksQ0FBQ3BFLEtBQXpCO1VBQ0EsT0FBT3FFLE1BQVA7UUFDSCxDQUpZLEVBSVYsRUFKVSxDQUFiLENBRndDLENBUXhDOzs7UUFDQSxJQUFNQyxPQUFPLEdBQUcsbURBQU8sTUFBSSxDQUFDL0gsT0FBTCxDQUFhZ0ksU0FBcEIsRUFBK0I7VUFBQSxJQUFHdkUsS0FBSCxTQUFHQSxLQUFIO1VBQUEsT0FBZUEsS0FBSyxLQUFLMUIsSUFBSSxDQUFDZ0csT0FBOUI7UUFBQSxDQUEvQixDQUFoQjs7UUFDQSxJQUFNRSxLQUFLLEdBQUdGLE9BQU8sSUFBSSxtREFBT0EsT0FBTyxDQUFDRyxNQUFmLEVBQXVCO1VBQUEsSUFBR3pFLEtBQUgsU0FBR0EsS0FBSDtVQUFBLE9BQWVBLEtBQUssS0FBSzFCLElBQUksQ0FBQ2tHLEtBQTlCO1FBQUEsQ0FBdkIsQ0FBekI7O1FBQ0FsRyxJQUFJLENBQUNvRyxZQUFMLEdBQW9CSixPQUFPLEdBQUdBLE9BQU8sQ0FBQ0ssSUFBWCxHQUFrQnJHLElBQUksQ0FBQ2dHLE9BQWxEO1FBQ0FoRyxJQUFJLENBQUNzRyxzQkFBTCxHQUE4QkosS0FBSyxHQUFHQSxLQUFLLENBQUNHLElBQVQsR0FBZ0JyRyxJQUFJLENBQUNrRyxLQUF4RCxDQVp3QyxDQWN4Qzs7UUFDQWxHLElBQUksQ0FBQ3VHLGtCQUFMLEdBQTBCLENBQUMsQ0FBQ3ZHLElBQUksQ0FBQ3VHLGtCQUFqQyxDQWZ3QyxDQWlCeEM7O1FBQ0FDLDhFQUFlLENBQUMsTUFBSSxDQUFDdkksT0FBTixFQUFlK0IsSUFBZixFQUFxQixZQUFNO1VBQ3RDTixNQUFNLENBQUMrRyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixNQUFJLENBQUN6SSxPQUFMLENBQWEwSSxpQkFBcEM7UUFDSCxDQUZjLEVBRVosWUFBTTtVQUNML0UsNERBQUksQ0FBQ0MsSUFBTCxDQUFVO1lBQ05DLElBQUksRUFBRSxNQUFJLENBQUM3RCxPQUFMLENBQWEySSxhQURiO1lBRU41RSxJQUFJLEVBQUU7VUFGQSxDQUFWO1FBSUgsQ0FQYyxDQUFmO01BUUg7SUFDSixDQS9CRDtFQWdDSCxDOztTQUVEM0MsNkIsR0FBQSx1Q0FBOEJiLGdCQUE5QixFQUFnRDtJQUM1QyxJQUFNeUQsZUFBZSxHQUFHQyx1RUFBVSxDQUFDMUQsZ0JBQUQsRUFBbUIsS0FBS1AsT0FBeEIsQ0FBbEM7SUFDQSxJQUFNNEksZ0JBQWdCLEdBQUcsOEJBQXpCO0lBQ0EsSUFBTUMsYUFBYSxHQUFHeEUsMkRBQUcsQ0FBQztNQUN0QkMsTUFBTSxFQUFFLDBDQURjO01BRXRCQyxHQUFHLEVBQUVDLGtGQUF5QkE7SUFGUixDQUFELENBQXpCO0lBSUEsSUFBTXNFLGFBQWEsR0FBTUYsZ0JBQU4sd0NBQW5CO0lBQ0EsSUFBTUcsYUFBYSxHQUFHM0ksQ0FBQyxDQUFDMEksYUFBRCxDQUF2QjtJQUNBLElBQU1FLGdCQUFnQixHQUFNSixnQkFBTixvQ0FBdEI7SUFDQSxJQUFNSyxnQkFBZ0IsR0FBRzdJLENBQUMsQ0FBQzRJLGdCQUFELENBQTFCO0lBQ0EsSUFBTUUsaUJBQWlCLEdBQU1OLGdCQUFOLDJDQUF2QjtJQUNBLElBQU1PLGlCQUFpQixHQUFHL0ksQ0FBQyxDQUFDOEksaUJBQUQsQ0FBM0I7SUFDQSxJQUFNRSx1QkFBdUIsR0FBTVIsZ0JBQU4sMkNBQTdCO0lBQ0EsSUFBTVMsZ0JBQWdCLEdBQUdqSixDQUFDLENBQUNnSix1QkFBRCxDQUExQixDQWQ0QyxDQWdCNUM7O0lBQ0FQLGFBQWEsQ0FBQ3BFLEdBQWQsQ0FBa0JULGVBQWxCOztJQUVBLElBQUkrRSxhQUFKLEVBQW1CO01BQ2ZGLGFBQWEsQ0FBQzdGLE1BQWQsQ0FBcUI4RixhQUFyQjtNQUNBN0QsbUVBQVUsQ0FBQ3FFLGtCQUFYLENBQThCVCxhQUE5QixFQUE2Q0MsYUFBN0MsRUFBNEQsS0FBSzdJLG9CQUFMLENBQTBCc0osV0FBdEY7SUFDSDs7SUFFRCxJQUFJTixnQkFBZ0IsSUFBSUUsaUJBQXhCLEVBQTJDO01BQ3ZDLDRCQUFtRSxLQUFLbEosb0JBQXhFO01BQUEsSUFBa0J1SixhQUFsQix5QkFBUUMsUUFBUjtNQUFBLElBQWlEQyxhQUFqRCx5QkFBaUNDLGNBQWpDO01BQ0FkLGFBQWEsQ0FBQzdGLE1BQWQsQ0FBcUJnRyxnQkFBckI7TUFDQUgsYUFBYSxDQUFDN0YsTUFBZCxDQUFxQmtHLGlCQUFyQjtNQUNBakUsbUVBQVUsQ0FBQzJFLHFCQUFYLENBQ0lmLGFBREosRUFFSUcsZ0JBRkosRUFHSUUsaUJBSEosRUFJSSxLQUFLbEksb0JBSlQsRUFLSTZJLHdHQUF1QyxDQUFDTCxhQUFELEVBQWdCQSxhQUFoQixFQUErQkUsYUFBL0IsRUFBOEMsS0FBSzFJLG9CQUFMLENBQTBCOEksS0FBeEUsQ0FMM0MsRUFNSSxJQU5KO0lBUUg7O0lBRUQsSUFBSVQsZ0JBQUosRUFBc0I7TUFDbEJSLGFBQWEsQ0FBQ3BFLEdBQWQsQ0FBa0I7UUFDZHNGLFFBQVEsRUFBRVgsdUJBREk7UUFFZFksUUFBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUs1RyxHQUFMLEVBQWE7VUFDbkIsSUFBSTZHLE1BQU0sR0FBRyxJQUFiOztVQUVBLElBQUk3RyxHQUFHLEtBQUssRUFBUixJQUFjNEYsZ0JBQWdCLENBQUM1RixHQUFqQixPQUEyQixFQUE3QyxFQUFpRDtZQUM3QzZHLE1BQU0sR0FBRyxLQUFUO1VBQ0g7O1VBRURELEVBQUUsQ0FBQ0MsTUFBRCxDQUFGO1FBQ0gsQ0FWYTtRQVdkM0UsWUFBWSxFQUFFLEtBQUt2RixPQUFMLENBQWFtSztNQVhiLENBQWxCO0lBYUg7O0lBRUR0QixhQUFhLENBQUNwRSxHQUFkLENBQWtCLENBQ2Q7TUFDSXNGLFFBQVEsRUFBS25CLGdCQUFMLHFDQURaO01BRUlvQixRQUFRLEVBQUUsa0JBQUNDLEVBQUQsRUFBSzVHLEdBQUwsRUFBYTtRQUNuQixJQUFNNkcsTUFBTSxHQUFHN0csR0FBRyxDQUFDbEMsTUFBbkI7UUFFQThJLEVBQUUsQ0FBQ0MsTUFBRCxDQUFGO01BQ0gsQ0FOTDtNQU9JM0UsWUFBWSxFQUFFLEtBQUt2RixPQUFMLENBQWFvSztJQVAvQixDQURjLEVBVWQ7TUFDSUwsUUFBUSxFQUFLbkIsZ0JBQUwsb0NBRFo7TUFFSW9CLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLNUcsR0FBTCxFQUFhO1FBQ25CLElBQU02RyxNQUFNLEdBQUc3RyxHQUFHLENBQUNsQyxNQUFuQjtRQUVBOEksRUFBRSxDQUFDQyxNQUFELENBQUY7TUFDSCxDQU5MO01BT0kzRSxZQUFZLEVBQUUsS0FBS3ZGLE9BQUwsQ0FBYXFLO0lBUC9CLENBVmMsQ0FBbEI7SUFxQkE5SixnQkFBZ0IsQ0FBQ2dCLEVBQWpCLENBQW9CLFFBQXBCLEVBQThCLFVBQUFpQixLQUFLLEVBQUk7TUFDbkNxRyxhQUFhLENBQUN4RCxZQUFkOztNQUVBLElBQUl3RCxhQUFhLENBQUN2RCxNQUFkLENBQXFCLE9BQXJCLENBQUosRUFBbUM7UUFDL0I7TUFDSDs7TUFFRDlDLEtBQUssQ0FBQ0ksY0FBTjtJQUNILENBUkQ7RUFTSCxDOztTQUVEVix1QixHQUFBLGlDQUF3QnhCLFVBQXhCLEVBQW9DO0lBQ2hDLElBQU00SixjQUFjLEdBQUdqRywyREFBRyxDQUFDO01BQ3ZCQyxNQUFNLEVBQUUsNENBRGU7TUFFdkJDLEdBQUcsRUFBRUMsa0ZBQXlCQTtJQUZQLENBQUQsQ0FBMUI7SUFLQThGLGNBQWMsQ0FBQzdGLEdBQWYsQ0FBbUIsQ0FDZjtNQUNJc0YsUUFBUSxFQUFFLHVEQURkO01BRUlDLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLNUcsR0FBTCxFQUFhO1FBQ25CLElBQU02RyxNQUFNLEdBQUdLLE1BQU0sQ0FBQ2xILEdBQUQsQ0FBTixLQUFnQixDQUEvQjtRQUVBNEcsRUFBRSxDQUFDQyxNQUFELENBQUY7TUFDSCxDQU5MO01BT0kzRSxZQUFZLEVBQUUsS0FBS3ZGLE9BQUwsQ0FBYXdLO0lBUC9CLENBRGUsRUFVZjtNQUNJVCxRQUFRLEVBQUUscURBRGQ7TUFFSUMsUUFBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUs1RyxHQUFMLEVBQWE7UUFDbkIsSUFBTTZHLE1BQU0sR0FBRzdHLEdBQUcsQ0FBQ2xDLE1BQW5CO1FBRUE4SSxFQUFFLENBQUNDLE1BQUQsQ0FBRjtNQUNILENBTkw7TUFPSTNFLFlBQVksRUFBRSxLQUFLdkYsT0FBTCxDQUFheUs7SUFQL0IsQ0FWZSxFQW1CZjtNQUNJVixRQUFRLEVBQUUsd0RBRGQ7TUFFSUMsUUFBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUs1RyxHQUFMLEVBQWE7UUFDbkIsSUFBTTZHLE1BQU0sR0FBRzdHLEdBQUcsQ0FBQ2xDLE1BQW5CO1FBRUE4SSxFQUFFLENBQUNDLE1BQUQsQ0FBRjtNQUNILENBTkw7TUFPSTNFLFlBQVksRUFBRSxLQUFLdkYsT0FBTCxDQUFhMEs7SUFQL0IsQ0FuQmUsQ0FBbkI7SUE4QkFoSyxVQUFVLENBQUNhLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLFVBQUFpQixLQUFLLEVBQUk7TUFDN0I4SCxjQUFjLENBQUNqRixZQUFmOztNQUVBLElBQUlpRixjQUFjLENBQUNoRixNQUFmLENBQXNCLE9BQXRCLENBQUosRUFBb0M7UUFDaEM7TUFDSDs7TUFFRDlDLEtBQUssQ0FBQ0ksY0FBTjtJQUNILENBUkQ7RUFTSCxDOzs7RUFyYmdDK0gscUQ7Ozs7Ozs7Ozs7Ozs7OztBQ2xCckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBaEQsR0FBRyxFQUFJO0VBQzFCLElBQU1FLE1BQU0sR0FBR0YsR0FBZjtFQUVBeEgsQ0FBQyxDQUFDNkMsSUFBRixDQUFPNkUsTUFBUCxFQUFlLFVBQUMrQyxHQUFELEVBQU1wSCxLQUFOLEVBQWdCO0lBQzNCLElBQUlBLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUssRUFBaEMsRUFBb0M7TUFDaEMsT0FBT3FFLE1BQU0sQ0FBQytDLEdBQUQsQ0FBYjtJQUNIO0VBQ0osQ0FKRDtFQU1BLE9BQU8vQyxNQUFQO0FBQ0gsQ0FWRDtBQVlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNbEIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBbkQsS0FBSztFQUFBLE9BQUlxSCxrREFBVyxDQUFDQyxJQUFaLENBQWlCeEgsSUFBakIsQ0FBc0J1SCxrREFBVyxDQUFDQyxJQUFaLENBQWlCQyxLQUFqQixDQUF1QnZILEtBQXZCLENBQXRCLEVBQXFELElBQXJELENBQUo7QUFBQSxDQUE1QjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU04RSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLGNBZ0M1QjBDLElBaEM0QixFQWdDdEJDLElBaENzQixFQWdDYjtFQUFBLElBOUJkQyxXQThCYyxRQTlCZEEsV0E4QmM7RUFBQSxJQTdCZEMsU0E2QmMsUUE3QmRBLFNBNkJjO0VBQUEsSUE1QmRDLFNBNEJjLFFBNUJkQSxTQTRCYztFQUFBLElBM0JkQyxVQTJCYyxRQTNCZEEsVUEyQmM7RUFBQSxJQXZCZEMsV0F1QmMsU0F2QmRBLFdBdUJjO0VBQUEsSUF0QmRDLGFBc0JjLFNBdEJkQSxhQXNCYztFQUFBLElBbkJkQyxrQkFtQmMsU0FuQmRBLGtCQW1CYztFQUFBLElBbEJkdEUsVUFrQmMsU0FsQmRBLFVBa0JjO0VBQUEsSUFqQmR1RSxZQWlCYyxTQWpCZEEsWUFpQmM7RUFBQSxJQWhCZG5FLEdBZ0JjLFNBaEJkQSxHQWdCYztFQUFBLElBZmRlLGtCQWVjLFNBZmRBLGtCQWVjO0VBQUEsSUFaZHFELFFBWWMsU0FaZEEsUUFZYztFQUFBLElBWGRDLFFBV2MsU0FYZEEsUUFXYztFQUFBLElBVmRDLElBVWMsU0FWZEEsSUFVYztFQUFBLElBVGRDLFdBU2MsU0FUZEEsV0FTYztFQUFBLElBUmR6RCxzQkFRYyxTQVJkQSxzQkFRYztFQUFBLElBUGRGLFlBT2MsU0FQZEEsWUFPYztFQUFBLElBTmQ0RCxPQU1jLFNBTmRBLE9BTWM7RUFBQSxJQUxkQyxVQUtjLFNBTGRBLFVBS2M7RUFBQSxJQUpkQyxTQUljLFNBSmRBLFNBSWM7RUFBQSxJQUhkQyxLQUdjLFNBSGRBLEtBR2M7RUFBQSxJQUZkQyxLQUVjLFNBRmRBLEtBRWM7RUFDZCxJQUFNQyxNQUFNLEdBQUdqRixVQUFVLENBQUNrRixLQUFYLENBQWlCLEdBQWpCLENBQWY7RUFFQWpNLENBQUMsQ0FBQ2tNLElBQUYsQ0FBTztJQUNIeEssR0FBRyxFQUFLcUosV0FBTCxnQkFBMkJFLFNBQTNCLG1CQUFrREQsU0FBbEQsd0JBREE7SUFFSG1CLFFBQVEsRUFBRSxNQUZQO0lBR0hDLE1BQU0sRUFBRSxNQUhMO0lBSUhDLEtBQUssRUFBRSxLQUpKO0lBS0hDLE9BQU8sRUFBRTtNQUNMQyxhQUFhLEVBQUVyQixVQURWO01BRUxzQixNQUFNLEVBQUUsNEJBRkg7TUFHTCxnQkFBZ0I7SUFIWCxDQUxOO0lBVUg3SyxJQUFJLEVBQUU4SyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtNQUNqQkMsVUFBVSxFQUFFO1FBQ1J4SixJQUFJLEVBQUUsTUFERTtRQUVSeUosZUFBZSxFQUFFdEIsWUFGVDtRQUdSdUIsTUFBTSxFQUFFbkMsa0RBQVcsQ0FBQ0MsSUFBWixDQUFpQkMsS0FBakIsQ0FBdUJTLGtCQUF2QixDQUhBO1FBSVJ5QixZQUFZLEVBQUVwQyxrREFBVyxDQUFDM0QsVUFBWixDQUF1QmdHLEtBQXZCLENBQTZCbkMsS0FBN0IsQ0FBbUNvQixNQUFNLENBQUMsQ0FBRCxDQUF6QyxDQUpOO1FBS1JnQixXQUFXLEVBQUV0QyxrREFBVyxDQUFDM0QsVUFBWixDQUF1QmtHLElBQXZCLENBQTRCckMsS0FBNUIsQ0FBa0NvQixNQUFNLENBQUMsQ0FBRCxDQUF4QyxFQUE2QyxJQUE3QyxDQUxMO1FBTVJrQixrQkFBa0IsRUFBRS9GO01BTlosQ0FESztNQVNqQmdHLGVBQWUsRUFBRTNDLGNBQWMsQ0FBQztRQUM1QmUsUUFBUSxFQUFSQSxRQUQ0QjtRQUU1QkMsUUFBUSxFQUFSQSxRQUY0QjtRQUc1QkMsSUFBSSxFQUFKQSxJQUg0QjtRQUk1QkMsV0FBVyxFQUFYQSxXQUo0QjtRQUs1QnpELHNCQUFzQixFQUF0QkEsc0JBTDRCO1FBTTVCRixZQUFZLEVBQVpBLFlBTjRCO1FBTzVCNEQsT0FBTyxFQUFQQSxPQVA0QjtRQVE1QkMsVUFBVSxFQUFWQSxVQVI0QjtRQVM1QkMsU0FBUyxFQUFUQSxTQVQ0QjtRQVU1QkMsS0FBSyxFQUFMQSxLQVY0QjtRQVc1QkMsS0FBSyxFQUFMQTtNQVg0QixDQUFELENBVGQ7TUFzQmpCWixXQUFXLEVBQVhBLFdBdEJpQjtNQXVCakJqRCxrQkFBa0IsRUFBbEJBLGtCQXZCaUI7TUF3QmpCa0QsYUFBYSxFQUFiQTtJQXhCaUIsQ0FBZjtFQVZILENBQVAsRUFxQ0tQLElBckNMLENBcUNVQSxJQXJDVixFQXNDS0MsSUF0Q0wsQ0FzQ1VBLElBdENWO0FBdUNILENBMUVNO0FBNEVBLElBQU1zQyxVQUFVLEdBQUc7RUFDdEI7QUFDSjtBQUNBO0FBQ0E7RUFDSS9GLHlCQUF5QixFQUFFLG1DQUFBNUMsS0FBSyxFQUFJO0lBQ2hDLElBQUlBLEtBQUosRUFBVztNQUNQekUsQ0FBQyxDQUFDeUUsS0FBRCxDQUFELENBQVN0RCxFQUFULENBQVksT0FBWixFQUFxQixpQkFBZ0I7UUFBQSxJQUFib0YsTUFBYSxTQUFiQSxNQUFhO1FBQ2pDLElBQU04RyxTQUFTLEdBQUc5RyxNQUFsQjtRQUNBOEcsU0FBUyxDQUFDaEssS0FBVixHQUFrQnFILGtEQUFXLENBQUNDLElBQVosQ0FBaUIyQyxNQUFqQixDQUF3QjVDLGtEQUFXLENBQUNDLElBQVosQ0FBaUJDLEtBQWpCLENBQXVCckUsTUFBTSxDQUFDbEQsS0FBOUIsQ0FBeEIsQ0FBbEI7TUFDSCxDQUhEO0lBSUg7RUFDSixDQVpxQjs7RUFjdEI7QUFDSjtBQUNBO0FBQ0E7RUFDSWlFLG1CQUFtQixFQUFFLDZCQUFBN0MsS0FBSyxFQUFJO0lBQzFCLElBQUlBLEtBQUosRUFBVztNQUNQekUsQ0FBQyxDQUFDeUUsS0FBRCxDQUFELENBQVN0RCxFQUFULENBQVksT0FBWixFQUFxQixpQkFBdUI7UUFBQSxJQUFwQm9GLE1BQW9CLFNBQXBCQSxNQUFvQjtRQUFBLElBQVpnSCxLQUFZLFNBQVpBLEtBQVk7UUFDeEMsSUFBTUYsU0FBUyxHQUFHOUcsTUFBbEI7O1FBQ0EsSUFBSWdILEtBQUssS0FBSyxDQUFWLElBQWUsVUFBVUMsSUFBVixDQUFlakgsTUFBTSxDQUFDbEQsS0FBdEIsQ0FBbkIsRUFBaUQ7VUFDN0NnSyxTQUFTLENBQUNoSyxLQUFWLEdBQWtCa0QsTUFBTSxDQUFDbEQsS0FBUCxDQUFhb0ssS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUFDLENBQXZCLENBQWxCO1FBQ0gsQ0FGRCxNQUVPLElBQUlsSCxNQUFNLENBQUNsRCxLQUFQLENBQWF0QyxNQUFiLEdBQXNCLENBQTFCLEVBQTZCO1VBQ2hDc00sU0FBUyxDQUFDaEssS0FBVixHQUFrQmtELE1BQU0sQ0FBQ2xELEtBQVAsQ0FBYW9LLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBbEI7UUFDSCxDQUZNLE1BRUEsSUFBSUYsS0FBSyxLQUFLLENBQWQsRUFBaUI7VUFDcEJGLFNBQVMsQ0FBQ2hLLEtBQVYsR0FBa0JrRCxNQUFNLENBQUNsRCxLQUFQLENBQ2JxSyxPQURhLENBQ0wsb0JBREssRUFDaUIsTUFEakIsRUFFYkEsT0FGYSxDQUVMLG9CQUZLLEVBRWlCLEtBRmpCLEVBR2JBLE9BSGEsQ0FHTCxtQkFISyxFQUdnQixRQUhoQixFQUliQSxPQUphLENBSUwsOEJBSkssRUFJMkIsT0FKM0IsRUFLYkEsT0FMYSxDQUtMLGtCQUxLLEVBS2UsR0FMZixFQU1iQSxPQU5hLENBTUwsa0JBTkssRUFNZSxFQU5mLEVBT2JBLE9BUGEsQ0FPTCxPQVBLLEVBT0ksR0FQSixDQUFsQjtRQVFIO01BQ0osQ0FoQkQ7SUFpQkg7RUFDSjtBQXRDcUIsQ0FBbkI7QUF5Q0EsSUFBTTdJLFVBQVUsR0FBRztFQUN0QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSStCLDZCQUE2QixFQUFFLHVDQUFDK0csU0FBRCxFQUFZbEosS0FBWixFQUFtQlUsWUFBbkIsRUFBb0M7SUFDL0QsSUFBSVYsS0FBSixFQUFXO01BQ1BrSixTQUFTLENBQUN0SixHQUFWLENBQWM7UUFDVnNGLFFBQVEsRUFBRWxGLEtBREE7UUFFVm1GLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLNUcsR0FBTCxFQUFhO1VBQ25CLElBQU02RyxNQUFNLEdBQUc3RyxHQUFHLENBQUNsQyxNQUFKLElBQWMySixrREFBVyxDQUFDQyxJQUFaLENBQWlCaUQsT0FBakIsQ0FBeUJsRCxrREFBVyxDQUFDQyxJQUFaLENBQWlCQyxLQUFqQixDQUF1QjNILEdBQXZCLENBQXpCLENBQTdCO1VBRUE0RyxFQUFFLENBQUNDLE1BQUQsQ0FBRjtRQUNILENBTlM7UUFPVjNFLFlBQVksRUFBWkE7TUFQVSxDQUFkO0lBU0g7RUFDSixDQW5CcUI7O0VBcUJ0QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSTJCLHVCQUF1QixFQUFFLGlDQUFDNkcsU0FBRCxFQUFZbEosS0FBWixFQUFtQlUsWUFBbkIsRUFBb0M7SUFDekQsSUFBSVYsS0FBSixFQUFXO01BQ1BrSixTQUFTLENBQUN0SixHQUFWLENBQWM7UUFDVnNGLFFBQVEsRUFBRWxGLEtBREE7UUFFVm1GLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLNUcsR0FBTCxFQUFhO1VBQ25CLElBQU0rSSxNQUFNLEdBQUcvSSxHQUFHLENBQUNnSixLQUFKLENBQVUsR0FBVixDQUFmO1VBQ0EsSUFBSW5DLE1BQU0sR0FBRzdHLEdBQUcsQ0FBQ2xDLE1BQUosSUFBYyxnQ0FBZ0N5TSxJQUFoQyxDQUFxQ3ZLLEdBQXJDLENBQTNCO1VBQ0E2RyxNQUFNLEdBQUdBLE1BQU0sSUFBSSxDQUFDWSxrREFBVyxDQUFDM0QsVUFBWixDQUF1QjhHLE1BQXZCLENBQThCbkQsa0RBQVcsQ0FBQzNELFVBQVosQ0FBdUJnRyxLQUF2QixDQUE2Qm5DLEtBQTdCLENBQW1Db0IsTUFBTSxDQUFDLENBQUQsQ0FBekMsQ0FBOUIsRUFBNkV0QixrREFBVyxDQUFDM0QsVUFBWixDQUF1QmtHLElBQXZCLENBQTRCckMsS0FBNUIsQ0FBa0NvQixNQUFNLENBQUMsQ0FBRCxDQUF4QyxFQUE2QyxJQUE3QyxDQUE3RSxDQUFwQjtVQUVBbkMsRUFBRSxDQUFDQyxNQUFELENBQUY7UUFDSCxDQVJTO1FBU1YzRSxZQUFZLEVBQVpBO01BVFUsQ0FBZDtJQVdIO0VBQ0osQ0F6Q3FCOztFQTJDdEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0k2Qix1QkFBdUIsRUFBRSxpQ0FBQzJHLFNBQUQsRUFBWWxKLEtBQVosRUFBbUJVLFlBQW5CLEVBQW9DO0lBQ3pELElBQUlWLEtBQUosRUFBVztNQUNQa0osU0FBUyxDQUFDdEosR0FBVixDQUFjO1FBQ1ZzRixRQUFRLEVBQUVsRixLQURBO1FBRVZtRixRQUFRLEVBQUUsa0JBQUNDLEVBQUQsRUFBSzVHLEdBQUwsRUFBYTtVQUNuQixJQUFNNkcsTUFBTSxHQUFHLENBQUMsQ0FBQzdHLEdBQUcsQ0FBQ2xDLE1BQXJCO1VBRUE4SSxFQUFFLENBQUNDLE1BQUQsQ0FBRjtRQUNILENBTlM7UUFPVjNFLFlBQVksRUFBWkE7TUFQVSxDQUFkO0lBU0g7RUFDSixDQTdEcUI7O0VBK0R0QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJK0IsZ0JBQWdCLEVBQUUsMEJBQUN5RyxTQUFELEVBQVlsSixLQUFaLEVBQW1CVSxZQUFuQixFQUFpQ21CLFFBQWpDLEVBQThDO0lBQzVELElBQUk3QixLQUFKLEVBQVc7TUFDUGtKLFNBQVMsQ0FBQ3RKLEdBQVYsQ0FBYztRQUNWc0YsUUFBUSxFQUFFbEYsS0FEQTtRQUVWbUYsUUFBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUs1RyxHQUFMLEVBQWE7VUFDbkIsSUFBTUUsSUFBSSxHQUFHLE9BQU9tRCxRQUFQLEtBQW9CLFVBQXBCLEdBQWlDQSxRQUFRLEVBQXpDLEdBQThDQSxRQUEzRDtVQUNBLElBQU13RCxNQUFNLEdBQUc3RyxHQUFHLENBQUNsQyxNQUFKLElBQWMySixrREFBVyxDQUFDb0QsR0FBWixDQUFnQkYsT0FBaEIsQ0FBd0IzSyxHQUF4QixFQUE2QkUsSUFBN0IsQ0FBN0I7VUFFQTBHLEVBQUUsQ0FBQ0MsTUFBRCxDQUFGO1FBQ0gsQ0FQUztRQVFWM0UsWUFBWSxFQUFaQTtNQVJVLENBQWQ7SUFVSDtFQUNKO0FBbkZxQixDQUFuQixDOzs7Ozs7Ozs7Ozs7O0FDckpQO0FBQUE7QUFBQTs7QUFFQSxTQUFTNEksZ0JBQVQsQ0FBMEJDLE9BQTFCLEVBQW1DdkcsSUFBbkMsRUFBeUM7RUFDckMsSUFBTTNFLEtBQUssR0FBR2tMLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnhHLElBQWhCLENBQWQ7O0VBRUEsSUFBSTNFLEtBQUssR0FBRyxDQUFDLENBQWIsRUFBZ0I7SUFDWmtMLE9BQU8sQ0FBQ0UsTUFBUixDQUFlcEwsS0FBZixFQUFzQixDQUF0QjtFQUNIO0FBQ0o7O0FBRUQsU0FBU3FMLGdCQUFULENBQTBCSCxPQUExQixFQUFtQ3ZHLElBQW5DLEVBQXlDO0VBQ3JDdUcsT0FBTyxDQUFDSSxJQUFSLENBQWEzRyxJQUFiO0FBQ0g7O0FBRUQsU0FBUzRHLGdCQUFULENBQTBCTCxPQUExQixFQUFtQ00sS0FBbkMsRUFBMENDLElBQTFDLEVBQWdEO0VBQzVDLElBQUlQLE9BQU8sQ0FBQ2pOLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7SUFDdEIsSUFBSSxDQUFDdU4sS0FBSyxDQUFDck4sRUFBTixDQUFTLFNBQVQsQ0FBTCxFQUEwQjtNQUN0QnFOLEtBQUssQ0FBQ0UsUUFBTixDQUFlLE1BQWY7SUFDSDs7SUFDREYsS0FBSyxDQUFDOUksSUFBTixDQUFXLE1BQVgsRUFBc0IrSSxJQUFJLENBQUNFLE9BQTNCLFNBQXNDVCxPQUFPLENBQUNVLElBQVIsQ0FBYSxHQUFiLENBQXRDO0lBQ0FKLEtBQUssQ0FBQzNMLElBQU4sQ0FBVyxnQkFBWCxFQUE2QmdNLElBQTdCLENBQWtDWCxPQUFPLENBQUNqTixNQUExQztFQUNILENBTkQsTUFNTztJQUNIdU4sS0FBSyxDQUFDTSxXQUFOLENBQWtCLE1BQWxCO0VBQ0g7QUFDSjs7QUFFYywrRUFBc0M7RUFBQSxJQUExQkMsZ0JBQTBCLFFBQTFCQSxnQkFBMEI7RUFBQSxJQUFSTixJQUFRLFFBQVJBLElBQVE7RUFDakQsSUFBSU8sY0FBYyxHQUFHLEVBQXJCO0VBRUEsSUFBTUMsWUFBWSxHQUFHL08sQ0FBQyxDQUFDLHFCQUFELENBQXRCO0VBRUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW1CLEVBQVYsQ0FBYSxjQUFiLEVBQTZCLFlBQU07SUFDL0IsSUFBTTZOLFFBQVEsR0FBR2hQLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJDLElBQVYsQ0FBZSxvQ0FBZixDQUFqQjtJQUVBbU0sY0FBYyxHQUFHRSxRQUFRLENBQUNqTyxNQUFULEdBQWtCaU8sUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ25NLEtBQUQsRUFBUW9NLE9BQVI7TUFBQSxPQUFvQkEsT0FBTyxDQUFDN0wsS0FBNUI7SUFBQSxDQUFiLEVBQWdEOEwsR0FBaEQsRUFBbEIsR0FBMEUsRUFBM0Y7SUFDQWQsZ0JBQWdCLENBQUNTLGNBQUQsRUFBaUJDLFlBQWpCLEVBQStCUixJQUEvQixDQUFoQjtFQUNILENBTEQ7RUFPQXZPLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW9QLGNBQVYsQ0FBeUIsY0FBekI7RUFFQXBQLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW1CLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLG1CQUF0QixFQUEyQyxVQUFBaUIsS0FBSyxFQUFJO0lBQ2hELElBQU1pTixPQUFPLEdBQUdqTixLQUFLLENBQUNFLGFBQU4sQ0FBb0JlLEtBQXBDO0lBQ0EsSUFBTWlNLG1CQUFtQixHQUFHdFAsQ0FBQyxDQUFDLHFCQUFELENBQTdCOztJQUVBLElBQUlvQyxLQUFLLENBQUNFLGFBQU4sQ0FBb0JpTixPQUF4QixFQUFpQztNQUM3QnBCLGdCQUFnQixDQUFDVyxjQUFELEVBQWlCTyxPQUFqQixDQUFoQjtJQUNILENBRkQsTUFFTztNQUNIdEIsZ0JBQWdCLENBQUNlLGNBQUQsRUFBaUJPLE9BQWpCLENBQWhCO0lBQ0g7O0lBRURoQixnQkFBZ0IsQ0FBQ1MsY0FBRCxFQUFpQlEsbUJBQWpCLEVBQXNDZixJQUF0QyxDQUFoQjtFQUNILENBWEQ7RUFhQXZPLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW1CLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLHFCQUF0QixFQUE2QyxZQUFNO0lBQy9DLElBQU1xTyxvQkFBb0IsR0FBR3hQLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJDLElBQVYsQ0FBZSxvQ0FBZixDQUE3Qjs7SUFFQSxJQUFJNk0sb0JBQW9CLENBQUN6TyxNQUFyQixJQUErQixDQUFuQyxFQUFzQztNQUNsQzBPLDZEQUFjLENBQUNaLGdCQUFELENBQWQ7TUFDQSxPQUFPLEtBQVA7SUFDSDtFQUNKLENBUEQ7QUFRSCxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay45LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi93aXNobGlzdCc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24nO1xuaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCB7XG4gICAgY2xhc3NpZnlGb3JtLFxuICAgIFZhbGlkYXRvcnMsXG4gICAgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkLFxuICAgIGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCxcbn0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IHsgY3JlZGl0Q2FyZFR5cGUsIHN0b3JlSW5zdHJ1bWVudCwgVmFsaWRhdG9ycyBhcyBDQ1ZhbGlkYXRvcnMsIEZvcm1hdHRlcnMgYXMgQ0NGb3JtYXR0ZXJzIH0gZnJvbSAnLi9jb21tb24vcGF5bWVudC1tZXRob2QnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRlZGl0QWNjb3VudEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFkZHJlc3NGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW5ib3hGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtaW5ib3gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFjY291bnRSZXR1cm5Gb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJldHVybi1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcGF5bWVudE1ldGhvZEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcmVvcmRlckZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmVvcmRlci1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW52b2ljZUJ1dHRvbiA9ICQoJ1tkYXRhLXByaW50LWludm9pY2VdJyk7XG5cbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgLy8gSW5qZWN0ZWQgdmlhIHRlbXBsYXRlXG4gICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMgPSB0aGlzLmNvbnRleHQucGFzc3dvcmRSZXF1aXJlbWVudHM7XG5cbiAgICAgICAgLy8gSW5zdGFudGlhdGVzIHdpc2ggbGlzdCBKU1xuICAgICAgICBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCRlZGl0QWNjb3VudEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGludm9pY2VCdXR0b24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkaW52b2ljZUJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCAvIDIgLSA0NTA7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wID0gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCAvIDIgLSAzMjA7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJGludm9pY2VCdXR0b24uZGF0YSgncHJpbnRJbnZvaWNlJyk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdvcmRlckludm9pY2UnLCBgd2lkdGg9OTAwLGhlaWdodD02NTAsbGVmdD0ke2xlZnR9LHRvcD0ke3RvcH0sc2Nyb2xsYmFycz0xYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWRkcmVzc0Zvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGluYm94Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFjY291bnRSZXR1cm5Gb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHBheW1lbnRNZXRob2RGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHJlb3JkZXJGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZERlbGV0ZUFkZHJlc3MoKTtcbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGEgc3VibWl0IGhvb2sgdG8gZW5zdXJlIHRoZSBjdXN0b21lciByZWNlaXZlcyBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgYmVmb3JlIGRlbGV0aW5nIGFuIGFkZHJlc3NcbiAgICAgKi9cbiAgICBiaW5kRGVsZXRlQWRkcmVzcygpIHtcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLWFkZHJlc3NdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZUFkZHJlc3MnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmREZWxldGVQYXltZW50TWV0aG9kKCkge1xuICAgICAgICAkKCdbZGF0YS1kZWxldGUtcGF5bWVudC1tZXRob2RdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZVBheW1lbnRNZXRob2QnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pIHtcbiAgICAgICAgJHJlb3JkZXJGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzID0gJCgnLmFjY291bnQtbGlzdEl0ZW0gLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSBmYWxzZTtcblxuICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmZpbmQoJ1tuYW1lXj1cInJlb3JkZXJpdGVtXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMuZWFjaCgoaW5kZXgsIHByb2R1Y3RDaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQocHJvZHVjdENoZWNrYm94KS52YWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYHJlb3JkZXJpdGVtWyR7cHJvZHVjdElkfV1gLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAkcmVvcmRlckZvcm0uYXBwZW5kKCRpbnB1dCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdWJtaXRGb3JtKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRleHQuc2VsZWN0SXRlbSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0sIHRoaXMuY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJztcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoc3RhdGVTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkZHJlc3NWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRzdGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihhZGRyZXNzVmFsaWRhdG9yLCBmaWVsZCwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5maWVsZF9ub3RfYmxhbmspO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkYWRkcmVzc0Zvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChhZGRyZXNzVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJGFjY291bnRSZXR1cm5Gb3JtLmRhdGEoJ2FjY291bnRSZXR1cm5Gb3JtRXJyb3InKTtcblxuICAgICAgICAkYWNjb3VudFJldHVybkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtU3VibWl0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgd2UgZmluZCBhIG5vbi16ZXJvIHZhbHVlIGluIHRoZSBkcm9wZG93biBmb3IgcXVhbnRpdHlcbiAgICAgICAgICAgICQoJ1tuYW1lXj1cInJldHVybl9xdHlcIl0nLCAkYWNjb3VudFJldHVybkZvcm0pLmVhY2goKGksIGVsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkKGVsZSkudmFsKCksIDEwKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtU3VibWl0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBFeGl0IG91dCBvZiBsb29wIGlmIHdlIGZvdW5kIGF0IGxlYXN0IG9uZSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmb3JtU3VibWl0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKSB7XG4gICAgICAgIC8vIEluamVjdCB2YWxpZGF0aW9ucyBpbnRvIGZvcm0gZmllbGRzIGJlZm9yZSB2YWxpZGF0aW9uIHJ1bnNcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNmaXJzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5maXJzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNsYXN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0Lmxhc3ROYW1lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY29tcGFueS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY29tcGFueUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwaG9uZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucGhvbmVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczEuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MxTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczIuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MyTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NpdHkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNpdHlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb3VudHJ5LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVzZWxlY3RcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNvdW50cnlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBwcmVmaXg6IFwiJHt0aGlzLmNvbnRleHQuY2hvb3NlQ291bnRyeUxhYmVsfVwiIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNzdGF0ZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuc3RhdGVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwb3N0YWxfY29kZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucG9zdGFsQ29kZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kU2VsZWN0b3IgPSAnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJztcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWAsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXWApO1xuXG4gICAgICAgIGxldCAkbGFzdDtcbiAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgZmllbGQsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuZmllbGRfbm90X2JsYW5rKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXNlIGNyZWRpdCBjYXJkIG51bWJlciBpbnB1dCBsaXN0ZW5lciB0byBoaWdobGlnaHQgY3JlZGl0IGNhcmQgdHlwZVxuICAgICAgICBsZXQgY2FyZFR5cGU7XG4gICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgIGNhcmRUeXBlID0gY3JlZGl0Q2FyZFR5cGUodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChjYXJkVHlwZSkge1xuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdbYWx0PVwiJHtjYXJkVHlwZX1cIl1gKS5zaWJsaW5ncygpLmNzcygnb3BhY2l0eScsICcuMicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nYCkuY3NzKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIHZhbGlkYXRpb25cbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWAsIHRoaXMuY29udGV4dC5jcmVkaXRDYXJkTnVtYmVyKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEV4cGlyYXRpb25WYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cIl1gLCB0aGlzLmNvbnRleHQuZXhwaXJhdGlvbik7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXROYW1lT25DYXJkVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJuYW1lX29uX2NhcmRcIl1gLCB0aGlzLmNvbnRleHQubmFtZU9uQ2FyZCk7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRDdnZWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImN2dlwiXWAsIHRoaXMuY29udGV4dC5jdnYsICgpID0+IGNhcmRUeXBlKTtcblxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgZm9ybWF0XG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApO1xuICAgICAgICBDQ0Zvcm1hdHRlcnMuc2V0RXhwaXJhdGlvbkZvcm1hdChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJdYCk7XG5cbiAgICAgICAgLy8gQmlsbGluZyBhZGRyZXNzIHZhbGlkYXRpb25cbiAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBQZXJmb3JtIGZpbmFsIGZvcm0gdmFsaWRhdGlvblxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBmb3JtIGRhdGEgYW5kIHJlZHVjZSBpdCB0byBvYmplY3RcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gXy5yZWR1Y2UoJHBheW1lbnRNZXRob2RGb3JtLnNlcmlhbGl6ZUFycmF5KCksIChvYmosIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmT2JqID0gb2JqO1xuICAgICAgICAgICAgICAgICAgICByZWZPYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZPYmo7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGNvdW50cnkgYW5kIHN0YXRlIGNvZGVcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5ID0gXy5maW5kKHRoaXMuY29udGV4dC5jb3VudHJpZXMsICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhLmNvdW50cnkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY291bnRyeSAmJiBfLmZpbmQoY291bnRyeS5zdGF0ZXMsICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBkYXRhLmNvdW50cnlfY29kZSA9IGNvdW50cnkgPyBjb3VudHJ5LmNvZGUgOiBkYXRhLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgZGF0YS5zdGF0ZV9vcl9wcm92aW5jZV9jb2RlID0gc3RhdGUgPyBzdGF0ZS5jb2RlIDogZGF0YS5zdGF0ZTtcblxuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgSW5zdHJ1bWVudFxuICAgICAgICAgICAgICAgIGRhdGEuZGVmYXVsdF9pbnN0cnVtZW50ID0gISFkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudDtcblxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGNyZWRpdCBjYXJkXG4gICAgICAgICAgICAgICAgc3RvcmVJbnN0cnVtZW50KHRoaXMuY29udGV4dCwgZGF0YSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuY29udGV4dC5wYXltZW50TWV0aG9kc1VybDtcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRleHQuZ2VuZXJpY19lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgY29uc3QgZm9ybUVkaXRTZWxlY3RvciA9ICdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJztcbiAgICAgICAgY29uc3QgZWRpdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJFbWFpbEFkZHJlc3NcIl1gO1xuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJQYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZEVsZW1lbnQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDb25maXJtUGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQyRWxlbWVudCA9ICQocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBjdXJyZW50UGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDdXJyZW50UGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkY3VycmVudFBhc3N3b3JkID0gJChjdXJyZW50UGFzc3dvcmRTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gVGhpcyBvbmx5IGhhbmRsZXMgdGhlIGN1c3RvbSBmaWVsZHMsIHN0YW5kYXJkIGZpZWxkcyBhcmUgYWRkZWQgYmVsb3dcbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldEVtYWlsVmFsaWRhdGlvbihlZGl0VmFsaWRhdG9yLCBlbWFpbFNlbGVjdG9yLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LnZhbGlkX2VtYWlsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGFzc3dvcmRFbGVtZW50ICYmICRwYXNzd29yZDJFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IHBhc3N3b3JkOiBlbnRlclBhc3N3b3JkLCBwYXNzd29yZF9tYXRjaDogbWF0Y2hQYXNzd29yZCB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgZWRpdFZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMsXG4gICAgICAgICAgICAgICAgY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0KGVudGVyUGFzc3dvcmQsIGVudGVyUGFzc3dvcmQsIG1hdGNoUGFzc3dvcmQsIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMuZXJyb3IpLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRjdXJyZW50UGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogY3VycmVudFBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09ICcnICYmICRwYXNzd29yZEVsZW1lbnQudmFsKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jdXJyZW50UGFzc3dvcmQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9maXJzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZpcnN0TmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfbGFzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0Lmxhc3ROYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGVkaXRBY2NvdW50Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGVkaXRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKSB7XG4gICAgICAgIGNvbnN0IGluYm94VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5ib3hWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBzZWxlY3RbbmFtZT1cIm1lc3NhZ2Vfb3JkZXJfaWRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBOdW1iZXIodmFsKSAhPT0gMDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJPcmRlck51bSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbbmFtZT1cIm1lc3NhZ2Vfc3ViamVjdFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyU3ViamVjdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gdGV4dGFyZWFbbmFtZT1cIm1lc3NhZ2VfY29udGVudFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyTWVzc2FnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRpbmJveEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGluYm94VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoaW5ib3hWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgY3JlZGl0Y2FyZHMgZnJvbSAnY3JlZGl0Y2FyZHMnO1xuXG4vKipcbiAqIE9taXQgbnVsbCBvciBlbXB0eSBzdHJpbmcgcHJvcGVydGllcyBvZiBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmNvbnN0IG9taXROdWxsU3RyaW5nID0gb2JqID0+IHtcbiAgICBjb25zdCByZWZPYmogPSBvYmo7XG5cbiAgICAkLmVhY2gocmVmT2JqLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBkZWxldGUgcmVmT2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZWZPYmo7XG59O1xuXG4vKipcbiAqIEdldCBjcmVkaXQgY2FyZCB0eXBlIGZyb20gY3JlZGl0IGNhcmQgbnVtYmVyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWRpdENhcmRUeXBlID0gdmFsdWUgPT4gY3JlZGl0Y2FyZHMuY2FyZC50eXBlKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsdWUpLCB0cnVlKTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBhamF4IHJlcXVlc3QgdG8gc3RvcmUgYSBuZXcgaW5zdHJ1bWVudCBpbiBiaWdwYXlcbiAqIEBwYXJhbSB7b2JqZWN0fSBSZXByZXNlbnRpbmcgdGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgaGVhZGVyXG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGJvZHlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmUgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZhaWwgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHVuc3VjY2Vzc2Z1bCByZXNwb25zZVxuICovXG5leHBvcnQgY29uc3Qgc3RvcmVJbnN0cnVtZW50ID0gKHtcbiAgICAvLyBIb3N0bmFtZSwgSWRzICYgVG9rZW5cbiAgICBwYXltZW50c1VybCxcbiAgICBzaG9wcGVySWQsXG4gICAgc3RvcmVIYXNoLFxuICAgIHZhdWx0VG9rZW4sXG59LCB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAvLyBQcm92aWRlciBJbmZvXG4gICAgcHJvdmlkZXJfaWQsXG4gICAgY3VycmVuY3lfY29kZSxcblxuICAgIC8vIEluc3RydW1lbnQgRGV0YWlsc1xuICAgIGNyZWRpdF9jYXJkX251bWJlcixcbiAgICBleHBpcmF0aW9uLFxuICAgIG5hbWVfb25fY2FyZCxcbiAgICBjdnYsXG4gICAgZGVmYXVsdF9pbnN0cnVtZW50LFxuXG4gICAgLy8gQmlsbGluZyBBZGRyZXNzXG4gICAgYWRkcmVzczEsXG4gICAgYWRkcmVzczIsXG4gICAgY2l0eSxcbiAgICBwb3N0YWxfY29kZSxcbiAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxuICAgIGNvdW50cnlfY29kZSxcbiAgICBjb21wYW55LFxuICAgIGZpcnN0X25hbWUsXG4gICAgbGFzdF9uYW1lLFxuICAgIGVtYWlsLFxuICAgIHBob25lLFxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cbn0sIGRvbmUsIGZhaWwpID0+IHtcbiAgICBjb25zdCBleHBpcnkgPSBleHBpcmF0aW9uLnNwbGl0KCcvJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGAke3BheW1lbnRzVXJsfS9zdG9yZXMvJHtzdG9yZUhhc2h9L2N1c3RvbWVycy8ke3Nob3BwZXJJZH0vc3RvcmVkX2luc3RydW1lbnRzYCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdmF1bHRUb2tlbixcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpbnN0cnVtZW50OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NhcmQnLFxuICAgICAgICAgICAgICAgIGNhcmRob2xkZXJfbmFtZTogbmFtZV9vbl9jYXJkLFxuICAgICAgICAgICAgICAgIG51bWJlcjogY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZShjcmVkaXRfY2FyZF9udW1iZXIpLFxuICAgICAgICAgICAgICAgIGV4cGlyeV9tb250aDogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLFxuICAgICAgICAgICAgICAgIGV4cGlyeV95ZWFyOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSxcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25fdmFsdWU6IGN2dixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaWxsaW5nX2FkZHJlc3M6IG9taXROdWxsU3RyaW5nKHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzMSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzMixcbiAgICAgICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgICAgIHBvc3RhbF9jb2RlLFxuICAgICAgICAgICAgICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXG4gICAgICAgICAgICAgICAgY291bnRyeV9jb2RlLFxuICAgICAgICAgICAgICAgIGNvbXBhbnksXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGhvbmUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHByb3ZpZGVyX2lkLFxuICAgICAgICAgICAgZGVmYXVsdF9pbnN0cnVtZW50LFxuICAgICAgICAgICAgY3VycmVuY3lfY29kZSxcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICAgICAgLmRvbmUoZG9uZSlcbiAgICAgICAgLmZhaWwoZmFpbCk7XG59O1xuXG5leHBvcnQgY29uc3QgRm9ybWF0dGVycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0OiBmaWVsZCA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gY3JlZGl0Y2FyZHMuY2FyZC5mb3JtYXQoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh0YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGV4cGlyYXRpb24gZGF0ZVxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldEV4cGlyYXRpb25Gb3JtYXQ6IGZpZWxkID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQsIHdoaWNoIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHdoaWNoID09PSA4ICYmIC8uKihcXC8pJC8udGVzdCh0YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQudmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgNSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aGljaCAhPT0gOCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFsxLTldXFwvfFsyLTldKSQvZywgJzAkMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkkL2csICckMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzAtMV0pKFszLTldKSQvZywgJzAkMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKShbMC05XXsyfSkkL2csICckMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMF0rKVxcL3xbMF0rJC9nLCAnMCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXGRcXC9dfF5bXFwvXSokL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmNhcmQuaXNWYWxpZChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgZXhwaXJhdGlvbiBkYXRlXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJ5ID0gdmFsLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIC9eKDBbMS05XXwxWzAtMl0pXFwvKFswLTldezJ9KSQvLnRlc3QodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmICFjcmVkaXRjYXJkcy5leHBpcmF0aW9uLmlzUGFzdChjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksIGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIG5hbWUgb24gY2FyZFxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0TmFtZU9uQ2FyZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICEhdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGN2dlxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICogQHBhcmFtIHthbnl9IGNhcmRUeXBlIFRoZSBjcmVkaXQgY2FyZCBudW1iZXIgdHlwZVxuICAgICAqL1xuICAgIHNldEN2dlZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UsIGNhcmRUeXBlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIGNhcmRUeXBlID09PSAnZnVuY3Rpb24nID8gY2FyZFR5cGUoKSA6IGNhcmRUeXBlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmN2Yy5pc1ZhbGlkKHZhbCwgdHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG4iLCJpbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJscykge1xuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybHMuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgbm9Db21wYXJlTWVzc2FnZSwgdXJscyB9KSB7XG4gICAgbGV0IGNvbXBhcmVDb3VudGVyID0gW107XG5cbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NvbXBhcmVSZXNldCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBjb21wYXJlQ291bnRlciA9ICRjaGVja2VkLmxlbmd0aCA/ICRjaGVja2VkLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IGVsZW1lbnQudmFsdWUpLmdldCgpIDogW107XG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjb21wYXJlTGluaywgdXJscyk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybHMpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwobm9Db21wYXJlTWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=