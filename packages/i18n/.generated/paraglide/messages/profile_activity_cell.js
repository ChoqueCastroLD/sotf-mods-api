/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown>, detail: NonNullable<unknown> }} Profile_Activity_CellInputs */

const en_profile_activity_cell = /** @type {(inputs: Profile_Activity_CellInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.detail}`)
};

const es_profile_activity_cell = /** @type {(inputs: Profile_Activity_CellInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.detail}`)
};

const de_profile_activity_cell = /** @type {(inputs: Profile_Activity_CellInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.detail}`)
};

const fr_profile_activity_cell = /** @type {(inputs: Profile_Activity_CellInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} : ${i?.detail}`)
};

const it_profile_activity_cell = /** @type {(inputs: Profile_Activity_CellInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.detail}`)
};

const nl_profile_activity_cell = /** @type {(inputs: Profile_Activity_CellInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.detail}`)
};

const pl_profile_activity_cell = /** @type {(inputs: Profile_Activity_CellInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.detail}`)
};

const pt_profile_activity_cell = /** @type {(inputs: Profile_Activity_CellInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.detail}`)
};

const ru_profile_activity_cell = /** @type {(inputs: Profile_Activity_CellInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.detail}`)
};

const sv_profile_activity_cell = /** @type {(inputs: Profile_Activity_CellInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.detail}`)
};

const tr_profile_activity_cell = /** @type {(inputs: Profile_Activity_CellInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.detail}`)
};

const zh_profile_activity_cell = /** @type {(inputs: Profile_Activity_CellInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}：${i?.detail}`)
};

const ja_profile_activity_cell = /** @type {(inputs: Profile_Activity_CellInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}：${i?.detail}`)
};

/**
* | output |
* | --- |
* | "{date}: {detail}" |
*
* @param {Profile_Activity_CellInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_cell = /** @type {((inputs: Profile_Activity_CellInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_CellInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_cell(inputs)
	if (locale === "de") return de_profile_activity_cell(inputs)
	if (locale === "fr") return fr_profile_activity_cell(inputs)
	if (locale === "it") return it_profile_activity_cell(inputs)
	if (locale === "nl") return nl_profile_activity_cell(inputs)
	if (locale === "pl") return pl_profile_activity_cell(inputs)
	if (locale === "pt") return pt_profile_activity_cell(inputs)
	if (locale === "ru") return ru_profile_activity_cell(inputs)
	if (locale === "sv") return sv_profile_activity_cell(inputs)
	if (locale === "tr") return tr_profile_activity_cell(inputs)
	if (locale === "zh") return zh_profile_activity_cell(inputs)
	if (locale === "ja") return ja_profile_activity_cell(inputs)
	return en_profile_activity_cell(inputs)
});
