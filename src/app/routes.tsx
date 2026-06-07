import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { EKoranReaderLayout } from './layouts/EKoranReaderLayout';
import { HomePage } from './pages/HomePage';
import { KanalPage } from './pages/KanalPage';
import { CategoryPage } from './pages/CategoryPage';
import { ArticlePage } from './pages/ArticlePage';
import { PhotoPage } from './pages/PhotoPage';
import { PhotoDetailPage } from './pages/PhotoDetailPage';
import { VideoPage } from './pages/VideoPage';
import { FokusPage } from './pages/FokusPage';
import { EKoranPage } from './pages/EKoranPage';
import { EKoranDetailPage } from './pages/EKoranDetailPage';
import { EventPage } from './pages/EventPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { SearchPage } from './pages/SearchPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'kanal', Component: KanalPage },
      { path: 'kanal/:slug', Component: CategoryPage },
      { path: 'berita/:slug', Component: ArticlePage },
      { path: 'foto', Component: PhotoPage },
      { path: 'foto/:slug', Component: PhotoDetailPage },
      { path: 'video', Component: VideoPage },
      { path: 'fokus', Component: FokusPage },
      { path: 'ekoran', Component: EKoranPage },
      { path: 'event', Component: EventPage },
      { path: 'event/:slug', Component: EventDetailPage },
      { path: 'search', Component: SearchPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
  // E-Koran Reader layout - With Header but WITHOUT Footer
  {
    path: '/ekoran',
    Component: EKoranReaderLayout,
    children: [
      { path: ':id', Component: EKoranDetailPage },
    ],
  },
]);
