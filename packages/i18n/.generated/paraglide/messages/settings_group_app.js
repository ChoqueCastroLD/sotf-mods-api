/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Group_AppInputs */

const en_settings_group_app = /** @type {(inputs: Settings_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App`)
};

const es_settings_group_app = /** @type {(inputs: Settings_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplicación`)
};

const de_settings_group_app = /** @type {(inputs: Settings_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App`)
};

const fr_settings_group_app = /** @type {(inputs: Settings_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Application`)
};

const it_settings_group_app = /** @type {(inputs: Settings_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App`)
};

const nl_settings_group_app = /** @type {(inputs: Settings_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App`)
};

const pl_settings_group_app = /** @type {(inputs: Settings_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplikacja`)
};

const pt_settings_group_app = /** @type {(inputs: Settings_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplicação`)
};

const ru_settings_group_app = /** @type {(inputs: Settings_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приложение`)
};

const sv_settings_group_app = /** @type {(inputs: Settings_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appen`)
};

const tr_settings_group_app = /** @type {(inputs: Settings_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uygulama`)
};

const zh_settings_group_app = /** @type {(inputs: Settings_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用`)
};

const ja_settings_group_app = /** @type {(inputs: Settings_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アプリ`)
};

/**
* | output |
* | --- |
* | "App" |
*
* @param {Settings_Group_AppInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_group_app = /** @type {((inputs?: Settings_Group_AppInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Group_AppInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_group_app(inputs)
	if (locale === "de") return de_settings_group_app(inputs)
	if (locale === "fr") return fr_settings_group_app(inputs)
	if (locale === "it") return it_settings_group_app(inputs)
	if (locale === "nl") return nl_settings_group_app(inputs)
	if (locale === "pl") return pl_settings_group_app(inputs)
	if (locale === "pt") return pt_settings_group_app(inputs)
	if (locale === "ru") return ru_settings_group_app(inputs)
	if (locale === "sv") return sv_settings_group_app(inputs)
	if (locale === "tr") return tr_settings_group_app(inputs)
	if (locale === "zh") return zh_settings_group_app(inputs)
	if (locale === "ja") return ja_settings_group_app(inputs)
	return en_settings_group_app(inputs)
});
