/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Comments_TitleInputs */

const en_kitsocial_comments_title = /** @type {(inputs: Kitsocial_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments`)
};

const es_kitsocial_comments_title = /** @type {(inputs: Kitsocial_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentarios`)
};

const de_kitsocial_comments_title = /** @type {(inputs: Kitsocial_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare`)
};

const fr_kitsocial_comments_title = /** @type {(inputs: Kitsocial_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaires`)
};

const it_kitsocial_comments_title = /** @type {(inputs: Kitsocial_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenti`)
};

const nl_kitsocial_comments_title = /** @type {(inputs: Kitsocial_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties`)
};

const pl_kitsocial_comments_title = /** @type {(inputs: Kitsocial_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze`)
};

const pt_kitsocial_comments_title = /** @type {(inputs: Kitsocial_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários`)
};

const ru_kitsocial_comments_title = /** @type {(inputs: Kitsocial_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии`)
};

const sv_kitsocial_comments_title = /** @type {(inputs: Kitsocial_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer`)
};

const tr_kitsocial_comments_title = /** @type {(inputs: Kitsocial_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumlar`)
};

const zh_kitsocial_comments_title = /** @type {(inputs: Kitsocial_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const ja_kitsocial_comments_title = /** @type {(inputs: Kitsocial_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント`)
};

/**
* | output |
* | --- |
* | "Comments" |
*
* @param {Kitsocial_Comments_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_comments_title = /** @type {((inputs?: Kitsocial_Comments_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Comments_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_comments_title(inputs)
	if (locale === "de") return de_kitsocial_comments_title(inputs)
	if (locale === "fr") return fr_kitsocial_comments_title(inputs)
	if (locale === "it") return it_kitsocial_comments_title(inputs)
	if (locale === "nl") return nl_kitsocial_comments_title(inputs)
	if (locale === "pl") return pl_kitsocial_comments_title(inputs)
	if (locale === "pt") return pt_kitsocial_comments_title(inputs)
	if (locale === "ru") return ru_kitsocial_comments_title(inputs)
	if (locale === "sv") return sv_kitsocial_comments_title(inputs)
	if (locale === "tr") return tr_kitsocial_comments_title(inputs)
	if (locale === "zh") return zh_kitsocial_comments_title(inputs)
	if (locale === "ja") return ja_kitsocial_comments_title(inputs)
	return en_kitsocial_comments_title(inputs)
});
