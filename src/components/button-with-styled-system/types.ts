import { ElementType, RefAttributes, HTMLProps } from 'react';
import { ResponsiveStyleValue, SystemStyleObject, Theme, CSSObject } from '@styled-system/css';
import {
  SpaceProps,
  LayoutProps,
  PositionProps,
  FontSizeProps,
  ColorProps,
  FlexProps as FlexDefaultProps,
  OrderProps,
  BorderProps,
  BackgroundProps,
  AlignSelfProps,
  ResponsiveValue,
  FlexboxProps,
  FontFamilyProps,
  FontWeightProps,
  TextAlignProps,
  LetterSpacingProps,
  ButtonStyleProps,
  GridGapProps,
  GridColumnGapProps,
  GridRowGapProps,
  GridColumnProps,
  GridRowProps,
  GridAutoFlowProps,
  GridAutoColumnsProps,
  GridAutoRowsProps,
  GridTemplateColumnsProps,
  GridTemplateRowsProps,
  GridTemplateAreasProps,
  GridAreaProps
} from 'styled-system';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type SxStyleProp =
  | SystemStyleObject
  | Record<
      string,
      | SystemStyleObject
      | ResponsiveStyleValue<number | string>
      | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>
    >;

export interface SxProps {
  sx?: SxStyleProp;
  theme?: Theme;
  __css?: SxStyleProp;
}

export type Sx = (props: SxProps) => CSSObject;

export interface VariantProps {
  variant: string | string[];
  theme: Theme;
  tx: string;
}

export type Variant = (props: VariantProps) => CSSObject;

export interface BaseProps extends RefAttributes<{}> {
  as?: ElementType;
  css?: CSSObject;
}

interface BaseStyleProps
  extends BaseProps,
    SpaceProps,
    LayoutProps,
    FontSizeProps,
    ColorProps,
    FlexDefaultProps,
    OrderProps,
    AlignSelfProps,
    BorderProps,
    BackgroundProps,
    PositionProps,
    SxProps {
  variant?: ResponsiveValue<string>;
  tx?: string;
}

export interface BoxProps
  extends BaseStyleProps,
    Omit<HTMLProps<HTMLDivElement>, keyof BaseStyleProps> {}

export interface FlexProps extends BoxProps, FlexboxProps {}

export interface GridProps
  extends BoxProps,
    GridGapProps,
    GridColumnGapProps,
    GridRowGapProps,
    GridColumnProps,
    GridRowProps,
    GridAutoFlowProps,
    GridAutoColumnsProps,
    GridAutoRowsProps,
    GridTemplateColumnsProps,
    GridTemplateRowsProps,
    GridTemplateAreasProps,
    GridAreaProps {}

interface TextBaseProps
  extends BaseStyleProps,
    FontFamilyProps,
    FontWeightProps,
    TextAlignProps,
    LetterSpacingProps {}

export interface TextProps
  extends TextBaseProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof TextBaseProps> {}

export interface HeadingProps
  extends TextBaseProps,
    Omit<React.HTMLProps<HTMLHeadingElement>, keyof TextBaseProps> {}

interface LinkBaseProps extends BoxProps {}

export interface LinkProps
  extends LinkBaseProps,
    Omit<React.HTMLProps<HTMLAnchorElement>, keyof LinkBaseProps> {}

interface ButtonBaseProps extends FlexProps, FontWeightProps, ButtonStyleProps {}

export interface ButtonProps
  extends ButtonBaseProps,
    Omit<HTMLProps<HTMLDivElement>, keyof ButtonBaseProps> {}

interface ImageBaseProps extends BoxProps {}

export interface ImageProps
  extends ImageBaseProps,
    Omit<React.HTMLProps<HTMLImageElement>, keyof ImageBaseProps> {}

export interface SvgProps extends BoxProps {
  viewBox?: string;
}

export interface Colors {
  [key: string]: string | string[];
}
