import {
  init_define_import_meta_env
} from "./chunk-YRUDZAGT.js";
import "./chunk-F3UQABQJ.js";

// ../../node_modules/browser-fs-access/dist/directory-open-01563666.js
init_define_import_meta_env();
var e = async (e2 = [{}]) => (Array.isArray(e2) || (e2 = [e2]), e2[0].recursive = e2[0].recursive || false, new Promise((t, r) => {
  const i = document.createElement("input");
  i.type = "file", i.webkitdirectory = true;
  const c = (e3) => {
    "function" == typeof a && a(), t(e3);
  }, a = e2[0].legacySetup && e2[0].legacySetup(c, () => a(r), i);
  i.addEventListener("change", () => {
    let t2 = Array.from(i.files);
    e2[0].recursive ? e2[0].recursive && e2[0].skipDirectory && (t2 = t2.filter((t3) => t3.webkitRelativePath.split("/").every((t4) => !e2[0].skipDirectory({ name: t4, kind: "directory" })))) : t2 = t2.filter((e3) => 2 === e3.webkitRelativePath.split("/").length), c(t2);
  }), i.click();
}));
export {
  e as default
};
//# sourceMappingURL=directory-open-01563666-CNVDULTN.js.map
