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

	var _actionsLogin = __webpack_require__(273);

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

	var _reduxThunk = __webpack_require__(240);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxRouter = __webpack_require__(177);

	var _history = __webpack_require__(241);

	var _routes = __webpack_require__(270);

	var _routes2 = _interopRequireDefault(_routes);

	var _reducers = __webpack_require__(338);

	var _reducers2 = _interopRequireDefault(_reducers);

	var finalCreateStore = _redux.compose(_redux.applyMiddleware(_reduxThunk2['default']), _reduxRouter.reduxReactRouter({
	  createHistory: _history.createHistory,
	  routes: _routes2['default']
	}))(_redux.createStore);

	var store = finalCreateStore(_reducers2['default']);

	exports['default'] = store;
	module.exports = exports['default'];

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _containersApp = __webpack_require__(271);

	var _containersApp2 = _interopRequireDefault(_containersApp);

	var _containersCriarConta = __webpack_require__(328);

	var _containersCriarConta2 = _interopRequireDefault(_containersCriarConta);

	var _containersMeusAnimais = __webpack_require__(336);

	var _containersMeusAnimais2 = _interopRequireDefault(_containersMeusAnimais);

	var _containersAnimal = __webpack_require__(344);

	var _containersAnimal2 = _interopRequireDefault(_containersAnimal);

	var routes = [{
	  path: '/',
	  component: _containersApp2['default'],
	  childRoutes: [{ path: 'meus-animais', component: _containersMeusAnimais2['default'] }, { path: 'animal(/:id)', component: _containersAnimal2['default'] }]
	}, {
	  path: '/criar-conta',
	  component: _containersCriarConta2['default']
	}];

	exports['default'] = routes;
	module.exports = exports['default'];

/***/ },

/***/ 271:
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

	var _actionsApp = __webpack_require__(272);

	var _actionsLogin = __webpack_require__(273);

	var _componentsHeader = __webpack_require__(277);

	var _componentsHeader2 = _interopRequireDefault(_componentsHeader);

	var _Login = __webpack_require__(282);

	var _Login2 = _interopRequireDefault(_Login);

	__webpack_require__(326);

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

