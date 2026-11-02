import AppLoader from './appLoader';
import { NewsResponse, SourcesResponse } from '../interfaces';
import { Endpoints } from '../../enums';

class AppController extends AppLoader {
    public getSources(callback: (data: SourcesResponse) => void): void {
        super.getResp<SourcesResponse>({ endpoint: Endpoints.Sources }, callback);
    }

    public getNews(e: Event, callback: (data: NewsResponse) => void): void {
        const target = (e.target as HTMLElement).closest<HTMLElement>('.source__item');
        if (!target) return;

        const newsContainer = e.currentTarget as HTMLElement;
        const sourceId = target.getAttribute('data-source-id') as string;

        newsContainer.setAttribute('data-source', sourceId);
        super.getResp<NewsResponse>(
            {
                endpoint: Endpoints.Everything,
                options: { sources: sourceId },
            },
            callback
        );
    }
}

export default AppController;
