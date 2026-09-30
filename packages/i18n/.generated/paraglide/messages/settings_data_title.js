/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Data_TitleInputs */

const en_settings_data_title = /** @type {(inputs: Settings_Data_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your data`)
};

const es_settings_data_title = /** @type {(inputs: Settings_Data_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus datos`)
};

const de_settings_data_title = /** @type {(inputs: Settings_Data_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Daten`)
};

const fr_settings_data_title = /** @type {(inputs: Settings_Data_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos données`)
};

const it_settings_data_title = /** @type {(inputs: Settings_Data_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi dati`)
};

const nl_settings_data_title = /** @type {(inputs: Settings_Data_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je gegevens`)
};

const pl_settings_data_title = /** @type {(inputs: Settings_Data_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje dane`)
};

const pt_settings_data_title = /** @type {(inputs: Settings_Data_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus dados`)
};

const ru_settings_data_title = /** @type {(inputs: Settings_Data_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши данные`)
};

const sv_settings_data_title = /** @type {(inputs: Settings_Data_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina data`)
};

const tr_settings_data_title = /** @type {(inputs: Settings_Data_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verilerin`)
};

const zh_settings_data_title = /** @type {(inputs: Settings_Data_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的数据`)
};

const ja_settings_data_title = /** @type {(inputs: Settings_Data_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのデータ`)
};

/**
* | output |
* | --- |
* | "Your data" |
*
* @param {Settings_Data_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_data_title = /** @type {((inputs?: Settings_Data_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Data_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_data_title(inputs)
	if (locale === "de") return de_settings_data_title(inputs)
	if (locale === "fr") return fr_settings_data_title(inputs)
	if (locale === "it") return it_settings_data_title(inputs)
	if (locale === "nl") return nl_settings_data_title(inputs)
	if (locale === "pl") return pl_settings_data_title(inputs)
	if (locale === "pt") return pt_settings_data_title(inputs)
	if (locale === "ru") return ru_settings_data_title(inputs)
	if (locale === "sv") return sv_settings_data_title(inputs)
	if (locale === "tr") return tr_settings_data_title(inputs)
	if (locale === "zh") return zh_settings_data_title(inputs)
	if (locale === "ja") return ja_settings_data_title(inputs)
	return en_settings_data_title(inputs)
});
