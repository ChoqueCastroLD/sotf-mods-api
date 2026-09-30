/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Defaults_TitleInputs */

const en_settings_defaults_title = /** @type {(inputs: Settings_Defaults_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing defaults`)
};

const es_settings_defaults_title = /** @type {(inputs: Settings_Defaults_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valores de publicación`)
};

const de_settings_defaults_title = /** @type {(inputs: Settings_Defaults_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlichungs-Standards`)
};

const fr_settings_defaults_title = /** @type {(inputs: Settings_Defaults_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valeurs de publication`)
};

const it_settings_defaults_title = /** @type {(inputs: Settings_Defaults_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni di pubblicazione`)
};

const nl_settings_defaults_title = /** @type {(inputs: Settings_Defaults_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standaardwaarden voor publiceren`)
};

const pl_settings_defaults_title = /** @type {(inputs: Settings_Defaults_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domyślne ustawienia publikacji`)
};

const pt_settings_defaults_title = /** @type {(inputs: Settings_Defaults_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Padrões de publicação`)
};

const ru_settings_defaults_title = /** @type {(inputs: Settings_Defaults_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки публикации по умолчанию`)
};

const sv_settings_defaults_title = /** @type {(inputs: Settings_Defaults_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardval för publicering`)
};

const tr_settings_defaults_title = /** @type {(inputs: Settings_Defaults_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayın varsayılanları`)
};

const zh_settings_defaults_title = /** @type {(inputs: Settings_Defaults_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布默认设置`)
};

const ja_settings_defaults_title = /** @type {(inputs: Settings_Defaults_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開時の既定値`)
};

/**
* | output |
* | --- |
* | "Publishing defaults" |
*
* @param {Settings_Defaults_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_defaults_title = /** @type {((inputs?: Settings_Defaults_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Defaults_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_defaults_title(inputs)
	if (locale === "de") return de_settings_defaults_title(inputs)
	if (locale === "fr") return fr_settings_defaults_title(inputs)
	if (locale === "it") return it_settings_defaults_title(inputs)
	if (locale === "nl") return nl_settings_defaults_title(inputs)
	if (locale === "pl") return pl_settings_defaults_title(inputs)
	if (locale === "pt") return pt_settings_defaults_title(inputs)
	if (locale === "ru") return ru_settings_defaults_title(inputs)
	if (locale === "sv") return sv_settings_defaults_title(inputs)
	if (locale === "tr") return tr_settings_defaults_title(inputs)
	if (locale === "zh") return zh_settings_defaults_title(inputs)
	if (locale === "ja") return ja_settings_defaults_title(inputs)
	return en_settings_defaults_title(inputs)
});
