/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_BadgesInputs */

const en_settings_creator_badges = /** @type {(inputs: Settings_Creator_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your badges`)
};

const es_settings_creator_badges = /** @type {(inputs: Settings_Creator_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus insignias`)
};

const de_settings_creator_badges = /** @type {(inputs: Settings_Creator_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Abzeichen`)
};

const fr_settings_creator_badges = /** @type {(inputs: Settings_Creator_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos badges`)
};

const it_settings_creator_badges = /** @type {(inputs: Settings_Creator_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi distintivi`)
};

const nl_settings_creator_badges = /** @type {(inputs: Settings_Creator_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je badges`)
};

const pl_settings_creator_badges = /** @type {(inputs: Settings_Creator_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje odznaki`)
};

const pt_settings_creator_badges = /** @type {(inputs: Settings_Creator_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suas insígnias`)
};

const ru_settings_creator_badges = /** @type {(inputs: Settings_Creator_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши значки`)
};

const sv_settings_creator_badges = /** @type {(inputs: Settings_Creator_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina märken`)
};

const tr_settings_creator_badges = /** @type {(inputs: Settings_Creator_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozetlerin`)
};

const zh_settings_creator_badges = /** @type {(inputs: Settings_Creator_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的徽章`)
};

const ja_settings_creator_badges = /** @type {(inputs: Settings_Creator_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのバッジ`)
};

/**
* | output |
* | --- |
* | "Your badges" |
*
* @param {Settings_Creator_BadgesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_creator_badges = /** @type {((inputs?: Settings_Creator_BadgesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_BadgesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_creator_badges(inputs)
	if (locale === "de") return de_settings_creator_badges(inputs)
	if (locale === "fr") return fr_settings_creator_badges(inputs)
	if (locale === "it") return it_settings_creator_badges(inputs)
	if (locale === "nl") return nl_settings_creator_badges(inputs)
	if (locale === "pl") return pl_settings_creator_badges(inputs)
	if (locale === "pt") return pt_settings_creator_badges(inputs)
	if (locale === "ru") return ru_settings_creator_badges(inputs)
	if (locale === "sv") return sv_settings_creator_badges(inputs)
	if (locale === "tr") return tr_settings_creator_badges(inputs)
	if (locale === "zh") return zh_settings_creator_badges(inputs)
	if (locale === "ja") return ja_settings_creator_badges(inputs)
	return en_settings_creator_badges(inputs)
});
