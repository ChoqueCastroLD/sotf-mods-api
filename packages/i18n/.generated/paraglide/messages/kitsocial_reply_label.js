/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kitsocial_Reply_LabelInputs */

const en_kitsocial_reply_label = /** @type {(inputs: Kitsocial_Reply_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Write a reply to ${i?.name}`)
};

const es_kitsocial_reply_label = /** @type {(inputs: Kitsocial_Reply_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escribe una respuesta a ${i?.name}`)
};

const de_kitsocial_reply_label = /** @type {(inputs: Kitsocial_Reply_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Antwort an ${i?.name} schreiben`)
};

const fr_kitsocial_reply_label = /** @type {(inputs: Kitsocial_Reply_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Écrire une réponse à ${i?.name}`)
};

const it_kitsocial_reply_label = /** @type {(inputs: Kitsocial_Reply_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scrivi una risposta a ${i?.name}`)
};

const nl_kitsocial_reply_label = /** @type {(inputs: Kitsocial_Reply_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Schrijf een antwoord aan ${i?.name}`)
};

const pl_kitsocial_reply_label = /** @type {(inputs: Kitsocial_Reply_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Napisz odpowiedź dla ${i?.name}`)
};

const pt_kitsocial_reply_label = /** @type {(inputs: Kitsocial_Reply_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escreva uma resposta a ${i?.name}`)
};

const ru_kitsocial_reply_label = /** @type {(inputs: Kitsocial_Reply_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Написать ответ пользователю ${i?.name}`)
};

const sv_kitsocial_reply_label = /** @type {(inputs: Kitsocial_Reply_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skriv ett svar till ${i?.name}`)
};

const tr_kitsocial_reply_label = /** @type {(inputs: Kitsocial_Reply_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kişisine yanıt yaz`)
};

const zh_kitsocial_reply_label = /** @type {(inputs: Kitsocial_Reply_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`回复 ${i?.name}`)
};

const ja_kitsocial_reply_label = /** @type {(inputs: Kitsocial_Reply_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} さんへの返信を書く`)
};

/**
* | output |
* | --- |
* | "Write a reply to {name}" |
*
* @param {Kitsocial_Reply_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_reply_label = /** @type {((inputs: Kitsocial_Reply_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Reply_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_reply_label(inputs)
	if (locale === "de") return de_kitsocial_reply_label(inputs)
	if (locale === "fr") return fr_kitsocial_reply_label(inputs)
	if (locale === "it") return it_kitsocial_reply_label(inputs)
	if (locale === "nl") return nl_kitsocial_reply_label(inputs)
	if (locale === "pl") return pl_kitsocial_reply_label(inputs)
	if (locale === "pt") return pt_kitsocial_reply_label(inputs)
	if (locale === "ru") return ru_kitsocial_reply_label(inputs)
	if (locale === "sv") return sv_kitsocial_reply_label(inputs)
	if (locale === "tr") return tr_kitsocial_reply_label(inputs)
	if (locale === "zh") return zh_kitsocial_reply_label(inputs)
	if (locale === "ja") return ja_kitsocial_reply_label(inputs)
	return en_kitsocial_reply_label(inputs)
});
