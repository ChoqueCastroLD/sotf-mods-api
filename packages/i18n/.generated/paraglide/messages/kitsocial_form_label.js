/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Form_LabelInputs */

const en_kitsocial_form_label = /** @type {(inputs: Kitsocial_Form_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write a comment`)
};

const es_kitsocial_form_label = /** @type {(inputs: Kitsocial_Form_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe un comentario`)
};

const de_kitsocial_form_label = /** @type {(inputs: Kitsocial_Form_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar schreiben`)
};

const fr_kitsocial_form_label = /** @type {(inputs: Kitsocial_Form_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écrire un commentaire`)
};

const it_kitsocial_form_label = /** @type {(inputs: Kitsocial_Form_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi un commento`)
};

const nl_kitsocial_form_label = /** @type {(inputs: Kitsocial_Form_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schrijf een reactie`)
};

const pl_kitsocial_form_label = /** @type {(inputs: Kitsocial_Form_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Napisz komentarz`)
};

const pt_kitsocial_form_label = /** @type {(inputs: Kitsocial_Form_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escreva um comentário`)
};

const ru_kitsocial_form_label = /** @type {(inputs: Kitsocial_Form_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Написать комментарий`)
};

const sv_kitsocial_form_label = /** @type {(inputs: Kitsocial_Form_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv en kommentar`)
};

const tr_kitsocial_form_label = /** @type {(inputs: Kitsocial_Form_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum yaz`)
};

const zh_kitsocial_form_label = /** @type {(inputs: Kitsocial_Form_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写评论`)
};

const ja_kitsocial_form_label = /** @type {(inputs: Kitsocial_Form_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを書く`)
};

/**
* | output |
* | --- |
* | "Write a comment" |
*
* @param {Kitsocial_Form_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_form_label = /** @type {((inputs?: Kitsocial_Form_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Form_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_form_label(inputs)
	if (locale === "de") return de_kitsocial_form_label(inputs)
	if (locale === "fr") return fr_kitsocial_form_label(inputs)
	if (locale === "it") return it_kitsocial_form_label(inputs)
	if (locale === "nl") return nl_kitsocial_form_label(inputs)
	if (locale === "pl") return pl_kitsocial_form_label(inputs)
	if (locale === "pt") return pt_kitsocial_form_label(inputs)
	if (locale === "ru") return ru_kitsocial_form_label(inputs)
	if (locale === "sv") return sv_kitsocial_form_label(inputs)
	if (locale === "tr") return tr_kitsocial_form_label(inputs)
	if (locale === "zh") return zh_kitsocial_form_label(inputs)
	if (locale === "ja") return ja_kitsocial_form_label(inputs)
	return en_kitsocial_form_label(inputs)
});
