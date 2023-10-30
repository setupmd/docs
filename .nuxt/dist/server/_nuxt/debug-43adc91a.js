import { nextTick } from "vue";
function usePinceauRuntimeDebug(tokensHelperConfig) {
  let nextTickGroup = [];
  let nextTickCalled = false;
  const TOKEN_NOT_FOUND_MESSAGE = (path, options) => {
    const { loc } = options;
    const message = [
      `🔑 ${path}`
    ];
    if (loc == null ? void 0 : loc.file) {
      message.push("");
      message.push(`🔗 ${loc.file}`);
    }
    if (loc == null ? void 0 : loc.type) {
      message.push("");
      message.push(`❓ Missing token inside a ${loc.type === "v" ? "variant" : "computed style or CSS prop"}.`);
    }
    nextTickGroup.push(message.join("\n"));
    if (!nextTickCalled) {
      nextTick(() => {
        const title = "🖌️ Pinceau `runtime` encountered some errors!";
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
        console.log("‼️ This warning will be hidden from production and can be disabled using `dev: false` option.");
      });
      nextTickCalled = true;
    }
  };
  tokensHelperConfig.onNotFound = TOKEN_NOT_FOUND_MESSAGE;
}
export {
  usePinceauRuntimeDebug
};
//# sourceMappingURL=debug-43adc91a.js.map