/***/ 272:
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

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.fazerLogin = fazerLogin;
	exports.fazerLogout = fazerLogout;

	var _reduxRouter = __webpack_require__(177);

	var _modulesApi = __webpack_require__(274);

	var _app = __webpack_require__(272);

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

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.get = get;
	exports.post = post;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isomorphicFetch = __webpack_require__(275);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var basePath = '/api/';

	function includeAuthorization(headers) {
	  var credentials = localStorage.getItem('credentials');

	  if (credentials) {
	    headers['Authorization'] = 'Basic ' + credentials;
	  }
	}

	function get(endpoint) {
	  return new Promise(function (resolve, reject) {
	    var headers = {};

	    includeAuthorization(headers);

	    var options = {
	      method: 'GET',
	      headers: headers
	    };

	    _isomorphicFetch2['default'](basePath + endpoint, options).then(function (response) {
	      if (response.ok) {
	        response.json().then(resolve);
	      } else {
	        response.text().then(reject);
	      }
	    });
	  });
	}

	function post(endpoint, data) {
	  return new Promise(function (resolve, reject) {
	    var headers = {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    };

	    includeAuthorization(headers);

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

	__webpack_require__(278);

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

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(279);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(281)(content, {});
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

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(280)();
	// imports


	// module
	exports.push([module.id, "header {\n  background-color: #252;\n  padding: 10px 20px;\n  color: #fff;\n  height: 30px; }\n  header h1 {\n    font-size: 2em;\n    float: left; }\n  header .toolbar {\n    float: right; }\n    header .toolbar .usuario {\n      vertical-align: super;\n      margin-right: 30px; }\n    header .toolbar a {\n      color: #fff;\n      text-decoration: none; }\n      header .toolbar a i {\n        font-size: 2em; }\n      header .toolbar a span {\n        vertical-align: super;\n        padding-left: 5px;\n        margin-right: 10px; }\n", ""]);

	// exports


/***/ },

/***/ 280:
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

/***/ 281:
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

/***/ 282:
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

	var _reduxForm = __webpack_require__(283);

	var _actionsApp = __webpack_require__(272);

	var _actionsLogin = __webpack_require__(273);

	var _componentsTextBox = __webpack_require__(317);

	var _componentsTextBox2 = _interopRequireDefault(_componentsTextBox);

	var _componentsButton = __webpack_require__(321);

	var _componentsButton2 = _interopRequireDefault(_componentsButton);

	__webpack_require__(324);

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

/***/ 317:
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

	var _classnames = __webpack_require__(318);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(319);

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

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(320);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(281)(content, {});
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

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(280)();
	// imports


	// module
	exports.push([module.id, ".form-row {\n  padding: 3px 0px;\n  display: block; }\n  .form-row input {\n    border: solid 1px #333;\n    display: block;\n    width: 200px; }\n    .form-row input.active {\n      background-color: #ffffdd; }\n    .form-row input.invalid {\n      border-color: #f22; }\n  .form-row .error-message {\n    color: #f22;\n    font-size: 0.9em; }\n", ""]);

	// exports


/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(322);

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

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(323);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(281)(content, {});
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

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(280)();
	// imports


	// module
	exports.push([module.id, ".button {\n  border: none;\n  background-color: #252;\n  color: #fff;\n  margin-top: 10px;\n  padding: 4px 10px; }\n  .button:hover {\n    background-color: #3f9e3f; }\n", ""]);

	// exports


/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(325);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(281)(content, {});
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

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(280)();
	// imports


	// module
	exports.push([module.id, ".login {\n  position: fixed;\n  right: 20px;\n  top: 10px;\n  border: solid 1px #333;\n  background-color: #f4f4f4;\n  padding: 10px; }\n  .login h2 {\n    padding-bottom: 10px;\n    width: 100%; }\n    .login h2 a {\n      color: #333;\n      float: right; }\n  .login a {\n    display: block; }\n  .login .error-message {\n    color: #f22;\n    font-size: 0.9em;\n    display: block; }\n", ""]);

	// exports


/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(327);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(281)(content, {});
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

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(280)();
	// imports


	// module
	exports.push([module.id, "html, button, input, select {\n  color: #333;\n  font-family: \"Fira Sans\";\n  font-size: 16px; }\n\ninput:focus, select:focus {\n  outline: none; }\n\nbody, h1, h2, h3, h4, h5, h6, p, ul, li {\n  margin: 0;\n  padding: 0; }\n\n.container {\n  margin: 0 auto;\n  width: 800px; }\n", ""]);

	// exports


/***/ },

/***/ 328:
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

	var _reduxForm = __webpack_require__(283);

	var _modulesValidate = __webpack_require__(329);

	var _modulesValidate2 = _interopRequireDefault(_modulesValidate);

	var _actionsConta = __webpack_require__(333);

	var _componentsTextBox = __webpack_require__(317);

	var _componentsTextBox2 = _interopRequireDefault(_componentsTextBox);

	var _componentsButton = __webpack_require__(321);

	var _componentsButton2 = _interopRequireDefault(_componentsButton);

	__webpack_require__(334);

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

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _validateJs = __webpack_require__(330);

	_validateJs.validate.options = { fullMessages: false };
	_validateJs.validate.validators.presence.options = { message: 'Campo obrigatório.' };
	_validateJs.validate.validators.numericality.options = { message: 'Valor deve ser numérico.' };

	exports['default'] = function (attributes, constraints) {
	  return _validateJs.validate(attributes, constraints) || {};
	};

	;
	module.exports = exports['default'];

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.criarConta = criarConta;

	var _reduxRouter = __webpack_require__(177);

	var _modulesApi = __webpack_require__(274);

	var _login = __webpack_require__(273);

	function criarConta(dados) {
	  return function (dispatch) {
	    return _modulesApi.post('usuarios', dados).then(function () {
	      dispatch(_login.fazerLogin(dados.login, dados.senha));
	      dispatch(_reduxRouter.pushState(null, '/'));
	    });
	  };
	}

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(335);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(281)(content, {});
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

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(280)();
	// imports


	// module
	exports.push([module.id, ".criar-conta {\n  margin: 50px auto;\n  width: 200px; }\n", ""]);

	// exports


/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(159);

	var _reduxRouter = __webpack_require__(177);

	var _actionsAnimais = __webpack_require__(337);

	var _componentsButton = __webpack_require__(321);

	var _componentsButton2 = _interopRequireDefault(_componentsButton);

	var _componentsTable = __webpack_require__(343);

	var _componentsTable2 = _interopRequireDefault(_componentsTable);

	__webpack_require__(341);

	var MeusAnimais = (function (_Component) {
	  _inherits(MeusAnimais, _Component);

	  function MeusAnimais() {
	    _classCallCheck(this, _MeusAnimais);

	    _Component.apply(this, arguments);
	  }

	  MeusAnimais.prototype.componentDidMount = function componentDidMount() {
	    this.props.carregarLista();
	  };

	  MeusAnimais.prototype.handleNovoClick = function handleNovoClick() {
	    this.props.pushState(null, '/animal');
	  };

	  MeusAnimais.prototype.render = function render() {
	    var columns = [{ key: 'nome', header: 'Nome' }];

	    return _react2['default'].createElement(
	      'div',
	      { className: 'meus-animais' },
	      _react2['default'].createElement(
	        'h2',
	        null,
	        'Meus animais',
	        _react2['default'].createElement(
	          _componentsButton2['default'],
	          { onClick: this.handleNovoClick.bind(this) },
	          'Novo'
	        )
	      ),
	      _react2['default'].createElement(_componentsTable2['default'], {
	        columns: columns,
	        data: this.props.lista
	      })
	    );
	  };

	  var _MeusAnimais = MeusAnimais;
	  MeusAnimais = _reactRedux.connect(function (state) {
	    return {
	      lista: state.animais.lista
	    };
	  }, { carregarLista: _actionsAnimais.carregarLista, pushState: _reduxRouter.pushState })(MeusAnimais) || MeusAnimais;
	  return MeusAnimais;
	})(_react.Component);

	exports['default'] = MeusAnimais;
	module.exports = exports['default'];

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.carregarLista = carregarLista;
	exports.criarAnimal = criarAnimal;

	var _modulesApi = __webpack_require__(274);

	var _reduxRouter = __webpack_require__(177);

	var ANIMAIS_SET_LISTA = 'ANIMAIS_SET_LISTA';

	exports.ANIMAIS_SET_LISTA = ANIMAIS_SET_LISTA;

	function carregarLista() {
	  return function (dispatch) {
	    return _modulesApi.get('animais').then(function (animais) {
	      dispatch(setarLista(animais));
	    });
	  };
	}

	function criarAnimal(dados) {
	  return function (dispatch) {
	    return _modulesApi.post('animais', dados).then(function () {
	      dispatch(_reduxRouter.pushState(null, '/meus-animais'));
	    });
	  };
	}

	function setarLista(lista) {
	  return {
	    type: ANIMAIS_SET_LISTA,
	    lista: lista
	  };
	}

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(166);

	var _reduxRouter = __webpack_require__(177);

	var _reduxForm = __webpack_require__(283);

	var _app = __webpack_require__(339);

	var _app2 = _interopRequireDefault(_app);

	var _animais = __webpack_require__(340);

	var _animais2 = _interopRequireDefault(_animais);

	var _especies = __webpack_require__(351);

	var _especies2 = _interopRequireDefault(_especies);

	var reducers = _redux.combineReducers({
	  router: _reduxRouter.routerStateReducer,
	  form: _reduxForm.reducer,
	  app: _app2['default'],
	  animais: _animais2['default'],
	  especies: _especies2['default']
	});

	exports['default'] = reducers;
	module.exports = exports['default'];

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _actionsApp = __webpack_require__(272);

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

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _actionsAnimais = __webpack_require__(337);

	var initialState = {
	  lista: []
	};

	exports['default'] = function (state, action) {
	  if (state === undefined) state = initialState;

	  switch (action.type) {
	    case _actionsAnimais.ANIMAIS_SET_LISTA:
	      return Object.assign({}, state, {
	        lista: action.lista
	      });
	    default:
	      return state;
	  }
	};

	module.exports = exports['default'];

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(342);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(281)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./MeusAnimais.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./MeusAnimais.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(280)();
	// imports


	// module
	exports.push([module.id, ".meus-animais {\n  margin-top: 20px; }\n  .meus-animais h2 .button {\n    margin-top: 0px;\n    float: right; }\n  .meus-animais table {\n    margin-top: 10px; }\n", ""]);

	// exports


/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var Table = (function (_Component) {
	  _inherits(Table, _Component);

	  function Table() {
	    _classCallCheck(this, Table);

	    _Component.apply(this, arguments);
	  }

	  Table.prototype.render = function render() {
	    var columns = this.props.columns;
	    var data = this.props.data;

	    return _react2['default'].createElement(
	      'table',
	      null,
	      _react2['default'].createElement(
	        'thead',
	        null,
	        _react2['default'].createElement(
	          'tr',
	          null,
	          columns.map(function (c) {
	            return _react2['default'].createElement(
	              'th',
	              { key: c.key },
	              c.header
	            );
	          })
	        )
	      ),
	      _react2['default'].createElement(
	        'tbody',
	        null,
	        data.map(this.renderRow.bind(this))
	      )
	    );
	  };

	  Table.prototype.renderRow = function renderRow(row) {
	    var columns = this.props.columns;

	    return _react2['default'].createElement(
	      'tr',
	      { key: row.id },
	      columns.map(function (c) {
	        return _react2['default'].createElement(
	          'td',
	          { key: c.key },
	          row[c.key]
	        );
	      })
	    );
	  };

	  _createClass(Table, null, [{
	    key: 'propTypes',
	    value: {
	      columns: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        key: _react.PropTypes.string.isRequired,
	        header: _react.PropTypes.string.isRequired
	      })).isRequired,
	      data: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired
	    },
	    enumerable: true
	  }]);

	  return Table;
	})(_react.Component);

	exports['default'] = Table;
	module.exports = exports['default'];

