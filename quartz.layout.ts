import { PageLayout, SharedLayout, FullPageLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

type CustomPageLayout = Pick<FullPageLayout, "beforeBody" | "left" | "right" | "afterBody">



// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: CustomPageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.DesktopOnly(Component.Profile()),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Graph(),
  ],
  afterBody: [
    Component.Backlinks(),
    Component.Comments({
      provider: 'giscus',
      options: {
        repo: "anareaty/paperless-forest",
        repoId: "R_kgDOPz6IWg",
        category: 'Announcements',
        categoryId: "DIC_kwDOPz6IWs4Cvs4a",
        lang: 'ru',
        mapping: "title",
        inputPosition: "top",
        themeUrl: "http://paperless-forest.ru/static/giscus",
        lightTheme: "light-theme"
      }
    }),
  ]
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  //beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.DesktopOnly(Component.Profile()),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
  ],
}
