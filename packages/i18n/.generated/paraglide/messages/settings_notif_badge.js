/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_BadgeInputs */

const en_settings_notif_badge = /** @type {(inputs: Settings_Notif_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const es_settings_notif_badge = /** @type {(inputs: Settings_Notif_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignias`)
};

const de_settings_notif_badge = /** @type {(inputs: Settings_Notif_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abzeichen`)
};

const fr_settings_notif_badge = /** @type {(inputs: Settings_Notif_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const it_settings_notif_badge = /** @type {(inputs: Settings_Notif_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivi`)
};

const nl_settings_notif_badge = /** @type {(inputs: Settings_Notif_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const pl_settings_notif_badge = /** @type {(inputs: Settings_Notif_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odznaki`)
};

const pt_settings_notif_badge = /** @type {(inputs: Settings_Notif_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnias`)
};

const ru_settings_notif_badge = /** @type {(inputs: Settings_Notif_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значки`)
};

const sv_settings_notif_badge = /** @type {(inputs: Settings_Notif_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Märken`)
};

const tr_settings_notif_badge = /** @type {(inputs: Settings_Notif_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozetler`)
};

const zh_settings_notif_badge = /** @type {(inputs: Settings_Notif_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`徽章`)
};

const ja_settings_notif_badge = /** @type {(inputs: Settings_Notif_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バッジ`)
};

/**
* | output |
* | --- |
* | "Badges" |
*
* @param {Settings_Notif_BadgeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_badge = /** @type {((inputs?: Settings_Notif_BadgeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_BadgeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_badge(inputs)
	if (locale === "de") return de_settings_notif_badge(inputs)
	if (locale === "fr") return fr_settings_notif_badge(inputs)
	if (locale === "it") return it_settings_notif_badge(inputs)
	if (locale === "nl") return nl_settings_notif_badge(inputs)
	if (locale === "pl") return pl_settings_notif_badge(inputs)
	if (locale === "pt") return pt_settings_notif_badge(inputs)
	if (locale === "ru") return ru_settings_notif_badge(inputs)
	if (locale === "sv") return sv_settings_notif_badge(inputs)
	if (locale === "tr") return tr_settings_notif_badge(inputs)
	if (locale === "zh") return zh_settings_notif_badge(inputs)
	if (locale === "ja") return ja_settings_notif_badge(inputs)
	return en_settings_notif_badge(inputs)
});
