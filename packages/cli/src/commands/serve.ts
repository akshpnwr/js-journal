import { Command } from "commander";
import { serve } from "local-api";
import path from "path";
import { cwd } from "process";

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("Open a file for editing")
  .option("-p, --port <number>", "port to run server on", "4005")
  .action((filename = "notebook.js", options: { port: string }) => {
    const dir = path.join(cwd(), filename);

    serve(parseInt(options.port), path.basename(filename), dir);
  });
