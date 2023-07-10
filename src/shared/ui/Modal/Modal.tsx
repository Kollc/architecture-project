import {
  type MouseEvent,
  type ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import Portal from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isLazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = ({
  className,
  children,
  onClose,
  isOpen,
  isLazy,
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const mods: Mods = {
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
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydownHandle);
    }
    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
      window.removeEventListener('keydown', onKeydownHandle);
    };
  }, [isOpen, onKeydownHandle]);

  const contentClickHandler = (
    evt: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    evt.stopPropagation();
  };

  if (isLazy && !isMounted) {
    return null;
  }

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
