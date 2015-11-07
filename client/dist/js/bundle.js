webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(159);

	var _reduxRouter = __webpack_require__(177);

	var _store = __webpack_require__(239);

	var _store2 = _interopRequireDefault(_store);

	var _actionsLogin = __webpack_require__(329);

	var credentials = localStorage.getItem('credentials');

	if (credentials) {
	  var _atob$split = atob(credentials).split(':');

	  var login = _atob$split[0];
	  var senha = _atob$split[1];

	  _store2['default'].dispatch(_actionsLogin.fazerLogin(login, senha));
	}

	_reactDom2['default'].render(_react2['default'].createElement(
	  _reactRedux.Provider,
	  { store: _store2['default'] },
	  _react2['default'].createElement(_reduxRouter.ReduxRouter, null)
	), document.getElementById('root'));

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(166);

	var _reduxThunk = __webpack_require__(328);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxRouter = __webpack_require__(177);

	var _history = __webpack_require__(240);

	var _routes = __webpack_require__(269);

	var _routes2 = _interopRequireDefault(_routes);

	var _reducers = __webpack_require__(326);

	var _reducers2 = _interopRequireDefault(_reducers);

	var finalCreateStore = _redux.compose(_redux.applyMiddleware(_reduxThunk2['default']), _reduxRouter.reduxReactRouter({
	  createHistory: _history.createHistory,
	  routes: _routes2['default']
	}))(_redux.createStore);

	var store = finalCreateStore(_reducers2['default']);

	exports['default'] = store;
	module.exports = exports['default'];

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _containersApp = __webpack_require__(270);

	var _containersApp2 = _interopRequireDefault(_containersApp);

	var _containersCriarConta = __webpack_require__(330);

	var _containersCriarConta2 = _interopRequireDefault(_containersCriarConta);

	var routes = [{ path: '/', component: _containersApp2['default'] }, { path: '/criar-conta', component: _containersCriarConta2['default'] }];

	exports['default'] = routes;
	module.exports = exports['default'];

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(159);

	var _actionsApp = __webpack_require__(271);

	var _actionsLogin = __webpack_require__(329);

	var _componentsHeader = __webpack_require__(272);

	var _componentsHeader2 = _interopRequireDefault(_componentsHeader);

	var _Login = __webpack_require__(277);

	var _Login2 = _interopRequireDefault(_Login);

	__webpack_require__(324);

	var App = (function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, _App);

	    _Component.apply(this, arguments);
	  }

	  App.prototype.handleLoginClick = function handleLoginClick() {
	    this.props.setLoginVisible(true);
	  };

	  App.prototype.handleLogoutClick = function handleLogoutClick() {
	    this.props.fazerLogout();
	  };

	  App.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(_componentsHeader2['default'], {
	        onLoginClick: this.handleLoginClick.bind(this),
	        onLogoutClick: this.handleLogoutClick.bind(this),
	        usuarioLogado: this.props.usuarioLogado
	      }),
	      this.props.loginVisible && _react2['default'].createElement(_Login2['default'], null),
	      _react2['default'].createElement(
	        'div',
	        { className: 'container' },
	        this.props.children
	      )
	    );
	  };

	  _createClass(App, null, [{
	    key: 'propTypes',
	    value: {
	      loginVisible: _react.PropTypes.bool.isRequired
	    },
	    enumerable: true
	  }]);

	  var _App = App;
	  App = _reactRedux.connect(function (state) {
	    return {
	      loginVisible: state.app.loginVisible,
	      usuarioLogado: state.app.usuarioLogado
	    };
	  }, { setLoginVisible: _actionsApp.setLoginVisible, fazerLogout: _actionsLogin.fazerLogout })(App) || App;
	  return App;
	})(_react.Component);

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },

/***/ 271:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.setLoginVisible = setLoginVisible;
	exports.setUsuarioLogado = setUsuarioLogado;
	var APP_SET_LOGIN_VISIBLE = 'APP_SET_LOGIN_VISIBLE';
	exports.APP_SET_LOGIN_VISIBLE = APP_SET_LOGIN_VISIBLE;
	var APP_SET_USUARIO_LOGADO = 'APP_SET_USUARIO_LOGADO';

	exports.APP_SET_USUARIO_LOGADO = APP_SET_USUARIO_LOGADO;

	function setLoginVisible(visible) {
	  return {
	    type: APP_SET_LOGIN_VISIBLE,
	    visible: visible
	  };
	}

	function setUsuarioLogado(usuario) {
	  return {
	    type: APP_SET_USUARIO_LOGADO,
	    usuario: usuario
	  };
	}

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(181);

	__webpack_require__(273);

	var Header = (function (_Component) {
	  _inherits(Header, _Component);

	  function Header() {
	    _classCallCheck(this, Header);

	    _Component.apply(this, arguments);
	  }

	  Header.prototype.handleLoginClick = function handleLoginClick(e) {
	    e.preventDefault();
	    this.props.onLoginClick();
	  };

	  Header.prototype.handleLogoutClick = function handleLogoutClick(e) {
	    e.preventDefault();
	    this.props.onLogoutClick();
	  };

	  Header.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'header',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        null,
	        _react2['default'].createElement('i', { className: 'fa fa-paw' }),
	        ' S.O.S Bicho'
	      ),
	      this.props.usuarioLogado ? this.renderToolbarLogado() : this.renderToolbarDeslogado()
	    );
	  };

	  Header.prototype.renderToolbarLogado = function renderToolbarLogado() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'toolbar' },
	      _react2['default'].createElement(
	        'span',
	        { className: 'usuario' },
	        this.props.usuarioLogado.nome
	      ),
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: '/' },
	        _react2['default'].createElement('i', { className: 'fa fa-home' }),
	        'Página Inicial'
	      ),
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: '/meus-animais' },
	        _react2['default'].createElement('i', { className: 'fa fa-paw' }),
	        'Meus Animais'
	      ),
	      _react2['default'].createElement(
	        'a',
	        { href: '#', onClick: this.handleLogoutClick.bind(this) },
	        _react2['default'].createElement('i', { className: 'fa fa-sign-out' }),
	        'Sair'
	      )
	    );
	  };

	  Header.prototype.renderToolbarDeslogado = function renderToolbarDeslogado() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'toolbar' },
	      _react2['default'].createElement(
	        'a',
	        { href: '#', onClick: this.handleLoginClick.bind(this) },
	        _react2['default'].createElement('i', { className: 'fa fa-sign-in' }),
	        'Entrar'
	      )
	    );
	  };

	  _createClass(Header, null, [{
	    key: 'propTypes',
	    value: {
	      onLoginClick: _react.PropTypes.func.isRequired,
	      onLogoutClick: _react.PropTypes.func.isRequired,
	      usuarioLogado: _react.PropTypes.shape({
	        nome: _react.PropTypes.string
	      })
	    },
	    enumerable: true
	  }]);

	  return Header;
	})(_react.Component);

	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(274);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(276)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Header.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Header.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(275)();
	// imports


	// module
	exports.push([module.id, "header {\n  background-color: #252;\n  padding: 10px 20px;\n  color: #fff;\n  height: 30px; }\n  header h1 {\n    font-size: 2em;\n    float: left; }\n  header .toolbar {\n    float: right; }\n    header .toolbar .usuario {\n      vertical-align: super;\n      margin-right: 30px; }\n    header .toolbar a {\n      color: #fff;\n      text-decoration: none; }\n      header .toolbar a i {\n        font-size: 2em; }\n      header .toolbar a span {\n        vertical-align: super;\n        padding-left: 5px;\n        margin-right: 10px; }\n", ""]);

	// exports


