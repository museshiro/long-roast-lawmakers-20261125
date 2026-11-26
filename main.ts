import { mkdirSync, writeFileSync } from "node:fs";

const first = "The crypto-subcommittee chair converted his donor ledger to PDF and filed a 4 KB blank file, ";
const second = "having exported only the hidden sheet called Notes.";
const line = first + second;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
