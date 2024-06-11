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
