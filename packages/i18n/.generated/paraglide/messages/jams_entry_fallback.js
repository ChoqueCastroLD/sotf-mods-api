/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ id: NonNullable<unknown> }} Jams_Entry_FallbackInputs */

const en_jams_entry_fallback = /** @type {(inputs: Jams_Entry_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entry #${i?.id}`)
};

const es_jams_entry_fallback = /** @type {(inputs: Jams_Entry_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Participación n.º ${i?.id}`)
};

const de_jams_entry_fallback = /** @type {(inputs: Jams_Entry_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beitrag Nr. ${i?.id}`)
};

const fr_jams_entry_fallback = /** @type {(inputs: Jams_Entry_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Participation n°${i?.id}`)
};

const it_jams_entry_fallback = /** @type {(inputs: Jams_Entry_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Iscrizione n.${i?.id}`)
};

const nl_jams_entry_fallback = /** @type {(inputs: Jams_Entry_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inzending #${i?.id}`)
};

const pl_jams_entry_fallback = /** @type {(inputs: Jams_Entry_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zgłoszenie nr ${i?.id}`)
};

const pt_jams_entry_fallback = /** @type {(inputs: Jams_Entry_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inscrição n.º ${i?.id}`)
};

const ru_jams_entry_fallback = /** @type {(inputs: Jams_Entry_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Работа №${i?.id}`)
};

const sv_jams_entry_fallback = /** @type {(inputs: Jams_Entry_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bidrag #${i?.id}`)
};

const tr_jams_entry_fallback = /** @type {(inputs: Jams_Entry_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Başvuru #${i?.id}`)
};

const zh_jams_entry_fallback = /** @type {(inputs: Jams_Entry_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作品 #${i?.id}`)
};

const ja_jams_entry_fallback = /** @type {(inputs: Jams_Entry_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作品 #${i?.id}`)
};

/**
* | output |
* | --- |
* | "Entry #{id}" |
*
* @param {Jams_Entry_FallbackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entry_fallback = /** @type {((inputs: Jams_Entry_FallbackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entry_FallbackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entry_fallback(inputs)
	if (locale === "de") return de_jams_entry_fallback(inputs)
	if (locale === "fr") return fr_jams_entry_fallback(inputs)
	if (locale === "it") return it_jams_entry_fallback(inputs)
	if (locale === "nl") return nl_jams_entry_fallback(inputs)
	if (locale === "pl") return pl_jams_entry_fallback(inputs)
	if (locale === "pt") return pt_jams_entry_fallback(inputs)
	if (locale === "ru") return ru_jams_entry_fallback(inputs)
	if (locale === "sv") return sv_jams_entry_fallback(inputs)
	if (locale === "tr") return tr_jams_entry_fallback(inputs)
	if (locale === "zh") return zh_jams_entry_fallback(inputs)
	if (locale === "ja") return ja_jams_entry_fallback(inputs)
	return en_jams_entry_fallback(inputs)
});
