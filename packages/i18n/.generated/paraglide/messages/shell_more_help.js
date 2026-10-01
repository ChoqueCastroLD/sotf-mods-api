/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_More_HelpInputs */

const en_shell_more_help = /** @type {(inputs: Shell_More_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Help`)
};

const es_shell_more_help = /** @type {(inputs: Shell_More_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayuda`)
};

const de_shell_more_help = /** @type {(inputs: Shell_More_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hilfe`)
};

const fr_shell_more_help = /** @type {(inputs: Shell_More_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aide`)
};

const it_shell_more_help = /** @type {(inputs: Shell_More_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aiuto`)
};

const nl_shell_more_help = /** @type {(inputs: Shell_More_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hulp`)
};

const pl_shell_more_help = /** @type {(inputs: Shell_More_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pomoc`)
};

const pt_shell_more_help = /** @type {(inputs: Shell_More_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajuda`)
};

const ru_shell_more_help = /** @type {(inputs: Shell_More_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Помощь`)
};

const sv_shell_more_help = /** @type {(inputs: Shell_More_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hjälp`)
};

const tr_shell_more_help = /** @type {(inputs: Shell_More_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yardım`)
};

const zh_shell_more_help = /** @type {(inputs: Shell_More_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`帮助`)
};

const ja_shell_more_help = /** @type {(inputs: Shell_More_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ヘルプ`)
};

/**
* | output |
* | --- |
* | "Help" |
*
* @param {Shell_More_HelpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_more_help = /** @type {((inputs?: Shell_More_HelpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_More_HelpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_more_help(inputs)
	if (locale === "de") return de_shell_more_help(inputs)
	if (locale === "fr") return fr_shell_more_help(inputs)
	if (locale === "it") return it_shell_more_help(inputs)
	if (locale === "nl") return nl_shell_more_help(inputs)
	if (locale === "pl") return pl_shell_more_help(inputs)
	if (locale === "pt") return pt_shell_more_help(inputs)
	if (locale === "ru") return ru_shell_more_help(inputs)
	if (locale === "sv") return sv_shell_more_help(inputs)
	if (locale === "tr") return tr_shell_more_help(inputs)
	if (locale === "zh") return zh_shell_more_help(inputs)
	if (locale === "ja") return ja_shell_more_help(inputs)
	return en_shell_more_help(inputs)
});
