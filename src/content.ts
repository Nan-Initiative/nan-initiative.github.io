export const links = {
  github: "https://github.com/Nan-Initiative",
  discord: "https://discord.gg/EX67QAQVXz",
  youtube: "https://www.youtube.com/@NaN-Initiative",
};

export type Status = "released" | "development" | "incoming";

export const statusLabels: Record<Status, string> = {
  released: "Released",
  development: "In development",
  incoming: "Incoming",
};

export type Project = {
  name: string;
  layer: string;
  status: Status;
  summary: string;
  facts: string[];
  repository?: string;
};

export const projects: Project[] = [
  {
    name: "NaN",
    layer: "Language",
    status: "released",
    summary:
      "A systems language made for agentic coding: performant, fast and safe, with versioning strong enough that compiled artefacts reuse each other.",
    facts: [
      "No garbage collector, no mandatory runtime, no undefined behaviour",
      "Contracts proven by a normative prover",
      "A toolchain whose every output is written for agents",
    ],
    repository: "https://github.com/Nan-Initiative/nan-lang",
  },
  {
    name: "NaN Kernel",
    layer: "Kernel",
    status: "development",
    summary:
      "An x86_64 kernel written in NaN, booted from its own UEFI loader, with typed hardware access and no assembly.",
    facts: [
      "SMP scheduling with preemption",
      "Typed registers, layouts and privileged intrinsics",
      "Drivers whose shared memory the compiler checks",
    ],
    repository: "https://github.com/Nan-Initiative/nan-kernel",
  },
  {
    name: "NaNOS",
    layer: "Operating system",
    status: "incoming",
    summary:
      "An operating system for AI, from bootloader to user interface. AI runs locally and decides what the machine displays and how.",
    facts: [
      "Local AI at the centre of the system",
      "Every authority derived from one root grant at boot",
      "An interface shaped by the AI, not fixed by the OS",
    ],
  },
  {
    name: "NaN Ecosystem",
    layer: "Ecosystem",
    status: "incoming",
    summary:
      "The packages, libraries and tools around NaN, shared through a store where versions are computed from the code, never declared.",
    facts: [
      "Packages identified by hash, compatible per item",
      "Libraries checked, sealed and versioned by the toolchain",
      "Tools built for agents and the people working with them",
    ],
  },
];

export type Note = { title: string; body: string };

export const principles: Note[] = [
  {
    title: "Closure",
    body: "A line's meaning depends only on what it names. Change anything else and its meaning, acceptance and diagnostics stay the same.",
  },
  {
    title: "Values, not references",
    body: "Every value has one owner and three modes: read, mut and take. No aliasing, no lifetimes to annotate, no destructors.",
  },
  {
    title: "Proofs remove checks",
    body: "Every contract is total. A run-time check disappears only when the prover proves it is never needed.",
  },
  {
    title: "Authority as values",
    body: "No global I/O, clock or allocator. Code acts only through capabilities it receives, which stay revocable.",
  },
  {
    title: "Computed identity",
    body: "Items are versioned by hash. A body edit never changes an interface, and compatibility is decided per item.",
  },
  {
    title: "A toolchain for agents",
    body: "Non-interactive, scoped commands. Diagnostics quote the code, explain the cause and offer exact fixes that re-check.",
  },
];

export const sample = `const MAX_SAMPLES: u32 = 1_000

/// Running total of the values passed to [Meter.record].
pub closed struct Meter {
    pub total: u64
    pub samples: u32 where samples <= MAX_SAMPLES
} Meter

pub fn Meter.record(mut self, value: u32)
    requires not self.is_full()
{
    self.total += u64.widen(value)
    self.samples += 1
} Meter.record

pub fn Meter.mean(self) -> Option[u64]
    example Meter(total: 9, samples: 3).mean() == Some(3)
{
    if self.samples == 0 {
        return None
    }
    return Some(self.total / u64.widen(self.samples))
} Meter.mean`;

export const sampleNotes: Note[] = [
  {
    title: "Invariants in the type",
    body: "samples can never exceed MAX_SAMPLES, and every write is checked or proven against it.",
  },
  {
    title: "Contracts at the head",
    body: "A call checks against the callee's head alone: modes, types, requires and failures are all written.",
  },
  {
    title: "Examples that run",
    body: "Examples are part of the contract and run on every check.",
  },
];

export const contributionAreas: Note[] = [
  {
    title: "Clear intent",
    body: "Turn an idea into a task an agent can carry out without guessing.",
  },
  {
    title: "Steering",
    body: "Keep long agent sessions on course, split the work and know when to start over.",
  },
  {
    title: "Critical review",
    body: "Read what the agent produced, run it and catch what it got wrong.",
  },
  {
    title: "Shipping",
    body: "Take a change from the first prompt to a merged pull request.",
  },
];
