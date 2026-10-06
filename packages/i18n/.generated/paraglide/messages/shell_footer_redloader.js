/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Footer_RedloaderInputs */

const en_shell_footer_redloader = /** @type {(inputs: Shell_Footer_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Official wiki on how to use RedLoader`)
};

const es_shell_footer_redloader = /** @type {(inputs: Shell_Footer_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki oficial sobre cómo usar RedLoader`)
};

const de_shell_footer_redloader = /** @type {(inputs: Shell_Footer_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offizielles Wiki zur Verwendung von RedLoader`)
};

const fr_shell_footer_redloader = /** @type {(inputs: Shell_Footer_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki officiel sur l’utilisation de RedLoader`)
};

const it_shell_footer_redloader = /** @type {(inputs: Shell_Footer_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki ufficiale su come utilizzare RedLoader`)
};

const nl_shell_footer_redloader = /** @type {(inputs: Shell_Footer_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Officiële wiki over hoe RedLoader te gebruiken`)
};

const pl_shell_footer_redloader = /** @type {(inputs: Shell_Footer_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oficjalna wiki dotycząca korzystania z RedLoader`)
};

const pt_shell_footer_redloader = /** @type {(inputs: Shell_Footer_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki oficial sobre como usar o RedLoader`)
};

const ru_shell_footer_redloader = /** @type {(inputs: Shell_Footer_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Официальная вики по использованию RedLoader`)
};

const sv_shell_footer_redloader = /** @type {(inputs: Shell_Footer_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Officiell wiki om hur man använder RedLoader`)
};

const tr_shell_footer_redloader = /** @type {(inputs: Shell_Footer_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader’ı nasıl kullanacağınızla ilgili resmi wiki`)
};

const zh_shell_footer_redloader = /** @type {(inputs: Shell_Footer_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`官方 Wiki 关于如何使用 RedLoader`)
};

const ja_shell_footer_redloader = /** @type {(inputs: Shell_Footer_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader の使い方に関する公式Wiki`)
};

/**
* | output |
* | --- |
* | "Official wiki on how to use RedLoader" |
*
* @param {Shell_Footer_RedloaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_footer_redloader = /** @type {((inputs?: Shell_Footer_RedloaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_RedloaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_footer_redloader(inputs)
	if (locale === "de") return de_shell_footer_redloader(inputs)
	if (locale === "fr") return fr_shell_footer_redloader(inputs)
	if (locale === "it") return it_shell_footer_redloader(inputs)
	if (locale === "nl") return nl_shell_footer_redloader(inputs)
	if (locale === "pl") return pl_shell_footer_redloader(inputs)
	if (locale === "pt") return pt_shell_footer_redloader(inputs)
	if (locale === "ru") return ru_shell_footer_redloader(inputs)
	if (locale === "sv") return sv_shell_footer_redloader(inputs)
	if (locale === "tr") return tr_shell_footer_redloader(inputs)
	if (locale === "zh") return zh_shell_footer_redloader(inputs)
	if (locale === "ja") return ja_shell_footer_redloader(inputs)
	return en_shell_footer_redloader(inputs)
});
