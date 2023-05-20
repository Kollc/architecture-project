type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string => {
  const modsClasses = Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([cls]) => cls);

  return [cls, ...additional.filter(Boolean), ...modsClasses].join(' ');
};
