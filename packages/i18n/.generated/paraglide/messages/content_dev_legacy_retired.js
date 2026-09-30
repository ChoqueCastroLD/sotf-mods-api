/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Legacy_RetiredInputs */

const en_content_dev_legacy_retired = /** @type {(inputs: Content_Dev_Legacy_RetiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retired`)
};

const es_content_dev_legacy_retired = /** @type {(inputs: Content_Dev_Legacy_RetiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retiradas`)
};

const de_content_dev_legacy_retired = /** @type {(inputs: Content_Dev_Legacy_RetiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abgeschaltet`)
};

const fr_content_dev_legacy_retired = /** @type {(inputs: Content_Dev_Legacy_RetiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirées`)
};

const it_content_dev_legacy_retired = /** @type {(inputs: Content_Dev_Legacy_RetiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritirate`)
};

const nl_content_dev_legacy_retired = /** @type {(inputs: Content_Dev_Legacy_RetiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitgeschakeld`)
};

const pl_content_dev_legacy_retired = /** @type {(inputs: Content_Dev_Legacy_RetiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyłączone`)
};

const pt_content_dev_legacy_retired = /** @type {(inputs: Content_Dev_Legacy_RetiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desativadas`)
};

const ru_content_dev_legacy_retired = /** @type {(inputs: Content_Dev_Legacy_RetiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отключены`)
};

const sv_content_dev_legacy_retired = /** @type {(inputs: Content_Dev_Legacy_RetiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stängda`)
};

const tr_content_dev_legacy_retired = /** @type {(inputs: Content_Dev_Legacy_RetiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapatıldı`)
};

const zh_content_dev_legacy_retired = /** @type {(inputs: Content_Dev_Legacy_RetiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已停用`)
};

const ja_content_dev_legacy_retired = /** @type {(inputs: Content_Dev_Legacy_RetiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`廃止済み`)
};

/**
* | output |
* | --- |
* | "Retired" |
*
* @param {Content_Dev_Legacy_RetiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_legacy_retired = /** @type {((inputs?: Content_Dev_Legacy_RetiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Legacy_RetiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_legacy_retired(inputs)
	if (locale === "de") return de_content_dev_legacy_retired(inputs)
	if (locale === "fr") return fr_content_dev_legacy_retired(inputs)
	if (locale === "it") return it_content_dev_legacy_retired(inputs)
	if (locale === "nl") return nl_content_dev_legacy_retired(inputs)
	if (locale === "pl") return pl_content_dev_legacy_retired(inputs)
	if (locale === "pt") return pt_content_dev_legacy_retired(inputs)
	if (locale === "ru") return ru_content_dev_legacy_retired(inputs)
	if (locale === "sv") return sv_content_dev_legacy_retired(inputs)
	if (locale === "tr") return tr_content_dev_legacy_retired(inputs)
	if (locale === "zh") return zh_content_dev_legacy_retired(inputs)
	if (locale === "ja") return ja_content_dev_legacy_retired(inputs)
	return en_content_dev_legacy_retired(inputs)
});
