/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Comment_Edit_LabelInputs */

const en_requests_comment_edit_label = /** @type {(inputs: Requests_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit your comment`)
};

const es_requests_comment_edit_label = /** @type {(inputs: Requests_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edita tu comentario`)
};

const de_requests_comment_edit_label = /** @type {(inputs: Requests_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar bearbeiten`)
};

const fr_requests_comment_edit_label = /** @type {(inputs: Requests_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier votre commentaire`)
};

const it_requests_comment_edit_label = /** @type {(inputs: Requests_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica il tuo commento`)
};

const nl_requests_comment_edit_label = /** @type {(inputs: Requests_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je reactie bewerken`)
};

const pl_requests_comment_edit_label = /** @type {(inputs: Requests_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj komentarz`)
};

const pt_requests_comment_edit_label = /** @type {(inputs: Requests_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edite seu comentário`)
};

const ru_requests_comment_edit_label = /** @type {(inputs: Requests_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить комментарий`)
};

const sv_requests_comment_edit_label = /** @type {(inputs: Requests_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera din kommentar`)
};

const tr_requests_comment_edit_label = /** @type {(inputs: Requests_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumu düzenle`)
};

const zh_requests_comment_edit_label = /** @type {(inputs: Requests_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑评论`)
};

const ja_requests_comment_edit_label = /** @type {(inputs: Requests_Comment_Edit_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを編集`)
};

/**
* | output |
* | --- |
* | "Edit your comment" |
*
* @param {Requests_Comment_Edit_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_comment_edit_label = /** @type {((inputs?: Requests_Comment_Edit_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Comment_Edit_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_comment_edit_label(inputs)
	if (locale === "de") return de_requests_comment_edit_label(inputs)
	if (locale === "fr") return fr_requests_comment_edit_label(inputs)
	if (locale === "it") return it_requests_comment_edit_label(inputs)
	if (locale === "nl") return nl_requests_comment_edit_label(inputs)
	if (locale === "pl") return pl_requests_comment_edit_label(inputs)
	if (locale === "pt") return pt_requests_comment_edit_label(inputs)
	if (locale === "ru") return ru_requests_comment_edit_label(inputs)
	if (locale === "sv") return sv_requests_comment_edit_label(inputs)
	if (locale === "tr") return tr_requests_comment_edit_label(inputs)
	if (locale === "zh") return zh_requests_comment_edit_label(inputs)
	if (locale === "ja") return ja_requests_comment_edit_label(inputs)
	return en_requests_comment_edit_label(inputs)
});
