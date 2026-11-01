export class ScrollToTop {
    private button: HTMLButtonElement;

    constructor() {
        this.button = document.querySelector('#scroll-to-top') as HTMLButtonElement;

        window.addEventListener('scroll', () => this.toggleVisibility());

        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
    }

    private toggleVisibility(): void {
        if (window.scrollY > 300) {
            this.button.classList.add('show');
        } else {
            this.button.classList.remove('show');
        }
    }
}
