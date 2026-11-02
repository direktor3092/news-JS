export class Theme {
    private toggle: HTMLInputElement;
    private isDark: boolean;

    constructor() {
        this.toggle = document.querySelector('#theme-toggle') as HTMLInputElement;
        const savedTheme = localStorage.getItem('theme');
        this.isDark = savedTheme ? savedTheme === 'dark' : true;

        this.toggle.checked = !this.isDark;

        this.applyTheme();

        this.toggle.addEventListener('change', () => this.toggleTheme());
    }

    private toggleTheme(): void {
        this.isDark = !this.toggle.checked;
        this.applyTheme();
    }

    private applyTheme(): void {
        if (this.isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }
}
