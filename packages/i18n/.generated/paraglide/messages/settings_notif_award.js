/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_AwardInputs */

const en_settings_notif_award = /** @type {(inputs: Settings_Notif_AwardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Awards`)
};

const es_settings_notif_award = /** @type {(inputs: Settings_Notif_AwardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premios`)
};

const de_settings_notif_award = /** @type {(inputs: Settings_Notif_AwardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auszeichnungen`)
};

const fr_settings_notif_award = /** @type {(inputs: Settings_Notif_AwardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distinctions`)
};

const it_settings_notif_award = /** @type {(inputs: Settings_Notif_AwardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premi`)
};

const nl_settings_notif_award = /** @type {(inputs: Settings_Notif_AwardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prijzen`)
};

const pl_settings_notif_award = /** @type {(inputs: Settings_Notif_AwardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nagrody`)
};

const pt_settings_notif_award = /** @type {(inputs: Settings_Notif_AwardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prêmios`)
};

const ru_settings_notif_award = /** @type {(inputs: Settings_Notif_AwardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Награды`)
};

const sv_settings_notif_award = /** @type {(inputs: Settings_Notif_AwardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Priser`)
};

const tr_settings_notif_award = /** @type {(inputs: Settings_Notif_AwardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ödüller`)
};

const zh_settings_notif_award = /** @type {(inputs: Settings_Notif_AwardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`奖项`)
};

const ja_settings_notif_award = /** @type {(inputs: Settings_Notif_AwardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受賞`)
};

/**
* | output |
* | --- |
* | "Awards" |
*
* @param {Settings_Notif_AwardInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_award = /** @type {((inputs?: Settings_Notif_AwardInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_AwardInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_award(inputs)
	if (locale === "de") return de_settings_notif_award(inputs)
	if (locale === "fr") return fr_settings_notif_award(inputs)
	if (locale === "it") return it_settings_notif_award(inputs)
	if (locale === "nl") return nl_settings_notif_award(inputs)
	if (locale === "pl") return pl_settings_notif_award(inputs)
	if (locale === "pt") return pt_settings_notif_award(inputs)
	if (locale === "ru") return ru_settings_notif_award(inputs)
	if (locale === "sv") return sv_settings_notif_award(inputs)
	if (locale === "tr") return tr_settings_notif_award(inputs)
	if (locale === "zh") return zh_settings_notif_award(inputs)
	if (locale === "ja") return ja_settings_notif_award(inputs)
	return en_settings_notif_award(inputs)
});
