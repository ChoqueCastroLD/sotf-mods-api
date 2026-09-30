/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_EditedInputs */

const en_social_comment_edited = /** @type {(inputs: Social_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment updated.`)
};

const es_social_comment_edited = /** @type {(inputs: Social_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario actualizado.`)
};

const de_social_comment_edited = /** @type {(inputs: Social_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar aktualisiert.`)
};

const fr_social_comment_edited = /** @type {(inputs: Social_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire modifié.`)
};

const it_social_comment_edited = /** @type {(inputs: Social_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento aggiornato.`)
};

const nl_social_comment_edited = /** @type {(inputs: Social_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie bijgewerkt.`)
};

const pl_social_comment_edited = /** @type {(inputs: Social_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz zaktualizowany.`)
};

const pt_social_comment_edited = /** @type {(inputs: Social_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário atualizado.`)
};

const ru_social_comment_edited = /** @type {(inputs: Social_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий обновлён.`)
};

const sv_social_comment_edited = /** @type {(inputs: Social_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentaren är uppdaterad.`)
};

const tr_social_comment_edited = /** @type {(inputs: Social_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum güncellendi.`)
};

const zh_social_comment_edited = /** @type {(inputs: Social_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论已更新。`)
};

const ja_social_comment_edited = /** @type {(inputs: Social_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを更新しました。`)
};

/**
* | output |
* | --- |
* | "Comment updated." |
*
* @param {Social_Comment_EditedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_edited = /** @type {((inputs?: Social_Comment_EditedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_EditedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_edited(inputs)
	if (locale === "de") return de_social_comment_edited(inputs)
	if (locale === "fr") return fr_social_comment_edited(inputs)
	if (locale === "it") return it_social_comment_edited(inputs)
	if (locale === "nl") return nl_social_comment_edited(inputs)
	if (locale === "pl") return pl_social_comment_edited(inputs)
	if (locale === "pt") return pt_social_comment_edited(inputs)
	if (locale === "ru") return ru_social_comment_edited(inputs)
	if (locale === "sv") return sv_social_comment_edited(inputs)
	if (locale === "tr") return tr_social_comment_edited(inputs)
	if (locale === "zh") return zh_social_comment_edited(inputs)
	if (locale === "ja") return ja_social_comment_edited(inputs)
	return en_social_comment_edited(inputs)
});
