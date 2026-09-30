/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Filter_WorksInputs */

const en_kits_filter_works = /** @type {(inputs: Kits_Filter_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Works on the current patch`)
};

const es_kits_filter_works = /** @type {(inputs: Kits_Filter_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona en el parche actual`)
};

const de_kits_filter_works = /** @type {(inputs: Kits_Filter_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läuft mit dem aktuellen Patch`)
};

const fr_kits_filter_works = /** @type {(inputs: Kits_Filter_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionne sur le patch actuel`)
};

const it_kits_filter_works = /** @type {(inputs: Kits_Filter_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona con la patch attuale`)
};

const nl_kits_filter_works = /** @type {(inputs: Kits_Filter_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt op de huidige patch`)
};

const pl_kits_filter_works = /** @type {(inputs: Kits_Filter_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa na obecnej łatce`)
};

const pt_kits_filter_works = /** @type {(inputs: Kits_Filter_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona no patch atual`)
};

const ru_kits_filter_works = /** @type {(inputs: Kits_Filter_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает на текущем патче`)
};

const sv_kits_filter_works = /** @type {(inputs: Kits_Filter_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar på aktuell patch`)
};

const tr_kits_filter_works = /** @type {(inputs: Kits_Filter_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncel yamada çalışıyor`)
};

const zh_kits_filter_works = /** @type {(inputs: Kits_Filter_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`适用于当前版本`)
};

const ja_kits_filter_works = /** @type {(inputs: Kits_Filter_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新パッチで動作`)
};

/**
* | output |
* | --- |
* | "Works on the current patch" |
*
* @param {Kits_Filter_WorksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_filter_works = /** @type {((inputs?: Kits_Filter_WorksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Filter_WorksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_filter_works(inputs)
	if (locale === "de") return de_kits_filter_works(inputs)
	if (locale === "fr") return fr_kits_filter_works(inputs)
	if (locale === "it") return it_kits_filter_works(inputs)
	if (locale === "nl") return nl_kits_filter_works(inputs)
	if (locale === "pl") return pl_kits_filter_works(inputs)
	if (locale === "pt") return pt_kits_filter_works(inputs)
	if (locale === "ru") return ru_kits_filter_works(inputs)
	if (locale === "sv") return sv_kits_filter_works(inputs)
	if (locale === "tr") return tr_kits_filter_works(inputs)
	if (locale === "zh") return zh_kits_filter_works(inputs)
	if (locale === "ja") return ja_kits_filter_works(inputs)
	return en_kits_filter_works(inputs)
});
