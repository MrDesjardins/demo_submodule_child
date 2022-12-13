import trim from "trim";

export function getPrefix(input: string): string {
  return "PrefixFromSubModule__" + trim(input);
}
