/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Profiles_TitleInputs */

const en_manager_profiles_title = /** @type {(inputs: Manager_Profiles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profiles and modpacks`)
};

const es_manager_profiles_title = /** @type {(inputs: Manager_Profiles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perfiles y modpacks`)
};

const de_manager_profiles_title = /** @type {(inputs: Manager_Profiles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile und Modpacks`)
};

const fr_manager_profiles_title = /** @type {(inputs: Manager_Profiles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profils et modpacks`)
};

const it_manager_profiles_title = /** @type {(inputs: Manager_Profiles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profili e modpack`)
};

const nl_manager_profiles_title = /** @type {(inputs: Manager_Profiles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profielen en modpacks`)
};

const pl_manager_profiles_title = /** @type {(inputs: Manager_Profiles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile i modpacki`)
};

const pt_manager_profiles_title = /** @type {(inputs: Manager_Profiles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perfis e modpacks`)
};

const ru_manager_profiles_title = /** @type {(inputs: Manager_Profiles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Профили и модпаки`)
};

const sv_manager_profiles_title = /** @type {(inputs: Manager_Profiles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profiler och modpaket`)
};

const tr_manager_profiles_title = /** @type {(inputs: Manager_Profiles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profiller ve mod paketleri`)
};

const zh_manager_profiles_title = /** @type {(inputs: Manager_Profiles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置和整合包`)
};

const ja_manager_profiles_title = /** @type {(inputs: Manager_Profiles_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロファイルと Modパック`)
};

/**
* | output |
* | --- |
* | "Profiles and modpacks" |
*
* @param {Manager_Profiles_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_profiles_title = /** @type {((inputs?: Manager_Profiles_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Profiles_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_profiles_title(inputs)
	if (locale === "de") return de_manager_profiles_title(inputs)
	if (locale === "fr") return fr_manager_profiles_title(inputs)
	if (locale === "it") return it_manager_profiles_title(inputs)
	if (locale === "nl") return nl_manager_profiles_title(inputs)
	if (locale === "pl") return pl_manager_profiles_title(inputs)
	if (locale === "pt") return pt_manager_profiles_title(inputs)
	if (locale === "ru") return ru_manager_profiles_title(inputs)
	if (locale === "sv") return sv_manager_profiles_title(inputs)
	if (locale === "tr") return tr_manager_profiles_title(inputs)
	if (locale === "zh") return zh_manager_profiles_title(inputs)
	if (locale === "ja") return ja_manager_profiles_title(inputs)
	return en_manager_profiles_title(inputs)
});
