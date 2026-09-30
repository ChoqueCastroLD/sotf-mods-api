/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Visibility_TitleInputs */

const en_settings_visibility_title = /** @type {(inputs: Settings_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On your profile`)
};

const es_settings_visibility_title = /** @type {(inputs: Settings_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En tu perfil`)
};

const de_settings_visibility_title = /** @type {(inputs: Settings_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf deinem Profil`)
};

const fr_settings_visibility_title = /** @type {(inputs: Settings_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sur votre profil`)
};

const it_settings_visibility_title = /** @type {(inputs: Settings_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sul tuo profilo`)
};

const nl_settings_visibility_title = /** @type {(inputs: Settings_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Op je profiel`)
};

const pl_settings_visibility_title = /** @type {(inputs: Settings_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na twoim profilu`)
};

const pt_settings_visibility_title = /** @type {(inputs: Settings_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No seu perfil`)
};

const ru_settings_visibility_title = /** @type {(inputs: Settings_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В вашем профиле`)
};

const sv_settings_visibility_title = /** @type {(inputs: Settings_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`På din profil`)
};

const tr_settings_visibility_title = /** @type {(inputs: Settings_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilinde`)
};

const zh_settings_visibility_title = /** @type {(inputs: Settings_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的个人资料`)
};

const ja_settings_visibility_title = /** @type {(inputs: Settings_Visibility_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィールに表示`)
};

/**
* | output |
* | --- |
* | "On your profile" |
*
* @param {Settings_Visibility_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_visibility_title = /** @type {((inputs?: Settings_Visibility_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Visibility_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_visibility_title(inputs)
	if (locale === "de") return de_settings_visibility_title(inputs)
	if (locale === "fr") return fr_settings_visibility_title(inputs)
	if (locale === "it") return it_settings_visibility_title(inputs)
	if (locale === "nl") return nl_settings_visibility_title(inputs)
	if (locale === "pl") return pl_settings_visibility_title(inputs)
	if (locale === "pt") return pt_settings_visibility_title(inputs)
	if (locale === "ru") return ru_settings_visibility_title(inputs)
	if (locale === "sv") return sv_settings_visibility_title(inputs)
	if (locale === "tr") return tr_settings_visibility_title(inputs)
	if (locale === "zh") return zh_settings_visibility_title(inputs)
	if (locale === "ja") return ja_settings_visibility_title(inputs)
	return en_settings_visibility_title(inputs)
});
