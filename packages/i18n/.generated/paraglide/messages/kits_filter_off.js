/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Filter_OffInputs */

const en_kits_filter_off = /** @type {(inputs: Kits_Filter_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(off)`)
};

const es_kits_filter_off = /** @type {(inputs: Kits_Filter_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(desactivado)`)
};

const de_kits_filter_off = /** @type {(inputs: Kits_Filter_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(inaktiv)`)
};

const fr_kits_filter_off = /** @type {(inputs: Kits_Filter_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(désactivé)`)
};

const it_kits_filter_off = /** @type {(inputs: Kits_Filter_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(disattivo)`)
};

const nl_kits_filter_off = /** @type {(inputs: Kits_Filter_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(uit)`)
};

const pl_kits_filter_off = /** @type {(inputs: Kits_Filter_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(wyłączony)`)
};

const pt_kits_filter_off = /** @type {(inputs: Kits_Filter_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(desativado)`)
};

const ru_kits_filter_off = /** @type {(inputs: Kits_Filter_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(выключен)`)
};

const sv_kits_filter_off = /** @type {(inputs: Kits_Filter_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(av)`)
};

const tr_kits_filter_off = /** @type {(inputs: Kits_Filter_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(kapalı)`)
};

const zh_kits_filter_off = /** @type {(inputs: Kits_Filter_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`（未启用）`)
};

const ja_kits_filter_off = /** @type {(inputs: Kits_Filter_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`（オフ）`)
};

/**
* | output |
* | --- |
* | "(off)" |
*
* @param {Kits_Filter_OffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_filter_off = /** @type {((inputs?: Kits_Filter_OffInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Filter_OffInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_filter_off(inputs)
	if (locale === "de") return de_kits_filter_off(inputs)
	if (locale === "fr") return fr_kits_filter_off(inputs)
	if (locale === "it") return it_kits_filter_off(inputs)
	if (locale === "nl") return nl_kits_filter_off(inputs)
	if (locale === "pl") return pl_kits_filter_off(inputs)
	if (locale === "pt") return pt_kits_filter_off(inputs)
	if (locale === "ru") return ru_kits_filter_off(inputs)
	if (locale === "sv") return sv_kits_filter_off(inputs)
	if (locale === "tr") return tr_kits_filter_off(inputs)
	if (locale === "zh") return zh_kits_filter_off(inputs)
	if (locale === "ja") return ja_kits_filter_off(inputs)
	return en_kits_filter_off(inputs)
});
