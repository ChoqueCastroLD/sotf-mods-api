/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_SubmitInputs */

const en_social_comment_submit = /** @type {(inputs: Social_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post comment`)
};

const es_social_comment_submit = /** @type {(inputs: Social_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar comentario`)
};

const de_social_comment_submit = /** @type {(inputs: Social_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar senden`)
};

const fr_social_comment_submit = /** @type {(inputs: Social_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier le commentaire`)
};

const it_social_comment_submit = /** @type {(inputs: Social_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica commento`)
};

const nl_social_comment_submit = /** @type {(inputs: Social_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie plaatsen`)
};

const pl_social_comment_submit = /** @type {(inputs: Social_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj komentarz`)
};

const pt_social_comment_submit = /** @type {(inputs: Social_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar comentário`)
};

const ru_social_comment_submit = /** @type {(inputs: Social_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить комментарий`)
};

const sv_social_comment_submit = /** @type {(inputs: Social_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera kommentar`)
};

const tr_social_comment_submit = /** @type {(inputs: Social_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumu gönder`)
};

const zh_social_comment_submit = /** @type {(inputs: Social_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发表评论`)
};

const ja_social_comment_submit = /** @type {(inputs: Social_Comment_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを投稿`)
};

/**
* | output |
* | --- |
* | "Post comment" |
*
* @param {Social_Comment_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_submit = /** @type {((inputs?: Social_Comment_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_submit(inputs)
	if (locale === "de") return de_social_comment_submit(inputs)
	if (locale === "fr") return fr_social_comment_submit(inputs)
	if (locale === "it") return it_social_comment_submit(inputs)
	if (locale === "nl") return nl_social_comment_submit(inputs)
	if (locale === "pl") return pl_social_comment_submit(inputs)
	if (locale === "pt") return pt_social_comment_submit(inputs)
	if (locale === "ru") return ru_social_comment_submit(inputs)
	if (locale === "sv") return sv_social_comment_submit(inputs)
	if (locale === "tr") return tr_social_comment_submit(inputs)
	if (locale === "zh") return zh_social_comment_submit(inputs)
	if (locale === "ja") return ja_social_comment_submit(inputs)
	return en_social_comment_submit(inputs)
});
