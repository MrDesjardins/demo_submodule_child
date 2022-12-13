import trim from "trim";

export function getPrefix(input: string): string {
  return trim("PrefixFromSubModule__" + input);
}
