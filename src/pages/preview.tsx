import { useRouter } from "next/router";
import { PageComponent } from "./[...pageUri]";
//default schema types
//import type { Page, Post } from "@faustjs/core";
import { PostComponent } from "./posts/[postSlug]";
//your schema types after custom posts created and npm run generate
import { client, Page, Post } from 'client';

export default function Preview() {
  const {
    query: { p, page_id },
  } = useRouter();
  const { usePreview } = client;
  const isPage = !!page_id;

  //Add preview logic for custom post type components here

  const postOrPage: unknown = usePreview({
    pageId: isPage ? (p as string) : undefined,
    postId: !isPage ? (p as string) : undefined,
  } as any);

  if (postOrPage === null) {
    return <>Not Found</>;
  }

  if (isPage) {
    return <PageComponent page={postOrPage as Page} />;
  }

  return <PostComponent post={postOrPage as Post} />;
}
