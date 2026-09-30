/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Ranger_Sanction_UntilInputs */

const en_ranger_sanction_until = /** @type {(inputs: Ranger_Sanction_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`until ${i?.date}`)
};

const es_ranger_sanction_until = /** @type {(inputs: Ranger_Sanction_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`hasta el ${i?.date}`)
};

const de_ranger_sanction_until = /** @type {(inputs: Ranger_Sanction_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`bis ${i?.date}`)
};

const fr_ranger_sanction_until = /** @type {(inputs: Ranger_Sanction_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`jusqu’au ${i?.date}`)
};

const it_ranger_sanction_until = /** @type {(inputs: Ranger_Sanction_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`fino al ${i?.date}`)
};

const nl_ranger_sanction_until = /** @type {(inputs: Ranger_Sanction_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`tot ${i?.date}`)
};

const pl_ranger_sanction_until = /** @type {(inputs: Ranger_Sanction_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`do ${i?.date}`)
};

const pt_ranger_sanction_until = /** @type {(inputs: Ranger_Sanction_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`até ${i?.date}`)
};

const ru_ranger_sanction_until = /** @type {(inputs: Ranger_Sanction_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`до ${i?.date}`)
};

const sv_ranger_sanction_until = /** @type {(inputs: Ranger_Sanction_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`till ${i?.date}`)
};

const tr_ranger_sanction_until = /** @type {(inputs: Ranger_Sanction_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihine kadar`)
};

const zh_ranger_sanction_until = /** @type {(inputs: Ranger_Sanction_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`至 ${i?.date}`)
};

const ja_ranger_sanction_until = /** @type {(inputs: Ranger_Sanction_UntilInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} まで`)
};

/**
* | output |
* | --- |
* | "until {date}" |
*
* @param {Ranger_Sanction_UntilInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_until = /** @type {((inputs: Ranger_Sanction_UntilInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_UntilInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_until(inputs)
	if (locale === "de") return de_ranger_sanction_until(inputs)
	if (locale === "fr") return fr_ranger_sanction_until(inputs)
	if (locale === "it") return it_ranger_sanction_until(inputs)
	if (locale === "nl") return nl_ranger_sanction_until(inputs)
	if (locale === "pl") return pl_ranger_sanction_until(inputs)
	if (locale === "pt") return pt_ranger_sanction_until(inputs)
	if (locale === "ru") return ru_ranger_sanction_until(inputs)
	if (locale === "sv") return sv_ranger_sanction_until(inputs)
	if (locale === "tr") return tr_ranger_sanction_until(inputs)
	if (locale === "zh") return zh_ranger_sanction_until(inputs)
	if (locale === "ja") return ja_ranger_sanction_until(inputs)
	return en_ranger_sanction_until(inputs)
});
