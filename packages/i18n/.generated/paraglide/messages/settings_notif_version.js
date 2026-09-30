/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_VersionInputs */

const en_settings_notif_version = /** @type {(inputs: Settings_Notif_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New versions`)
};

const es_settings_notif_version = /** @type {(inputs: Settings_Notif_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones nuevas`)
};

const de_settings_notif_version = /** @type {(inputs: Settings_Notif_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Versionen`)
};

const fr_settings_notif_version = /** @type {(inputs: Settings_Notif_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelles versions`)
};

const it_settings_notif_version = /** @type {(inputs: Settings_Notif_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuove versioni`)
};

const nl_settings_notif_version = /** @type {(inputs: Settings_Notif_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe versies`)
};

const pl_settings_notif_version = /** @type {(inputs: Settings_Notif_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe wersje`)
};

const pt_settings_notif_version = /** @type {(inputs: Settings_Notif_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novas versões`)
};

const ru_settings_notif_version = /** @type {(inputs: Settings_Notif_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые версии`)
};

const sv_settings_notif_version = /** @type {(inputs: Settings_Notif_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya versioner`)
};

const tr_settings_notif_version = /** @type {(inputs: Settings_Notif_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni sürümler`)
};

const zh_settings_notif_version = /** @type {(inputs: Settings_Notif_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新版本`)
};

const ja_settings_notif_version = /** @type {(inputs: Settings_Notif_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいバージョン`)
};

/**
* | output |
* | --- |
* | "New versions" |
*
* @param {Settings_Notif_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_version = /** @type {((inputs?: Settings_Notif_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_version(inputs)
	if (locale === "de") return de_settings_notif_version(inputs)
	if (locale === "fr") return fr_settings_notif_version(inputs)
	if (locale === "it") return it_settings_notif_version(inputs)
	if (locale === "nl") return nl_settings_notif_version(inputs)
	if (locale === "pl") return pl_settings_notif_version(inputs)
	if (locale === "pt") return pt_settings_notif_version(inputs)
	if (locale === "ru") return ru_settings_notif_version(inputs)
	if (locale === "sv") return sv_settings_notif_version(inputs)
	if (locale === "tr") return tr_settings_notif_version(inputs)
	if (locale === "zh") return zh_settings_notif_version(inputs)
	if (locale === "ja") return ja_settings_notif_version(inputs)
	return en_settings_notif_version(inputs)
});
