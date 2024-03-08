import { BaseButton } from '@/components/common/base-button';
import { BaseCard } from '@/components/common/base-card';
import { BaseInput } from '@/components/common/inputs/base-input';
import { BaseSelect } from '@/components/common/selects/base-select';
import styled from 'styled-components';

export const TablesWrapper = styled.div`
  margin-top: 1.875rem;
`;

export const Card = styled(BaseCard)`
  margin-bottom: 2rem;
`;

export const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Button = styled(BaseButton)``;
export const Input = styled(BaseInput)``;
export const Select = styled(BaseSelect)`
  min-width: 200px;
`;
