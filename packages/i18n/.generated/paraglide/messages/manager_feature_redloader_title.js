/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Feature_Redloader_TitleInputs */

const en_manager_feature_redloader_title = /** @type {(inputs: Manager_Feature_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader made easy`)
};

const es_manager_feature_redloader_title = /** @type {(inputs: Manager_Feature_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader sin complicaciones`)
};

const de_manager_feature_redloader_title = /** @type {(inputs: Manager_Feature_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader ganz einfach`)
};

const fr_manager_feature_redloader_title = /** @type {(inputs: Manager_Feature_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader sans effort`)
};

const it_manager_feature_redloader_title = /** @type {(inputs: Manager_Feature_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader senza fatica`)
};

const nl_manager_feature_redloader_title = /** @type {(inputs: Manager_Feature_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader zonder gedoe`)
};

const pl_manager_feature_redloader_title = /** @type {(inputs: Manager_Feature_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader bez kłopotu`)
};

const pt_manager_feature_redloader_title = /** @type {(inputs: Manager_Feature_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader sem complicação`)
};

const ru_manager_feature_redloader_title = /** @type {(inputs: Manager_Feature_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader без хлопот`)
};

const sv_manager_feature_redloader_title = /** @type {(inputs: Manager_Feature_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader enkelt`)
};

const tr_manager_feature_redloader_title = /** @type {(inputs: Manager_Feature_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolay RedLoader`)
};

const zh_manager_feature_redloader_title = /** @type {(inputs: Manager_Feature_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`轻松使用 RedLoader`)
};

const ja_manager_feature_redloader_title = /** @type {(inputs: Manager_Feature_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader をかんたんに`)
};

/**
* | output |
* | --- |
* | "RedLoader made easy" |
*
* @param {Manager_Feature_Redloader_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_feature_redloader_title = /** @type {((inputs?: Manager_Feature_Redloader_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Redloader_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_feature_redloader_title(inputs)
	if (locale === "de") return de_manager_feature_redloader_title(inputs)
	if (locale === "fr") return fr_manager_feature_redloader_title(inputs)
	if (locale === "it") return it_manager_feature_redloader_title(inputs)
	if (locale === "nl") return nl_manager_feature_redloader_title(inputs)
	if (locale === "pl") return pl_manager_feature_redloader_title(inputs)
	if (locale === "pt") return pt_manager_feature_redloader_title(inputs)
	if (locale === "ru") return ru_manager_feature_redloader_title(inputs)
	if (locale === "sv") return sv_manager_feature_redloader_title(inputs)
	if (locale === "tr") return tr_manager_feature_redloader_title(inputs)
	if (locale === "zh") return zh_manager_feature_redloader_title(inputs)
	if (locale === "ja") return ja_manager_feature_redloader_title(inputs)
	return en_manager_feature_redloader_title(inputs)
});
