/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Jams_Entries_SubmittedInputs */

const en_jams_entries_submitted = /** @type {(inputs: Jams_Entries_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Submitted ${i?.date}`)
};

const es_jams_entries_submitted = /** @type {(inputs: Jams_Entries_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enviado ${i?.date}`)
};

const de_jams_entries_submitted = /** @type {(inputs: Jams_Entries_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Eingereicht ${i?.date}`)
};

const fr_jams_entries_submitted = /** @type {(inputs: Jams_Entries_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Envoyé ${i?.date}`)
};

const it_jams_entries_submitted = /** @type {(inputs: Jams_Entries_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inviato ${i?.date}`)
};

const nl_jams_entries_submitted = /** @type {(inputs: Jams_Entries_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingediend ${i?.date}`)
};

const pl_jams_entries_submitted = /** @type {(inputs: Jams_Entries_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zgłoszono ${i?.date}`)
};

const pt_jams_entries_submitted = /** @type {(inputs: Jams_Entries_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enviada ${i?.date}`)
};

const ru_jams_entries_submitted = /** @type {(inputs: Jams_Entries_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Подано ${i?.date}`)
};

const sv_jams_entries_submitted = /** @type {(inputs: Jams_Entries_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inskickat ${i?.date}`)
};

const tr_jams_entries_submitted = /** @type {(inputs: Jams_Entries_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gönderildi: ${i?.date}`)
};

const zh_jams_entries_submitted = /** @type {(inputs: Jams_Entries_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`提交于 ${i?.date}`)
};

const ja_jams_entries_submitted = /** @type {(inputs: Jams_Entries_SubmittedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`提出日 ${i?.date}`)
};

/**
* | output |
* | --- |
* | "Submitted {date}" |
*
* @param {Jams_Entries_SubmittedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_submitted = /** @type {((inputs: Jams_Entries_SubmittedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_SubmittedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_submitted(inputs)
	if (locale === "de") return de_jams_entries_submitted(inputs)
	if (locale === "fr") return fr_jams_entries_submitted(inputs)
	if (locale === "it") return it_jams_entries_submitted(inputs)
	if (locale === "nl") return nl_jams_entries_submitted(inputs)
	if (locale === "pl") return pl_jams_entries_submitted(inputs)
	if (locale === "pt") return pt_jams_entries_submitted(inputs)
	if (locale === "ru") return ru_jams_entries_submitted(inputs)
	if (locale === "sv") return sv_jams_entries_submitted(inputs)
	if (locale === "tr") return tr_jams_entries_submitted(inputs)
	if (locale === "zh") return zh_jams_entries_submitted(inputs)
	if (locale === "ja") return ja_jams_entries_submitted(inputs)
	return en_jams_entries_submitted(inputs)
});