/***/ },

/***/ 344:
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

	var _reduxForm = __webpack_require__(283);

	var _modulesValidate = __webpack_require__(329);

	var _modulesValidate2 = _interopRequireDefault(_modulesValidate);

	var _actionsEspecies = __webpack_require__(350);

	var _actionsAnimais = __webpack_require__(337);

	var _componentsTextBox = __webpack_require__(317);

	var _componentsTextBox2 = _interopRequireDefault(_componentsTextBox);

	var _componentsSelect = __webpack_require__(347);

	var _componentsSelect2 = _interopRequireDefault(_componentsSelect);

	var _componentsButton = __webpack_require__(321);

	var _componentsButton2 = _interopRequireDefault(_componentsButton);

	__webpack_require__(345);

	var Animal = (function (_Component) {
	  _inherits(Animal, _Component);

	  function Animal() {
	    _classCallCheck(this, _Animal);

	    _Component.apply(this, arguments);
	  }

	  Animal.prototype.componentDidMount = function componentDidMount() {
	    this.props.carregarEspecies();
	  };

	  Animal.prototype.handleSubmit = function handleSubmit(values, dispatch) {
	    return this.props.criarAnimal(values);
	  };

	  Animal.prototype.render = function render() {
	    var _props = this.props;
	    var fields = _props.fields;
	    var especies = _props.especies;
	    var handleSubmit = _props.handleSubmit;

	    var portes = [{ id: 1, nome: 'Pequeno' }, { id: 2, nome: 'Médio' }, { id: 3, nome: 'Grande' }];

	    return _react2['default'].createElement(
	      'form',
	      { className: 'animal', onSubmit: handleSubmit(this.handleSubmit.bind(this)) },
	      _react2['default'].createElement(
	        'h2',
	        null,
	        'Dados do Animal'
	      ),
	      _react2['default'].createElement(_componentsTextBox2['default'], {
	        label: 'Nome',
	        field: fields.nome,
	        autoFocus: true
	      }),
	      _react2['default'].createElement(_componentsSelect2['default'], {
	        label: 'Espécie',
	        field: fields.especie,
	        dataSource: especies,
	        displayProperty: 'nome',
	        valueProperty: 'id'
	      }),
	      _react2['default'].createElement(_componentsTextBox2['default'], {
	        label: 'Raça',
	        field: fields.raca
	      }),
	      _react2['default'].createElement(_componentsSelect2['default'], {
	        label: 'Porte',
	        field: fields.porte,
	        dataSource: portes,
	        displayProperty: 'nome',
	        valueProperty: 'id'
	      }),
	      _react2['default'].createElement(_componentsTextBox2['default'], {
	        label: 'Idade',
	        field: fields.idade
	      }),
	      _react2['default'].createElement(
	        _componentsButton2['default'],
	        { type: 'submit' },
	        'Salvar'
	      )
	    );
	  };

	  _createClass(Animal, null, [{
	    key: 'propTypes',
	    value: {
	      fields: _react.PropTypes.object.isRequired,
	      handleSubmit: _react.PropTypes.func.isRequired
	    },
	    enumerable: true
	  }]);

	  var _Animal = Animal;
	  Animal = _reduxForm.reduxForm({
	    form: 'animal',
	    fields: ['nome', 'especie', 'raca', 'porte', 'idade'],
	    validate: function validate(values) {
	      return _modulesValidate2['default'](values, {
	        nome: { presence: true },
	        especie: { presence: true },
	        porte: { presence: true },
	        idade: { numericality: { onlyInteger: true, greaterThan: 0 } }
	      });
	    }
	  })(Animal) || Animal;
	  Animal = _reactRedux.connect(function (state) {
	    return {
	      especies: state.especies.lista
	    };
	  }, { carregarEspecies: _actionsEspecies.carregarLista, criarAnimal: _actionsAnimais.criarAnimal })(Animal) || Animal;
	  return Animal;
	})(_react.Component);

	exports['default'] = Animal;
	module.exports = exports['default'];

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(346);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(281)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Animal.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Animal.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(280)();
	// imports


	// module
	exports.push([module.id, ".animal {\n  margin-top: 20px; }\n", ""]);

	// exports


