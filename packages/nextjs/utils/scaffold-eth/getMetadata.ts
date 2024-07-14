import type { Metadata } from "next";

export const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;

const titleTemplate = "%s | Scaffold-ETH 2";

export const getMetadata = ({
  title,
  description,
  imageRelativePath = "/frame-1.jpg",
}: {
  title: string;
  description: string;
  imageRelativePath?: string;
}): Metadata => {
  const imageUrl = `${baseUrl}${imageRelativePath}`;

  return {
    title: {
      default: title,
      template: titleTemplate,
    },
    description: description,
    openGraph: {
      title: {
        default: title,
        template: titleTemplate,
      },
      description: description,
      images: [
        {
          url: imageUrl,
        },
      ],
    },
    twitter: {
      title: {
        default: title,
        template: titleTemplate,
      },
      description: description,
      images: [imageUrl],
    },
    other: {
      "fc:frame": "vNext",
      "fc:frame:image": imageUrl,
      "fc:frame:button:1": "Yes",
      "fc:frame:button:1:action": "post",
      "fc:frame:button:1:target": "${baseUrl}/api/frame?id=1",
      "fc:frame:button:2": "No",
      "fc:frame:button:2:action": "post",
      "fc:frame:post_url": `${baseUrl}/api/frame?id=1`,
    },
  };
};
