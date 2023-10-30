import { nextTick } from 'vue';

function usePinceauRuntimeDebug(tokensHelperConfig) {
  let nextTickGroup = [];
  let nextTickCalled = false;
  const TOKEN_NOT_FOUND_MESSAGE = (path, options) => {
    const { loc } = options;
    const message = [
      `\u{1F511} ${path}`
    ];
    if (loc == null ? void 0 : loc.file) {
      message.push("");
      message.push(`\u{1F517} ${loc.file}`);
    }
    if (loc == null ? void 0 : loc.type) {
      message.push("");
      message.push(`\u2753 Missing token inside a ${loc.type === "v" ? "variant" : "computed style or CSS prop"}.`);
    }
    nextTickGroup.push(message.join("\n"));
    if (!nextTickCalled) {
      nextTick(() => {
        const title = "\u{1F58C}\uFE0F Pinceau `runtime` encountered some errors!";
        {
          console.log(title);
        }
        nextTickGroup.forEach((m) => {
          {
            console.log("\n");
          }
          console.log(m);
          {
            console.log("\n");
          }
        });
        console.log("\u203C\uFE0F This warning will be hidden from production and can be disabled using `dev: false` option.");
      });
      nextTickCalled = true;
    }
  };
  tokensHelperConfig.onNotFound = TOKEN_NOT_FOUND_MESSAGE;
}

export { usePinceauRuntimeDebug };
//# sourceMappingURL=debug-43adc91a.mjs.map
