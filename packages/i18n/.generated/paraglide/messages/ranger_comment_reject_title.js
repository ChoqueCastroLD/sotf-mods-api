/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Comment_Reject_TitleInputs */

const en_ranger_comment_reject_title = /** @type {(inputs: Ranger_Comment_Reject_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide this comment`)
};

const es_ranger_comment_reject_title = /** @type {(inputs: Ranger_Comment_Reject_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar este comentario`)
};

const de_ranger_comment_reject_title = /** @type {(inputs: Ranger_Comment_Reject_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Kommentar ausblenden`)
};

const fr_ranger_comment_reject_title = /** @type {(inputs: Ranger_Comment_Reject_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer ce commentaire`)
};

const it_ranger_comment_reject_title = /** @type {(inputs: Ranger_Comment_Reject_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondi questo commento`)
};

const nl_ranger_comment_reject_title = /** @type {(inputs: Ranger_Comment_Reject_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze reactie verbergen`)
};

const pl_ranger_comment_reject_title = /** @type {(inputs: Ranger_Comment_Reject_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj ten komentarz`)
};

const pt_ranger_comment_reject_title = /** @type {(inputs: Ranger_Comment_Reject_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar este comentário`)
};

const ru_ranger_comment_reject_title = /** @type {(inputs: Ranger_Comment_Reject_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть этот комментарий`)
};

const sv_ranger_comment_reject_title = /** @type {(inputs: Ranger_Comment_Reject_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj den här kommentaren`)
};

const tr_ranger_comment_reject_title = /** @type {(inputs: Ranger_Comment_Reject_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yorumu gizle`)
};

const zh_ranger_comment_reject_title = /** @type {(inputs: Ranger_Comment_Reject_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏这条评论`)
};

const ja_ranger_comment_reject_title = /** @type {(inputs: Ranger_Comment_Reject_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このコメントを非表示にする`)
};

/**
* | output |
* | --- |
* | "Hide this comment" |
*
* @param {Ranger_Comment_Reject_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_comment_reject_title = /** @type {((inputs?: Ranger_Comment_Reject_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Comment_Reject_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_comment_reject_title(inputs)
	if (locale === "de") return de_ranger_comment_reject_title(inputs)
	if (locale === "fr") return fr_ranger_comment_reject_title(inputs)
	if (locale === "it") return it_ranger_comment_reject_title(inputs)
	if (locale === "nl") return nl_ranger_comment_reject_title(inputs)
	if (locale === "pl") return pl_ranger_comment_reject_title(inputs)
	if (locale === "pt") return pt_ranger_comment_reject_title(inputs)
	if (locale === "ru") return ru_ranger_comment_reject_title(inputs)
	if (locale === "sv") return sv_ranger_comment_reject_title(inputs)
	if (locale === "tr") return tr_ranger_comment_reject_title(inputs)
	if (locale === "zh") return zh_ranger_comment_reject_title(inputs)
	if (locale === "ja") return ja_ranger_comment_reject_title(inputs)
	return en_ranger_comment_reject_title(inputs)
});
