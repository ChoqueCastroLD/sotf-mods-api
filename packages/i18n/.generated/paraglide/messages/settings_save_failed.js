/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Save_FailedInputs */

const en_settings_save_failed = /** @type {(inputs: Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t save your changes`)
};

const es_settings_save_failed = /** @type {(inputs: Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se han podido guardar los cambios`)
};

const de_settings_save_failed = /** @type {(inputs: Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Änderungen konnten nicht gespeichert werden`)
};

const fr_settings_save_failed = /** @type {(inputs: Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’enregistrer vos modifications`)
};

const it_settings_save_failed = /** @type {(inputs: Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile salvare le modifiche`)
};

const nl_settings_save_failed = /** @type {(inputs: Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je wijzigingen konden niet worden opgeslagen`)
};

const pl_settings_save_failed = /** @type {(inputs: Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać zmian`)
};

const pt_settings_save_failed = /** @type {(inputs: Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar as alterações`)
};

const ru_settings_save_failed = /** @type {(inputs: Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить изменения`)
};

const sv_settings_save_failed = /** @type {(inputs: Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att spara dina ändringar`)
};

const tr_settings_save_failed = /** @type {(inputs: Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklikler kaydedilemedi`)
};

const zh_settings_save_failed = /** @type {(inputs: Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存你的更改`)
};

const ja_settings_save_failed = /** @type {(inputs: Settings_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更を保存できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t save your changes" |
*
* @param {Settings_Save_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_save_failed = /** @type {((inputs?: Settings_Save_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Save_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_save_failed(inputs)
	if (locale === "de") return de_settings_save_failed(inputs)
	if (locale === "fr") return fr_settings_save_failed(inputs)
	if (locale === "it") return it_settings_save_failed(inputs)
	if (locale === "nl") return nl_settings_save_failed(inputs)
	if (locale === "pl") return pl_settings_save_failed(inputs)
	if (locale === "pt") return pt_settings_save_failed(inputs)
	if (locale === "ru") return ru_settings_save_failed(inputs)
	if (locale === "sv") return sv_settings_save_failed(inputs)
	if (locale === "tr") return tr_settings_save_failed(inputs)
	if (locale === "zh") return zh_settings_save_failed(inputs)
	if (locale === "ja") return ja_settings_save_failed(inputs)
	return en_settings_save_failed(inputs)
});
