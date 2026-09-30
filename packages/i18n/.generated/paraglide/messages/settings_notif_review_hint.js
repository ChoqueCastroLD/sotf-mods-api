/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Review_HintInputs */

const en_settings_notif_review_hint = /** @type {(inputs: Settings_Notif_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone rated one of your mods.`)
};

const es_settings_notif_review_hint = /** @type {(inputs: Settings_Notif_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien ha valorado uno de tus mods.`)
};

const de_settings_notif_review_hint = /** @type {(inputs: Settings_Notif_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand hat einen deiner Mods bewertet.`)
};

const fr_settings_notif_review_hint = /** @type {(inputs: Settings_Notif_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu’un a noté l’un de vos mods.`)
};

const it_settings_notif_review_hint = /** @type {(inputs: Settings_Notif_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno ha valutato una delle tue mod.`)
};

const nl_settings_notif_review_hint = /** @type {(inputs: Settings_Notif_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand heeft een van je mods beoordeeld.`)
};

const pl_settings_notif_review_hint = /** @type {(inputs: Settings_Notif_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś ocenił jeden z twoich modów.`)
};

const pt_settings_notif_review_hint = /** @type {(inputs: Settings_Notif_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém avaliou um dos seus mods.`)
};

const ru_settings_notif_review_hint = /** @type {(inputs: Settings_Notif_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то оценил один из ваших модов.`)
};

const sv_settings_notif_review_hint = /** @type {(inputs: Settings_Notif_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon har betygsatt en av dina moddar.`)
};

const tr_settings_notif_review_hint = /** @type {(inputs: Settings_Notif_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biri modlarından birini puanladı.`)
};

const zh_settings_notif_review_hint = /** @type {(inputs: Settings_Notif_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人给你的模组打了分。`)
};

const ja_settings_notif_review_hint = /** @type {(inputs: Settings_Notif_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのMODが評価されました。`)
};

/**
* | output |
* | --- |
* | "Someone rated one of your mods." |
*
* @param {Settings_Notif_Review_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_review_hint = /** @type {((inputs?: Settings_Notif_Review_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Review_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_review_hint(inputs)
	if (locale === "de") return de_settings_notif_review_hint(inputs)
	if (locale === "fr") return fr_settings_notif_review_hint(inputs)
	if (locale === "it") return it_settings_notif_review_hint(inputs)
	if (locale === "nl") return nl_settings_notif_review_hint(inputs)
	if (locale === "pl") return pl_settings_notif_review_hint(inputs)
	if (locale === "pt") return pt_settings_notif_review_hint(inputs)
	if (locale === "ru") return ru_settings_notif_review_hint(inputs)
	if (locale === "sv") return sv_settings_notif_review_hint(inputs)
	if (locale === "tr") return tr_settings_notif_review_hint(inputs)
	if (locale === "zh") return zh_settings_notif_review_hint(inputs)
	if (locale === "ja") return ja_settings_notif_review_hint(inputs)
	return en_settings_notif_review_hint(inputs)
});
