import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Theme } from '../theme/theme';
import { ScrollToTop } from '../scroll/scroll';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
        new Theme();
        new ScrollToTop();
    }

    public start(): void {
        const sourcesElement = document.querySelector('.sources') as HTMLElement;

        sourcesElement.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.closest('.source__item')) {
                this.view.drawNewsSkeleton();
                this.controller.getNews(e, (data) => this.view.drawNews(data));
            }
        });

        this.controller.getSources((data) => {
            this.view.drawSources(data);
            const firstSource = document.querySelector('.source__item') as HTMLElement;
            if (firstSource) {
                firstSource.click();
            }
        });
    }
}

export default App;
