module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        donjamon: '#9f063f'
      },
      animation: {
        'scroll': 'scroll 2.2s  cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite',
      },
      keyframes: {
        scroll: {
          '0%': { opacity: '0' },
          '10%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(15px)', opacity: '0' },
        }
      },
      backgroundImage: {
        'hero-image': "url('~/assets/images/hero.webp')"
      }
    },
  },
  plugins: [],
}