/***/ },

/***/ 347:
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

	var _classnames = __webpack_require__(318);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(348);

	var Select = (function (_Component) {
	  _inherits(Select, _Component);

	  function Select() {
	    _classCallCheck(this, Select);

	    _Component.apply(this, arguments);
	  }

	  Select.prototype.render = function render() {
	    var _props = this.props;
	    var label = _props.label;
	    var autoFocus = _props.autoFocus;
	    var field = _props.field;
	    var dataSource = _props.dataSource;

	    return _react2['default'].createElement(
	      'div',
	      { className: 'form-row' },
	      _react2['default'].createElement(
	        'label',
	        { htmlFor: field.name },
	        label
	      ),
	      _react2['default'].createElement(
	        'select',
	        _extends({
	          id: field.name,
	          autoFocus: autoFocus,
	          className: _classnames2['default']({
	            'invalid': field.touched && field.invalid,
	            'active': field.active
	          })
	        }, field),
	        _react2['default'].createElement('option', null),
	        dataSource.map(this.renderOption.bind(this))
	      ),
	      field.touched && field.error && _react2['default'].createElement(
	        'span',
	        { className: 'error-message' },
	        field.error
	      )
	    );
	  };

	  Select.prototype.renderOption = function renderOption(option) {
	    var _props2 = this.props;
	    var displayProperty = _props2.displayProperty;
	    var valueProperty = _props2.valueProperty;

	    return _react2['default'].createElement(
	      'option',
	      {
	        key: option[valueProperty],
	        value: option[valueProperty]
	      },
	      option[displayProperty]
	    );
	  };

	  _createClass(Select, null, [{
	    key: 'propTypes',
	    value: {
	      label: _react.PropTypes.string.isRequired,
	      autoFocus: _react.PropTypes.bool,
	      field: _react.PropTypes.object.isRequired,
	      dataSource: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
	      displayProperty: _react.PropTypes.string.isRequired,
	      valueProperty: _react.PropTypes.string.isRequired
	    },
	    enumerable: true
	  }]);

	  return Select;
	})(_react.Component);

	exports['default'] = Select;
	module.exports = exports['default'];

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(349);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(281)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Select.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./Select.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(280)();
	// imports


	// module
	exports.push([module.id, ".form-row select {\n  border: solid 1px #333;\n  display: block;\n  width: 200px; }\n  .form-row select.active {\n    background-color: #ffffdd; }\n  .form-row select.invalid {\n    border-color: #f22; }\n", ""]);

	// exports


/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.carregarLista = carregarLista;

	var _modulesApi = __webpack_require__(274);

	var ESPECIES_SET_LISTA = 'ESPECIES_SET_LISTA';

	exports.ESPECIES_SET_LISTA = ESPECIES_SET_LISTA;

	function carregarLista() {
	  return function (dispatch) {
	    return _modulesApi.get('especies').then(function (especies) {
	      dispatch(setarLista(especies));
	    });
	  };
	}

	function setarLista(lista) {
	  return {
	    type: ESPECIES_SET_LISTA,
	    lista: lista
	  };
	}

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _actionsEspecies = __webpack_require__(350);

	var initialState = {
	  lista: []
	};

	exports['default'] = function (state, action) {
	  if (state === undefined) state = initialState;

	  switch (action.type) {
	    case _actionsEspecies.ESPECIES_SET_LISTA:
	      return Object.assign({}, state, {
	        lista: action.lista
	      });
	    default:
	      return state;
	  }
	};

	module.exports = exports['default'];

/***/ }

});