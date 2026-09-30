/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Target_CommentInputs */

const en_ranger_target_comment = /** @type {(inputs: Ranger_Target_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment`)
};

const es_ranger_target_comment = /** @type {(inputs: Ranger_Target_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario`)
};

const de_ranger_target_comment = /** @type {(inputs: Ranger_Target_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar`)
};

const fr_ranger_target_comment = /** @type {(inputs: Ranger_Target_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire`)
};

const it_ranger_target_comment = /** @type {(inputs: Ranger_Target_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento`)
};

const nl_ranger_target_comment = /** @type {(inputs: Ranger_Target_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie`)
};

const pl_ranger_target_comment = /** @type {(inputs: Ranger_Target_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz`)
};

const pt_ranger_target_comment = /** @type {(inputs: Ranger_Target_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário`)
};

const ru_ranger_target_comment = /** @type {(inputs: Ranger_Target_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий`)
};

const sv_ranger_target_comment = /** @type {(inputs: Ranger_Target_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar`)
};

const tr_ranger_target_comment = /** @type {(inputs: Ranger_Target_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum`)
};

const zh_ranger_target_comment = /** @type {(inputs: Ranger_Target_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const ja_ranger_target_comment = /** @type {(inputs: Ranger_Target_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント`)
};

/**
* | output |
* | --- |
* | "Comment" |
*
* @param {Ranger_Target_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_target_comment = /** @type {((inputs?: Ranger_Target_CommentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Target_CommentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_target_comment(inputs)
	if (locale === "de") return de_ranger_target_comment(inputs)
	if (locale === "fr") return fr_ranger_target_comment(inputs)
	if (locale === "it") return it_ranger_target_comment(inputs)
	if (locale === "nl") return nl_ranger_target_comment(inputs)
	if (locale === "pl") return pl_ranger_target_comment(inputs)
	if (locale === "pt") return pt_ranger_target_comment(inputs)
	if (locale === "ru") return ru_ranger_target_comment(inputs)
	if (locale === "sv") return sv_ranger_target_comment(inputs)
	if (locale === "tr") return tr_ranger_target_comment(inputs)
	if (locale === "zh") return zh_ranger_target_comment(inputs)
	if (locale === "ja") return ja_ranger_target_comment(inputs)
	return en_ranger_target_comment(inputs)
});
