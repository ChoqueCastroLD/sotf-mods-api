/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Form_PostingInputs */

const en_kitsocial_form_posting = /** @type {(inputs: Kitsocial_Form_PostingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posting…`)
};

const es_kitsocial_form_posting = /** @type {(inputs: Kitsocial_Form_PostingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicando…`)
};

const de_kitsocial_form_posting = /** @type {(inputs: Kitsocial_Form_PostingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird gesendet …`)
};

const fr_kitsocial_form_posting = /** @type {(inputs: Kitsocial_Form_PostingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publication…`)
};

const it_kitsocial_form_posting = /** @type {(inputs: Kitsocial_Form_PostingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicazione…`)
};

const nl_kitsocial_form_posting = /** @type {(inputs: Kitsocial_Form_PostingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plaatsen…`)
};

const pl_kitsocial_form_posting = /** @type {(inputs: Kitsocial_Form_PostingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publikowanie…`)
};

const pt_kitsocial_form_posting = /** @type {(inputs: Kitsocial_Form_PostingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicando…`)
};

const ru_kitsocial_form_posting = /** @type {(inputs: Kitsocial_Form_PostingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Публикация…`)
};

const sv_kitsocial_form_posting = /** @type {(inputs: Kitsocial_Form_PostingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicerar …`)
};

const tr_kitsocial_form_posting = /** @type {(inputs: Kitsocial_Form_PostingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gönderiliyor…`)
};

const zh_kitsocial_form_posting = /** @type {(inputs: Kitsocial_Form_PostingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布中…`)
};

const ja_kitsocial_form_posting = /** @type {(inputs: Kitsocial_Form_PostingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投稿中…`)
};

/**
* | output |
* | --- |
* | "Posting…" |
*
* @param {Kitsocial_Form_PostingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_form_posting = /** @type {((inputs?: Kitsocial_Form_PostingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Form_PostingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_form_posting(inputs)
	if (locale === "de") return de_kitsocial_form_posting(inputs)
	if (locale === "fr") return fr_kitsocial_form_posting(inputs)
	if (locale === "it") return it_kitsocial_form_posting(inputs)
	if (locale === "nl") return nl_kitsocial_form_posting(inputs)
	if (locale === "pl") return pl_kitsocial_form_posting(inputs)
	if (locale === "pt") return pt_kitsocial_form_posting(inputs)
	if (locale === "ru") return ru_kitsocial_form_posting(inputs)
	if (locale === "sv") return sv_kitsocial_form_posting(inputs)
	if (locale === "tr") return tr_kitsocial_form_posting(inputs)
	if (locale === "zh") return zh_kitsocial_form_posting(inputs)
	if (locale === "ja") return ja_kitsocial_form_posting(inputs)
	return en_kitsocial_form_posting(inputs)
});
