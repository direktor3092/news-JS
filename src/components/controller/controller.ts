import AppLoader from './appLoader';
import { NewsResponse, SourcesResponse } from '../interfaces';
import { Endpoints } from '../../enums';

class AppController extends AppLoader {
    getSources(callback: (data: SourcesResponse) => void): void {
        super.getResp<SourcesResponse>({ endpoint: Endpoints.Sources }, callback);
    }

    getNews(e: Event, callback: (data: NewsResponse) => void): void {
        const target = (e.target as HTMLElement).closest('.source__item') as HTMLElement;
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
