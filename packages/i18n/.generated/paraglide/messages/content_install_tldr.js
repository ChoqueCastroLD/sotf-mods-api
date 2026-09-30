/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_TldrInputs */

const en_content_install_tldr = /** @type {(inputs: Content_Install_TldrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In short`)
};

const es_content_install_tldr = /** @type {(inputs: Content_Install_TldrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En resumen`)
};

const de_content_install_tldr = /** @type {(inputs: Content_Install_TldrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurz gesagt`)
};

const fr_content_install_tldr = /** @type {(inputs: Content_Install_TldrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En bref`)
};

const it_content_install_tldr = /** @type {(inputs: Content_Install_TldrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In breve`)
};

const nl_content_install_tldr = /** @type {(inputs: Content_Install_TldrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In het kort`)
};

const pl_content_install_tldr = /** @type {(inputs: Content_Install_TldrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W skrócie`)
};

const pt_content_install_tldr = /** @type {(inputs: Content_Install_TldrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em resumo`)
};

const ru_content_install_tldr = /** @type {(inputs: Content_Install_TldrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Коротко`)
};

const sv_content_install_tldr = /** @type {(inputs: Content_Install_TldrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I korthet`)
};

const tr_content_install_tldr = /** @type {(inputs: Content_Install_TldrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısaca`)
};

const zh_content_install_tldr = /** @type {(inputs: Content_Install_TldrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简而言之`)
};

const ja_content_install_tldr = /** @type {(inputs: Content_Install_TldrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要点`)
};

/**
* | output |
* | --- |
* | "In short" |
*
* @param {Content_Install_TldrInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_tldr = /** @type {((inputs?: Content_Install_TldrInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_TldrInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_tldr(inputs)
	if (locale === "de") return de_content_install_tldr(inputs)
	if (locale === "fr") return fr_content_install_tldr(inputs)
	if (locale === "it") return it_content_install_tldr(inputs)
	if (locale === "nl") return nl_content_install_tldr(inputs)
	if (locale === "pl") return pl_content_install_tldr(inputs)
	if (locale === "pt") return pt_content_install_tldr(inputs)
	if (locale === "ru") return ru_content_install_tldr(inputs)
	if (locale === "sv") return sv_content_install_tldr(inputs)
	if (locale === "tr") return tr_content_install_tldr(inputs)
	if (locale === "zh") return zh_content_install_tldr(inputs)
	if (locale === "ja") return ja_content_install_tldr(inputs)
	return en_content_install_tldr(inputs)
});
