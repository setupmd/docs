import { s as serverQueryContent$1, d as defineEventHandler, u as useAppConfig } from './nitro/node-server.mjs';
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

const serverQueryContent = serverQueryContent$1;

const search = defineEventHandler(async (event) => {
  var _a, _b;
  const appConfig = useAppConfig();
  ((_b = (_a = appConfig == null ? void 0 : appConfig.docus) == null ? void 0 : _a.search) == null ? void 0 : _b.mode) || "meta";
  let docs = await serverQueryContent(event).find();
  docs = await Promise.all(
    docs.filter(
      (doc) => {
        return (doc == null ? void 0 : doc._extension) === "md" && (doc == null ? void 0 : doc._draft) === false && !(doc == null ? void 0 : doc._empty);
      }
    ).map(
      async ({ _id: id, _path: path, _dir: dir, title = "", description = "", body = void 0, ...rest }) => {
        var _a2;
        const { directoryIcon } = rest;
        if (directoryIcon) {
          console.log({ directoryIcon });
        }
        return {
          id,
          path,
          dir,
          title,
          description,
          keywords: (_a2 = body == null ? void 0 : body.toc) == null ? void 0 : _a2.links.map((link) => link == null ? void 0 : link.text),
          // Only fetch body for `full-text` mode.
          body: extractTextFromAst(body) || ""
        };
      }
    )
  );
  return docs;
});
function extractTextFromAst(node) {
  let text = "";
  if (node.type === "text") {
    text += node.value;
  }
  if (node.children) {
    for (const child of node.children) {
      text += " " + extractTextFromAst(child);
    }
  }
  return text;
}

export { search as default };
//# sourceMappingURL=search.mjs.map
