/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Comment_Delete_TextInputs */

const en_requests_comment_delete_text = /** @type {(inputs: Requests_Comment_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This cannot be undone.`)
};

const es_requests_comment_delete_text = /** @type {(inputs: Requests_Comment_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se puede deshacer.`)
};

const de_requests_comment_delete_text = /** @type {(inputs: Requests_Comment_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das lässt sich nicht rückgängig machen.`)
};

const fr_requests_comment_delete_text = /** @type {(inputs: Requests_Comment_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette action est irréversible.`)
};

const it_requests_comment_delete_text = /** @type {(inputs: Requests_Comment_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non si può annullare.`)
};

const nl_requests_comment_delete_text = /** @type {(inputs: Requests_Comment_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit kan niet ongedaan worden gemaakt.`)
};

const pl_requests_comment_delete_text = /** @type {(inputs: Requests_Comment_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie można tego cofnąć.`)
};

const pt_requests_comment_delete_text = /** @type {(inputs: Requests_Comment_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso não pode ser desfeito.`)
};

const ru_requests_comment_delete_text = /** @type {(inputs: Requests_Comment_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это нельзя отменить.`)
};

const sv_requests_comment_delete_text = /** @type {(inputs: Requests_Comment_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det går inte att ångra.`)
};

const tr_requests_comment_delete_text = /** @type {(inputs: Requests_Comment_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu geri alınamaz.`)
};

const zh_requests_comment_delete_text = /** @type {(inputs: Requests_Comment_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此操作无法撤销。`)
};

const ja_requests_comment_delete_text = /** @type {(inputs: Requests_Comment_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元に戻せません。`)
};

/**
* | output |
* | --- |
* | "This cannot be undone." |
*
* @param {Requests_Comment_Delete_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_comment_delete_text = /** @type {((inputs?: Requests_Comment_Delete_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Comment_Delete_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_comment_delete_text(inputs)
	if (locale === "de") return de_requests_comment_delete_text(inputs)
	if (locale === "fr") return fr_requests_comment_delete_text(inputs)
	if (locale === "it") return it_requests_comment_delete_text(inputs)
	if (locale === "nl") return nl_requests_comment_delete_text(inputs)
	if (locale === "pl") return pl_requests_comment_delete_text(inputs)
	if (locale === "pt") return pt_requests_comment_delete_text(inputs)
	if (locale === "ru") return ru_requests_comment_delete_text(inputs)
	if (locale === "sv") return sv_requests_comment_delete_text(inputs)
	if (locale === "tr") return tr_requests_comment_delete_text(inputs)
	if (locale === "zh") return zh_requests_comment_delete_text(inputs)
	if (locale === "ja") return ja_requests_comment_delete_text(inputs)
	return en_requests_comment_delete_text(inputs)
});
