/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      colors:{
        white:'#FFFFFF',
        primary:'#00ADB5',
        secondary: {
          100:'#393E46',
          200:'#232931',
        },
      },
      fontFamily:{
        body: ['Pontano Sans','sans-serif'],
        title:['Poppins','sans-serif'],
      },
      fontSize: {
        xl: ['2.5rem',{ 
          lineHeight: '3rem',
          letterSpacing: '.0001rem',
        }
        ],
        lg: '1.5rem',
        md: '1.2rem',
        sm: '.95rem',
        label: ['.8rem',{
          lineHeight: '1rem',
          letterSpacing: '.1rem',
          fontWeight: '700',
        }
        ],
        icon: ['1.8rem',{
          lineHeight: '1rem',
          letterSpacing: '.1rem',
          fontWeight: '700',
        }
        ],
      }
    },
  },
  plugins: [],
}
