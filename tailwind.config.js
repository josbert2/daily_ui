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
          '50': '#f4f9ff', 
          '100': '#e9f4ff', 
          '200': '#c7e3ff', 
          '300': '#a5d3ff', 
          '400': '#62b1ff', 
          '500': '#1e90ff', 
          '600': '#1b82e6', 
          '700': '#176cbf', 
          '800': '#125699', 
          '900': '#0f477d'
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
        },
        'primary-warning': {
          '50': '#fffbf2', 
          '100': '#fff6e6', 
          '200': '#ffe9c0', 
          '300': '#ffdb9a', 
          '400': '#ffc04e', 
          '500': '#ffa502', 
          '600': '#e69502', 
          '700': '#bf7c02', 
          '800': '#996301', 
          '900': '#7d5101'
      },
      'primary-green': {
            '50': '#f5fdf8', 
            '100': '#eafbf1', 
            '200': '#cbf5dc', 
            '300': '#abeec7', 
            '400': '#6de29d', 
            '500': '#2ed573', 
            '600': '#29c068', 
            '700': '#23a056', 
            '800': '#1c8045', 
            '900': '#176838'
        },
        'wendy-josbert': {
     
            '50': '#f4fafe', 
            '100': '#e8f5fe', 
            '200': '#c6e6fb', 
            '300': '#a4d7f9', 
            '400': '#60b9f5', 
            '500': '#1c9bf0', 
            '600': '#198cd8', 
            '700': '#1574b4', 
            '800': '#115d90', 
            '900': '#0e4c76'
        
      }

      }
    },
  },
  plugins: [],
}
