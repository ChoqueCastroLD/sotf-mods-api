/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Comment_PublishedInputs */

const en_ranger_comment_published = /** @type {(inputs: Ranger_Comment_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment published.`)
};

const es_ranger_comment_published = /** @type {(inputs: Ranger_Comment_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario publicado.`)
};

const de_ranger_comment_published = /** @type {(inputs: Ranger_Comment_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar veröffentlicht.`)
};

const fr_ranger_comment_published = /** @type {(inputs: Ranger_Comment_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire publié.`)
};

const it_ranger_comment_published = /** @type {(inputs: Ranger_Comment_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento pubblicato.`)
};

const nl_ranger_comment_published = /** @type {(inputs: Ranger_Comment_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie gepubliceerd.`)
};

const pl_ranger_comment_published = /** @type {(inputs: Ranger_Comment_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz opublikowany.`)
};

const pt_ranger_comment_published = /** @type {(inputs: Ranger_Comment_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário publicado.`)
};

const ru_ranger_comment_published = /** @type {(inputs: Ranger_Comment_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий опубликован.`)
};

const sv_ranger_comment_published = /** @type {(inputs: Ranger_Comment_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentaren publicerades.`)
};

const tr_ranger_comment_published = /** @type {(inputs: Ranger_Comment_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum yayımlandı.`)
};

const zh_ranger_comment_published = /** @type {(inputs: Ranger_Comment_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论已发布。`)
};

const ja_ranger_comment_published = /** @type {(inputs: Ranger_Comment_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを公開しました。`)
};

/**
* | output |
* | --- |
* | "Comment published." |
*
* @param {Ranger_Comment_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_comment_published = /** @type {((inputs?: Ranger_Comment_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Comment_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_comment_published(inputs)
	if (locale === "de") return de_ranger_comment_published(inputs)
	if (locale === "fr") return fr_ranger_comment_published(inputs)
	if (locale === "it") return it_ranger_comment_published(inputs)
	if (locale === "nl") return nl_ranger_comment_published(inputs)
	if (locale === "pl") return pl_ranger_comment_published(inputs)
	if (locale === "pt") return pt_ranger_comment_published(inputs)
	if (locale === "ru") return ru_ranger_comment_published(inputs)
	if (locale === "sv") return sv_ranger_comment_published(inputs)
	if (locale === "tr") return tr_ranger_comment_published(inputs)
	if (locale === "zh") return zh_ranger_comment_published(inputs)
	if (locale === "ja") return ja_ranger_comment_published(inputs)
	return en_ranger_comment_published(inputs)
});
