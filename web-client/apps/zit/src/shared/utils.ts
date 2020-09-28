import { css, ThemedCssFunction, Interpolation, ThemedStyledProps } from 'styled-components';

export interface BreakPoints {
  desktop: {
    min: 1024;
  };
  tablet: {
    min: 600;
    max: 1023;
  };
  phone: {
    max: 599;
  };
  [key: string]: { min?: number; max?: number };
}

export const sizes: BreakPoints = {
  desktop: { min: 1024 },
  tablet: { min: 600, max: 1023 },
  phone: { max: 599 },
};

export interface Media {
  desktop: ThemedCssFunction<any>;
  tablet: ThemedCssFunction<any>;
  phone: ThemedCssFunction<any>;
}

// Iterate through the sizes and create a media template
export const media: Media = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (t: TemplateStringsArray, ...i: Interpolation<ThemedStyledProps<any, any>>[]) => {
      const { min, max } = sizes[label];
      if (min != null && max != null) {
        return css`
          @media (min-width: ${min}px) and (max-width: ${max}px) {
            ${css(t, ...i)};
          }
        `;
      } else if (min != null && max == null) {
        return css`
          @media (min-width: ${min}px) {
            ${css(t, ...i)};
          }
        `;
      }

      return css`
        @media (max-width: ${max}px) {
          ${css(t, ...i)};
        }
      `;
    };

    return acc;
  },
  /* tslint:disable-next-line */
  {} as Media,
);
