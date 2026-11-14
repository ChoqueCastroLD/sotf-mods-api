/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Feature_Crash_TitleInputs */

const en_manager_feature_crash_title = /** @type {(inputs: Manager_Feature_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crash help`)
};

const es_manager_feature_crash_title = /** @type {(inputs: Manager_Feature_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayuda con los cierres`)
};

const de_manager_feature_crash_title = /** @type {(inputs: Manager_Feature_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hilfe bei Abstürzen`)
};

const fr_manager_feature_crash_title = /** @type {(inputs: Manager_Feature_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aide en cas de plantage`)
};

const it_manager_feature_crash_title = /** @type {(inputs: Manager_Feature_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aiuto con i crash`)
};

const nl_manager_feature_crash_title = /** @type {(inputs: Manager_Feature_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hulp bij crashes`)
};

const pl_manager_feature_crash_title = /** @type {(inputs: Manager_Feature_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pomoc przy awariach`)
};

const pt_manager_feature_crash_title = /** @type {(inputs: Manager_Feature_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajuda com travamentos`)
};

const ru_manager_feature_crash_title = /** @type {(inputs: Manager_Feature_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Помощь при вылетах`)
};

const sv_manager_feature_crash_title = /** @type {(inputs: Manager_Feature_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hjälp vid krascher`)
};

const tr_manager_feature_crash_title = /** @type {(inputs: Manager_Feature_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çökme yardımı`)
};

const zh_manager_feature_crash_title = /** @type {(inputs: Manager_Feature_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`崩溃帮助`)
};

const ja_manager_feature_crash_title = /** @type {(inputs: Manager_Feature_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クラッシュ時のサポート`)
};

/**
* | output |
* | --- |
* | "Crash help" |
*
* @param {Manager_Feature_Crash_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_feature_crash_title = /** @type {((inputs?: Manager_Feature_Crash_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Crash_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_feature_crash_title(inputs)
	if (locale === "de") return de_manager_feature_crash_title(inputs)
	if (locale === "fr") return fr_manager_feature_crash_title(inputs)
	if (locale === "it") return it_manager_feature_crash_title(inputs)
	if (locale === "nl") return nl_manager_feature_crash_title(inputs)
	if (locale === "pl") return pl_manager_feature_crash_title(inputs)
	if (locale === "pt") return pt_manager_feature_crash_title(inputs)
	if (locale === "ru") return ru_manager_feature_crash_title(inputs)
	if (locale === "sv") return sv_manager_feature_crash_title(inputs)
	if (locale === "tr") return tr_manager_feature_crash_title(inputs)
	if (locale === "zh") return zh_manager_feature_crash_title(inputs)
	if (locale === "ja") return ja_manager_feature_crash_title(inputs)
	return en_manager_feature_crash_title(inputs)
});
