import {
  type MouseEvent,
  type ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, onClose, isOpen }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const closeHandler = useCallback(() => {
    setIsClosing(true);

    timeRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose]);

  const onKeydownHandle = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydownHandle);
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeydownHandle);
    };
  }, [isOpen, onKeydownHandle]);

  const contentClickHandler = (
    evt: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    evt.stopPropagation();
  };

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={contentClickHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
