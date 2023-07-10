import {
  type InputHTMLAttributes,
  memo,
  useState,
  type ChangeEvent,
  useEffect,
  useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

const SIZE_VARIABLE_PX = 5.85;

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = 'stirng',
    placeholder,
    autofocus,
    ...other
  }: InputProps) => {
    const ref = useRef<HTMLInputElement | null>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPostition, setCaretPostiton] = useState(0);

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(evt.target.value);
        setCaretPostiton(evt.target.value.length);
      }
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onSelect = (evt: any) => {
      setCaretPostiton(evt?.target?.selectionStart || 0);
    };

    return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
        {placeholder && (
          <div className={cls.placeholder}>{`${placeholder}>`}</div>
        )}
        <div className={cls.caretWrapper}>
          <input
            ref={ref}
            className={cls.Input}
            onChange={onChangeHandler}
            value={value}
            type={type}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            {...other}
          />
          {isFocused && (
            <span
              style={{ left: `${caretPostition * SIZE_VARIABLE_PX}px` }}
              className={cls.caret}
            ></span>
          )}
        </div>
      </div>
    );
  }
);
