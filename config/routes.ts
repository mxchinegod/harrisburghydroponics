/**
 * @name umi routingConfigurationFor
 * @description onlySupported path,component,routes,redirect,wrappers,title configurationOf
 * @param path  path onlyTwoKindsOfPlaceholderConfigurationsAreSupportedTheFirstIsTheDynamicParameterTheFormOfIDAndTheSecondIsTheWildcardTheWildcardCanOnlyAppearAtTheEndOfTheRoutingString
 * @param component toConfigure location and path componentPathItCanBeAnAbsolutePathOrARelativePathIfItIsARelativePathFrom，from src/pages startLooking
 * @param routes configureSubRoutesUsuallyWhenYouNeedToAddLayoutComponentsForMultiplePaths
 * @param redirect configureRoutingJumps
 * @param wrappers configureTheWrapperComponentOfTheRoutingComponentThroughWhichMoreFunctionsCanBeCombinedForTheCurrentRoutingComponentForExampleItCanBeUsedForRouteLevelPermissionVerification
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/users',
      },
      {
        path: '/admin/users',
        name: 'User Management',
        component: './Admin/Users',
      },
    ],
  },
  // {
  //   path: '/tools',
  //   name: 'Alternative Data',
  //   icon: 'database',
  //   access: 'paid',
  //   routes: [
  //     {
  //       path: '/tools',
  //       redirect: '/tools/altdata',
  //     },

  //     {
  //       path: '/tools/altdata/reddit',
  //       name: 'Reddit',
  //       component: './Tools/AltData/Reddit',
  //     },
  //   ],
  // },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
  {
    path: '*',
    layout: false,
    component: './403',
  },
  {
    path: '/payment/success',
    layout: false,
    component: './Success',
  },
  {
    path: '/payment/failure',
    layout: false,
    component: './Failure',
  },
];
