/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Social_Reply_To_LabelInputs */

const en_social_reply_to_label = /** @type {(inputs: Social_Reply_To_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reply to ${i?.name}`)
};

const es_social_reply_to_label = /** @type {(inputs: Social_Reply_To_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Responder a ${i?.name}`)
};

const de_social_reply_to_label = /** @type {(inputs: Social_Reply_To_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} antworten`)
};

const fr_social_reply_to_label = /** @type {(inputs: Social_Reply_To_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Répondre à ${i?.name}`)
};

const it_social_reply_to_label = /** @type {(inputs: Social_Reply_To_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rispondi a ${i?.name}`)
};

const nl_social_reply_to_label = /** @type {(inputs: Social_Reply_To_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beantwoord ${i?.name}`)
};

const pl_social_reply_to_label = /** @type {(inputs: Social_Reply_To_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odpowiedz: ${i?.name}`)
};

const pt_social_reply_to_label = /** @type {(inputs: Social_Reply_To_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Responder a ${i?.name}`)
};

const ru_social_reply_to_label = /** @type {(inputs: Social_Reply_To_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ответить: ${i?.name}`)
};

const sv_social_reply_to_label = /** @type {(inputs: Social_Reply_To_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Svara ${i?.name}`)
};

const tr_social_reply_to_label = /** @type {(inputs: Social_Reply_To_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kullanıcısını yanıtla`)
};

const zh_social_reply_to_label = /** @type {(inputs: Social_Reply_To_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`回复 ${i?.name}`)
};

const ja_social_reply_to_label = /** @type {(inputs: Social_Reply_To_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} さんに返信`)
};

/**
* | output |
* | --- |
* | "Reply to {name}" |
*
* @param {Social_Reply_To_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_reply_to_label = /** @type {((inputs: Social_Reply_To_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Reply_To_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_reply_to_label(inputs)
	if (locale === "de") return de_social_reply_to_label(inputs)
	if (locale === "fr") return fr_social_reply_to_label(inputs)
	if (locale === "it") return it_social_reply_to_label(inputs)
	if (locale === "nl") return nl_social_reply_to_label(inputs)
	if (locale === "pl") return pl_social_reply_to_label(inputs)
	if (locale === "pt") return pt_social_reply_to_label(inputs)
	if (locale === "ru") return ru_social_reply_to_label(inputs)
	if (locale === "sv") return sv_social_reply_to_label(inputs)
	if (locale === "tr") return tr_social_reply_to_label(inputs)
	if (locale === "zh") return zh_social_reply_to_label(inputs)
	if (locale === "ja") return ja_social_reply_to_label(inputs)
	return en_social_reply_to_label(inputs)
});
