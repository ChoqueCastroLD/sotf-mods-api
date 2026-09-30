/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Tab_CommentsInputs */

const en_mod_tab_comments = /** @type {(inputs: Mod_Tab_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments`)
};

const es_mod_tab_comments = /** @type {(inputs: Mod_Tab_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentarios`)
};

const de_mod_tab_comments = /** @type {(inputs: Mod_Tab_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare`)
};

const fr_mod_tab_comments = /** @type {(inputs: Mod_Tab_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaires`)
};

const it_mod_tab_comments = /** @type {(inputs: Mod_Tab_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenti`)
};

const nl_mod_tab_comments = /** @type {(inputs: Mod_Tab_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties`)
};

const pl_mod_tab_comments = /** @type {(inputs: Mod_Tab_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze`)
};

const pt_mod_tab_comments = /** @type {(inputs: Mod_Tab_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários`)
};

const ru_mod_tab_comments = /** @type {(inputs: Mod_Tab_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии`)
};

const sv_mod_tab_comments = /** @type {(inputs: Mod_Tab_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer`)
};

const tr_mod_tab_comments = /** @type {(inputs: Mod_Tab_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumlar`)
};

const zh_mod_tab_comments = /** @type {(inputs: Mod_Tab_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const ja_mod_tab_comments = /** @type {(inputs: Mod_Tab_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント`)
};

/**
* | output |
* | --- |
* | "Comments" |
*
* @param {Mod_Tab_CommentsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_tab_comments = /** @type {((inputs?: Mod_Tab_CommentsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Tab_CommentsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_tab_comments(inputs)
	if (locale === "de") return de_mod_tab_comments(inputs)
	if (locale === "fr") return fr_mod_tab_comments(inputs)
	if (locale === "it") return it_mod_tab_comments(inputs)
	if (locale === "nl") return nl_mod_tab_comments(inputs)
	if (locale === "pl") return pl_mod_tab_comments(inputs)
	if (locale === "pt") return pt_mod_tab_comments(inputs)
	if (locale === "ru") return ru_mod_tab_comments(inputs)
	if (locale === "sv") return sv_mod_tab_comments(inputs)
	if (locale === "tr") return tr_mod_tab_comments(inputs)
	if (locale === "zh") return zh_mod_tab_comments(inputs)
	if (locale === "ja") return ja_mod_tab_comments(inputs)
	return en_mod_tab_comments(inputs)
});
