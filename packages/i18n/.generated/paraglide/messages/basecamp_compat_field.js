/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_FieldInputs */

const en_basecamp_compat_field = /** @type {(inputs: Basecamp_Compat_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field reports`)
};

const es_basecamp_compat_field = /** @type {(inputs: Basecamp_Compat_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes de campo`)
};

const de_basecamp_compat_field = /** @type {(inputs: Basecamp_Compat_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldberichte`)
};

const fr_basecamp_compat_field = /** @type {(inputs: Basecamp_Compat_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapports de terrain`)
};

const it_basecamp_compat_field = /** @type {(inputs: Basecamp_Compat_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporti sul campo`)
};

const nl_basecamp_compat_field = /** @type {(inputs: Basecamp_Compat_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldrapporten`)
};

const pl_basecamp_compat_field = /** @type {(inputs: Basecamp_Compat_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporty terenowe`)
};

const pt_basecamp_compat_field = /** @type {(inputs: Basecamp_Compat_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatórios de campo`)
};

const ru_basecamp_compat_field = /** @type {(inputs: Basecamp_Compat_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевые отчёты`)
};

const sv_basecamp_compat_field = /** @type {(inputs: Basecamp_Compat_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältrapporter`)
};

const tr_basecamp_compat_field = /** @type {(inputs: Basecamp_Compat_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporları`)
};

const zh_basecamp_compat_field = /** @type {(inputs: Basecamp_Compat_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实地报告`)
};

const ja_basecamp_compat_field = /** @type {(inputs: Basecamp_Compat_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポート`)
};

/**
* | output |
* | --- |
* | "Field reports" |
*
* @param {Basecamp_Compat_FieldInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_field = /** @type {((inputs?: Basecamp_Compat_FieldInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_FieldInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_field(inputs)
	if (locale === "de") return de_basecamp_compat_field(inputs)
	if (locale === "fr") return fr_basecamp_compat_field(inputs)
	if (locale === "it") return it_basecamp_compat_field(inputs)
	if (locale === "nl") return nl_basecamp_compat_field(inputs)
	if (locale === "pl") return pl_basecamp_compat_field(inputs)
	if (locale === "pt") return pt_basecamp_compat_field(inputs)
	if (locale === "ru") return ru_basecamp_compat_field(inputs)
	if (locale === "sv") return sv_basecamp_compat_field(inputs)
	if (locale === "tr") return tr_basecamp_compat_field(inputs)
	if (locale === "zh") return zh_basecamp_compat_field(inputs)
	if (locale === "ja") return ja_basecamp_compat_field(inputs)
	return en_basecamp_compat_field(inputs)
});
