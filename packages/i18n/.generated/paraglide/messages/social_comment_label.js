/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_LabelInputs */

const en_social_comment_label = /** @type {(inputs: Social_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your comment`)
};

const es_social_comment_label = /** @type {(inputs: Social_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu comentario`)
};

const de_social_comment_label = /** @type {(inputs: Social_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Kommentar`)
};

const fr_social_comment_label = /** @type {(inputs: Social_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre commentaire`)
};

const it_social_comment_label = /** @type {(inputs: Social_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo commento`)
};

const nl_social_comment_label = /** @type {(inputs: Social_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je reactie`)
};

const pl_social_comment_label = /** @type {(inputs: Social_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój komentarz`)
};

const pt_social_comment_label = /** @type {(inputs: Social_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu comentário`)
};

const ru_social_comment_label = /** @type {(inputs: Social_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш комментарий`)
};

const sv_social_comment_label = /** @type {(inputs: Social_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din kommentar`)
};

const tr_social_comment_label = /** @type {(inputs: Social_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumun`)
};

const zh_social_comment_label = /** @type {(inputs: Social_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的评论`)
};

const ja_social_comment_label = /** @type {(inputs: Social_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのコメント`)
};

/**
* | output |
* | --- |
* | "Your comment" |
*
* @param {Social_Comment_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_label = /** @type {((inputs?: Social_Comment_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_label(inputs)
	if (locale === "de") return de_social_comment_label(inputs)
	if (locale === "fr") return fr_social_comment_label(inputs)
	if (locale === "it") return it_social_comment_label(inputs)
	if (locale === "nl") return nl_social_comment_label(inputs)
	if (locale === "pl") return pl_social_comment_label(inputs)
	if (locale === "pt") return pt_social_comment_label(inputs)
	if (locale === "ru") return ru_social_comment_label(inputs)
	if (locale === "sv") return sv_social_comment_label(inputs)
	if (locale === "tr") return tr_social_comment_label(inputs)
	if (locale === "zh") return zh_social_comment_label(inputs)
	if (locale === "ja") return ja_social_comment_label(inputs)
	return en_social_comment_label(inputs)
});
