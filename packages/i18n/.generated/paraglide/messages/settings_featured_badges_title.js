/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Featured_Badges_TitleInputs */

const en_settings_featured_badges_title = /** @type {(inputs: Settings_Featured_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Featured badges`)
};

const es_settings_featured_badges_title = /** @type {(inputs: Settings_Featured_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignias destacadas`)
};

const de_settings_featured_badges_title = /** @type {(inputs: Settings_Featured_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hervorgehobene Abzeichen`)
};

const fr_settings_featured_badges_title = /** @type {(inputs: Settings_Featured_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges mis en avant`)
};

const it_settings_featured_badges_title = /** @type {(inputs: Settings_Featured_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivi in evidenza`)
};

const nl_settings_featured_badges_title = /** @type {(inputs: Settings_Featured_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitgelichte badges`)
};

const pl_settings_featured_badges_title = /** @type {(inputs: Settings_Featured_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyróżnione odznaki`)
};

const pt_settings_featured_badges_title = /** @type {(inputs: Settings_Featured_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnias em destaque`)
};

const ru_settings_featured_badges_title = /** @type {(inputs: Settings_Featured_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Избранные значки`)
};

const sv_settings_featured_badges_title = /** @type {(inputs: Settings_Featured_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvalda märken`)
};

const tr_settings_featured_badges_title = /** @type {(inputs: Settings_Featured_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öne çıkan rozetler`)
};

const zh_settings_featured_badges_title = /** @type {(inputs: Settings_Featured_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`展示的徽章`)
};

const ja_settings_featured_badges_title = /** @type {(inputs: Settings_Featured_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注目のバッジ`)
};

/**
* | output |
* | --- |
* | "Featured badges" |
*
* @param {Settings_Featured_Badges_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_featured_badges_title = /** @type {((inputs?: Settings_Featured_Badges_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Featured_Badges_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_featured_badges_title(inputs)
	if (locale === "de") return de_settings_featured_badges_title(inputs)
	if (locale === "fr") return fr_settings_featured_badges_title(inputs)
	if (locale === "it") return it_settings_featured_badges_title(inputs)
	if (locale === "nl") return nl_settings_featured_badges_title(inputs)
	if (locale === "pl") return pl_settings_featured_badges_title(inputs)
	if (locale === "pt") return pt_settings_featured_badges_title(inputs)
	if (locale === "ru") return ru_settings_featured_badges_title(inputs)
	if (locale === "sv") return sv_settings_featured_badges_title(inputs)
	if (locale === "tr") return tr_settings_featured_badges_title(inputs)
	if (locale === "zh") return zh_settings_featured_badges_title(inputs)
	if (locale === "ja") return ja_settings_featured_badges_title(inputs)
	return en_settings_featured_badges_title(inputs)
});
