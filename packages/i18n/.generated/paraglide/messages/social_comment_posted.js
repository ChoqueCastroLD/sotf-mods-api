/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_PostedInputs */

const en_social_comment_posted = /** @type {(inputs: Social_Comment_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment posted.`)
};

const es_social_comment_posted = /** @type {(inputs: Social_Comment_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario publicado.`)
};

const de_social_comment_posted = /** @type {(inputs: Social_Comment_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar veröffentlicht.`)
};

const fr_social_comment_posted = /** @type {(inputs: Social_Comment_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire publié.`)
};

const it_social_comment_posted = /** @type {(inputs: Social_Comment_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento pubblicato.`)
};

const nl_social_comment_posted = /** @type {(inputs: Social_Comment_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie geplaatst.`)
};

const pl_social_comment_posted = /** @type {(inputs: Social_Comment_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz opublikowany.`)
};

const pt_social_comment_posted = /** @type {(inputs: Social_Comment_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário publicado.`)
};

const ru_social_comment_posted = /** @type {(inputs: Social_Comment_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий опубликован.`)
};

const sv_social_comment_posted = /** @type {(inputs: Social_Comment_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentaren är publicerad.`)
};

const tr_social_comment_posted = /** @type {(inputs: Social_Comment_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum gönderildi.`)
};

const zh_social_comment_posted = /** @type {(inputs: Social_Comment_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论已发布。`)
};

const ja_social_comment_posted = /** @type {(inputs: Social_Comment_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを投稿しました。`)
};

/**
* | output |
* | --- |
* | "Comment posted." |
*
* @param {Social_Comment_PostedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_posted = /** @type {((inputs?: Social_Comment_PostedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_PostedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_posted(inputs)
	if (locale === "de") return de_social_comment_posted(inputs)
	if (locale === "fr") return fr_social_comment_posted(inputs)
	if (locale === "it") return it_social_comment_posted(inputs)
	if (locale === "nl") return nl_social_comment_posted(inputs)
	if (locale === "pl") return pl_social_comment_posted(inputs)
	if (locale === "pt") return pt_social_comment_posted(inputs)
	if (locale === "ru") return ru_social_comment_posted(inputs)
	if (locale === "sv") return sv_social_comment_posted(inputs)
	if (locale === "tr") return tr_social_comment_posted(inputs)
	if (locale === "zh") return zh_social_comment_posted(inputs)
	if (locale === "ja") return ja_social_comment_posted(inputs)
	return en_social_comment_posted(inputs)
});
