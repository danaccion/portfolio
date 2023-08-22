module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        'phone': '320px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        },
        marquee2: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          },
        },
      },
    },
  },
  plugins: [],
};