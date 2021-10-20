import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ComponentClass, PropsWithChildren } from 'react';
import { AppInitialProps } from 'next/app';
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp:
            (App: ComponentClass) =>
            (props: PropsWithChildren<AppInitialProps>) =>
              sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