/***/ },

/***/ 275:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(181);

	var _reactRedux = __webpack_require__(159);

	var _reduxForm = __webpack_require__(278);

	var _actionsApp = __webpack_require__(271);

	var _actionsLogin = __webpack_require__(329);

	var _componentsTextBox = __webpack_require__(315);

	var _componentsTextBox2 = _interopRequireDefault(_componentsTextBox);

	var _componentsButton = __webpack_require__(319);

	var _componentsButton2 = _interopRequireDefault(_componentsButton);

	__webpack_require__(322);

	var Login = (function (_Component) {
	  _inherits(Login, _Component);

	  function Login() {
	    _classCallCheck(this, _Login);

	    _Component.apply(this, arguments);
	  }

	  Login.prototype.handleSubmit = function handleSubmit(values, dispatch) {
	    return this.props.fazerLogin(values.login, values.senha);
	  };

	  Login.prototype.handleCloseClick = function handleCloseClick(e) {
	    e.preventDefault();
	    this.props.setLoginVisible(false);
	  };

	  Login.prototype.render = function render() {
	    var _props = this.props;
	    var _props$fields = _props.fields;
	    var login = _props$fields.login;
	    var senha = _props$fields.senha;
	    var handleSubmit = _props.handleSubmit;

	    return _react2['default'].createElement(
	      'form',
	      { className: 'login', onSubmit: handleSubmit(this.handleSubmit.bind(this)) },
	      _react2['default'].createElement(
	        'h2',
	        null,
	        'Login',
	        _react2['default'].createElement(
	          'a',
	          { href: '#', onClick: this.handleCloseClick.bind(this) },
	          _react2['default'].createElement('i', { className: 'fa fa-times' })
	        )
	      ),
	      _react2['default'].createElement(_componentsTextBox2['default'], { label: 'Usuário', field: login, autoFocus: true }),
	      _react2['default'].createElement(_componentsTextBox2['default'], { label: 'Senha', field: senha, type: 'password' }),
	      _react2['default'].createElement(
	        'span',
	        { className: 'error-message' },
	        this.props.error
	      ),
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: '/criar-conta', tabIndex: '-1' },
	        'Criar Conta'
	      ),
	      _react2['default'].createElement(
	        _componentsButton2['default'],
	        { type: 'submit' },
	        'Login'
	      )
	    );
	  };

	  _createClass(Login, null, [{
	    key: 'propTypes',
	    value: {
	      fields: _react.PropTypes.object.isRequired,
	      handleSubmit: _react.PropTypes.func.isRequired
	    },
	    enumerable: true
	  }]);

	  var _Login = Login;
	  Login = _reduxForm.reduxForm({
	    form: 'login',
	    fields: ['login', 'senha']
	  })(Login) || Login;
	  Login = _reactRedux.connect(null, { setLoginVisible: _actionsApp.setLoginVisible, fazerLogin: _actionsLogin.fazerLogin })(Login) || Login;
	  return Login;
	})(_react.Component);

	exports['default'] = Login;
	module.exports = exports['default'];

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.post = post;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isomorphicFetch = __webpack_require__(313);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var basePath = '/api/';

	function post(endpoint, data) {
	  return new Promise(function (resolve, reject) {
	    var headers = {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    };

	    var options = {
	      method: 'POST',
	      headers: headers,
	      body: JSON.stringify(data)
	    };

	    _isomorphicFetch2['default'](basePath + endpoint, options).then(function (response) {
	      if (response.ok) {
	        if (response.status === 200) {
	          response.json().then(resolve);
	        } else {
	          resolve();
	        }
	      } else {
	        if (response.status === 400) {
	          response.json().then(reject);
	        } else {
	          response.text().then(function (error) {
	            return reject({ _error: error });
	          });
	        }
	      }
	    });
	  });
	}

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(316);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(317);

	var TextBox = (function (_Component) {
	  _inherits(TextBox, _Component);

	  function TextBox() {
	    _classCallCheck(this, TextBox);

	    _Component.apply(this, arguments);
	  }

	  TextBox.prototype.render = function render() {
	    var _props = this.props;
	    var label = _props.label;
	    var type = _props.type;
	    var autoFocus = _props.autoFocus;
	    var field = _props.field;

	    return _react2['default'].createElement(
	      'div',
	      { className: 'form-row' },
	      _react2['default'].createElement(
	        'label',
	        { htmlFor: field.name },
	        label
	      ),
	      _react2['default'].createElement('input', _extends({
	        id: field.name,
	        type: type || 'text',
	        autoFocus: autoFocus,
	        className: _classnames2['default']({
	          'invalid': field.touched && field.invalid,
	          'active': field.active
	        })
	      }, field)),
	      field.touched && field.error && _react2['default'].createElement(
	        'span',
	        { className: 'error-message' },
	        field.error
	      )
	    );
	  };

	  _createClass(TextBox, null, [{
	    key: 'propTypes',
	    value: {
	      label: _react.PropTypes.string.isRequired,
	      type: _react.PropTypes.string,
	      autoFocus: _react.PropTypes.bool,
	      field: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return TextBox;
	})(_react.Component);

	exports['default'] = TextBox;
	module.exports = exports['default'];

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(318);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(276)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./TextBox.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./TextBox.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(275)();
	// imports


	// module
	exports.push([module.id, ".form-row {\n  padding: 3px 0px;\n  display: block; }\n  .form-row input {\n    border: solid 1px #333;\n    display: block; }\n    .form-row input.active {\n      background-color: #ffffdd; }\n    .form-row input.invalid {\n      border-color: #f22; }\n  .form-row .error-message {\n    color: #f22;\n    font-size: 0.9em; }\n", ""]);

	// exports


/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(320);

	var Button = (function (_Component) {
	  _inherits(Button, _Component);

	  function Button() {
	    _classCallCheck(this, Button);

	    _Component.apply(this, arguments);
	  }

	  Button.prototype.handleOnClick = function handleOnClick() {
	    if (this.props.onClick) {
	      this.props.onClick();
	    }
	  };

	  Button.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'button',
	      {
	        className: 'button',
	        type: this.props.type || 'button',
	        onClick: this.handleOnClick.bind(this)
	      },
	      this.props.children
	    );
	  };

	  _createClass(Button, null, [{
	    key: 'propTypes',
	    value: {
	      onClick: _react.PropTypes.func,
	      type: _react.PropTypes.string
	    },
	    enumerable: true
	  }]);

	  return Button;
	})(_react.Component);

	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(321);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(276)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Button.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Button.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(275)();
	// imports


	// module
	exports.push([module.id, ".button {\n  border: none;\n  background-color: #252;\n  color: #fff;\n  margin-top: 10px;\n  padding: 4px 10px; }\n  .button:hover {\n    background-color: #3f9e3f; }\n", ""]);

	// exports


/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(323);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(276)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Login.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Login.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(275)();
	// imports


	// module
	exports.push([module.id, ".login {\n  position: fixed;\n  right: 20px;\n  top: 10px;\n  border: solid 1px #333;\n  background-color: #f4f4f4;\n  padding: 10px; }\n  .login h2 {\n    padding-bottom: 10px;\n    width: 100%; }\n    .login h2 a {\n      color: #333;\n      float: right; }\n  .login a {\n    display: block; }\n  .login .error-message {\n    color: #f22;\n    font-size: 0.9em;\n    display: block; }\n", ""]);

	// exports


/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(325);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(276)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./App.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./App.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(275)();
	// imports


	// module
	exports.push([module.id, "html, button, input, select {\n  color: #333;\n  font-family: \"Fira Sans\";\n  font-size: 16px; }\n\ninput:focus, select:focus {\n  outline: none; }\n\nbody, h1, h2, h3, h4, h5, h6, p, ul, li {\n  margin: 0;\n  padding: 0; }\n\n.container {\n  margin: 0 auto;\n  width: 800px; }\n", ""]);

	// exports


/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(166);

	var _reduxRouter = __webpack_require__(177);

	var _reduxForm = __webpack_require__(278);

	var _app = __webpack_require__(327);

	var _app2 = _interopRequireDefault(_app);

	var reducers = _redux.combineReducers({
	  router: _reduxRouter.routerStateReducer,
	  form: _reduxForm.reducer,
	  app: _app2['default']
	});

	exports['default'] = reducers;
	module.exports = exports['default'];

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _actionsApp = __webpack_require__(271);

	var initialState = {
	  loginVisible: false,
	  usuarioLogado: null
	};

	exports['default'] = function (state, action) {
	  if (state === undefined) state = initialState;

	  switch (action.type) {
	    case _actionsApp.APP_SET_LOGIN_VISIBLE:
	      return Object.assign({}, state, {
	        loginVisible: action.visible
	      });
	    case _actionsApp.APP_SET_USUARIO_LOGADO:
	      return Object.assign({}, state, {
	        usuarioLogado: action.usuario
	      });
	    default:
	      return state;
	  }
	};

	module.exports = exports['default'];

/***/ },

/***/ 328:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = thunkMiddleware;

	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;

	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.fazerLogin = fazerLogin;
	exports.fazerLogout = fazerLogout;

	var _reduxRouter = __webpack_require__(177);

	var _modulesApi = __webpack_require__(312);

	var _app = __webpack_require__(271);

	function fazerLogin(login, senha) {
	  return function (dispatch) {
	    return _modulesApi.post('login', { login: login, senha: senha }).then(function (usuario) {
	      localStorage.setItem('credentials', btoa(login + ':' + senha));
	      dispatch(_app.setUsuarioLogado(usuario));
	      dispatch(_app.setLoginVisible(false));
	    });
	  };
	}

	function fazerLogout() {
	  return function (dispatch) {
	    localStorage.removeItem('credentials');
	    dispatch(_app.setUsuarioLogado(null));
	    dispatch(_reduxRouter.pushState(null, '/'));
	  };
	}

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(159);

	var _reduxForm = __webpack_require__(278);

	var _modulesValidate = __webpack_require__(333);

	var _modulesValidate2 = _interopRequireDefault(_modulesValidate);

	var _actionsConta = __webpack_require__(337);

	var _componentsTextBox = __webpack_require__(315);

	var _componentsTextBox2 = _interopRequireDefault(_componentsTextBox);

	var _componentsButton = __webpack_require__(319);

	var _componentsButton2 = _interopRequireDefault(_componentsButton);

	__webpack_require__(331);

	var CriarConta = (function (_Component) {
	  _inherits(CriarConta, _Component);

	  function CriarConta() {
	    _classCallCheck(this, _CriarConta);

	    _Component.apply(this, arguments);
	  }

	  CriarConta.prototype.handleSubmit = function handleSubmit(values, dispatch) {
	    return this.props.criarConta(values);
	  };

	  CriarConta.prototype.render = function render() {
	    var _props = this.props;
	    var _props$fields = _props.fields;
	    var nome = _props$fields.nome;
	    var login = _props$fields.login;
	    var senha = _props$fields.senha;
	    var handleSubmit = _props.handleSubmit;

	    return _react2['default'].createElement(
	      'form',
	      { className: 'criar-conta', onSubmit: handleSubmit(this.handleSubmit.bind(this)) },
	      _react2['default'].createElement(
	        'h2',
	        null,
	        'Criar Conta'
	      ),
	      _react2['default'].createElement(_componentsTextBox2['default'], { label: 'Nome', field: nome, autoFocus: true }),
	      _react2['default'].createElement(_componentsTextBox2['default'], { label: 'Login', field: login }),
	      _react2['default'].createElement(_componentsTextBox2['default'], { label: 'Senha', field: senha, type: 'password' }),
	      _react2['default'].createElement(
	        _componentsButton2['default'],
	        { type: 'submit' },
	        'Criar'
	      )
	    );
	  };

	  _createClass(CriarConta, null, [{
	    key: 'propTypes',
	    value: {
	      fields: _react.PropTypes.object.isRequired,
	      handleSubmit: _react.PropTypes.func.isRequired
	    },
	    enumerable: true
	  }]);

	  var _CriarConta = CriarConta;
	  CriarConta = _reduxForm.reduxForm({
	    form: 'criar-conta',
	    fields: ['nome', 'login', 'senha'],
	    validate: function validate(values) {
	      return _modulesValidate2['default'](values, {
	        nome: { presence: true },
	        login: { presence: true },
	        senha: { presence: true }
	      });
	    }
	  })(CriarConta) || CriarConta;
	  CriarConta = _reactRedux.connect(null, { criarConta: _actionsConta.criarConta })(CriarConta) || CriarConta;
	  return CriarConta;
	})(_react.Component);

	exports['default'] = CriarConta;
	module.exports = exports['default'];

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(332);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(276)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./CriarConta.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./CriarConta.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(275)();
	// imports


	// module
	exports.push([module.id, ".criar-conta {\n  margin: 50px auto;\n  width: 200px; }\n", ""]);

	// exports


/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _validateJs = __webpack_require__(334);

	_validateJs.validate.options = { fullMessages: false };
	_validateJs.validate.validators.presence.options = { message: 'Campo obrigatório.' };

	exports['default'] = function (attributes, constraints) {
	  return _validateJs.validate(attributes, constraints) || {};
	};

	;
	module.exports = exports['default'];

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * validate.js 0.9.0
	 *
	 * (c) 2013-2015 Nicklas Ansman, 2013 Wrapp
	 * Validate.js may be freely distributed under the MIT license.
	 * For all details and documentation:
	 * http://validatejs.org/
	 */

	(function(exports, module, define) {
	  "use strict";

	  // The main function that calls the validators specified by the constraints.
	  // The options are the following:
	  //   - format (string) - An option that controls how the returned value is formatted
	  //     * flat - Returns a flat array of just the error messages
	  //     * grouped - Returns the messages grouped by attribute (default)
	  //     * detailed - Returns an array of the raw validation data
	  //   - fullMessages (boolean) - If `true` (default) the attribute name is prepended to the error.
	  //
	  // Please note that the options are also passed to each validator.
	  var validate = function(attributes, constraints, options) {
	    options = v.extend({}, v.options, options);

	    var results = v.runValidations(attributes, constraints, options)
	      , attr
	      , validator;

	    for (attr in results) {
	      for (validator in results[attr]) {
	        if (v.isPromise(results[attr][validator])) {
	          throw new Error("Use validate.async if you want support for promises");
	        }
	      }
	    }
	    return validate.processValidationResults(results, options);
	  };

	  var v = validate;

	  // Copies over attributes from one or more sources to a single destination.
	  // Very much similar to underscore's extend.
	  // The first argument is the target object and the remaining arguments will be
	  // used as sources.
	  v.extend = function(obj) {
	    [].slice.call(arguments, 1).forEach(function(source) {
	      for (var attr in source) {
	        obj[attr] = source[attr];
	      }
	    });
	    return obj;
	  };

	  v.extend(validate, {
	    // This is the version of the library as a semver.
	    // The toString function will allow it to be coerced into a string
	    version: {
	      major: 0,
	      minor: 9,
	      patch: 0,
	      metadata: null,
	      toString: function() {
	        var version = v.format("%{major}.%{minor}.%{patch}", v.version);
	        if (!v.isEmpty(v.version.metadata)) {
	          version += "+" + v.version.metadata;
	        }
	        return version;
	      }
	    },

	    // Below is the dependencies that are used in validate.js

	    // The constructor of the Promise implementation.
	    // If you are using Q.js, RSVP or any other A+ compatible implementation
	    // override this attribute to be the constructor of that promise.
	    // Since jQuery promises aren't A+ compatible they won't work.
	    Promise: typeof Promise !== "undefined" ? Promise : /* istanbul ignore next */ null,

	    EMPTY_STRING_REGEXP: /^\s*$/,

	    // Runs the validators specified by the constraints object.
	    // Will return an array of the format:
	    //     [{attribute: "<attribute name>", error: "<validation result>"}, ...]
	    runValidations: function(attributes, constraints, options) {
	      var results = []
	        , attr
	        , validatorName
	        , value
	        , validators
	        , validator
	        , validatorOptions
	        , error;

	      if (v.isDomElement(attributes) || v.isJqueryElement(attributes)) {
	        attributes = v.collectFormValues(attributes);
	      }

	      // Loops through each constraints, finds the correct validator and run it.
	      for (attr in constraints) {
	        value = v.getDeepObjectValue(attributes, attr);
	        // This allows the constraints for an attribute to be a function.
	        // The function will be called with the value, attribute name, the complete dict of
	        // attributes as well as the options and constraints passed in.
	        // This is useful when you want to have different
	        // validations depending on the attribute value.
	        validators = v.result(constraints[attr], value, attributes, attr, options, constraints);

	        for (validatorName in validators) {
	          validator = v.validators[validatorName];

	          if (!validator) {
	            error = v.format("Unknown validator %{name}", {name: validatorName});
	            throw new Error(error);
	          }

	          validatorOptions = validators[validatorName];
	          // This allows the options to be a function. The function will be
	          // called with the value, attribute name, the complete dict of
	          // attributes as well as the options and constraints passed in.
	          // This is useful when you want to have different
	          // validations depending on the attribute value.
	          validatorOptions = v.result(validatorOptions, value, attributes, attr, options, constraints);
	          if (!validatorOptions) {
	            continue;
	          }
	          results.push({
	            attribute: attr,
	            value: value,
	            validator: validatorName,
	            globalOptions: options,
	            attributes: attributes,
	            options: validatorOptions,
	            error: validator.call(validator,
	                value,
	                validatorOptions,
	                attr,
	                attributes,
	                options)
	          });
	        }
	      }

	      return results;
	    },

	    // Takes the output from runValidations and converts it to the correct
	    // output format.
	    processValidationResults: function(errors, options) {
	      var attr;

	      errors = v.pruneEmptyErrors(errors, options);
	      errors = v.expandMultipleErrors(errors, options);
	      errors = v.convertErrorMessages(errors, options);

	      switch (options.format || "grouped") {
	        case "detailed":
	          // Do nothing more to the errors
	          break;

	        case "flat":
	          errors = v.flattenErrorsToArray(errors);
	          break;

	        case "grouped":
	          errors = v.groupErrorsByAttribute(errors);
	          for (attr in errors) {
	            errors[attr] = v.flattenErrorsToArray(errors[attr]);
	          }
	          break;

	        default:
	          throw new Error(v.format("Unknown format %{format}", options));
	      }

	      return v.isEmpty(errors) ? undefined : errors;
	    },

	    // Runs the validations with support for promises.
	    // This function will return a promise that is settled when all the
	    // validation promises have been completed.
	    // It can be called even if no validations returned a promise.
	    async: function(attributes, constraints, options) {
	      options = v.extend({}, v.async.options, options);

	      var WrapErrors = options.wrapErrors || function(errors) {
	        return errors;
	      };

	      // Removes unknown attributes
	      if (options.cleanAttributes !== false) {
	        attributes = v.cleanAttributes(attributes, constraints);
	      }

	      var results = v.runValidations(attributes, constraints, options);

	      return new v.Promise(function(resolve, reject) {
	        v.waitForResults(results).then(function() {
	          var errors = v.processValidationResults(results, options);
	          if (errors) {
	            reject(new WrapErrors(errors, options, attributes, constraints));
	          } else {
	            resolve(attributes);
	          }
	        }, function(err) {
	          reject(err);
	        });
	      });
	    },

	    single: function(value, constraints, options) {
	      options = v.extend({}, v.single.options, options, {
	        format: "flat",
	        fullMessages: false
	      });
	      return v({single: value}, {single: constraints}, options);
	    },

	    // Returns a promise that is resolved when all promises in the results array
	    // are settled. The promise returned from this function is always resolved,
	    // never rejected.
	    // This function modifies the input argument, it replaces the promises
	    // with the value returned from the promise.
	    waitForResults: function(results) {
	      // Create a sequence of all the results starting with a resolved promise.
	      return results.reduce(function(memo, result) {
	        // If this result isn't a promise skip it in the sequence.
	        if (!v.isPromise(result.error)) {
	          return memo;
	        }

	        return memo.then(function() {
	          return result.error.then(
	            function(error) {
	              result.error = error || null;
	            },
	            function(error) {
	              if (error instanceof Error) {
	                throw error;
	              }
	              v.error("Rejecting promises with the result is deprecated. Please use the resolve callback instead.");
	              result.error = error;
	            }
	          );
	        });
	      }, new v.Promise(function(r) { r(); })); // A resolved promise
	    },

	    // If the given argument is a call: function the and: function return the value
	    // otherwise just return the value. Additional arguments will be passed as
	    // arguments to the function.
	    // Example:
	    // ```
	    // result('foo') // 'foo'
	    // result(Math.max, 1, 2) // 2
	    // ```
	    result: function(value) {
	      var args = [].slice.call(arguments, 1);
	      if (typeof value === 'function') {
	        value = value.apply(null, args);
	      }
	      return value;
	    },

	    // Checks if the value is a number. This function does not consider NaN a
	    // number like many other `isNumber` functions do.
	    isNumber: function(value) {
	      return typeof value === 'number' && !isNaN(value);
	    },

	    // Returns false if the object is not a function
	    isFunction: function(value) {
	      return typeof value === 'function';
	    },

	    // A simple check to verify that the value is an integer. Uses `isNumber`
	    // and a simple modulo check.
	    isInteger: function(value) {
	      return v.isNumber(value) && value % 1 === 0;
	    },

	    // Uses the `Object` function to check if the given argument is an object.
	    isObject: function(obj) {
	      return obj === Object(obj);
	    },

	    // Simply checks if the object is an instance of a date
	    isDate: function(obj) {
	      return obj instanceof Date;
	    },

	    // Returns false if the object is `null` of `undefined`
	    isDefined: function(obj) {
	      return obj !== null && obj !== undefined;
	    },

	    // Checks if the given argument is a promise. Anything with a `then`
	    // function is considered a promise.
	    isPromise: function(p) {
	      return !!p && v.isFunction(p.then);
	    },

	    isJqueryElement: function(o) {
	      return o && v.isString(o.jquery);
	    },

	    isDomElement: function(o) {
	      if (!o) {
	        return false;
	      }

	      if (!v.isFunction(o.querySelectorAll) || !v.isFunction(o.querySelector)) {
	        return false;
	      }

	      if (v.isObject(document) && o === document) {
	        return true;
	      }

	      // http://stackoverflow.com/a/384380/699304
	      /* istanbul ignore else */
	      if (typeof HTMLElement === "object") {
	        return o instanceof HTMLElement;
	      } else {
	        return o &&
	          typeof o === "object" &&
	          o !== null &&
	          o.nodeType === 1 &&
	          typeof o.nodeName === "string";
	      }
	    },

	    isEmpty: function(value) {
	      var attr;

	      // Null and undefined are empty
	      if (!v.isDefined(value)) {
	        return true;
	      }

	      // functions are non empty
	      if (v.isFunction(value)) {
	        return false;
	      }

	      // Whitespace only strings are empty
	      if (v.isString(value)) {
	        return v.EMPTY_STRING_REGEXP.test(value);
	      }

	      // For arrays we use the length property
	      if (v.isArray(value)) {
	        return value.length === 0;
	      }

	      // Dates have no attributes but aren't empty
	      if (v.isDate(value)) {
	        return false;
	      }

	      // If we find at least one property we consider it non empty
	      if (v.isObject(value)) {
	        for (attr in value) {
	          return false;
	        }
	        return true;
	      }

	      return false;
	    },

	    // Formats the specified strings with the given values like so:
	    // ```
	    // format("Foo: %{foo}", {foo: "bar"}) // "Foo bar"
	    // ```
	    // If you want to write %{...} without having it replaced simply
	    // prefix it with % like this `Foo: %%{foo}` and it will be returned
	    // as `"Foo: %{foo}"`
	    format: v.extend(function(str, vals) {
	      if (!v.isString(str)) {
	        return str;
	      }
	      return str.replace(v.format.FORMAT_REGEXP, function(m0, m1, m2) {
	        if (m1 === '%') {
	          return "%{" + m2 + "}";
	        } else {
	          return String(vals[m2]);
	        }
	      });
	    }, {
	      // Finds %{key} style patterns in the given string
	      FORMAT_REGEXP: /(%?)%\{([^\}]+)\}/g
	    }),

	    // "Prettifies" the given string.
	    // Prettifying means replacing [.\_-] with spaces as well as splitting
	    // camel case words.
	    prettify: function(str) {
	      if (v.isNumber(str)) {
	        // If there are more than 2 decimals round it to two
	        if ((str * 100) % 1 === 0) {
	          return "" + str;
	        } else {
	          return parseFloat(Math.round(str * 100) / 100).toFixed(2);
	        }
	      }

	      if (v.isArray(str)) {
	        return str.map(function(s) { return v.prettify(s); }).join(", ");
	      }

	      if (v.isObject(str)) {
	        return str.toString();
	      }

	      // Ensure the string is actually a string
	      str = "" + str;

	      return str
	        // Splits keys separated by periods
	        .replace(/([^\s])\.([^\s])/g, '$1 $2')
	        // Removes backslashes
	        .replace(/\\+/g, '')
	        // Replaces - and - with space
	        .replace(/[_-]/g, ' ')
	        // Splits camel cased words
	        .replace(/([a-z])([A-Z])/g, function(m0, m1, m2) {
	          return "" + m1 + " " + m2.toLowerCase();
	        })
	        .toLowerCase();
	    },

	    stringifyValue: function(value) {
	      return v.prettify(value);
	    },

	    isString: function(value) {
	      return typeof value === 'string';
	    },

	    isArray: function(value) {
	      return {}.toString.call(value) === '[object Array]';
	    },

	    contains: function(obj, value) {
	      if (!v.isDefined(obj)) {
	        return false;
	      }
	      if (v.isArray(obj)) {
	        return obj.indexOf(value) !== -1;
	      }
	      return value in obj;
	    },

	    forEachKeyInKeypath: function(object, keypath, callback) {
	      if (!v.isString(keypath)) {
	        return undefined;
	      }

	      var key = ""
	        , i
	        , escape = false;

	      for (i = 0; i < keypath.length; ++i) {
	        switch (keypath[i]) {
	          case '.':
	            if (escape) {
	              escape = false;
	              key += '.';
	            } else {
	              object = callback(object, key, false);
	              key = "";
	            }
	            break;

	          case '\\':
	            if (escape) {
	              escape = false;
	              key += '\\';
	            } else {
	              escape = true;
	            }
	            break;

	          default:
	            escape = false;
	            key += keypath[i];
	            break;
	        }
	      }

	      return callback(object, key, true);
	    },

	    getDeepObjectValue: function(obj, keypath) {
	      if (!v.isObject(obj)) {
	        return undefined;
	      }

	      return v.forEachKeyInKeypath(obj, keypath, function(obj, key) {
	        if (v.isObject(obj)) {
	          return obj[key];
	        }
	      });
	    },

	    // This returns an object with all the values of the form.
	    // It uses the input name as key and the value as value
	    // So for example this:
	    // <input type="text" name="email" value="foo@bar.com" />
	    // would return:
	    // {email: "foo@bar.com"}
	    collectFormValues: function(form, options) {
	      var values = {}
	        , i
	        , input
	        , inputs
	        , value;

	      if (v.isJqueryElement(form)) {
	        form = form[0];
	      }

	      if (!form) {
	        return values;
	      }

	      options = options || {};

	      inputs = form.querySelectorAll("input[name], textarea[name]");
	      for (i = 0; i < inputs.length; ++i) {
	        input = inputs.item(i);

	        if (v.isDefined(input.getAttribute("data-ignored"))) {
	          continue;
	        }

	        value = v.sanitizeFormValue(input.value, options);
	        if (input.type === "number") {
	          value = value ? +value : null;
	        } else if (input.type === "checkbox") {
	          if (input.attributes.value) {
	            if (!input.checked) {
	              value = values[input.name] || null;
	            }
	          } else {
	            value = input.checked;
	          }
	        } else if (input.type === "radio") {
	          if (!input.checked) {
	            value = values[input.name] || null;
	          }
	        }
	        values[input.name] = value;
	      }

	      inputs = form.querySelectorAll("select[name]");
	      for (i = 0; i < inputs.length; ++i) {
	        input = inputs.item(i);
	        value = v.sanitizeFormValue(input.options[input.selectedIndex].value, options);
	        values[input.name] = value;
	      }

	      return values;
	    },

	    sanitizeFormValue: function(value, options) {
	      if (options.trim && v.isString(value)) {
	        value = value.trim();
	      }

	      if (options.nullify !== false && value === "") {
	        return null;
	      }
	      return value;
	    },

	    capitalize: function(str) {
	      if (!v.isString(str)) {
	        return str;
	      }
	      return str[0].toUpperCase() + str.slice(1);
	    },

	    // Remove all errors who's error attribute is empty (null or undefined)
	    pruneEmptyErrors: function(errors) {
	      return errors.filter(function(error) {
	        return !v.isEmpty(error.error);
	      });
	    },

	    // In
	    // [{error: ["err1", "err2"], ...}]
	    // Out
	    // [{error: "err1", ...}, {error: "err2", ...}]
	    //
	    // All attributes in an error with multiple messages are duplicated
	    // when expanding the errors.
	    expandMultipleErrors: function(errors) {
	      var ret = [];
	      errors.forEach(function(error) {
	        // Removes errors without a message
	        if (v.isArray(error.error)) {
	          error.error.forEach(function(msg) {
	            ret.push(v.extend({}, error, {error: msg}));
	          });
	        } else {
	          ret.push(error);
	        }
	      });
	      return ret;
	    },

	    // Converts the error mesages by prepending the attribute name unless the
	    // message is prefixed by ^
	    convertErrorMessages: function(errors, options) {
	      options = options || {};

	      var ret = [];
	      errors.forEach(function(errorInfo) {
	        var error = v.result(errorInfo.error,
	            errorInfo.value,
	            errorInfo.attribute,
	            errorInfo.options,
	            errorInfo.attributes,
	            errorInfo.globalOptions);

	        if (!v.isString(error)) {
	          ret.push(errorInfo);
	          return;
	        }

	        if (error[0] === '^') {
	          error = error.slice(1);
	        } else if (options.fullMessages !== false) {
	          error = v.capitalize(v.prettify(errorInfo.attribute)) + " " + error;
	        }
	        error = error.replace(/\\\^/g, "^");
	        error = v.format(error, {value: v.stringifyValue(errorInfo.value)});
	        ret.push(v.extend({}, errorInfo, {error: error}));
	      });
	      return ret;
	    },

	    // In:
	    // [{attribute: "<attributeName>", ...}]
	    // Out:
	    // {"<attributeName>": [{attribute: "<attributeName>", ...}]}
	    groupErrorsByAttribute: function(errors) {
	      var ret = {};
	      errors.forEach(function(error) {
	        var list = ret[error.attribute];
	        if (list) {
	          list.push(error);
	        } else {
	          ret[error.attribute] = [error];
	        }
	      });
	      return ret;
	    },

	    // In:
	    // [{error: "<message 1>", ...}, {error: "<message 2>", ...}]
	    // Out:
	    // ["<message 1>", "<message 2>"]
	    flattenErrorsToArray: function(errors) {
	      return errors.map(function(error) { return error.error; });
	    },

	    cleanAttributes: function(attributes, whitelist) {
	      function whitelistCreator(obj, key, last) {
	        if (v.isObject(obj[key])) {
	          return obj[key];
	        }
	        return (obj[key] = last ? true : {});
	      }

	      function buildObjectWhitelist(whitelist) {
	        var ow = {}
	          , lastObject
	          , attr;
	        for (attr in whitelist) {
	          if (!whitelist[attr]) {
	            continue;
	          }
	          v.forEachKeyInKeypath(ow, attr, whitelistCreator);
	        }
	        return ow;
	      }

	      function cleanRecursive(attributes, whitelist) {
	        if (!v.isObject(attributes)) {
	          return attributes;
	        }

	        var ret = v.extend({}, attributes)
	          , w
	          , attribute;

	        for (attribute in attributes) {
	          w = whitelist[attribute];

	          if (v.isObject(w)) {
	            ret[attribute] = cleanRecursive(ret[attribute], w);
	          } else if (!w) {
	            delete ret[attribute];
	          }
	        }
	        return ret;
	      }

	      if (!v.isObject(whitelist) || !v.isObject(attributes)) {
	        return {};
	      }

	      whitelist = buildObjectWhitelist(whitelist);
	      return cleanRecursive(attributes, whitelist);
	    },

	    exposeModule: function(validate, root, exports, module, define) {
	      if (exports) {
	        if (module && module.exports) {
	          exports = module.exports = validate;
	        }
	        exports.validate = validate;
	      } else {
	        root.validate = validate;
	        if (validate.isFunction(define) && define.amd) {
	          define([], function () { return validate; });
	        }
	      }
	    },

	    warn: function(msg) {
	      if (typeof console !== "undefined" && console.warn) {
	        console.warn("[validate.js] " + msg);
	      }
	    },

	    error: function(msg) {
	      if (typeof console !== "undefined" && console.error) {
	        console.error("[validate.js] " + msg);
	      }
	    }
	  });

	  validate.validators = {
	    // Presence validates that the value isn't empty
	    presence: function(value, options) {
	      options = v.extend({}, this.options, options);
	      if (v.isEmpty(value)) {
	        return options.message || this.message || "can't be blank";
	      }
	    },
	    length: function(value, options, attribute) {
	      // Empty values are allowed
	      if (v.isEmpty(value)) {
	        return;
	      }

	      options = v.extend({}, this.options, options);

	      var is = options.is
	        , maximum = options.maximum
	        , minimum = options.minimum
	        , tokenizer = options.tokenizer || function(val) { return val; }
	        , err
	        , errors = [];

	      value = tokenizer(value);
	      var length = value.length;
	      if(!v.isNumber(length)) {
	        v.error(v.format("Attribute %{attr} has a non numeric value for `length`", {attr: attribute}));
	        return options.message || this.notValid || "has an incorrect length";
	      }

	      // Is checks
	      if (v.isNumber(is) && length !== is) {
	        err = options.wrongLength ||
	          this.wrongLength ||
	          "is the wrong length (should be %{count} characters)";
	        errors.push(v.format(err, {count: is}));
	      }

	      if (v.isNumber(minimum) && length < minimum) {
	        err = options.tooShort ||
	          this.tooShort ||
	          "is too short (minimum is %{count} characters)";
	        errors.push(v.format(err, {count: minimum}));
	      }

	      if (v.isNumber(maximum) && length > maximum) {
	        err = options.tooLong ||
	          this.tooLong ||
	          "is too long (maximum is %{count} characters)";
	        errors.push(v.format(err, {count: maximum}));
	      }

	      if (errors.length > 0) {
	        return options.message || errors;
	      }
	    },
	    numericality: function(value, options) {
	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }

	      options = v.extend({}, this.options, options);

	      var errors = []
	        , name
	        , count
	        , checks = {
	            greaterThan:          function(v, c) { return v > c; },
	            greaterThanOrEqualTo: function(v, c) { return v >= c; },
	            equalTo:              function(v, c) { return v === c; },
	            lessThan:             function(v, c) { return v < c; },
	            lessThanOrEqualTo:    function(v, c) { return v <= c; }
	          };

	      // Coerce the value to a number unless we're being strict.
	      if (options.noStrings !== true && v.isString(value)) {
	        value = +value;
	      }

	      // If it's not a number we shouldn't continue since it will compare it.
	      if (!v.isNumber(value)) {
	        return options.message || options.notValid || this.notValid || "is not a number";
	      }

	      // Same logic as above, sort of. Don't bother with comparisons if this
	      // doesn't pass.
	      if (options.onlyInteger && !v.isInteger(value)) {
	        return options.message || options.notInteger || this.notInteger  || "must be an integer";
	      }

	      for (name in checks) {
	        count = options[name];
	        if (v.isNumber(count) && !checks[name](value, count)) {
	          // This picks the default message if specified
	          // For example the greaterThan check uses the message from
	          // this.notGreaterThan so we capitalize the name and prepend "not"
	          var key = "not" + v.capitalize(name);
	          var msg = options[key] || this[key] || "must be %{type} %{count}";

	          errors.push(v.format(msg, {
	            count: count,
	            type: v.prettify(name)
	          }));
	        }
	      }

	      if (options.odd && value % 2 !== 1) {
	        errors.push(options.notOdd || this.notOdd || "must be odd");
	      }
	      if (options.even && value % 2 !== 0) {
	        errors.push(options.notEven || this.notEven || "must be even");
	      }

	      if (errors.length) {
	        return options.message || errors;
	      }
	    },
	    datetime: v.extend(function(value, options) {
	      if (!v.isFunction(this.parse) || !v.isFunction(this.format)) {
	        throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");
	      }

	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }

	      options = v.extend({}, this.options, options);

	      var err
	        , errors = []
	        , earliest = options.earliest ? this.parse(options.earliest, options) : NaN
	        , latest = options.latest ? this.parse(options.latest, options) : NaN;

	      value = this.parse(value, options);

	      // 86400000 is the number of seconds in a day, this is used to remove
	      // the time from the date
	      if (isNaN(value) || options.dateOnly && value % 86400000 !== 0) {
	        return options.message || this.notValid || "must be a valid date";
	      }

	      if (!isNaN(earliest) && value < earliest) {
	        err = this.tooEarly || "must be no earlier than %{date}";
	        err = v.format(err, {date: this.format(earliest, options)});
	        errors.push(err);
	      }

	      if (!isNaN(latest) && value > latest) {
	        err = this.tooLate || "must be no later than %{date}";
	        err = v.format(err, {date: this.format(latest, options)});
	        errors.push(err);
	      }

	      if (errors.length) {
	        return options.message || errors;
	      }
	    }, {
	      parse: null,
	      format: null
	    }),
	    date: function(value, options) {
	      options = v.extend({}, options, {dateOnly: true});
	      return v.validators.datetime.call(v.validators.datetime, value, options);
	    },
	    format: function(value, options) {
	      if (v.isString(options) || (options instanceof RegExp)) {
	        options = {pattern: options};
	      }

	      options = v.extend({}, this.options, options);

	      var message = options.message || this.message || "is invalid"
	        , pattern = options.pattern
	        , match;

	      // Empty values are allowed
	      if (v.isEmpty(value)) {
	        return;
	      }
	      if (!v.isString(value)) {
	        return message;
	      }

	      if (v.isString(pattern)) {
	        pattern = new RegExp(options.pattern, options.flags);
	      }
	      match = pattern.exec(value);
	      if (!match || match[0].length != value.length) {
	        return message;
	      }
	    },
	    inclusion: function(value, options) {
	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }
	      if (v.isArray(options)) {
	        options = {within: options};
	      }
	      options = v.extend({}, this.options, options);
	      if (v.contains(options.within, value)) {
	        return;
	      }
	      var message = options.message ||
	        this.message ||
	        "^%{value} is not included in the list";
	      return v.format(message, {value: value});
	    },
	    exclusion: function(value, options) {
	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }
	      if (v.isArray(options)) {
	        options = {within: options};
	      }
	      options = v.extend({}, this.options, options);
	      if (!v.contains(options.within, value)) {
	        return;
	      }
	      var message = options.message || this.message || "^%{value} is restricted";
	      return v.format(message, {value: value});
	    },
	    email: v.extend(function(value, options) {
	      options = v.extend({}, this.options, options);
	      var message = options.message || this.message || "is not a valid email";
	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }
	      if (!v.isString(value)) {
	        return message;
	      }
	      if (!this.PATTERN.exec(value)) {
	        return message;
	      }
	    }, {
	      PATTERN: /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i
	    }),
	    equality: function(value, options, attribute, attributes) {
	      if (v.isEmpty(value)) {
	        return;
	      }

	      if (v.isString(options)) {
	        options = {attribute: options};
	      }
	      options = v.extend({}, this.options, options);
	      var message = options.message ||
	        this.message ||
	        "is not equal to %{attribute}";

	      if (v.isEmpty(options.attribute) || !v.isString(options.attribute)) {
	        throw new Error("The attribute must be a non empty string");
	      }

	      var otherValue = v.getDeepObjectValue(attributes, options.attribute)
	        , comparator = options.comparator || function(v1, v2) {
	          return v1 === v2;
	        };

	      if (!comparator(value, otherValue, options, attribute, attributes)) {
	        return v.format(message, {attribute: v.prettify(options.attribute)});
	      }
	    },

	    // A URL validator that is used to validate URLs with the ability to
	    // restrict schemes and some domains.
	    url: function(value, options) {
	      if (v.isEmpty(value)) {
	        return;
	      }

	      options = v.extend({}, this.options, options);

	      var message = options.message || this.message || "is not a valid url"
	        , schemes = options.schemes || this.schemes || ['http', 'https']
	        , allowLocal = options.allowLocal || this.allowLocal || false;

	      if (!v.isString(value)) {
	        return message;
	      }

	      // https://gist.github.com/dperini/729294
	      var regex =
	        "^" +
	          // schemes
	          "(?:(?:" + schemes.join("|") + "):\\/\\/)" +
	          // credentials
	          "(?:\\S+(?::\\S*)?@)?";

	      regex += "(?:";

	      var hostname =
	          "(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)" +
	          "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*" +
	          "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))";

	      // This ia a special case for the localhost hostname
	      if (allowLocal) {
	        hostname = "(?:localhost|" + hostname + ")";
	      } else {
	          // private & local addresses
	          regex +=
	              "(?!10(?:\\.\\d{1,3}){3})" +
	              "(?!127(?:\\.\\d{1,3}){3})" +
	              "(?!169\\.254(?:\\.\\d{1,3}){2})" +
	              "(?!192\\.168(?:\\.\\d{1,3}){2})" +
	              "(?!172" +
	                "\\.(?:1[6-9]|2\\d|3[0-1])" +
	                "(?:\\.\\d{1,3})" +
	              "{2})";
	      }

	      // reserved addresses
	      regex +=
	          "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
	          "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
	          "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
	        "|" +
	          hostname +
	          // port number
	          "(?::\\d{2,5})?" +
	          // path
	          "(?:\\/[^\\s]*)?" +
	        "$";

	      var PATTERN = new RegExp(regex, 'i');
	      if (!PATTERN.exec(value)) {
	        return message;
	      }
	    }
	  };

	  validate.exposeModule(validate, this, exports, module, __webpack_require__(336));
	}).call(this,
	         true ? /* istanbul ignore next */ exports : null,
	         true ? /* istanbul ignore next */ module : null,
	        __webpack_require__(336));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(335)(module)))

/***/ },

/***/ 335:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 336:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.criarConta = criarConta;

	var _reduxRouter = __webpack_require__(177);

	var _modulesApi = __webpack_require__(312);

	var _login = __webpack_require__(329);

	function criarConta(dados) {
	  return function (dispatch) {
	    return _modulesApi.post('usuarios', dados).then(function () {
	      dispatch(_login.fazerLogin(dados.login, dados.senha));
	      dispatch(_reduxRouter.pushState(null, '/'));
	    });
	  };
	}

/***/ }

});