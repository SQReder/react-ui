import * as React from 'react';
import { TimeInput, TimeInputProps } from '#src/components-ver2/input';
import { Field, FieldOwnProps } from '#src/components-ver2/Field';
import { uid } from '#src/components/common/uid';

export interface TimeFieldProps extends TimeInputProps, Omit<FieldOwnProps, 'inputRef'> {}

export const TimeField = React.forwardRef<HTMLInputElement, TimeFieldProps>((props, ref) => {
  const fieldRef = React.useRef(null);
  const {
    className,
    displayInline,
    status,
    required,
    extraText,
    label,
    id = uid(),
    disabled,
    displayCharacterCounter,
    ...restProps
  } = props;
  const fieldContainerProps = {
    className,
    extraText,
    status,
    required,
    label,
    id,
    displayInline,
    disabled,
    displayCharacterCounter,
    ref: fieldRef,
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as Record<string, any>;

  (Object.keys(restProps) as Array<keyof typeof restProps>).forEach((key) => {
    if (key.startsWith('data-field')) {
      fieldContainerProps[key] = restProps[key];
    }
  });

  const TimeProps = {
    ref,
    id,
    'aria-required': required,
    status,
    disabled,
    ...restProps,
    portalTargetRef: fieldRef,
  };
  return (
    <Field {...fieldContainerProps}>
      <TimeInput {...TimeProps} />
    </Field>
  );
});

TimeField.displayName = 'TimeField';
