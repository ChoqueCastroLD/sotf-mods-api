/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Autosave_ErrorInputs */

const en_upload_autosave_error = /** @type {(inputs: Upload_Autosave_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t save. Retrying in a moment — your changes are kept here.`)
};

const es_upload_autosave_error = /** @type {(inputs: Upload_Autosave_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo guardar. Reintentamos en un momento; tus cambios siguen aquí.`)
};

const de_upload_autosave_error = /** @type {(inputs: Upload_Autosave_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speichern fehlgeschlagen. Neuer Versuch gleich – deine Änderungen bleiben hier erhalten.`)
};

const fr_upload_autosave_error = /** @type {(inputs: Upload_Autosave_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de l’enregistrement. Nouvel essai dans un instant ; vos modifications restent ici.`)
};

const it_upload_autosave_error = /** @type {(inputs: Upload_Autosave_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvataggio non riuscito. Riproviamo tra poco: le tue modifiche restano qui.`)
};

const nl_upload_autosave_error = /** @type {(inputs: Upload_Autosave_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opslaan mislukt. We proberen het zo opnieuw; je wijzigingen blijven hier.`)
};

const pl_upload_autosave_error = /** @type {(inputs: Upload_Autosave_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać. Za chwilę spróbujemy ponownie – twoje zmiany zostają tutaj.`)
};

const pt_upload_autosave_error = /** @type {(inputs: Upload_Autosave_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar. Tentaremos de novo em instantes; suas alterações continuam aqui.`)
};

const ru_upload_autosave_error = /** @type {(inputs: Upload_Autosave_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить. Повторим через минуту — изменения остаются здесь.`)
};

const sv_upload_autosave_error = /** @type {(inputs: Upload_Autosave_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte spara. Vi försöker igen strax – dina ändringar finns kvar här.`)
};

const tr_upload_autosave_error = /** @type {(inputs: Upload_Autosave_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedilemedi. Birazdan tekrar denenecek; değişikliklerin burada duruyor.`)
};

const zh_upload_autosave_error = /** @type {(inputs: Upload_Autosave_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存失败，稍后会自动重试，你的更改仍保留在这里。`)
};

const ja_upload_autosave_error = /** @type {(inputs: Upload_Autosave_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存できませんでした。まもなく再試行します。変更はここに残っています。`)
};

/**
* | output |
* | --- |
* | "Couldn’t save. Retrying in a moment — your changes are kept here." |
*
* @param {Upload_Autosave_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_autosave_error = /** @type {((inputs?: Upload_Autosave_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Autosave_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_autosave_error(inputs)
	if (locale === "de") return de_upload_autosave_error(inputs)
	if (locale === "fr") return fr_upload_autosave_error(inputs)
	if (locale === "it") return it_upload_autosave_error(inputs)
	if (locale === "nl") return nl_upload_autosave_error(inputs)
	if (locale === "pl") return pl_upload_autosave_error(inputs)
	if (locale === "pt") return pt_upload_autosave_error(inputs)
	if (locale === "ru") return ru_upload_autosave_error(inputs)
	if (locale === "sv") return sv_upload_autosave_error(inputs)
	if (locale === "tr") return tr_upload_autosave_error(inputs)
	if (locale === "zh") return zh_upload_autosave_error(inputs)
	if (locale === "ja") return ja_upload_autosave_error(inputs)
	return en_upload_autosave_error(inputs)
});
