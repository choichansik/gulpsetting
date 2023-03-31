import gulp from "gulp";
const { src, dest, series } = gulp;
import { deleteAsync } from "del";

const routes = {
  HTML: {
    SRC: `*.html`,
    DEST: `./build`,
  },
};

function htmlBuild() {
  return src(routes.HTML.SRC).pipe(dest(routes.HTML.DEST));
}

const clean = () => deleteAsync(["build"]);

const prepare = series([clean]);
const assets = series([htmlBuild]);

export const dev = series([prepare, assets]);
