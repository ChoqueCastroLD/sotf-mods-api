/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_JamInputs */

const en_settings_notif_jam = /** @type {(inputs: Settings_Notif_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const es_settings_notif_jam = /** @type {(inputs: Settings_Notif_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const de_settings_notif_jam = /** @type {(inputs: Settings_Notif_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const fr_settings_notif_jam = /** @type {(inputs: Settings_Notif_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const it_settings_notif_jam = /** @type {(inputs: Settings_Notif_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam`)
};

const nl_settings_notif_jam = /** @type {(inputs: Settings_Notif_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const pl_settings_notif_jam = /** @type {(inputs: Settings_Notif_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jamy`)
};

const pt_settings_notif_jam = /** @type {(inputs: Settings_Notif_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const ru_settings_notif_jam = /** @type {(inputs: Settings_Notif_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam`)
};

const sv_settings_notif_jam = /** @type {(inputs: Settings_Notif_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const tr_settings_notif_jam = /** @type {(inputs: Settings_Notif_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam'ler`)
};

const zh_settings_notif_jam = /** @type {(inputs: Settings_Notif_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam`)
};

const ja_settings_notif_jam = /** @type {(inputs: Settings_Notif_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam`)
};

/**
* | output |
* | --- |
* | "Mod Jams" |
*
* @param {Settings_Notif_JamInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_jam = /** @type {((inputs?: Settings_Notif_JamInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_JamInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_jam(inputs)
	if (locale === "de") return de_settings_notif_jam(inputs)
	if (locale === "fr") return fr_settings_notif_jam(inputs)
	if (locale === "it") return it_settings_notif_jam(inputs)
	if (locale === "nl") return nl_settings_notif_jam(inputs)
	if (locale === "pl") return pl_settings_notif_jam(inputs)
	if (locale === "pt") return pt_settings_notif_jam(inputs)
	if (locale === "ru") return ru_settings_notif_jam(inputs)
	if (locale === "sv") return sv_settings_notif_jam(inputs)
	if (locale === "tr") return tr_settings_notif_jam(inputs)
	if (locale === "zh") return zh_settings_notif_jam(inputs)
	if (locale === "ja") return ja_settings_notif_jam(inputs)
	return en_settings_notif_jam(inputs)
});
