import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
}

const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const throwError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={throwError} className={classNames('', {}, [className])}>
      {t('throw Error')}
    </Button>
  );
};

export { BugButton };
