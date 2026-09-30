/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_CommentsInputs */

const en_console_nav_comments = /** @type {(inputs: Console_Nav_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments`)
};

const es_console_nav_comments = /** @type {(inputs: Console_Nav_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentarios`)
};

const de_console_nav_comments = /** @type {(inputs: Console_Nav_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare`)
};

const fr_console_nav_comments = /** @type {(inputs: Console_Nav_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaires`)
};

const it_console_nav_comments = /** @type {(inputs: Console_Nav_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenti`)
};

const nl_console_nav_comments = /** @type {(inputs: Console_Nav_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties`)
};

const pl_console_nav_comments = /** @type {(inputs: Console_Nav_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze`)
};

const pt_console_nav_comments = /** @type {(inputs: Console_Nav_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários`)
};

const ru_console_nav_comments = /** @type {(inputs: Console_Nav_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии`)
};

const sv_console_nav_comments = /** @type {(inputs: Console_Nav_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer`)
};

const tr_console_nav_comments = /** @type {(inputs: Console_Nav_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumlar`)
};

const zh_console_nav_comments = /** @type {(inputs: Console_Nav_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const ja_console_nav_comments = /** @type {(inputs: Console_Nav_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント`)
};

/**
* | output |
* | --- |
* | "Comments" |
*
* @param {Console_Nav_CommentsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_comments = /** @type {((inputs?: Console_Nav_CommentsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_CommentsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_comments(inputs)
	if (locale === "de") return de_console_nav_comments(inputs)
	if (locale === "fr") return fr_console_nav_comments(inputs)
	if (locale === "it") return it_console_nav_comments(inputs)
	if (locale === "nl") return nl_console_nav_comments(inputs)
	if (locale === "pl") return pl_console_nav_comments(inputs)
	if (locale === "pt") return pt_console_nav_comments(inputs)
	if (locale === "ru") return ru_console_nav_comments(inputs)
	if (locale === "sv") return sv_console_nav_comments(inputs)
	if (locale === "tr") return tr_console_nav_comments(inputs)
	if (locale === "zh") return zh_console_nav_comments(inputs)
	if (locale === "ja") return ja_console_nav_comments(inputs)
	return en_console_nav_comments(inputs)
});
