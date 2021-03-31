import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2.75,
  headerFontFamily: ['Poppins'],
  headerWeight: 700,
  googleFonts: [
    {
      name: 'Poppins',
      styles: ['400', '700'],
    },
    {
      name: 'Heebo',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  bodyFontFamily: ['Heebo'],
  bodyWeight: 400,
  plugins: [new CodePlugin()],
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
