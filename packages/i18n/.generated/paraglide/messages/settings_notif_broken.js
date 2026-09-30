/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_BrokenInputs */

const en_settings_notif_broken = /** @type {(inputs: Settings_Notif_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your mod reported broken`)
};

const es_settings_notif_broken = /** @type {(inputs: Settings_Notif_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu mod aparece roto`)
};

const de_settings_notif_broken = /** @type {(inputs: Settings_Notif_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Mod als kaputt gemeldet`)
};

const fr_settings_notif_broken = /** @type {(inputs: Settings_Notif_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre mod signalé cassé`)
};

const it_settings_notif_broken = /** @type {(inputs: Settings_Notif_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tua mod segnalata come non funzionante`)
};

const nl_settings_notif_broken = /** @type {(inputs: Settings_Notif_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je mod als kapot gemeld`)
};

const pl_settings_notif_broken = /** @type {(inputs: Settings_Notif_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój mod zgłoszony jako niedziałający`)
};

const pt_settings_notif_broken = /** @type {(inputs: Settings_Notif_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu mod relatado como quebrado`)
};

const ru_settings_notif_broken = /** @type {(inputs: Settings_Notif_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш мод отмечен как неработающий`)
};

const sv_settings_notif_broken = /** @type {(inputs: Settings_Notif_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din modd rapporterad som trasig`)
};

const tr_settings_notif_broken = /** @type {(inputs: Settings_Notif_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modun bozuk olarak bildirildi`)
};

const zh_settings_notif_broken = /** @type {(inputs: Settings_Notif_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组被报告失效`)
};

const ja_settings_notif_broken = /** @type {(inputs: Settings_Notif_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのMODが動作しないと報告`)
};

/**
* | output |
* | --- |
* | "Your mod reported broken" |
*
* @param {Settings_Notif_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_broken = /** @type {((inputs?: Settings_Notif_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_broken(inputs)
	if (locale === "de") return de_settings_notif_broken(inputs)
	if (locale === "fr") return fr_settings_notif_broken(inputs)
	if (locale === "it") return it_settings_notif_broken(inputs)
	if (locale === "nl") return nl_settings_notif_broken(inputs)
	if (locale === "pl") return pl_settings_notif_broken(inputs)
	if (locale === "pt") return pt_settings_notif_broken(inputs)
	if (locale === "ru") return ru_settings_notif_broken(inputs)
	if (locale === "sv") return sv_settings_notif_broken(inputs)
	if (locale === "tr") return tr_settings_notif_broken(inputs)
	if (locale === "zh") return zh_settings_notif_broken(inputs)
	if (locale === "ja") return ja_settings_notif_broken(inputs)
	return en_settings_notif_broken(inputs)
});
