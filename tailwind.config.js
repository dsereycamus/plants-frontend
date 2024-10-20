/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            white: '#FFFFFF',
            black: '#000000',
            green: '#005212',
            red: '#F42C2C',
            lightRed: '#F02B3F',
            background: '#E9EAE5',
            blue: '#415BE7',
            lightBlue: '#F4F5FE',
            gray: '#DBDDE3',
            purple: '#425BE7',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            backgroundImage: {
                'home-image-1': "url('/Home-1.jpeg')",
                'home-image-2': "url('/Home-2.png')",
                'home-car': "url('/Home-Car.png')",
                'home-tree': "url('/Home-Tree.png')",
                'home-earth': "url('/Home-Earth.png')",
            },
            spacing: {
                '8xl': '96rem',
                '9xl': '128rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
}
