/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Index_TitleInputs */

const en_settings_index_title = /** @type {(inputs: Settings_Index_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
};

const es_settings_index_title = /** @type {(inputs: Settings_Index_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes`)
};

const de_settings_index_title = /** @type {(inputs: Settings_Index_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einstellungen`)
};

const fr_settings_index_title = /** @type {(inputs: Settings_Index_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres`)
};

const it_settings_index_title = /** @type {(inputs: Settings_Index_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni`)
};

const nl_settings_index_title = /** @type {(inputs: Settings_Index_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instellingen`)
};

const pl_settings_index_title = /** @type {(inputs: Settings_Index_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustawienia`)
};

const pt_settings_index_title = /** @type {(inputs: Settings_Index_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações`)
};

const ru_settings_index_title = /** @type {(inputs: Settings_Index_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки`)
};

const sv_settings_index_title = /** @type {(inputs: Settings_Index_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inställningar`)
};

const tr_settings_index_title = /** @type {(inputs: Settings_Index_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayarlar`)
};

const zh_settings_index_title = /** @type {(inputs: Settings_Index_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置`)
};

const ja_settings_index_title = /** @type {(inputs: Settings_Index_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定`)
};

/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Settings_Index_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_index_title = /** @type {((inputs?: Settings_Index_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Index_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_index_title(inputs)
	if (locale === "de") return de_settings_index_title(inputs)
	if (locale === "fr") return fr_settings_index_title(inputs)
	if (locale === "it") return it_settings_index_title(inputs)
	if (locale === "nl") return nl_settings_index_title(inputs)
	if (locale === "pl") return pl_settings_index_title(inputs)
	if (locale === "pt") return pt_settings_index_title(inputs)
	if (locale === "ru") return ru_settings_index_title(inputs)
	if (locale === "sv") return sv_settings_index_title(inputs)
	if (locale === "tr") return tr_settings_index_title(inputs)
	if (locale === "zh") return zh_settings_index_title(inputs)
	if (locale === "ja") return ja_settings_index_title(inputs)
	return en_settings_index_title(inputs)
});
