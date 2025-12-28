import { ArrowDown } from '@solar-icons/react';
import cn from 'classnames';
import {
  useId,
  useState,
  type ComponentProps,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import { variants, type IVariants } from './cva';
import css from './styles.module.scss';

interface Props extends Omit<ComponentProps<'div'>, 'onToggle'> {
  question: ReactNode;
  answer: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  controlled?: boolean;
}

type TExternalVariants = Omit<IVariants, keyof Props>;

export type FaqProps = TExternalVariants & Props;

export function Faq({
  question,
  answer,
  open: controlledOpen,
  defaultOpen = false,
  onToggle,
  controlled = false,
  className: extClassName,
  ...restProps
}: PropsWithChildren<FaqProps>) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const generatedId = useId();
  const faqId = `faq-${generatedId}`;
  const answerId = `faq-answer-${generatedId}`;

  const isControlled = controlled || controlledOpen !== undefined;
  const open = isControlled ? (controlledOpen ?? false) : internalOpen;

  const handleToggle = () => {
    const newOpen = !open;
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onToggle?.(newOpen);
  };

  const className = cn(
    variants({
      open: open,
    }),
    extClassName,
  );

  return (
    <div className={className} {...restProps}>
      <button
        type="button"
        className={css.header}
        onClick={handleToggle}
        aria-expanded={open}
        aria-controls={answerId}
        id={faqId}
      >
        <span className={css.question}>{question}</span>
        <span className={css.icon} aria-hidden="true">
          <ArrowDown />
        </span>
      </button>
      {open && (
        <div className={css.answer} id={answerId} role="region" aria-labelledby={faqId}>
          {answer}
        </div>
      )}
    </div>
  );
}

Faq.displayName = 'Faq';
