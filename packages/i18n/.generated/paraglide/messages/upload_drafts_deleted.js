/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drafts_DeletedInputs */

const en_upload_drafts_deleted = /** @type {(inputs: Upload_Drafts_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Draft deleted`)
};

const es_upload_drafts_deleted = /** @type {(inputs: Upload_Drafts_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrador eliminado`)
};

const de_upload_drafts_deleted = /** @type {(inputs: Upload_Drafts_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwurf gelöscht`)
};

const fr_upload_drafts_deleted = /** @type {(inputs: Upload_Drafts_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brouillon supprimé`)
};

const it_upload_drafts_deleted = /** @type {(inputs: Upload_Drafts_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozza eliminata`)
};

const nl_upload_drafts_deleted = /** @type {(inputs: Upload_Drafts_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concept verwijderd`)
};

const pl_upload_drafts_deleted = /** @type {(inputs: Upload_Drafts_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szkic usunięty`)
};

const pt_upload_drafts_deleted = /** @type {(inputs: Upload_Drafts_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rascunho excluído`)
};

const ru_upload_drafts_deleted = /** @type {(inputs: Upload_Drafts_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Черновик удалён`)
};

const sv_upload_drafts_deleted = /** @type {(inputs: Upload_Drafts_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utkastet togs bort`)
};

const tr_upload_drafts_deleted = /** @type {(inputs: Upload_Drafts_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslak silindi`)
};

const zh_upload_drafts_deleted = /** @type {(inputs: Upload_Drafts_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿已删除`)
};

const ja_upload_drafts_deleted = /** @type {(inputs: Upload_Drafts_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書きを削除しました`)
};

/**
* | output |
* | --- |
* | "Draft deleted" |
*
* @param {Upload_Drafts_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_deleted = /** @type {((inputs?: Upload_Drafts_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_deleted(inputs)
	if (locale === "de") return de_upload_drafts_deleted(inputs)
	if (locale === "fr") return fr_upload_drafts_deleted(inputs)
	if (locale === "it") return it_upload_drafts_deleted(inputs)
	if (locale === "nl") return nl_upload_drafts_deleted(inputs)
	if (locale === "pl") return pl_upload_drafts_deleted(inputs)
	if (locale === "pt") return pt_upload_drafts_deleted(inputs)
	if (locale === "ru") return ru_upload_drafts_deleted(inputs)
	if (locale === "sv") return sv_upload_drafts_deleted(inputs)
	if (locale === "tr") return tr_upload_drafts_deleted(inputs)
	if (locale === "zh") return zh_upload_drafts_deleted(inputs)
	if (locale === "ja") return ja_upload_drafts_deleted(inputs)
	return en_upload_drafts_deleted(inputs)
});
