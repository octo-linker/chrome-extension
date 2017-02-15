import XRegExp from 'xregexp/src/xregexp';
import build from 'xregexp/src/addons/build';

build(XRegExp);

// This function makes it easy to build regular expressions that look more like formal grammars.
// See here for more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals
// http://xregexp.com/api/#build
export default function (flags = 'xngm') {
  // the 'x' flag doesn't seem to work if we pass it outside the pattern
  // so put it inside as well
  const modeModifiers = flags.includes('x') ? '(?x)' : '';

  return (literals, ...substitutions) => {
    const subpatterns = {};

    substitutions.push('');
    const buildPattern = literals.raw.reduce((result, literal, index) => {
      const substitution = substitutions[index];

      subpatterns[index] = substitution instanceof RegExp ? substitution :
        XRegExp.escape(substitution);

      return `${result + literal}{{${index}}}`;
    }, modeModifiers);

    return XRegExp.build(buildPattern, subpatterns, flags);
  };
}
/* Usage Example:

    import regexBuilder from './regexBuilder';
    const sub = /inner/;
    const xregexp = regexBuilder();
    const outer = xregexp`
      # comments start with #
      before

      # whitespace is insignificant, match it with \s
      \s

      # a reference to the 'sub' regex
      ${sub}

      \s

      # groups are not captured by default
      (after | after2)

      \s

      # this group is captured
      (?<name> after2 )
      $
    `;
    outer.exec('before inner after after2'); // ['before inner after after2', 'after2']
*/