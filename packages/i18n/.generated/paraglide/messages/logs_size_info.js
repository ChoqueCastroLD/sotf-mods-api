/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ size: NonNullable<unknown>, max: NonNullable<unknown> }} Logs_Size_InfoInputs */

const en_logs_size_info = /** @type {(inputs: Logs_Size_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} of ${i?.max}`)
};

const es_logs_size_info = /** @type {(inputs: Logs_Size_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} de ${i?.max}`)
};

const de_logs_size_info = /** @type {(inputs: Logs_Size_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} von ${i?.max}`)
};

const fr_logs_size_info = /** @type {(inputs: Logs_Size_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} sur ${i?.max}`)
};

const it_logs_size_info = /** @type {(inputs: Logs_Size_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} di ${i?.max}`)
};

const nl_logs_size_info = /** @type {(inputs: Logs_Size_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} van ${i?.max}`)
};

const pl_logs_size_info = /** @type {(inputs: Logs_Size_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} z ${i?.max}`)
};

const pt_logs_size_info = /** @type {(inputs: Logs_Size_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} de ${i?.max}`)
};

const ru_logs_size_info = /** @type {(inputs: Logs_Size_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} из ${i?.max}`)
};

const sv_logs_size_info = /** @type {(inputs: Logs_Size_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} av ${i?.max}`)
};

const tr_logs_size_info = /** @type {(inputs: Logs_Size_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} / ${i?.max}`)
};

const zh_logs_size_info = /** @type {(inputs: Logs_Size_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} / ${i?.max}`)
};

const ja_logs_size_info = /** @type {(inputs: Logs_Size_InfoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.size} / ${i?.max}`)
};

/**
* | output |
* | --- |
* | "{size} of {max}" |
*
* @param {Logs_Size_InfoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_size_info = /** @type {((inputs: Logs_Size_InfoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Size_InfoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_size_info(inputs)
	if (locale === "de") return de_logs_size_info(inputs)
	if (locale === "fr") return fr_logs_size_info(inputs)
	if (locale === "it") return it_logs_size_info(inputs)
	if (locale === "nl") return nl_logs_size_info(inputs)
	if (locale === "pl") return pl_logs_size_info(inputs)
	if (locale === "pt") return pt_logs_size_info(inputs)
	if (locale === "ru") return ru_logs_size_info(inputs)
	if (locale === "sv") return sv_logs_size_info(inputs)
	if (locale === "tr") return tr_logs_size_info(inputs)
	if (locale === "zh") return zh_logs_size_info(inputs)
	if (locale === "ja") return ja_logs_size_info(inputs)
	return en_logs_size_info(inputs)
});
