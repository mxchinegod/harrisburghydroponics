import { Settings as LayoutSettings } from '@ant-design/pro-components';

/* A type definition for the settings object. */
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  colorPrimary: '#6AA84F',
  layout: 'top',
  contentWidth: 'Fixed',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'HarrisburgHydroponics',
  splitMenus: false,
  pwa: false,
  logo: '/HarrisburgHydroponics.png',
  iconfontUrl: '',
};

export default Settings;
