const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
      {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },

     {
      path: '/Projects',
      name: 'Projects',
      getComponent(nextState, comMod) {
        import('containers/Projects')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },

    {
     path: '/About',
     name: 'About',
     getComponent(nextState, comMod) {
       import('containers/About')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
   },

   {
    path: '/Contact',
    name: 'Contact',
    getComponent(nextState, comMod) {
      import('containers/Contact')
        .then(loadModule(comMod))
        .catch(errorLoading);
    },
  },

  {
   path: '/Resume',
   name: 'Resume',
   getComponent(nextState, comMod) {
     import('containers/Resume')
       .then(loadModule(comMod))
       .catch(errorLoading);
   },
 },

 {
  path: '/Animations',
  name: 'Animations',
  getComponent(nextState, comMod) {
    import('containers/Animations')
      .then(loadModule(comMod))
      .catch(errorLoading);
  },
},
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}
