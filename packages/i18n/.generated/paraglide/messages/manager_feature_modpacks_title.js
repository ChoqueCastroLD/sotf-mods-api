/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Feature_Modpacks_TitleInputs */

const en_manager_feature_modpacks_title = /** @type {(inputs: Manager_Feature_Modpacks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const es_manager_feature_modpacks_title = /** @type {(inputs: Manager_Feature_Modpacks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const de_manager_feature_modpacks_title = /** @type {(inputs: Manager_Feature_Modpacks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const fr_manager_feature_modpacks_title = /** @type {(inputs: Manager_Feature_Modpacks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const it_manager_feature_modpacks_title = /** @type {(inputs: Manager_Feature_Modpacks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack`)
};

const nl_manager_feature_modpacks_title = /** @type {(inputs: Manager_Feature_Modpacks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const pl_manager_feature_modpacks_title = /** @type {(inputs: Manager_Feature_Modpacks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacki`)
};

const pt_manager_feature_modpacks_title = /** @type {(inputs: Manager_Feature_Modpacks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const ru_manager_feature_modpacks_title = /** @type {(inputs: Manager_Feature_Modpacks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модпаки`)
};

const sv_manager_feature_modpacks_title = /** @type {(inputs: Manager_Feature_Modpacks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpaket`)
};

const tr_manager_feature_modpacks_title = /** @type {(inputs: Manager_Feature_Modpacks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketleri`)
};

const zh_manager_feature_modpacks_title = /** @type {(inputs: Manager_Feature_Modpacks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包`)
};

const ja_manager_feature_modpacks_title = /** @type {(inputs: Manager_Feature_Modpacks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパック`)
};

/**
* | output |
* | --- |
* | "Modpacks" |
*
* @param {Manager_Feature_Modpacks_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_feature_modpacks_title = /** @type {((inputs?: Manager_Feature_Modpacks_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Modpacks_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_feature_modpacks_title(inputs)
	if (locale === "de") return de_manager_feature_modpacks_title(inputs)
	if (locale === "fr") return fr_manager_feature_modpacks_title(inputs)
	if (locale === "it") return it_manager_feature_modpacks_title(inputs)
	if (locale === "nl") return nl_manager_feature_modpacks_title(inputs)
	if (locale === "pl") return pl_manager_feature_modpacks_title(inputs)
	if (locale === "pt") return pt_manager_feature_modpacks_title(inputs)
	if (locale === "ru") return ru_manager_feature_modpacks_title(inputs)
	if (locale === "sv") return sv_manager_feature_modpacks_title(inputs)
	if (locale === "tr") return tr_manager_feature_modpacks_title(inputs)
	if (locale === "zh") return zh_manager_feature_modpacks_title(inputs)
	if (locale === "ja") return ja_manager_feature_modpacks_title(inputs)
	return en_manager_feature_modpacks_title(inputs)
});
