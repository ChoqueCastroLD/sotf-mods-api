/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drafts_Delete_TitleInputs */

const en_upload_drafts_delete_title = /** @type {(inputs: Upload_Drafts_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete this draft?`)
};

const es_upload_drafts_delete_title = /** @type {(inputs: Upload_Drafts_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Borrar este borrador?`)
};

const de_upload_drafts_delete_title = /** @type {(inputs: Upload_Drafts_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Entwurf löschen?`)
};

const fr_upload_drafts_delete_title = /** @type {(inputs: Upload_Drafts_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer ce brouillon ?`)
};

const it_upload_drafts_delete_title = /** @type {(inputs: Upload_Drafts_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminare questa bozza?`)
};

const nl_upload_drafts_delete_title = /** @type {(inputs: Upload_Drafts_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit concept verwijderen?`)
};

const pl_upload_drafts_delete_title = /** @type {(inputs: Upload_Drafts_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunąć ten szkic?`)
};

const pt_upload_drafts_delete_title = /** @type {(inputs: Upload_Drafts_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir este rascunho?`)
};

const ru_upload_drafts_delete_title = /** @type {(inputs: Upload_Drafts_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить этот черновик?`)
};

const sv_upload_drafts_delete_title = /** @type {(inputs: Upload_Drafts_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort det här utkastet?`)
};

const tr_upload_drafts_delete_title = /** @type {(inputs: Upload_Drafts_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu taslak silinsin mi?`)
};

const zh_upload_drafts_delete_title = /** @type {(inputs: Upload_Drafts_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除这个草稿？`)
};

const ja_upload_drafts_delete_title = /** @type {(inputs: Upload_Drafts_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この下書きを削除しますか？`)
};

/**
* | output |
* | --- |
* | "Delete this draft?" |
*
* @param {Upload_Drafts_Delete_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_delete_title = /** @type {((inputs?: Upload_Drafts_Delete_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_Delete_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_delete_title(inputs)
	if (locale === "de") return de_upload_drafts_delete_title(inputs)
	if (locale === "fr") return fr_upload_drafts_delete_title(inputs)
	if (locale === "it") return it_upload_drafts_delete_title(inputs)
	if (locale === "nl") return nl_upload_drafts_delete_title(inputs)
	if (locale === "pl") return pl_upload_drafts_delete_title(inputs)
	if (locale === "pt") return pt_upload_drafts_delete_title(inputs)
	if (locale === "ru") return ru_upload_drafts_delete_title(inputs)
	if (locale === "sv") return sv_upload_drafts_delete_title(inputs)
	if (locale === "tr") return tr_upload_drafts_delete_title(inputs)
	if (locale === "zh") return zh_upload_drafts_delete_title(inputs)
	if (locale === "ja") return ja_upload_drafts_delete_title(inputs)
	return en_upload_drafts_delete_title(inputs)
});
