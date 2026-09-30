/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ handle: NonNullable<unknown> }} Social_Comment_Reply_ToInputs */

const en_social_comment_reply_to = /** @type {(inputs: Social_Comment_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Replying to @${i?.handle}`)
};

const es_social_comment_reply_to = /** @type {(inputs: Social_Comment_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Respondiendo a @${i?.handle}`)
};

const de_social_comment_reply_to = /** @type {(inputs: Social_Comment_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Antwort an @${i?.handle}`)
};

const fr_social_comment_reply_to = /** @type {(inputs: Social_Comment_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En réponse à @${i?.handle}`)
};

const it_social_comment_reply_to = /** @type {(inputs: Social_Comment_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rispondi a @${i?.handle}`)
};

const nl_social_comment_reply_to = /** @type {(inputs: Social_Comment_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Antwoord aan @${i?.handle}`)
};

const pl_social_comment_reply_to = /** @type {(inputs: Social_Comment_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odpowiedź dla @${i?.handle}`)
};

const pt_social_comment_reply_to = /** @type {(inputs: Social_Comment_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Respondendo a @${i?.handle}`)
};

const ru_social_comment_reply_to = /** @type {(inputs: Social_Comment_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ответ для @${i?.handle}`)
};

const sv_social_comment_reply_to = /** @type {(inputs: Social_Comment_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Svarar @${i?.handle}`)
};

const tr_social_comment_reply_to = /** @type {(inputs: Social_Comment_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`@${i?.handle} kullanıcısına yanıt`)
};

const zh_social_comment_reply_to = /** @type {(inputs: Social_Comment_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`回复 @${i?.handle}`)
};

const ja_social_comment_reply_to = /** @type {(inputs: Social_Comment_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`@${i?.handle} さんへの返信`)
};

/**
* | output |
* | --- |
* | "Replying to @{handle}" |
*
* @param {Social_Comment_Reply_ToInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_reply_to = /** @type {((inputs: Social_Comment_Reply_ToInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_Reply_ToInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_reply_to(inputs)
	if (locale === "de") return de_social_comment_reply_to(inputs)
	if (locale === "fr") return fr_social_comment_reply_to(inputs)
	if (locale === "it") return it_social_comment_reply_to(inputs)
	if (locale === "nl") return nl_social_comment_reply_to(inputs)
	if (locale === "pl") return pl_social_comment_reply_to(inputs)
	if (locale === "pt") return pt_social_comment_reply_to(inputs)
	if (locale === "ru") return ru_social_comment_reply_to(inputs)
	if (locale === "sv") return sv_social_comment_reply_to(inputs)
	if (locale === "tr") return tr_social_comment_reply_to(inputs)
	if (locale === "zh") return zh_social_comment_reply_to(inputs)
	if (locale === "ja") return ja_social_comment_reply_to(inputs)
	return en_social_comment_reply_to(inputs)
});
