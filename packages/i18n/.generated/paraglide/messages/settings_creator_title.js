/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_TitleInputs */

const en_settings_creator_title = /** @type {(inputs: Settings_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

const es_settings_creator_title = /** @type {(inputs: Settings_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador`)
};

const de_settings_creator_title = /** @type {(inputs: Settings_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

const fr_settings_creator_title = /** @type {(inputs: Settings_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur`)
};

const it_settings_creator_title = /** @type {(inputs: Settings_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore`)
};

const nl_settings_creator_title = /** @type {(inputs: Settings_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maker`)
};

const pl_settings_creator_title = /** @type {(inputs: Settings_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca`)
};

const pt_settings_creator_title = /** @type {(inputs: Settings_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador`)
};

const ru_settings_creator_title = /** @type {(inputs: Settings_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор`)
};

const sv_settings_creator_title = /** @type {(inputs: Settings_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_settings_creator_title = /** @type {(inputs: Settings_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı`)
};

const zh_settings_creator_title = /** @type {(inputs: Settings_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者`)
};

const ja_settings_creator_title = /** @type {(inputs: Settings_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイター`)
};

/**
* | output |
* | --- |
* | "Creator" |
*
* @param {Settings_Creator_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_creator_title = /** @type {((inputs?: Settings_Creator_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_creator_title(inputs)
	if (locale === "de") return de_settings_creator_title(inputs)
	if (locale === "fr") return fr_settings_creator_title(inputs)
	if (locale === "it") return it_settings_creator_title(inputs)
	if (locale === "nl") return nl_settings_creator_title(inputs)
	if (locale === "pl") return pl_settings_creator_title(inputs)
	if (locale === "pt") return pt_settings_creator_title(inputs)
	if (locale === "ru") return ru_settings_creator_title(inputs)
	if (locale === "sv") return sv_settings_creator_title(inputs)
	if (locale === "tr") return tr_settings_creator_title(inputs)
	if (locale === "zh") return zh_settings_creator_title(inputs)
	if (locale === "ja") return ja_settings_creator_title(inputs)
	return en_settings_creator_title(inputs)
});
