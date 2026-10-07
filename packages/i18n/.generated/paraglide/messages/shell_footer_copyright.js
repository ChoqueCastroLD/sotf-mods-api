/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ year: NonNullable<unknown> }} Shell_Footer_CopyrightInputs */

const en_shell_footer_copyright = /** @type {(inputs: Shell_Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} SOTF Mods`)
};

const es_shell_footer_copyright = /** @type {(inputs: Shell_Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} SOTF Mods`)
};

const de_shell_footer_copyright = /** @type {(inputs: Shell_Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} SOTF Mods`)
};

const fr_shell_footer_copyright = /** @type {(inputs: Shell_Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} SOTF Mods`)
};

const it_shell_footer_copyright = /** @type {(inputs: Shell_Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} SOTF Mods`)
};

const nl_shell_footer_copyright = /** @type {(inputs: Shell_Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} SOTF Mods`)
};

const pl_shell_footer_copyright = /** @type {(inputs: Shell_Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} SOTF Mods`)
};

const pt_shell_footer_copyright = /** @type {(inputs: Shell_Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} SOTF Mods`)
};

const ru_shell_footer_copyright = /** @type {(inputs: Shell_Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} SOTF Mods`)
};

const sv_shell_footer_copyright = /** @type {(inputs: Shell_Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} SOTF Mods`)
};

const tr_shell_footer_copyright = /** @type {(inputs: Shell_Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} SOTF Mods`)
};

const zh_shell_footer_copyright = /** @type {(inputs: Shell_Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} SOTF Mods`)
};

const ja_shell_footer_copyright = /** @type {(inputs: Shell_Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} SOTF Mods`)
};

/**
* | output |
* | --- |
* | "© {year} SOTF Mods" |
*
* @param {Shell_Footer_CopyrightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_footer_copyright = /** @type {((inputs: Shell_Footer_CopyrightInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_CopyrightInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_footer_copyright(inputs)
	if (locale === "de") return de_shell_footer_copyright(inputs)
	if (locale === "fr") return fr_shell_footer_copyright(inputs)
	if (locale === "it") return it_shell_footer_copyright(inputs)
	if (locale === "nl") return nl_shell_footer_copyright(inputs)
	if (locale === "pl") return pl_shell_footer_copyright(inputs)
	if (locale === "pt") return pt_shell_footer_copyright(inputs)
	if (locale === "ru") return ru_shell_footer_copyright(inputs)
	if (locale === "sv") return sv_shell_footer_copyright(inputs)
	if (locale === "tr") return tr_shell_footer_copyright(inputs)
	if (locale === "zh") return zh_shell_footer_copyright(inputs)
	if (locale === "ja") return ja_shell_footer_copyright(inputs)
	return en_shell_footer_copyright(inputs)
});
