/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_PostedInputs */

const en_kitsocial_posted = /** @type {(inputs: Kitsocial_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment posted.`)
};

const es_kitsocial_posted = /** @type {(inputs: Kitsocial_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario publicado.`)
};

const de_kitsocial_posted = /** @type {(inputs: Kitsocial_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar veröffentlicht.`)
};

const fr_kitsocial_posted = /** @type {(inputs: Kitsocial_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire publié.`)
};

const it_kitsocial_posted = /** @type {(inputs: Kitsocial_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento pubblicato.`)
};

const nl_kitsocial_posted = /** @type {(inputs: Kitsocial_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie geplaatst.`)
};

const pl_kitsocial_posted = /** @type {(inputs: Kitsocial_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz opublikowany.`)
};

const pt_kitsocial_posted = /** @type {(inputs: Kitsocial_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário publicado.`)
};

const ru_kitsocial_posted = /** @type {(inputs: Kitsocial_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий опубликован.`)
};

const sv_kitsocial_posted = /** @type {(inputs: Kitsocial_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentaren har publicerats.`)
};

const tr_kitsocial_posted = /** @type {(inputs: Kitsocial_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum gönderildi.`)
};

const zh_kitsocial_posted = /** @type {(inputs: Kitsocial_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论已发布。`)
};

const ja_kitsocial_posted = /** @type {(inputs: Kitsocial_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを投稿しました。`)
};

/**
* | output |
* | --- |
* | "Comment posted." |
*
* @param {Kitsocial_PostedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_posted = /** @type {((inputs?: Kitsocial_PostedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_PostedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_posted(inputs)
	if (locale === "de") return de_kitsocial_posted(inputs)
	if (locale === "fr") return fr_kitsocial_posted(inputs)
	if (locale === "it") return it_kitsocial_posted(inputs)
	if (locale === "nl") return nl_kitsocial_posted(inputs)
	if (locale === "pl") return pl_kitsocial_posted(inputs)
	if (locale === "pt") return pt_kitsocial_posted(inputs)
	if (locale === "ru") return ru_kitsocial_posted(inputs)
	if (locale === "sv") return sv_kitsocial_posted(inputs)
	if (locale === "tr") return tr_kitsocial_posted(inputs)
	if (locale === "zh") return zh_kitsocial_posted(inputs)
	if (locale === "ja") return ja_kitsocial_posted(inputs)
	return en_kitsocial_posted(inputs)
});
