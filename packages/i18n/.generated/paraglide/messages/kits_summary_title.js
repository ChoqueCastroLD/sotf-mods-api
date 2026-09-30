/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Summary_TitleInputs */

const en_kits_summary_title = /** @type {(inputs: Kits_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit summary`)
};

const es_kits_summary_title = /** @type {(inputs: Kits_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumen del kit`)
};

const de_kits_summary_title = /** @type {(inputs: Kits_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit-Übersicht`)
};

const fr_kits_summary_title = /** @type {(inputs: Kits_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résumé du kit`)
};

const it_kits_summary_title = /** @type {(inputs: Kits_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riepilogo del kit`)
};

const nl_kits_summary_title = /** @type {(inputs: Kits_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitoverzicht`)
};

const pl_kits_summary_title = /** @type {(inputs: Kits_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podsumowanie zestawu`)
};

const pt_kits_summary_title = /** @type {(inputs: Kits_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumo do kit`)
};

const ru_kits_summary_title = /** @type {(inputs: Kits_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сводка набора`)
};

const sv_kits_summary_title = /** @type {(inputs: Kits_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitöversikt`)
};

const tr_kits_summary_title = /** @type {(inputs: Kits_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit özeti`)
};

const zh_kits_summary_title = /** @type {(inputs: Kits_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装概览`)
};

const ja_kits_summary_title = /** @type {(inputs: Kits_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットの概要`)
};

/**
* | output |
* | --- |
* | "Kit summary" |
*
* @param {Kits_Summary_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_summary_title = /** @type {((inputs?: Kits_Summary_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Summary_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_summary_title(inputs)
	if (locale === "de") return de_kits_summary_title(inputs)
	if (locale === "fr") return fr_kits_summary_title(inputs)
	if (locale === "it") return it_kits_summary_title(inputs)
	if (locale === "nl") return nl_kits_summary_title(inputs)
	if (locale === "pl") return pl_kits_summary_title(inputs)
	if (locale === "pt") return pt_kits_summary_title(inputs)
	if (locale === "ru") return ru_kits_summary_title(inputs)
	if (locale === "sv") return sv_kits_summary_title(inputs)
	if (locale === "tr") return tr_kits_summary_title(inputs)
	if (locale === "zh") return zh_kits_summary_title(inputs)
	if (locale === "ja") return ja_kits_summary_title(inputs)
	return en_kits_summary_title(inputs)
});
