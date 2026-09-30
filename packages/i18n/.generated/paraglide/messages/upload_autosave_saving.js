/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Autosave_SavingInputs */

const en_upload_autosave_saving = /** @type {(inputs: Upload_Autosave_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving…`)
};

const es_upload_autosave_saving = /** @type {(inputs: Upload_Autosave_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardando…`)
};

const de_upload_autosave_saving = /** @type {(inputs: Upload_Autosave_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speichern…`)
};

const fr_upload_autosave_saving = /** @type {(inputs: Upload_Autosave_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrement…`)
};

const it_upload_autosave_saving = /** @type {(inputs: Upload_Autosave_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvataggio…`)
};

const nl_upload_autosave_saving = /** @type {(inputs: Upload_Autosave_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opslaan…`)
};

const pl_upload_autosave_saving = /** @type {(inputs: Upload_Autosave_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisywanie…`)
};

const pt_upload_autosave_saving = /** @type {(inputs: Upload_Autosave_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvando…`)
};

const ru_upload_autosave_saving = /** @type {(inputs: Upload_Autosave_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохраняем…`)
};

const sv_upload_autosave_saving = /** @type {(inputs: Upload_Autosave_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparar…`)
};

const tr_upload_autosave_saving = /** @type {(inputs: Upload_Autosave_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydediliyor…`)
};

const zh_upload_autosave_saving = /** @type {(inputs: Upload_Autosave_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在保存…`)
};

const ja_upload_autosave_saving = /** @type {(inputs: Upload_Autosave_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存中…`)
};

/**
* | output |
* | --- |
* | "Saving…" |
*
* @param {Upload_Autosave_SavingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_autosave_saving = /** @type {((inputs?: Upload_Autosave_SavingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Autosave_SavingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_autosave_saving(inputs)
	if (locale === "de") return de_upload_autosave_saving(inputs)
	if (locale === "fr") return fr_upload_autosave_saving(inputs)
	if (locale === "it") return it_upload_autosave_saving(inputs)
	if (locale === "nl") return nl_upload_autosave_saving(inputs)
	if (locale === "pl") return pl_upload_autosave_saving(inputs)
	if (locale === "pt") return pt_upload_autosave_saving(inputs)
	if (locale === "ru") return ru_upload_autosave_saving(inputs)
	if (locale === "sv") return sv_upload_autosave_saving(inputs)
	if (locale === "tr") return tr_upload_autosave_saving(inputs)
	if (locale === "zh") return zh_upload_autosave_saving(inputs)
	if (locale === "ja") return ja_upload_autosave_saving(inputs)
	return en_upload_autosave_saving(inputs)
});
