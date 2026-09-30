/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Pinned_TitleInputs */

const en_settings_pinned_title = /** @type {(inputs: Settings_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pinned mods`)
};

const es_settings_pinned_title = /** @type {(inputs: Settings_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods fijados`)
};

const de_settings_pinned_title = /** @type {(inputs: Settings_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Angeheftete Mods`)
};

const fr_settings_pinned_title = /** @type {(inputs: Settings_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods épinglés`)
};

const it_settings_pinned_title = /** @type {(inputs: Settings_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod in evidenza`)
};

const nl_settings_pinned_title = /** @type {(inputs: Settings_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vastgezette mods`)
};

const pl_settings_pinned_title = /** @type {(inputs: Settings_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przypięte mody`)
};

const pt_settings_pinned_title = /** @type {(inputs: Settings_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods fixados`)
};

const ru_settings_pinned_title = /** @type {(inputs: Settings_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закреплённые моды`)
};

const sv_settings_pinned_title = /** @type {(inputs: Settings_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fästa moddar`)
};

const tr_settings_pinned_title = /** @type {(inputs: Settings_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sabitlenmiş modlar`)
};

const zh_settings_pinned_title = /** @type {(inputs: Settings_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`置顶模组`)
};

const ja_settings_pinned_title = /** @type {(inputs: Settings_Pinned_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`固定したMOD`)
};

/**
* | output |
* | --- |
* | "Pinned mods" |
*
* @param {Settings_Pinned_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_pinned_title = /** @type {((inputs?: Settings_Pinned_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Pinned_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_pinned_title(inputs)
	if (locale === "de") return de_settings_pinned_title(inputs)
	if (locale === "fr") return fr_settings_pinned_title(inputs)
	if (locale === "it") return it_settings_pinned_title(inputs)
	if (locale === "nl") return nl_settings_pinned_title(inputs)
	if (locale === "pl") return pl_settings_pinned_title(inputs)
	if (locale === "pt") return pt_settings_pinned_title(inputs)
	if (locale === "ru") return ru_settings_pinned_title(inputs)
	if (locale === "sv") return sv_settings_pinned_title(inputs)
	if (locale === "tr") return tr_settings_pinned_title(inputs)
	if (locale === "zh") return zh_settings_pinned_title(inputs)
	if (locale === "ja") return ja_settings_pinned_title(inputs)
	return en_settings_pinned_title(inputs)
});
