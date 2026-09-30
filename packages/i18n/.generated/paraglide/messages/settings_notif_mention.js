/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_MentionInputs */

const en_settings_notif_mention = /** @type {(inputs: Settings_Notif_MentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mentions`)
};

const es_settings_notif_mention = /** @type {(inputs: Settings_Notif_MentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menciones`)
};

const de_settings_notif_mention = /** @type {(inputs: Settings_Notif_MentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erwähnungen`)
};

const fr_settings_notif_mention = /** @type {(inputs: Settings_Notif_MentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mentions`)
};

const it_settings_notif_mention = /** @type {(inputs: Settings_Notif_MentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menzioni`)
};

const nl_settings_notif_mention = /** @type {(inputs: Settings_Notif_MentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vermeldingen`)
};

const pl_settings_notif_mention = /** @type {(inputs: Settings_Notif_MentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wzmianki`)
};

const pt_settings_notif_mention = /** @type {(inputs: Settings_Notif_MentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menções`)
};

const ru_settings_notif_mention = /** @type {(inputs: Settings_Notif_MentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Упоминания`)
};

const sv_settings_notif_mention = /** @type {(inputs: Settings_Notif_MentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omnämnanden`)
};

const tr_settings_notif_mention = /** @type {(inputs: Settings_Notif_MentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bahsedilmeler`)
};

const zh_settings_notif_mention = /** @type {(inputs: Settings_Notif_MentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提及`)
};

const ja_settings_notif_mention = /** @type {(inputs: Settings_Notif_MentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メンション`)
};

/**
* | output |
* | --- |
* | "Mentions" |
*
* @param {Settings_Notif_MentionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_mention = /** @type {((inputs?: Settings_Notif_MentionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_MentionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_mention(inputs)
	if (locale === "de") return de_settings_notif_mention(inputs)
	if (locale === "fr") return fr_settings_notif_mention(inputs)
	if (locale === "it") return it_settings_notif_mention(inputs)
	if (locale === "nl") return nl_settings_notif_mention(inputs)
	if (locale === "pl") return pl_settings_notif_mention(inputs)
	if (locale === "pt") return pt_settings_notif_mention(inputs)
	if (locale === "ru") return ru_settings_notif_mention(inputs)
	if (locale === "sv") return sv_settings_notif_mention(inputs)
	if (locale === "tr") return tr_settings_notif_mention(inputs)
	if (locale === "zh") return zh_settings_notif_mention(inputs)
	if (locale === "ja") return ja_settings_notif_mention(inputs)
	return en_settings_notif_mention(inputs)
});
