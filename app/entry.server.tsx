import {RemixServer} from '@remix-run/react';
import {createContentSecurityPolicy} from '@shopify/hydrogen';
import type {EntryContext} from '@shopify/remix-oxygen';
import isbot from 'isbot';
import {renderToReadableStream} from 'react-dom/server';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const {nonce, header, NonceProvider} = createContentSecurityPolicy();

  // Modify the CSP to allow iframe source
  const cspDirectives = {
    'frame-src': ["'self'", 'https://www.google.com'], // Replace with your actual iframe source
  };

  const body = await renderToReadableStream(
    <NonceProvider>
      <RemixServer context={remixContext} url={request.url} />
    </NonceProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        // eslint-disable-next-line no-console
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set(
    'Content-Security-Policy',
    createHeaderString(cspDirectives),
  );

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}

function createHeaderString(headerObject: {[key: string]: string | string[]}) {
  return Object.entries(headerObject)
    .map(
      ([directive, values]) =>
        `${directive} ${Array.isArray(values) ? values.join(' ') : values}`,
    )
    .join('; ');
}
