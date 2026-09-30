/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_StatusInputs */

const en_settings_notif_status = /** @type {(inputs: Settings_Notif_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review decisions`)
};

const es_settings_notif_status = /** @type {(inputs: Settings_Notif_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Decisiones de revisión`)
};

const de_settings_notif_status = /** @type {(inputs: Settings_Notif_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüfentscheidungen`)
};

const fr_settings_notif_status = /** @type {(inputs: Settings_Notif_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Décisions de modération`)
};

const it_settings_notif_status = /** @type {(inputs: Settings_Notif_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Decisioni di revisione`)
};

const nl_settings_notif_status = /** @type {(inputs: Settings_Notif_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beoordelingsbesluiten`)
};

const pl_settings_notif_status = /** @type {(inputs: Settings_Notif_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Decyzje moderacji`)
};

const pt_settings_notif_status = /** @type {(inputs: Settings_Notif_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Decisões de revisão`)
};

const ru_settings_notif_status = /** @type {(inputs: Settings_Notif_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Решения модерации`)
};

const sv_settings_notif_status = /** @type {(inputs: Settings_Notif_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Granskningsbeslut`)
};

const tr_settings_notif_status = /** @type {(inputs: Settings_Notif_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme kararları`)
};

const zh_settings_notif_status = /** @type {(inputs: Settings_Notif_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核结果`)
};

const ja_settings_notif_status = /** @type {(inputs: Settings_Notif_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`審査結果`)
};

/**
* | output |
* | --- |
* | "Review decisions" |
*
* @param {Settings_Notif_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_status = /** @type {((inputs?: Settings_Notif_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_status(inputs)
	if (locale === "de") return de_settings_notif_status(inputs)
	if (locale === "fr") return fr_settings_notif_status(inputs)
	if (locale === "it") return it_settings_notif_status(inputs)
	if (locale === "nl") return nl_settings_notif_status(inputs)
	if (locale === "pl") return pl_settings_notif_status(inputs)
	if (locale === "pt") return pt_settings_notif_status(inputs)
	if (locale === "ru") return ru_settings_notif_status(inputs)
	if (locale === "sv") return sv_settings_notif_status(inputs)
	if (locale === "tr") return tr_settings_notif_status(inputs)
	if (locale === "zh") return zh_settings_notif_status(inputs)
	if (locale === "ja") return ja_settings_notif_status(inputs)
	return en_settings_notif_status(inputs)
});
