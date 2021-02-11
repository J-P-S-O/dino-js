import fs from "fs";
function touch(fn, ct) {
  fs.writeFileSync(fn, ct || "");
  return 0;
}
touch.json = (fn, jsn) => {
  fs.writeFileSync(fn, JSON.stringify(jsn || {}));
  return 0;
};
export default touch;
