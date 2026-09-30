/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drafts_DeleteInputs */

const en_upload_drafts_delete = /** @type {(inputs: Upload_Drafts_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

const es_upload_drafts_delete = /** @type {(inputs: Upload_Drafts_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrar`)
};

const de_upload_drafts_delete = /** @type {(inputs: Upload_Drafts_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löschen`)
};

const fr_upload_drafts_delete = /** @type {(inputs: Upload_Drafts_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

const it_upload_drafts_delete = /** @type {(inputs: Upload_Drafts_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina`)
};

const nl_upload_drafts_delete = /** @type {(inputs: Upload_Drafts_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_upload_drafts_delete = /** @type {(inputs: Upload_Drafts_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_upload_drafts_delete = /** @type {(inputs: Upload_Drafts_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir`)
};

const ru_upload_drafts_delete = /** @type {(inputs: Upload_Drafts_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить`)
};

const sv_upload_drafts_delete = /** @type {(inputs: Upload_Drafts_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort`)
};

const tr_upload_drafts_delete = /** @type {(inputs: Upload_Drafts_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sil`)
};

const zh_upload_drafts_delete = /** @type {(inputs: Upload_Drafts_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const ja_upload_drafts_delete = /** @type {(inputs: Upload_Drafts_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Upload_Drafts_DeleteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_delete = /** @type {((inputs?: Upload_Drafts_DeleteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_DeleteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_delete(inputs)
	if (locale === "de") return de_upload_drafts_delete(inputs)
	if (locale === "fr") return fr_upload_drafts_delete(inputs)
	if (locale === "it") return it_upload_drafts_delete(inputs)
	if (locale === "nl") return nl_upload_drafts_delete(inputs)
	if (locale === "pl") return pl_upload_drafts_delete(inputs)
	if (locale === "pt") return pt_upload_drafts_delete(inputs)
	if (locale === "ru") return ru_upload_drafts_delete(inputs)
	if (locale === "sv") return sv_upload_drafts_delete(inputs)
	if (locale === "tr") return tr_upload_drafts_delete(inputs)
	if (locale === "zh") return zh_upload_drafts_delete(inputs)
	if (locale === "ja") return ja_upload_drafts_delete(inputs)
	return en_upload_drafts_delete(inputs)
});
