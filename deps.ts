// Copyright 2020-present Divy Srivastava and friends. All rights reserved. MIT license.

import {
  createLogger,
  LogLevel,
  consoleSink,
  fileSink,
  jsonFormat,
  textFormat,
} from "https://deno.land/x/deno_structured_logging@0.4.1/mod.ts";

export { prepare } from "https://raw.githubusercontent.com/manyuanrong/deno-plugin-prepare/master/mod.ts";

export const logger = createLogger({
  minimumLevel: Deno.env.get("DEBUG") ? LogLevel.DEBUG : LogLevel.INFO,
  outputFormat: textFormat,
}).addSink(consoleSink());

// Benchmark exports
export {
  runBenchmarks,
  bench,
} from "https://deno.land/std@0.56.0/testing/bench.ts";

export {
  prettyBenchmarkResult,
  prettyBenchmarkProgress,
} from "https://deno.land/x/pretty_benching/mod.ts";
