import {
  ExtraContent,
  Footer,
  Header,
  Hero,
  MainContent,
  RelatedImages,
  RelatedPosts,
  Sidebar,
} from './sections';

export const ChallengeLayout = () => {
  return (
    <div className="flex flex-col w-full h-[calc(100vh-80px)] gap-2">
      <div className="h-16">
        <Header />
      </div>
      <div className="flex w-full flex-1 gap-2">
        <div className="flex flex-col w-full gap-2">
          <Hero className="h-2/5" />
          <Sidebar className="h-3/5" />
        </div>
        <div className="flex flex-col w-full gap-2">
          <MainContent className="h-2/3" />
          <ExtraContent className="h-1/3" />
        </div>
      </div>
      <div className="flex h-1/5 max-h-40 gap-2">
        <RelatedImages className="w-2/3" />
        <RelatedPosts className="w-1/3" />
      </div>
      <div className="h-16">
        <Footer />
      </div>
    </div>
  );
};
