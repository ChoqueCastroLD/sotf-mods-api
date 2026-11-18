/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_CopiedInputs */

const en_api_copied = /** @type {(inputs: Api_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied`)
};

const es_api_copied = /** @type {(inputs: Api_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiado`)
};

const de_api_copied = /** @type {(inputs: Api_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiert`)
};

const fr_api_copied = /** @type {(inputs: Api_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copié`)
};

const it_api_copied = /** @type {(inputs: Api_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiato`)
};

const nl_api_copied = /** @type {(inputs: Api_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gekopieerd`)
};

const pl_api_copied = /** @type {(inputs: Api_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiowano`)
};

const pt_api_copied = /** @type {(inputs: Api_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiado`)
};

const ru_api_copied = /** @type {(inputs: Api_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скопировано`)
};

const sv_api_copied = /** @type {(inputs: Api_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopierat`)
};

const tr_api_copied = /** @type {(inputs: Api_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopyalandı`)
};

const zh_api_copied = /** @type {(inputs: Api_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制`)
};

const ja_api_copied = /** @type {(inputs: Api_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピーしました`)
};

/**
* | output |
* | --- |
* | "Copied" |
*
* @param {Api_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_copied = /** @type {((inputs?: Api_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_copied(inputs)
	if (locale === "de") return de_api_copied(inputs)
	if (locale === "fr") return fr_api_copied(inputs)
	if (locale === "it") return it_api_copied(inputs)
	if (locale === "nl") return nl_api_copied(inputs)
	if (locale === "pl") return pl_api_copied(inputs)
	if (locale === "pt") return pt_api_copied(inputs)
	if (locale === "ru") return ru_api_copied(inputs)
	if (locale === "sv") return sv_api_copied(inputs)
	if (locale === "tr") return tr_api_copied(inputs)
	if (locale === "zh") return zh_api_copied(inputs)
	if (locale === "ja") return ja_api_copied(inputs)
	return en_api_copied(inputs)
});
