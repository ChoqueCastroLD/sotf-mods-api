/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_ReviewInputs */

const en_settings_notif_review = /** @type {(inputs: Settings_Notif_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews of your mods`)
};

const es_settings_notif_review = /** @type {(inputs: Settings_Notif_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reseñas de tus mods`)
};

const de_settings_notif_review = /** @type {(inputs: Settings_Notif_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertungen deiner Mods`)
};

const fr_settings_notif_review = /** @type {(inputs: Settings_Notif_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis sur vos mods`)
};

const it_settings_notif_review = /** @type {(inputs: Settings_Notif_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioni delle tue mod`)
};

const nl_settings_notif_review = /** @type {(inputs: Settings_Notif_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews van je mods`)
};

const pl_settings_notif_review = /** @type {(inputs: Settings_Notif_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recenzje twoich modów`)
};

const pt_settings_notif_review = /** @type {(inputs: Settings_Notif_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliações dos seus mods`)
};

const ru_settings_notif_review = /** @type {(inputs: Settings_Notif_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзывы о ваших модах`)
};

const sv_settings_notif_review = /** @type {(inputs: Settings_Notif_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioner av dina moddar`)
};

const tr_settings_notif_review = /** @type {(inputs: Settings_Notif_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarına incelemeler`)
};

const zh_settings_notif_review = /** @type {(inputs: Settings_Notif_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组收到的评价`)
};

const ja_settings_notif_review = /** @type {(inputs: Settings_Notif_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのMODへのレビュー`)
};

/**
* | output |
* | --- |
* | "Reviews of your mods" |
*
* @param {Settings_Notif_ReviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_review = /** @type {((inputs?: Settings_Notif_ReviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_ReviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_review(inputs)
	if (locale === "de") return de_settings_notif_review(inputs)
	if (locale === "fr") return fr_settings_notif_review(inputs)
	if (locale === "it") return it_settings_notif_review(inputs)
	if (locale === "nl") return nl_settings_notif_review(inputs)
	if (locale === "pl") return pl_settings_notif_review(inputs)
	if (locale === "pt") return pt_settings_notif_review(inputs)
	if (locale === "ru") return ru_settings_notif_review(inputs)
	if (locale === "sv") return sv_settings_notif_review(inputs)
	if (locale === "tr") return tr_settings_notif_review(inputs)
	if (locale === "zh") return zh_settings_notif_review(inputs)
	if (locale === "ja") return ja_settings_notif_review(inputs)
	return en_settings_notif_review(inputs)
});
