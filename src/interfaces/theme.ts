import { NumericLiteral } from 'typescript';

export interface ITheme {
  primary: string;
  primary1: string;
  primaryGradient: string;
  light: string;
  secondary: string;
  error: string;
  warning: string;
  success: string;
  background: string;
  secondaryBackground: string;
  secondaryBackgroundSelected: string;
  spinnerBase: string;
  siderBackground: string;
  collapseBackground: string;
  scroll: string;
  border: string;
  borderNft: string;
  textMain: string;
  textLight: string;
  textSuperLight: string;
  textSecondary: string;
  textDark: string;
  textNftLight: string;
  textSiderPrimary: string;
  textSiderSecondary: string;
  subText: string;
  shadow: string;
  boxShadow: string;
  boxShadowHover: string;
  boxShadowNft: string;
  boxShadowNftSecondary: string;
  dashboardMapBackground: string;
  dashboardMapCircleColor: string;
  dashboardMapControlDisabledBackground: string;
  notificationSuccess: string;
  notificationPrimary: string;
  notificationWarning: string;
  notificationError: string;
  chartTooltipLabel: string;
  chartColor1: string;
  chartColor1Tint: string;
  chartColor2: string;
  chartColor2Tint: string;
  chartColor3: string;
  chartColor3Tint: string;
  chartColor4: string;
  chartColor4Tint: string;
  chartColor5: string;
  chartColor5Tint: string;
  additionalBackground: string;
  timelineBackground: string;
  heading: string;
  borderBase: string;
  disable: string;
  disabledBg: string;
  layoutBodyBg: string;
  layoutHeaderBg: string;
  layoutSiderBg: string;
  inputPlaceholder: string;
  itemHoverBg: string;
  backgroundColorBase: string;
  avatarBg: string;
  alertTextColor: string;
  breadcrumb: string;
  icon: string;
  iconHover: string;
}

export type Dimension = number | string;

export type ChartData = number[];

export type xData = number[] | string[];

export type LanguageType = 'de' | 'en';

export type ThemeType = 'light' | 'dark';

export interface ChartSeries {
  seriesName: string;
  value: number;
  data: {
    day: number;
    value: NumericLiteral;
  };
  name: string;
}

export type ChartSeriesData = ChartSeries[];

export type Severity = 'success' | 'error' | 'info' | 'warning';

export type TwoFactorAuthOption = 'email' | 'phone';

export type ActivityStatusType = 'sold' | 'booked' | 'added';

export enum CurrencyTypeEnum {
  USD = 'USD',
  ETH = 'ETH',
  BTC = 'BTC',
}

export interface PaymentCard {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
  // eslint-disable-next-line
  focused: any;
  background: string;
  isEdit: boolean;
}
