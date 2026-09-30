/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Upload_Drafts_Delete_NamedInputs */

const en_upload_drafts_delete_named = /** @type {(inputs: Upload_Drafts_Delete_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete ${i?.name}`)
};

const es_upload_drafts_delete_named = /** @type {(inputs: Upload_Drafts_Delete_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Borrar ${i?.name}`)
};

const de_upload_drafts_delete_named = /** @type {(inputs: Upload_Drafts_Delete_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} löschen`)
};

const fr_upload_drafts_delete_named = /** @type {(inputs: Upload_Drafts_Delete_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Supprimer ${i?.name}`)
};

const it_upload_drafts_delete_named = /** @type {(inputs: Upload_Drafts_Delete_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Elimina ${i?.name}`)
};

const nl_upload_drafts_delete_named = /** @type {(inputs: Upload_Drafts_Delete_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} verwijderen`)
};

const pl_upload_drafts_delete_named = /** @type {(inputs: Upload_Drafts_Delete_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń ${i?.name}`)
};

const pt_upload_drafts_delete_named = /** @type {(inputs: Upload_Drafts_Delete_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Excluir ${i?.name}`)
};

const ru_upload_drafts_delete_named = /** @type {(inputs: Upload_Drafts_Delete_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалить «${i?.name}»`)
};

const sv_upload_drafts_delete_named = /** @type {(inputs: Upload_Drafts_Delete_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort ${i?.name}`)
};

const tr_upload_drafts_delete_named = /** @type {(inputs: Upload_Drafts_Delete_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} sil`)
};

const zh_upload_drafts_delete_named = /** @type {(inputs: Upload_Drafts_Delete_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`删除 ${i?.name}`)
};

const ja_upload_drafts_delete_named = /** @type {(inputs: Upload_Drafts_Delete_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を削除`)
};

/**
* | output |
* | --- |
* | "Delete {name}" |
*
* @param {Upload_Drafts_Delete_NamedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_delete_named = /** @type {((inputs: Upload_Drafts_Delete_NamedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_Delete_NamedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_delete_named(inputs)
	if (locale === "de") return de_upload_drafts_delete_named(inputs)
	if (locale === "fr") return fr_upload_drafts_delete_named(inputs)
	if (locale === "it") return it_upload_drafts_delete_named(inputs)
	if (locale === "nl") return nl_upload_drafts_delete_named(inputs)
	if (locale === "pl") return pl_upload_drafts_delete_named(inputs)
	if (locale === "pt") return pt_upload_drafts_delete_named(inputs)
	if (locale === "ru") return ru_upload_drafts_delete_named(inputs)
	if (locale === "sv") return sv_upload_drafts_delete_named(inputs)
	if (locale === "tr") return tr_upload_drafts_delete_named(inputs)
	if (locale === "zh") return zh_upload_drafts_delete_named(inputs)
	if (locale === "ja") return ja_upload_drafts_delete_named(inputs)
	return en_upload_drafts_delete_named(inputs)
});
