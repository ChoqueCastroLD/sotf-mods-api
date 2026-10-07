/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Footer_LegalInputs */

const en_shell_footer_legal = /** @type {(inputs: Shell_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legal`)
};

const es_shell_footer_legal = /** @type {(inputs: Shell_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legal`)
};

const de_shell_footer_legal = /** @type {(inputs: Shell_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechtliches`)
};

const fr_shell_footer_legal = /** @type {(inputs: Shell_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mentions légales`)
};

const it_shell_footer_legal = /** @type {(inputs: Shell_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note legali`)
};

const nl_shell_footer_legal = /** @type {(inputs: Shell_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Juridisch`)
};

const pl_shell_footer_legal = /** @type {(inputs: Shell_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informacje prawne`)
};

const pt_shell_footer_legal = /** @type {(inputs: Shell_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legal`)
};

const ru_shell_footer_legal = /** @type {(inputs: Shell_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Правовая информация`)
};

const sv_shell_footer_legal = /** @type {(inputs: Shell_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Juridiskt`)
};

const tr_shell_footer_legal = /** @type {(inputs: Shell_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yasal`)
};

const zh_shell_footer_legal = /** @type {(inputs: Shell_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`法律信息`)
};

const ja_shell_footer_legal = /** @type {(inputs: Shell_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`法的情報`)
};

/**
* | output |
* | --- |
* | "Legal" |
*
* @param {Shell_Footer_LegalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_footer_legal = /** @type {((inputs?: Shell_Footer_LegalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_LegalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_footer_legal(inputs)
	if (locale === "de") return de_shell_footer_legal(inputs)
	if (locale === "fr") return fr_shell_footer_legal(inputs)
	if (locale === "it") return it_shell_footer_legal(inputs)
	if (locale === "nl") return nl_shell_footer_legal(inputs)
	if (locale === "pl") return pl_shell_footer_legal(inputs)
	if (locale === "pt") return pt_shell_footer_legal(inputs)
	if (locale === "ru") return ru_shell_footer_legal(inputs)
	if (locale === "sv") return sv_shell_footer_legal(inputs)
	if (locale === "tr") return tr_shell_footer_legal(inputs)
	if (locale === "zh") return zh_shell_footer_legal(inputs)
	if (locale === "ja") return ja_shell_footer_legal(inputs)
	return en_shell_footer_legal(inputs)
});
