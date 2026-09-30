/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_CreatorInputs */

const en_settings_notif_creator = /** @type {(inputs: Settings_Notif_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New mods from creators`)
};

const es_settings_notif_creator = /** @type {(inputs: Settings_Notif_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods nuevos de creadores`)
};

const de_settings_notif_creator = /** @type {(inputs: Settings_Notif_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Mods von Creators`)
};

const fr_settings_notif_creator = /** @type {(inputs: Settings_Notif_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveaux mods des créateurs`)
};

const it_settings_notif_creator = /** @type {(inputs: Settings_Notif_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuove mod dei creatori`)
};

const nl_settings_notif_creator = /** @type {(inputs: Settings_Notif_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe mods van makers`)
};

const pl_settings_notif_creator = /** @type {(inputs: Settings_Notif_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe mody twórców`)
};

const pt_settings_notif_creator = /** @type {(inputs: Settings_Notif_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novos mods de criadores`)
};

const ru_settings_notif_creator = /** @type {(inputs: Settings_Notif_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые моды авторов`)
};

const sv_settings_notif_creator = /** @type {(inputs: Settings_Notif_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya moddar från skapare`)
};

const tr_settings_notif_creator = /** @type {(inputs: Settings_Notif_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcılardan yeni modlar`)
};

const zh_settings_notif_creator = /** @type {(inputs: Settings_Notif_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者的新模组`)
};

const ja_settings_notif_creator = /** @type {(inputs: Settings_Notif_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターの新作MOD`)
};

/**
* | output |
* | --- |
* | "New mods from creators" |
*
* @param {Settings_Notif_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_creator = /** @type {((inputs?: Settings_Notif_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_creator(inputs)
	if (locale === "de") return de_settings_notif_creator(inputs)
	if (locale === "fr") return fr_settings_notif_creator(inputs)
	if (locale === "it") return it_settings_notif_creator(inputs)
	if (locale === "nl") return nl_settings_notif_creator(inputs)
	if (locale === "pl") return pl_settings_notif_creator(inputs)
	if (locale === "pt") return pt_settings_notif_creator(inputs)
	if (locale === "ru") return ru_settings_notif_creator(inputs)
	if (locale === "sv") return sv_settings_notif_creator(inputs)
	if (locale === "tr") return tr_settings_notif_creator(inputs)
	if (locale === "zh") return zh_settings_notif_creator(inputs)
	if (locale === "ja") return ja_settings_notif_creator(inputs)
	return en_settings_notif_creator(inputs)
});
