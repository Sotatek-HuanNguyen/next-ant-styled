import { BaseButton } from '@/components/common/base-button';
import { BaseSteps } from '@/components/common/base-steps';
import { BaseForm } from '@/components/common/forms/base-form';
import { BaseSelect } from '@/components/common/selects/base-select';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const PhoneItem = styled(BaseForm.Item)`
  .ant-input-group-addon {
    padding: 0;
  }

  .ant-input-group-addon > div {
    width: 100% !important;
  }
`;

export const Steps = styled(BaseSteps)``;

export const FormContent = styled.div`
  margin: 1.25rem 0.5rem;
`;

export const PrevButton = styled(BaseButton)`
  margin: 0 0.5rem;
`;

export const Select = styled(BaseSelect)`
  width: 5.9375rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 1.25rem 0.5rem;
`;

export const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailsTitle = styled.div`
  color: var(--text-light-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-right: 0.5rem;
`;

export const DetailsValue = styled.div`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
`;

export const Row = styled.div`
  display: flex;
  gap: 0.5rem;
`;
