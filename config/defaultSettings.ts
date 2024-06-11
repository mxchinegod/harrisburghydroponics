import { Settings as LayoutSettings } from '@ant-design/pro-components';

/* A type definition for the settings object. */
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  colorPrimary: '#722ED1',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'HarrisburgHydroponics AI',
  splitMenus: false,
  pwa: false,
  logo: '/HarrisburgHydroponics2.gif',
  iconfontUrl: '',
};

export default Settings;
