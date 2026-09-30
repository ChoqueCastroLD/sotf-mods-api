/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Autosave_PendingInputs */

const en_upload_autosave_pending = /** @type {(inputs: Upload_Autosave_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsaved changes`)
};

const es_upload_autosave_pending = /** @type {(inputs: Upload_Autosave_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambios sin guardar`)
};

const de_upload_autosave_pending = /** @type {(inputs: Upload_Autosave_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ungespeicherte Änderungen`)
};

const fr_upload_autosave_pending = /** @type {(inputs: Upload_Autosave_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifications non enregistrées`)
};

const it_upload_autosave_pending = /** @type {(inputs: Upload_Autosave_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifiche non salvate`)
};

const nl_upload_autosave_pending = /** @type {(inputs: Upload_Autosave_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet-opgeslagen wijzigingen`)
};

const pl_upload_autosave_pending = /** @type {(inputs: Upload_Autosave_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezapisane zmiany`)
};

const pt_upload_autosave_pending = /** @type {(inputs: Upload_Autosave_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterações não salvas`)
};

const ru_upload_autosave_pending = /** @type {(inputs: Upload_Autosave_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Есть несохранённые изменения`)
};

const sv_upload_autosave_pending = /** @type {(inputs: Upload_Autosave_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osparade ändringar`)
};

const tr_upload_autosave_pending = /** @type {(inputs: Upload_Autosave_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedilmemiş değişiklikler`)
};

const zh_upload_autosave_pending = /** @type {(inputs: Upload_Autosave_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有未保存的更改`)
};

const ja_upload_autosave_pending = /** @type {(inputs: Upload_Autosave_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未保存の変更があります`)
};

/**
* | output |
* | --- |
* | "Unsaved changes" |
*
* @param {Upload_Autosave_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_autosave_pending = /** @type {((inputs?: Upload_Autosave_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Autosave_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_autosave_pending(inputs)
	if (locale === "de") return de_upload_autosave_pending(inputs)
	if (locale === "fr") return fr_upload_autosave_pending(inputs)
	if (locale === "it") return it_upload_autosave_pending(inputs)
	if (locale === "nl") return nl_upload_autosave_pending(inputs)
	if (locale === "pl") return pl_upload_autosave_pending(inputs)
	if (locale === "pt") return pt_upload_autosave_pending(inputs)
	if (locale === "ru") return ru_upload_autosave_pending(inputs)
	if (locale === "sv") return sv_upload_autosave_pending(inputs)
	if (locale === "tr") return tr_upload_autosave_pending(inputs)
	if (locale === "zh") return zh_upload_autosave_pending(inputs)
	if (locale === "ja") return ja_upload_autosave_pending(inputs)
	return en_upload_autosave_pending(inputs)
});
