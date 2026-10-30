export class Theme {
    private button: HTMLButtonElement;
    private isDark: boolean;

    constructor() {
        this.button = document.querySelector('#theme-toggle') as HTMLButtonElement;
        const savedTheme = localStorage.getItem('theme');
        this.isDark = savedTheme ? savedTheme === 'dark' : true;

        this.applyTheme();
        this.button.addEventListener('click', () => this.toggleTheme());
    }

    private toggleTheme(): void {
        this.isDark = !this.isDark;
        this.applyTheme();
    }

    private applyTheme(): void {
        if (this.isDark) {
            document.documentElement.removeAttribute('data-theme');
            this.button.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            this.button.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        }
    }
}