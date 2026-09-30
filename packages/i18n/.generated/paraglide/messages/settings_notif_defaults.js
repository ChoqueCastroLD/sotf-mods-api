/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_DefaultsInputs */

const en_settings_notif_defaults = /** @type {(inputs: Settings_Notif_DefaultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restore defaults`)
};

const es_settings_notif_defaults = /** @type {(inputs: Settings_Notif_DefaultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restablecer valores por defecto`)
};

const de_settings_notif_defaults = /** @type {(inputs: Settings_Notif_DefaultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standard wiederherstellen`)
};

const fr_settings_notif_defaults = /** @type {(inputs: Settings_Notif_DefaultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rétablir les valeurs par défaut`)
};

const it_settings_notif_defaults = /** @type {(inputs: Settings_Notif_DefaultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ripristina i valori predefiniti`)
};

const nl_settings_notif_defaults = /** @type {(inputs: Settings_Notif_DefaultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standaardwaarden herstellen`)
};

const pl_settings_notif_defaults = /** @type {(inputs: Settings_Notif_DefaultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przywróć domyślne`)
};

const pt_settings_notif_defaults = /** @type {(inputs: Settings_Notif_DefaultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restaurar padrões`)
};

const ru_settings_notif_defaults = /** @type {(inputs: Settings_Notif_DefaultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Восстановить по умолчанию`)
};

const sv_settings_notif_defaults = /** @type {(inputs: Settings_Notif_DefaultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återställ standard`)
};

const tr_settings_notif_defaults = /** @type {(inputs: Settings_Notif_DefaultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varsayılanlara dön`)
};

const zh_settings_notif_defaults = /** @type {(inputs: Settings_Notif_DefaultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恢复默认`)
};

const ja_settings_notif_defaults = /** @type {(inputs: Settings_Notif_DefaultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`既定に戻す`)
};

/**
* | output |
* | --- |
* | "Restore defaults" |
*
* @param {Settings_Notif_DefaultsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_defaults = /** @type {((inputs?: Settings_Notif_DefaultsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_DefaultsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_defaults(inputs)
	if (locale === "de") return de_settings_notif_defaults(inputs)
	if (locale === "fr") return fr_settings_notif_defaults(inputs)
	if (locale === "it") return it_settings_notif_defaults(inputs)
	if (locale === "nl") return nl_settings_notif_defaults(inputs)
	if (locale === "pl") return pl_settings_notif_defaults(inputs)
	if (locale === "pt") return pt_settings_notif_defaults(inputs)
	if (locale === "ru") return ru_settings_notif_defaults(inputs)
	if (locale === "sv") return sv_settings_notif_defaults(inputs)
	if (locale === "tr") return tr_settings_notif_defaults(inputs)
	if (locale === "zh") return zh_settings_notif_defaults(inputs)
	if (locale === "ja") return ja_settings_notif_defaults(inputs)
	return en_settings_notif_defaults(inputs)
});
