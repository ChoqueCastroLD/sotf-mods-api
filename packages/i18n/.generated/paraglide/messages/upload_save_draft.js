/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Save_DraftInputs */

const en_upload_save_draft = /** @type {(inputs: Upload_Save_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save draft`)
};

const es_upload_save_draft = /** @type {(inputs: Upload_Save_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar borrador`)
};

const de_upload_save_draft = /** @type {(inputs: Upload_Save_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwurf speichern`)
};

const fr_upload_save_draft = /** @type {(inputs: Upload_Save_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer le brouillon`)
};

const it_upload_save_draft = /** @type {(inputs: Upload_Save_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva bozza`)
};

const nl_upload_save_draft = /** @type {(inputs: Upload_Save_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concept opslaan`)
};

const pl_upload_save_draft = /** @type {(inputs: Upload_Save_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz szkic`)
};

const pt_upload_save_draft = /** @type {(inputs: Upload_Save_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar rascunho`)
};

const ru_upload_save_draft = /** @type {(inputs: Upload_Save_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить черновик`)
};

const sv_upload_save_draft = /** @type {(inputs: Upload_Save_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara utkast`)
};

const tr_upload_save_draft = /** @type {(inputs: Upload_Save_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslağı kaydet`)
};

const zh_upload_save_draft = /** @type {(inputs: Upload_Save_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存草稿`)
};

const ja_upload_save_draft = /** @type {(inputs: Upload_Save_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書きを保存`)
};

/**
* | output |
* | --- |
* | "Save draft" |
*
* @param {Upload_Save_DraftInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_save_draft = /** @type {((inputs?: Upload_Save_DraftInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Save_DraftInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_save_draft(inputs)
	if (locale === "de") return de_upload_save_draft(inputs)
	if (locale === "fr") return fr_upload_save_draft(inputs)
	if (locale === "it") return it_upload_save_draft(inputs)
	if (locale === "nl") return nl_upload_save_draft(inputs)
	if (locale === "pl") return pl_upload_save_draft(inputs)
	if (locale === "pt") return pt_upload_save_draft(inputs)
	if (locale === "ru") return ru_upload_save_draft(inputs)
	if (locale === "sv") return sv_upload_save_draft(inputs)
	if (locale === "tr") return tr_upload_save_draft(inputs)
	if (locale === "zh") return zh_upload_save_draft(inputs)
	if (locale === "ja") return ja_upload_save_draft(inputs)
	return en_upload_save_draft(inputs)
});
