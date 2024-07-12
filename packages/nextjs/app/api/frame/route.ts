import { NextRequest, NextResponse } from "next/server";
import { baseUrl } from "~~/utils/scaffold-eth/getMetadata";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  const idAsNumber = id ? Number(id) : 1;

  const nextId = idAsNumber + 1;

  if (idAsNumber === 3) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>Optima Superchain</title>
    <meta property="og:image" content="${baseUrl}/optima.jpg" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${baseUrl}/optima.jpg" />
    <meta property="fc:frame:button:1" content="Use Toolkit" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://optima-tools.vercel.app/" />
    
    </head></html>`);
  }

  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>The frame ${id}</title>
    <meta property="og:image" content="${baseUrl}/optima.jpg" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${baseUrl}/optima.jpg" />
    <meta property="fc:frame:button:1" content="Next Page ➡️" />
    <meta property="fc:frame:post_url" content="${baseUrl}/api/frame?id=${nextId}" />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
