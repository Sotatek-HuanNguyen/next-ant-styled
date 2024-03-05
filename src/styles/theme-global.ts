import { FONT_FAMILY } from '@/constants';
import * as styled from 'styled-components';

import { resetCss } from './theme-reset';
import { commonThemeVariables, getThemeVariables } from './themes/theme-variables';

export default styled.createGlobalStyle`
  ${resetCss}

  [data-theme='light'],
  :root {
    ${getThemeVariables('light')}
  }

  [data-theme='dark'] {
    ${getThemeVariables('dark')}
  }

  :root {
    ${commonThemeVariables};
  }

  [data-no-transition] * {
    transition: none !important;
  }

  button,
  input {
    font-family: ${FONT_FAMILY.main}, sans-serif;
  }

  a {
    color: var(--primary-color);

    &:hover,
    :active {
      color: var(--ant-primary-5);
    }
  }
`;
