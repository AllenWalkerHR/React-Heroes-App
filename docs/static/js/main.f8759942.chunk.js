(this['webpackJsonpheroes-app'] = this['webpackJsonpheroes-app'] || []).push([
  [0],
  {
    48: function (e, r, a) {
      'use strict';
      a.r(r);
      var t = a(1),
        c = a(21),
        s = a.n(c),
        i = a(10),
        n = Object(t.createContext)(),
        l = a(4),
        o = '[auth] login',
        u = '[auth] logout',
        h = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = arguments.length > 1 ? arguments[1] : void 0;
          switch (r.type) {
            case o:
              return Object(l.a)(
                Object(l.a)({}, r.payload),
                {},
                { logged: !0 }
              );
            case u:
              return { logged: !1 };
            default:
              return e;
          }
        },
        j = a(5),
        d = a(2),
        b = a(0),
        m = function (e) {
          var r = e.history,
            a = Object(t.useContext)(n).dispatch;
          return Object(b.jsxs)('div', {
            className: 'uk-flex uk-flex-column uk-flex-center uk-flex-middle',
            'uk-height-viewport': 'min-height: 100',
            children: [
              Object(b.jsx)('h1', { children: 'Login Screen' }),
              Object(b.jsx)('button', {
                className: 'uk-button uk-button-primary',
                onClick: function () {
                  var e = localStorage.getItem('lastPath') || '/';
                  a({ type: o, payload: { name: 'Carlos' } }), r.replace(e);
                },
                children: 'LogIn',
              }),
            ],
          });
        },
        p = function () {
          var e = Object(t.useContext)(n),
            r = e.user,
            a = e.dispatch,
            c = Object(d.g)(),
            s = function () {
              c.replace('/login'), a({ type: u, payload: {} });
            };
          return Object(b.jsxs)('div', {
            children: [
              Object(b.jsxs)('nav', {
                className: 'uk-navbar-container',
                'uk-navbar': '',
                children: [
                  Object(b.jsx)('div', {
                    className: 'uk-navbar-left  uk-hidden@m',
                    children: Object(b.jsxs)('a', {
                      className: 'uk-navbar-toggle',
                      'uk-toggle': 'target: #my-id',
                      href: '#!',
                      children: [
                        Object(b.jsx)('span', { 'uk-icon': 'icon: menu' }),
                        Object(b.jsx)('span', { children: 'menu' }),
                      ],
                    }),
                  }),
                  Object(b.jsxs)('div', {
                    className: 'uk-navbar-center',
                    children: [
                      Object(b.jsxs)('ul', {
                        className: 'uk-navbar-nav  uk-visible@m',
                        children: [
                          Object(b.jsx)('li', {
                            children: Object(b.jsx)(j.c, {
                              activeClassName: 'uk-text-emphasis',
                              to: '/marvel',
                              children: 'Marvel',
                            }),
                          }),
                          Object(b.jsx)('li', {
                            children: Object(b.jsx)(j.c, {
                              activeClassName: 'uk-text-emphasis',
                              to: '/dc',
                              children: 'DC',
                            }),
                          }),
                        ],
                      }),
                      Object(b.jsx)('div', {
                        className: 'uk-navbar-item ',
                        children: Object(b.jsx)(j.b, {
                          className: 'uk-logo',
                          to: '/',
                          children: 'Heroes App',
                        }),
                      }),
                      Object(b.jsxs)('ul', {
                        className: 'uk-navbar-nav  uk-visible@m',
                        children: [
                          Object(b.jsx)('li', {
                            children: Object(b.jsx)(j.c, {
                              activeClassName: 'uk-text-emphasis',
                              to: '/search',
                              children: 'Search',
                            }),
                          }),
                          Object(b.jsx)('li', {
                            children: Object(b.jsx)('a', {
                              href: '#!',
                              onClick: s,
                              children: 'Log Out',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(b.jsx)('div', {
                    className: 'uk-navbar-right',
                    children: Object(b.jsx)('div', {
                      className: 'uk-navbar-item uk-text-primary',
                      children: r.name,
                    }),
                  }),
                ],
              }),
              Object(b.jsx)('div', {
                id: 'my-id',
                'uk-offcanvas': '',
                children: Object(b.jsxs)('div', {
                  className: 'uk-offcanvas-bar uk-flex uk-flex-column',
                  children: [
                    Object(b.jsx)('button', {
                      className: 'uk-offcanvas-close',
                      type: 'button',
                      'uk-close': '',
                    }),
                    Object(b.jsxs)('ul', {
                      className:
                        'uk-nav uk-nav-primary uk-nav-left uk-margin-auto-vertical',
                      children: [
                        Object(b.jsx)('li', {
                          className: 'uk-nav-header',
                          children: Object(b.jsx)(j.c, {
                            to: '/',
                            children: 'Heroes App',
                          }),
                        }),
                        Object(b.jsx)('li', {
                          children: Object(b.jsx)(j.c, {
                            activeClassName: 'uk-text-emphasis',
                            to: '/marvel',
                            'uk-toggle': 'target: #my-id',
                            children: Object(b.jsx)('small', {
                              children: 'Marvel',
                            }),
                          }),
                        }),
                        Object(b.jsx)('li', {
                          children: Object(b.jsx)(j.c, {
                            activeClassName: 'uk-text-emphasis',
                            to: '/dc',
                            'uk-toggle': 'target: #my-id',
                            children: Object(b.jsx)('small', {
                              children: 'DC',
                            }),
                          }),
                        }),
                        Object(b.jsx)('li', {
                          children: Object(b.jsx)(j.c, {
                            activeClassName: 'uk-text-emphasis',
                            to: '/search',
                            'uk-togle': 'target: #my-id',
                            children: Object(b.jsx)('small', {
                              children: 'Search',
                            }),
                          }),
                        }),
                        Object(b.jsx)('li', {
                          children: Object(b.jsx)('a', {
                            href: '#!',
                            onClick: s,
                            'uk-toggle': 'target: #my-id',
                            children: Object(b.jsx)('small', {
                              children: 'Log Out',
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        O = [
          {
            id: 'dc-batman',
            superhero: 'Batman',
            publisher: 'DC Comics',
            alter_ego: 'Bruce Wayne',
            first_appearance: 'Detective Comics #27',
            characters: 'Bruce Wayne',
          },
          {
            id: 'dc-superman',
            superhero: 'Superman',
            publisher: 'DC Comics',
            alter_ego: 'Kal-El',
            first_appearance: 'Action Comics #1',
            characters: 'Kal-El',
          },
          {
            id: 'dc-flash',
            superhero: 'Flash',
            publisher: 'DC Comics',
            alter_ego: 'Jay Garrick',
            first_appearance: 'Flash Comics #1',
            characters: 'Jay Garrick, Barry Allen, Wally West, Bart Allen',
          },
          {
            id: 'dc-green',
            superhero: 'Green Lantern',
            publisher: 'DC Comics',
            alter_ego: 'Alan Scott',
            first_appearance: 'All-American Comics #16',
            characters:
              'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz',
          },
          {
            id: 'dc-arrow',
            superhero: 'Green Arrow',
            publisher: 'DC Comics',
            alter_ego: 'Oliver Queen',
            first_appearance: 'More Fun Comics #73',
            characters: 'Oliver Queen',
          },
          {
            id: 'dc-wonder',
            superhero: 'Wonder Woman',
            publisher: 'DC Comics',
            alter_ego: 'Princess Diana',
            first_appearance: 'All Star Comics #8',
            characters: 'Princess Diana',
          },
          {
            id: 'dc-martian',
            superhero: 'Martian Manhunter',
            publisher: 'DC Comics',
            alter_ego: "J'onn J'onzz",
            first_appearance: 'Detective Comics #225',
            characters: 'Martian Manhunter',
          },
          {
            id: 'dc-robin',
            superhero: 'Robin/Nightwing',
            publisher: 'DC Comics',
            alter_ego: 'Dick Grayson',
            first_appearance: 'Detective Comics #38',
            characters: 'Dick Grayson',
          },
          {
            id: 'dc-blue',
            superhero: 'Blue Beetle',
            publisher: 'DC Comics',
            alter_ego: 'Dan Garret',
            first_appearance: 'Mystery Men Comics #1',
            characters: 'Dan Garret, Ted Kord, Jaime Reyes',
          },
          {
            id: 'dc-black',
            superhero: 'Black Canary',
            publisher: 'DC Comics',
            alter_ego: 'Dinah Drake',
            first_appearance: 'Flash Comics #86',
            characters: 'Dinah Drake, Dinah Lance',
          },
          {
            id: 'marvel-spider',
            superhero: 'Spider Man',
            publisher: 'Marvel Comics',
            alter_ego: 'Peter Parker',
            first_appearance: 'Amazing Fantasy #15',
            characters: 'Peter Parker',
          },
          {
            id: 'marvel-captain',
            superhero: 'Captain America',
            publisher: 'Marvel Comics',
            alter_ego: 'Steve Rogers',
            first_appearance: 'Captain America Comics #1',
            characters: 'Steve Rogers',
          },
          {
            id: 'marvel-iron',
            superhero: 'Iron Man',
            publisher: 'Marvel Comics',
            alter_ego: 'Tony Stark',
            first_appearance: 'Tales of Suspense #39',
            characters: 'Tony Stark',
          },
          {
            id: 'marvel-thor',
            superhero: 'Thor',
            publisher: 'Marvel Comics',
            alter_ego: 'Thor Odinson',
            first_appearance: 'Journey into Myster #83',
            characters: 'Thor Odinson',
          },
          {
            id: 'marvel-hulk',
            superhero: 'Hulk',
            publisher: 'Marvel Comics',
            alter_ego: 'Bruce Banner',
            first_appearance: 'The Incredible Hulk #1',
            characters: 'Bruce Banner',
          },
          {
            id: 'marvel-wolverine',
            superhero: 'Wolverine',
            publisher: 'Marvel Comics',
            alter_ego: 'James Howlett',
            first_appearance: 'The Incredible Hulk #180',
            characters: 'James Howlett',
          },
          {
            id: 'marvel-daredevil',
            superhero: 'Daredevil',
            publisher: 'Marvel Comics',
            alter_ego: 'Matthew Michael Murdock',
            first_appearance: 'Daredevil #1',
            characters: 'Matthew Michael Murdock',
          },
          {
            id: 'marvel-hawkeye',
            superhero: 'Hawkeye',
            publisher: 'Marvel Comics',
            alter_ego: 'Clinton Francis Barton',
            first_appearance: 'Tales of Suspense #57',
            characters: 'Clinton Francis Barton',
          },
          {
            id: 'marvel-cyclops',
            superhero: 'Cyclops',
            publisher: 'Marvel Comics',
            alter_ego: 'Scott Summers',
            first_appearance: 'X-Men #1',
            characters: 'Scott Summers',
          },
          {
            id: 'marvel-silver',
            superhero: 'Silver Surfer',
            publisher: 'Marvel Comics',
            alter_ego: 'Norrin Radd',
            first_appearance: 'The Fantastic Four #48',
            characters: 'Norrin Radd',
          },
        ],
        x = function (e) {
          var r = e.id,
            a = e.superhero,
            t = (e.publisher, e.alter_ego),
            c = e.first_appearance,
            s = e.characters;
          return Object(b.jsx)('div', {
            children: Object(b.jsxs)('div', {
              className:
                'uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin',
              'uk-grid': '',
              children: [
                Object(b.jsxs)('div', {
                  className: 'uk-card-media-left uk-cover-container',
                  children: [
                    Object(b.jsx)('img', {
                      src: './React-Heroes-App/React-Heroes-App/assets/heroes/'.concat(
                        r,
                        '.jpg'
                      ),
                      alt: a,
                      'uk-cover': '',
                    }),
                    Object(b.jsx)('canvas', { width: '500', height: '800' }),
                  ],
                }),
                Object(b.jsx)('div', {
                  children: Object(b.jsxs)('div', {
                    className: 'uk-card-body uk-margin-small',
                    children: [
                      Object(b.jsx)('h6', {
                        className: 'uk-card-title',
                        children: a,
                      }),
                      Object(b.jsx)('p', { children: t }),
                      t !== s && Object(b.jsx)('p', { children: s }),
                      ' ',
                      Object(b.jsxs)('p', {
                        children: [
                          Object(b.jsx)('small', { children: c }),
                          ' ',
                        ],
                      }),
                      Object(b.jsx)(j.b, {
                        to: './heroe/'.concat(r),
                        className:
                          'uk-button-text uk-text-primary uk-align-right',
                        children: 'M\xe1s...',
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        v = function (e) {
          var r = e.publisher,
            a = Object(t.useMemo)(
              function () {
                return (function (e) {
                  if (!['DC Comics', 'Marvel Comics'].includes(e))
                    throw new Error('Publisher '.concat(e, ' no es correcto'));
                  return O.filter(function (r) {
                    return r.publisher === e;
                  });
                })(r);
              },
              [r]
            );
          return Object(b.jsxs)('div', {
            children: [
              Object(b.jsx)('h1', { children: 'Hero List' }),
              Object(b.jsx)('div', {
                className:
                  'uk-grid-match uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-margin-small animate__animated animate__fadeIn',
                'uk-grid': '',
                children: a.map(function (e) {
                  return Object(b.jsx)(x, Object(l.a)({}, e), e.id);
                }),
              }),
            ],
          });
        },
        k = function () {
          return Object(b.jsxs)('div', {
            children: [
              Object(b.jsx)('h1', { children: 'DC Screen' }),
              Object(b.jsx)(v, { publisher: 'DC Comics' }),
            ],
          });
        },
        g = function () {
          return Object(b.jsxs)('div', {
            children: [
              Object(b.jsx)('h1', { children: 'Marvel Screen' }),
              Object(b.jsx)(v, { publisher: 'Marvel Comics' }),
            ],
          });
        },
        f = function (e) {
          var r = e.history,
            a = Object(d.i)().heroeID,
            c = Object(t.useMemo)(
              function () {
                return (function (e) {
                  return O.find(function (r) {
                    return r.id === e;
                  });
                })(a);
              },
              [a]
            );
          if (!c) return Object(b.jsx)(d.a, { to: '/' });
          var s = c.id,
            i = c.superhero,
            n = c.publisher,
            l = c.alter_ego,
            o = c.first_appearance,
            u = c.characters;
          return Object(b.jsxs)('div', {
            'uk-grid': '',
            children: [
              Object(b.jsx)('div', {
                className: 'uk-width-2-5@s',
                children: Object(b.jsx)('img', {
                  src: '/React-Heroes-App/assets/heroes/'.concat(s, '.jpg'),
                  alt: i,
                  className: 'animate__animated animate__fadeInLeft',
                }),
              }),
              Object(b.jsxs)('div', {
                className: 'uk-width-3-5@s animate__animated animate__fadeIn',
                children: [
                  Object(b.jsx)('h3', { children: i }),
                  Object(b.jsxs)('ul', {
                    children: [
                      Object(b.jsxs)('li', {
                        children: [
                          Object(b.jsx)('b', { children: 'Alter ego: ' }),
                          l,
                        ],
                      }),
                      Object(b.jsxs)('li', {
                        children: [
                          Object(b.jsx)('b', { children: 'Publisher: ' }),
                          n,
                        ],
                      }),
                      Object(b.jsxs)('li', {
                        children: [
                          Object(b.jsx)('b', {
                            children: 'First appearence: ',
                          }),
                          o,
                        ],
                      }),
                    ],
                  }),
                  Object(b.jsx)('h5', { children: 'Characters' }),
                  Object(b.jsx)('p', {
                    children: u.split(',').map(function (e) {
                      return Object(b.jsx)(
                        'span',
                        {
                          className:
                            'uk-badge uk-margin-small-right uk-margin-small-bottom uk-padding-small',
                          children: e,
                        },
                        e
                      );
                    }),
                  }),
                  Object(b.jsx)('button', {
                    onClick: function () {
                      r.length <= 2 ? r.push('/') : r.goBack();
                    },
                    className:
                      'uk-button uk-button-default uk-width-1-1 uk-width-1-2@s uk-align-right',
                    children: 'Return',
                  }),
                ],
              }),
            ],
          });
        },
        C = a(23),
        _ = a.n(C),
        y = a(12),
        N = function (e) {
          var r = e.history,
            a = Object(d.h)(),
            c = _.a.parse(a.search).q,
            s = void 0 === c ? '' : c,
            n = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = Object(t.useState)(e),
                a = Object(i.a)(r, 2),
                c = a[0],
                s = a[1];
              return [
                c,
                function (e) {
                  var r = e.target;
                  s(
                    Object(l.a)(
                      Object(l.a)({}, c),
                      {},
                      Object(y.a)({}, r.name, r.value)
                    )
                  );
                },
                function () {
                  s(e);
                },
              ];
            })({ search: s }),
            o = Object(i.a)(n, 2),
            u = o[0].search,
            h = o[1],
            j = Object(t.useMemo)(
              function () {
                return (function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : '';
                  return '' === e
                    ? []
                    : O.filter(function (r) {
                        return r.superhero
                          .toLowerCase()
                          .includes(e.toLowerCase());
                      });
                })(s);
              },
              [s]
            );
          return Object(b.jsxs)('div', {
            children: [
              Object(b.jsx)('h1', { children: 'Search Screen' }),
              Object(b.jsxs)('div', {
                'uk-grid': '',
                children: [
                  Object(b.jsxs)('div', {
                    className: 'uk-width-2-5@s',
                    children: [
                      Object(b.jsx)('h4', { children: 'Search Form' }),
                      Object(b.jsxs)('form', {
                        onSubmit: function (e) {
                          e.preventDefault(),
                            r.push('?q='.concat(u)),
                            console.log(u);
                        },
                        children: [
                          Object(b.jsx)('input', {
                            className: 'uk-input uk-form-blank',
                            placeholder: 'Find your hero',
                            name: 'search',
                            autoComplete: 'off',
                            value: u,
                            onChange: h,
                            type: 'text',
                          }),
                          Object(b.jsx)('button', {
                            className: 'uk-button uk-button-primary',
                            type: 'submit',
                            children: 'Search',
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(b.jsxs)('div', {
                    className: 'uk-width-3-5@s',
                    children: [
                      Object(b.jsx)('h4', { children: 'Results' }),
                      '' === s &&
                        Object(b.jsxs)('div', {
                          className: 'uk-alert-primary',
                          'uk-alert': '',
                          children: [
                            Object(b.jsx)('a', {
                              href: '#!',
                              className: 'uk-alert-close',
                              'uk-close': '',
                              children: '',
                            }),
                            Object(b.jsx)('p', { children: 'Search a hero' }),
                          ],
                        }),
                      '' !== s &&
                        0 === j.length &&
                        Object(b.jsxs)('div', {
                          className: 'uk-alert-danger',
                          'uk-alert': '',
                          children: [
                            Object(b.jsx)('a', {
                              href: '#!',
                              className: 'uk-alert-close',
                              'uk-close': '',
                              children: '',
                            }),
                            Object(b.jsx)('p', {
                              children: 'there is no a heroe with "'.concat(
                                s,
                                '"'
                              ),
                            }),
                          ],
                        }),
                      j.map(function (e) {
                        return Object(b.jsx)(x, Object(l.a)({}, e), e.id);
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        S = function () {
          return Object(b.jsxs)('div', {
            className: 'uk-offcanvas-content',
            children: [
              Object(b.jsx)(p, {}),
              Object(b.jsx)('div', {
                className:
                  'uk-container uk-margin-small-top uk-margin-small-bottom',
                children: Object(b.jsxs)(d.d, {
                  children: [
                    Object(b.jsx)(d.b, {
                      exact: !0,
                      path: '/marvel',
                      component: g,
                    }),
                    Object(b.jsx)(d.b, {
                      exact: !0,
                      path: '/dc',
                      component: k,
                    }),
                    Object(b.jsx)(d.b, {
                      exact: !0,
                      path: '/heroes',
                      component: v,
                    }),
                    Object(b.jsx)(d.b, {
                      exact: !0,
                      path: '/heroe/:heroeID',
                      component: f,
                    }),
                    Object(b.jsx)(d.b, {
                      exact: !0,
                      path: '/search',
                      component: N,
                    }),
                    Object(b.jsx)(d.a, { to: '/marvel' }),
                  ],
                }),
              }),
            ],
          });
        },
        M = a(13),
        D = ['isAuthenticated', 'component'],
        w = function (e) {
          var r = e.isAuthenticated,
            a = e.component,
            t = Object(M.a)(e, D);
          return (
            localStorage.setItem('lastPath', t.location.pathname),
            Object(b.jsx)(
              d.b,
              Object(l.a)(
                Object(l.a)({}, t),
                {},
                {
                  component: function (e) {
                    return r
                      ? Object(b.jsx)(a, Object(l.a)({}, e))
                      : Object(b.jsx)(d.a, { to: '/login' });
                  },
                }
              )
            )
          );
        },
        A = ['isAuthenticated', 'component'],
        B = function (e) {
          var r = e.isAuthenticated,
            a = e.component,
            t = Object(M.a)(e, A);
          return Object(b.jsx)(
            d.b,
            Object(l.a)(
              Object(l.a)({}, t),
              {},
              {
                component: function (e) {
                  return r
                    ? Object(b.jsx)(d.a, { to: '/' })
                    : Object(b.jsx)(a, Object(l.a)({}, e));
                },
              }
            )
          );
        },
        J = function () {
          var e = Object(t.useContext)(n).user;
          return Object(b.jsx)(j.a, {
            children: Object(b.jsxs)(d.d, {
              children: [
                Object(b.jsx)(B, {
                  exact: !0,
                  path: '/login',
                  component: m,
                  isAuthenticated: e.logged,
                }),
                Object(b.jsx)(w, {
                  path: '/',
                  component: S,
                  isAuthenticated: e.logged,
                }),
              ],
            }),
          });
        },
        I = function () {
          return JSON.parse(localStorage.getItem('user')) || { logged: !1 };
        },
        F = function () {
          var e = Object(t.useReducer)(h, {}, I),
            r = Object(i.a)(e, 2),
            a = r[0],
            c = r[1];
          return (
            Object(t.useEffect)(
              function () {
                localStorage.setItem('user', JSON.stringify(a));
              },
              [a]
            ),
            Object(b.jsxs)(n.Provider, {
              value: { user: a, dispatch: c },
              children: [Object(b.jsx)(J, {}), ';'],
            })
          );
        };
      s.a.render(Object(b.jsx)(F, {}), document.getElementById('root'));
    },
  },
  [[48, 1, 2]],
]);
//# sourceMappingURL=main.f8759942.chunk.js.map
