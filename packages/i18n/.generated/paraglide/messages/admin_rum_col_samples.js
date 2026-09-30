/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_Col_SamplesInputs */

const en_admin_rum_col_samples = /** @type {(inputs: Admin_Rum_Col_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samples`)
};

const es_admin_rum_col_samples = /** @type {(inputs: Admin_Rum_Col_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muestras`)
};

const de_admin_rum_col_samples = /** @type {(inputs: Admin_Rum_Col_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Messungen`)
};

const fr_admin_rum_col_samples = /** @type {(inputs: Admin_Rum_Col_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mesures`)
};

const it_admin_rum_col_samples = /** @type {(inputs: Admin_Rum_Col_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Misurazioni`)
};

const nl_admin_rum_col_samples = /** @type {(inputs: Admin_Rum_Col_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Metingen`)
};

const pl_admin_rum_col_samples = /** @type {(inputs: Admin_Rum_Col_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pomiary`)
};

const pt_admin_rum_col_samples = /** @type {(inputs: Admin_Rum_Col_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medições`)
};

const ru_admin_rum_col_samples = /** @type {(inputs: Admin_Rum_Col_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Замеры`)
};

const sv_admin_rum_col_samples = /** @type {(inputs: Admin_Rum_Col_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mätningar`)
};

const tr_admin_rum_col_samples = /** @type {(inputs: Admin_Rum_Col_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ölçümler`)
};

const zh_admin_rum_col_samples = /** @type {(inputs: Admin_Rum_Col_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`样本`)
};

const ja_admin_rum_col_samples = /** @type {(inputs: Admin_Rum_Col_SamplesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サンプル`)
};

/**
* | output |
* | --- |
* | "Samples" |
*
* @param {Admin_Rum_Col_SamplesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_col_samples = /** @type {((inputs?: Admin_Rum_Col_SamplesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_Col_SamplesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_col_samples(inputs)
	if (locale === "de") return de_admin_rum_col_samples(inputs)
	if (locale === "fr") return fr_admin_rum_col_samples(inputs)
	if (locale === "it") return it_admin_rum_col_samples(inputs)
	if (locale === "nl") return nl_admin_rum_col_samples(inputs)
	if (locale === "pl") return pl_admin_rum_col_samples(inputs)
	if (locale === "pt") return pt_admin_rum_col_samples(inputs)
	if (locale === "ru") return ru_admin_rum_col_samples(inputs)
	if (locale === "sv") return sv_admin_rum_col_samples(inputs)
	if (locale === "tr") return tr_admin_rum_col_samples(inputs)
	if (locale === "zh") return zh_admin_rum_col_samples(inputs)
	if (locale === "ja") return ja_admin_rum_col_samples(inputs)
	return en_admin_rum_col_samples(inputs)
});
