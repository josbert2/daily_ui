module.exports = {
  content: [
    './app/Resources/views/**/*.html.twig',
    './web/assets/encore/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'content': {
          '50': '#f4f4f4', 
          '100': '#e8e9e9', 
          '200': '#c7c7c8', 
          '300': '#a5a5a7', 
          '400': '#616264', 
          '500': '#1d1e22', 
          '600': '#1a1b1f', 
          '700': '#16171a', 
          '800': '#111214', 
          '900': '#0e0f11'
        },
        'content-sub': {
          '50': '#f4f5f5', 
          '100': '#eaeaea', 
          '200': '#cacbcc', 
          '300': '#ababad', 
          '400': '#6b6c6f', 
          '500': '#2c2d31', 
          '600': '#28292c', 
          '700': '#212225', 
          '800': '#1a1b1d', 
          '900': '#161618'
        }
      }
    },
  },
  plugins: [],
}
