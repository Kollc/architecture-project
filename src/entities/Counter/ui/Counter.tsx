import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const Inc = () => {
    dispatch(counterActions.inc());
  };

  const Dec = () => {
    dispatch(counterActions.dec());
  };

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button onClick={Inc} data-testid='inc-btn'>
        {t('Inc')}
      </Button>
      <Button onClick={Dec} data-testid='dec-btn'>
        {t('Deс')}
      </Button>
    </div>
  );
};
