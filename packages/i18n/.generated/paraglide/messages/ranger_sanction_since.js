/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Ranger_Sanction_SinceInputs */

const en_ranger_sanction_since = /** @type {(inputs: Ranger_Sanction_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Since ${i?.date}`)
};

const es_ranger_sanction_since = /** @type {(inputs: Ranger_Sanction_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Desde el ${i?.date}`)
};

const de_ranger_sanction_since = /** @type {(inputs: Ranger_Sanction_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seit ${i?.date}`)
};

const fr_ranger_sanction_since = /** @type {(inputs: Ranger_Sanction_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Depuis le ${i?.date}`)
};

const it_ranger_sanction_since = /** @type {(inputs: Ranger_Sanction_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dal ${i?.date}`)
};

const nl_ranger_sanction_since = /** @type {(inputs: Ranger_Sanction_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sinds ${i?.date}`)
};

const pl_ranger_sanction_since = /** @type {(inputs: Ranger_Sanction_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Od ${i?.date}`)
};

const pt_ranger_sanction_since = /** @type {(inputs: Ranger_Sanction_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Desde ${i?.date}`)
};

const ru_ranger_sanction_since = /** @type {(inputs: Ranger_Sanction_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`С ${i?.date}`)
};

const sv_ranger_sanction_since = /** @type {(inputs: Ranger_Sanction_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sedan ${i?.date}`)
};

const tr_ranger_sanction_since = /** @type {(inputs: Ranger_Sanction_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Başlangıç: ${i?.date}`)
};

const zh_ranger_sanction_since = /** @type {(inputs: Ranger_Sanction_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`自 ${i?.date}`)
};

const ja_ranger_sanction_since = /** @type {(inputs: Ranger_Sanction_SinceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} から`)
};

/**
* | output |
* | --- |
* | "Since {date}" |
*
* @param {Ranger_Sanction_SinceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_since = /** @type {((inputs: Ranger_Sanction_SinceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_SinceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_since(inputs)
	if (locale === "de") return de_ranger_sanction_since(inputs)
	if (locale === "fr") return fr_ranger_sanction_since(inputs)
	if (locale === "it") return it_ranger_sanction_since(inputs)
	if (locale === "nl") return nl_ranger_sanction_since(inputs)
	if (locale === "pl") return pl_ranger_sanction_since(inputs)
	if (locale === "pt") return pt_ranger_sanction_since(inputs)
	if (locale === "ru") return ru_ranger_sanction_since(inputs)
	if (locale === "sv") return sv_ranger_sanction_since(inputs)
	if (locale === "tr") return tr_ranger_sanction_since(inputs)
	if (locale === "zh") return zh_ranger_sanction_since(inputs)
	if (locale === "ja") return ja_ranger_sanction_since(inputs)
	return en_ranger_sanction_since(inputs)
});
