import React from "react";

/* Provide a generic HTML element */
type AsProp<Element extends React.ElementType> = {
  as?: Element;
};

type PolymorphicBoxProps<Element extends React.ElementType> =
  React.PropsWithChildren<AsProp<Element>> & // { children?: React.ReactNode, as?: Element }
    React.ComponentPropsWithoutRef<Element>;

/* Constrain the ref type to be that of the element passed in as a generic */
type PolymorphicRef<Element extends React.ElementType> =
  React.ComponentPropsWithRef<Element>["ref"];

type BoxComponent = <Element extends React.ElementType = "span">(
  props: PolymorphicBoxProps<Element> & { ref?: PolymorphicRef<Element> }
) => React.ReactElement | null;

export const Box: BoxComponent = React.forwardRef(
  <Element extends React.ElementType = "span">(
    { as, children, ...restProps }: PolymorphicBoxProps<Element>,
    ref?: PolymorphicRef<Element>
  ) => {
    const Component = as ?? "span";

    return (
      <Component {...restProps} ref={ref}>
        {children}
      </Component>
    );
  }
);
