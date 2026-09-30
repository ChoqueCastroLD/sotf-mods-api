/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_FailedInputs */

const en_basecamp_settings_failed = /** @type {(inputs: Basecamp_Settings_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The status could not be changed`)
};

const es_basecamp_settings_failed = /** @type {(inputs: Basecamp_Settings_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cambiar el estado`)
};

const de_basecamp_settings_failed = /** @type {(inputs: Basecamp_Settings_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Status konnte nicht geändert werden`)
};

const fr_basecamp_settings_failed = /** @type {(inputs: Basecamp_Settings_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’état n’a pas pu être modifié`)
};

const it_basecamp_settings_failed = /** @type {(inputs: Basecamp_Settings_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile cambiare lo stato`)
};

const nl_basecamp_settings_failed = /** @type {(inputs: Basecamp_Settings_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De status kon niet worden gewijzigd`)
};

const pl_basecamp_settings_failed = /** @type {(inputs: Basecamp_Settings_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zmienić stanu`)
};

const pt_basecamp_settings_failed = /** @type {(inputs: Basecamp_Settings_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível mudar o estado`)
};

const ru_basecamp_settings_failed = /** @type {(inputs: Basecamp_Settings_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось изменить статус`)
};

const sv_basecamp_settings_failed = /** @type {(inputs: Basecamp_Settings_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statusen kunde inte ändras`)
};

const tr_basecamp_settings_failed = /** @type {(inputs: Basecamp_Settings_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durum değiştirilemedi`)
};

const zh_basecamp_settings_failed = /** @type {(inputs: Basecamp_Settings_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更改状态`)
};

const ja_basecamp_settings_failed = /** @type {(inputs: Basecamp_Settings_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状態を変更できませんでした`)
};

/**
* | output |
* | --- |
* | "The status could not be changed" |
*
* @param {Basecamp_Settings_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_failed = /** @type {((inputs?: Basecamp_Settings_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_failed(inputs)
	if (locale === "de") return de_basecamp_settings_failed(inputs)
	if (locale === "fr") return fr_basecamp_settings_failed(inputs)
	if (locale === "it") return it_basecamp_settings_failed(inputs)
	if (locale === "nl") return nl_basecamp_settings_failed(inputs)
	if (locale === "pl") return pl_basecamp_settings_failed(inputs)
	if (locale === "pt") return pt_basecamp_settings_failed(inputs)
	if (locale === "ru") return ru_basecamp_settings_failed(inputs)
	if (locale === "sv") return sv_basecamp_settings_failed(inputs)
	if (locale === "tr") return tr_basecamp_settings_failed(inputs)
	if (locale === "zh") return zh_basecamp_settings_failed(inputs)
	if (locale === "ja") return ja_basecamp_settings_failed(inputs)
	return en_basecamp_settings_failed(inputs)
});
