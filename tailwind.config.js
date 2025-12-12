/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		fontFamily: {
			// Simplified font system: Inter (primary), Outfit (display), JetBrains Mono (mono)
			sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
			inter: ['Inter', 'system-ui', 'sans-serif'],
			outfit: ['Outfit', 'sans-serif'],
			mono: ['JetBrains Mono', 'monospace'],
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			spacing: {
				// 8px grid system
				'xs': 'var(--spacing-xs, 0.5rem)',
				'sm': 'var(--spacing-sm, 1rem)',
				'md': 'var(--spacing-md, 1.5rem)',
				'lg': 'var(--spacing-lg, 2rem)',
				'xl': 'var(--spacing-xl, 3rem)',
				'2xl': 'var(--spacing-2xl, 4rem)',
				'3xl': 'var(--spacing-3xl, 6rem)',
			},
			colors: {
				// Chapter-specific colors for consistency
				chapter: {
					sap: 'var(--sap-color, #f59e0b)',
					it: 'var(--it-color, #3b82f6)',
					marketing: 'var(--marketing-color, #8b5cf6)',
					manufacturing: 'var(--manufacturing-color, #e4002b)',
					finance: 'var(--finance-color, #10b981)',
					logistics: 'var(--logistics-color, #f97316)',
					sales: 'var(--sales-color, #6366f1)',
					gitex: 'var(--gitex-color, #1e40af)',
				},
				// Legacy Tolaram colors (for backward compatibility)
				tolaram: {
					midnight: '#2B2B2B',    // Updated to Graphite Gray
					teal: '#FFD300',        // Updated to Cyber Yellow
					cyan: '#FF6700',        // Updated to Safety Orange
					ghostwhite: '#FAFAFA',  // Updated to Bone White
					surface: '#E5E7EB',     // Updated to Silver Gray
					charcoal: '#111111',    // Updated to Almost Black
					coolgray: '#4B5563',    // Updated to Medium Gray
					success: '#10B981',     // Success - For metrics
					warning: '#F59E0B',     // Warning - For pending items
				},
				// ShadCN Color System
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'caret-blink': {
					'0%,70%,100%': { opacity: '1' },
					'20%,50%': { opacity: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.05)' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-left': {
					'0%': { transform: 'translateX(100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-right': {
					'0%': { transform: 'translateX(-100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'data-flow': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateX(100%)', opacity: '0' },
				},
				'rotate-360': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'caret-blink': 'caret-blink 1.25s ease-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-down': 'slide-down 0.6s ease-out',
				'slide-left': 'slide-left 0.6s ease-out',
				'slide-right': 'slide-right 0.6s ease-out',
				'data-flow': 'data-flow 3s ease-in-out infinite',
				'rotate-slow': 'rotate-360 20s linear infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
