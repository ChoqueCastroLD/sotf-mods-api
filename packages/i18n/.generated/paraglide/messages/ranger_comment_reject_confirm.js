/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Comment_Reject_ConfirmInputs */

const en_ranger_comment_reject_confirm = /** @type {(inputs: Ranger_Comment_Reject_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide comment`)
};

const es_ranger_comment_reject_confirm = /** @type {(inputs: Ranger_Comment_Reject_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar comentario`)
};

const de_ranger_comment_reject_confirm = /** @type {(inputs: Ranger_Comment_Reject_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar ausblenden`)
};

const fr_ranger_comment_reject_confirm = /** @type {(inputs: Ranger_Comment_Reject_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer le commentaire`)
};

const it_ranger_comment_reject_confirm = /** @type {(inputs: Ranger_Comment_Reject_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondi il commento`)
};

const nl_ranger_comment_reject_confirm = /** @type {(inputs: Ranger_Comment_Reject_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie verbergen`)
};

const pl_ranger_comment_reject_confirm = /** @type {(inputs: Ranger_Comment_Reject_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj komentarz`)
};

const pt_ranger_comment_reject_confirm = /** @type {(inputs: Ranger_Comment_Reject_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar comentário`)
};

const ru_ranger_comment_reject_confirm = /** @type {(inputs: Ranger_Comment_Reject_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть комментарий`)
};

const sv_ranger_comment_reject_confirm = /** @type {(inputs: Ranger_Comment_Reject_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj kommentaren`)
};

const tr_ranger_comment_reject_confirm = /** @type {(inputs: Ranger_Comment_Reject_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumu gizle`)
};

const zh_ranger_comment_reject_confirm = /** @type {(inputs: Ranger_Comment_Reject_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏评论`)
};

const ja_ranger_comment_reject_confirm = /** @type {(inputs: Ranger_Comment_Reject_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを非表示にする`)
};

/**
* | output |
* | --- |
* | "Hide comment" |
*
* @param {Ranger_Comment_Reject_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_comment_reject_confirm = /** @type {((inputs?: Ranger_Comment_Reject_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Comment_Reject_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_comment_reject_confirm(inputs)
	if (locale === "de") return de_ranger_comment_reject_confirm(inputs)
	if (locale === "fr") return fr_ranger_comment_reject_confirm(inputs)
	if (locale === "it") return it_ranger_comment_reject_confirm(inputs)
	if (locale === "nl") return nl_ranger_comment_reject_confirm(inputs)
	if (locale === "pl") return pl_ranger_comment_reject_confirm(inputs)
	if (locale === "pt") return pt_ranger_comment_reject_confirm(inputs)
	if (locale === "ru") return ru_ranger_comment_reject_confirm(inputs)
	if (locale === "sv") return sv_ranger_comment_reject_confirm(inputs)
	if (locale === "tr") return tr_ranger_comment_reject_confirm(inputs)
	if (locale === "zh") return zh_ranger_comment_reject_confirm(inputs)
	if (locale === "ja") return ja_ranger_comment_reject_confirm(inputs)
	return en_ranger_comment_reject_confirm(inputs)
});
