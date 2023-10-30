import { d as defineEventHandler, u as useAppConfig } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shikiji';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';

const opensearch_xml = defineEventHandler(async () => {
  var _a, _b, _c, _d;
  const config = useAppConfig();
  return '<?xml version="1.0"?>\n<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">\n  <ShortName>' + ((_a = config == null ? void 0 : config.docus) == null ? void 0 : _a.title) + "</ShortName>\n  <Description>" + ((_b = config == null ? void 0 : config.docus) == null ? void 0 : _b.description) + '</Description>\n  <Image width="16" height="16" type="image/x-icon">' + ((_c = config == null ? void 0 : config.docus) == null ? void 0 : _c.url) + '/favicon.ico</Image>\n  <Url type="text/html" template="' + ((_d = config == null ? void 0 : config.docus) == null ? void 0 : _d.url) + '">\n    <Param name="q" value="{searchTerms}"/>\n  </Url>\n</OpenSearchDescription>';
});

export { opensearch_xml as default };
//# sourceMappingURL=opensearch.xml.mjs.map
