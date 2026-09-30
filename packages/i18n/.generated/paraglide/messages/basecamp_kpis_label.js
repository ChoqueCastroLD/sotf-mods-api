/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Kpis_LabelInputs */

const en_basecamp_kpis_label = /** @type {(inputs: Basecamp_Kpis_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Key figures`)
};

const es_basecamp_kpis_label = /** @type {(inputs: Basecamp_Kpis_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cifras clave`)
};

const de_basecamp_kpis_label = /** @type {(inputs: Basecamp_Kpis_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kennzahlen`)
};

const fr_basecamp_kpis_label = /** @type {(inputs: Basecamp_Kpis_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiffres clés`)
};

const it_basecamp_kpis_label = /** @type {(inputs: Basecamp_Kpis_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dati chiave`)
};

const nl_basecamp_kpis_label = /** @type {(inputs: Basecamp_Kpis_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kerncijfers`)
};

const pl_basecamp_kpis_label = /** @type {(inputs: Basecamp_Kpis_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kluczowe liczby`)
};

const pt_basecamp_kpis_label = /** @type {(inputs: Basecamp_Kpis_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Números principais`)
};

const ru_basecamp_kpis_label = /** @type {(inputs: Basecamp_Kpis_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ключевые показатели`)
};

const sv_basecamp_kpis_label = /** @type {(inputs: Basecamp_Kpis_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyckeltal`)
};

const tr_basecamp_kpis_label = /** @type {(inputs: Basecamp_Kpis_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temel rakamlar`)
};

const zh_basecamp_kpis_label = /** @type {(inputs: Basecamp_Kpis_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关键数据`)
};

const ja_basecamp_kpis_label = /** @type {(inputs: Basecamp_Kpis_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主な数値`)
};

/**
* | output |
* | --- |
* | "Key figures" |
*
* @param {Basecamp_Kpis_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kpis_label = /** @type {((inputs?: Basecamp_Kpis_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpis_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kpis_label(inputs)
	if (locale === "de") return de_basecamp_kpis_label(inputs)
	if (locale === "fr") return fr_basecamp_kpis_label(inputs)
	if (locale === "it") return it_basecamp_kpis_label(inputs)
	if (locale === "nl") return nl_basecamp_kpis_label(inputs)
	if (locale === "pl") return pl_basecamp_kpis_label(inputs)
	if (locale === "pt") return pt_basecamp_kpis_label(inputs)
	if (locale === "ru") return ru_basecamp_kpis_label(inputs)
	if (locale === "sv") return sv_basecamp_kpis_label(inputs)
	if (locale === "tr") return tr_basecamp_kpis_label(inputs)
	if (locale === "zh") return zh_basecamp_kpis_label(inputs)
	if (locale === "ja") return ja_basecamp_kpis_label(inputs)
	return en_basecamp_kpis_label(inputs)
});
