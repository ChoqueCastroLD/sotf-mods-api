/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_Edit_LabelInputs */

const en_social_comment_edit_label = /** @type {(inputs: Social_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit your comment`)
};

const es_social_comment_edit_label = /** @type {(inputs: Social_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edita tu comentario`)
};

const de_social_comment_edit_label = /** @type {(inputs: Social_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar bearbeiten`)
};

const fr_social_comment_edit_label = /** @type {(inputs: Social_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier votre commentaire`)
};

const it_social_comment_edit_label = /** @type {(inputs: Social_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica il tuo commento`)
};

const nl_social_comment_edit_label = /** @type {(inputs: Social_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je reactie bewerken`)
};

const pl_social_comment_edit_label = /** @type {(inputs: Social_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj komentarz`)
};

const pt_social_comment_edit_label = /** @type {(inputs: Social_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar seu comentário`)
};

const ru_social_comment_edit_label = /** @type {(inputs: Social_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить комментарий`)
};

const sv_social_comment_edit_label = /** @type {(inputs: Social_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera din kommentar`)
};

const tr_social_comment_edit_label = /** @type {(inputs: Social_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumunu düzenle`)
};

const zh_social_comment_edit_label = /** @type {(inputs: Social_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑你的评论`)
};

const ja_social_comment_edit_label = /** @type {(inputs: Social_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを編集`)
};

/**
* | output |
* | --- |
* | "Edit your comment" |
*
* @param {Social_Comment_Edit_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_edit_label = /** @type {((inputs?: Social_Comment_Edit_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_Edit_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_edit_label(inputs)
	if (locale === "de") return de_social_comment_edit_label(inputs)
	if (locale === "fr") return fr_social_comment_edit_label(inputs)
	if (locale === "it") return it_social_comment_edit_label(inputs)
	if (locale === "nl") return nl_social_comment_edit_label(inputs)
	if (locale === "pl") return pl_social_comment_edit_label(inputs)
	if (locale === "pt") return pt_social_comment_edit_label(inputs)
	if (locale === "ru") return ru_social_comment_edit_label(inputs)
	if (locale === "sv") return sv_social_comment_edit_label(inputs)
	if (locale === "tr") return tr_social_comment_edit_label(inputs)
	if (locale === "zh") return zh_social_comment_edit_label(inputs)
	if (locale === "ja") return ja_social_comment_edit_label(inputs)
	return en_social_comment_edit_label(inputs)
});
