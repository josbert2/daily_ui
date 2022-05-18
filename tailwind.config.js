module.exports = {
  content: [
    './app/Resources/views/**/*.html.twig',
    './web/assets/encore/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Gilroy-Bold': ['Gilroy-Bold'],
        'Gilroy-Regular': ['Gilroy-Regular'],
        'Gilroy-Medium': ['Gilroy-Medium'],
        'Gilroy-Light': ['Gilroy-Light'],
        'Gilroy-ExtraLight': ['Gilroy-ExtraLight'],
        'Gilroy-Black': ['Gilroy-Black'],
      },
      colors: {
        'primary-blue': {
          '50': '#f8faff', 
          '100': '#f1f4ff', 
          '200': '#dce5ff', 
          '300': '#c6d5ff', 
          '400': '#9cb5ff', 
          '500': '#7195ff', 
          '600': '#6686e6', 
          '700': '#5570bf', 
          '800': '#445999', 
          '900': '#37497d'
        },
        'primary-danger': {
          '50': '#fff8f8', 
          '100': '#fff1f1', 
          '200': '#ffdddb', 
          '300': '#ffc8c5', 
          '400': '#ff9f9a', 
          '500': '#ff766f', 
          '600': '#e66a64', 
          '700': '#bf5953', 
          '800': '#994743', 
          '900': '#7d3a36'
        },
        'primary-purple': {
            '50': '#fef9ff', 
            '100': '#fdf3ff', 
            '200': '#fae0ff', 
            '300': '#f7cdff', 
            '400': '#f0a8ff', 
            '500': '#ea82ff', 
            '600': '#d375e6', 
            '700': '#b062bf', 
            '800': '#8c4e99', 
            '900': '#73407d'
        },
        'primary-gray': {
            '50': '#f5f6f7', 
            '100': '#ebecef', 
            '200': '#ccd1d8', 
            '300': '#aeb5c1', 
            '400': '#717d92', 
            '500': '#344563', 
            '600': '#2f3e59', 
            '700': '#27344a', 
            '800': '#1f293b', 
            '900': '#192231'
        }

      }
    },
  },
  plugins: [],
}
