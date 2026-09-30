/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Comments_TitleInputs */

const en_builds_comments_title = /** @type {(inputs: Builds_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments`)
};

const es_builds_comments_title = /** @type {(inputs: Builds_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentarios`)
};

const de_builds_comments_title = /** @type {(inputs: Builds_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare`)
};

const fr_builds_comments_title = /** @type {(inputs: Builds_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaires`)
};

const it_builds_comments_title = /** @type {(inputs: Builds_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenti`)
};

const nl_builds_comments_title = /** @type {(inputs: Builds_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties`)
};

const pl_builds_comments_title = /** @type {(inputs: Builds_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze`)
};

const pt_builds_comments_title = /** @type {(inputs: Builds_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários`)
};

const ru_builds_comments_title = /** @type {(inputs: Builds_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии`)
};

const sv_builds_comments_title = /** @type {(inputs: Builds_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer`)
};

const tr_builds_comments_title = /** @type {(inputs: Builds_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumlar`)
};

const zh_builds_comments_title = /** @type {(inputs: Builds_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const ja_builds_comments_title = /** @type {(inputs: Builds_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント`)
};

/**
* | output |
* | --- |
* | "Comments" |
*
* @param {Builds_Comments_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_comments_title = /** @type {((inputs?: Builds_Comments_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Comments_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_comments_title(inputs)
	if (locale === "de") return de_builds_comments_title(inputs)
	if (locale === "fr") return fr_builds_comments_title(inputs)
	if (locale === "it") return it_builds_comments_title(inputs)
	if (locale === "nl") return nl_builds_comments_title(inputs)
	if (locale === "pl") return pl_builds_comments_title(inputs)
	if (locale === "pt") return pt_builds_comments_title(inputs)
	if (locale === "ru") return ru_builds_comments_title(inputs)
	if (locale === "sv") return sv_builds_comments_title(inputs)
	if (locale === "tr") return tr_builds_comments_title(inputs)
	if (locale === "zh") return zh_builds_comments_title(inputs)
	if (locale === "ja") return ja_builds_comments_title(inputs)
	return en_builds_comments_title(inputs)
});
