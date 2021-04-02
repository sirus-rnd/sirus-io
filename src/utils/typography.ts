import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2.75,
  headerFontFamily: ['Poppins'],
  headerWeight: 700,
  bodyFontFamily: ['Heebo'],
  bodyWeight: 400,
  plugins: [new CodePlugin()],
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
