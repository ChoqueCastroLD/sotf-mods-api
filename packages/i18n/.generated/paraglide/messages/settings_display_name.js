/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Display_NameInputs */

const en_settings_display_name = /** @type {(inputs: Settings_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display name`)
};

const es_settings_display_name = /** @type {(inputs: Settings_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre visible`)
};

const de_settings_display_name = /** @type {(inputs: Settings_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anzeigename`)
};

const fr_settings_display_name = /** @type {(inputs: Settings_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom affiché`)
};

const it_settings_display_name = /** @type {(inputs: Settings_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome visualizzato`)
};

const nl_settings_display_name = /** @type {(inputs: Settings_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weergavenaam`)
};

const pl_settings_display_name = /** @type {(inputs: Settings_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa wyświetlana`)
};

const pt_settings_display_name = /** @type {(inputs: Settings_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome de exibição`)
};

const ru_settings_display_name = /** @type {(inputs: Settings_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отображаемое имя`)
};

const sv_settings_display_name = /** @type {(inputs: Settings_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visningsnamn`)
};

const tr_settings_display_name = /** @type {(inputs: Settings_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görünen ad`)
};

const zh_settings_display_name = /** @type {(inputs: Settings_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示名称`)
};

const ja_settings_display_name = /** @type {(inputs: Settings_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示名`)
};

/**
* | output |
* | --- |
* | "Display name" |
*
* @param {Settings_Display_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_display_name = /** @type {((inputs?: Settings_Display_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Display_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_display_name(inputs)
	if (locale === "de") return de_settings_display_name(inputs)
	if (locale === "fr") return fr_settings_display_name(inputs)
	if (locale === "it") return it_settings_display_name(inputs)
	if (locale === "nl") return nl_settings_display_name(inputs)
	if (locale === "pl") return pl_settings_display_name(inputs)
	if (locale === "pt") return pt_settings_display_name(inputs)
	if (locale === "ru") return ru_settings_display_name(inputs)
	if (locale === "sv") return sv_settings_display_name(inputs)
	if (locale === "tr") return tr_settings_display_name(inputs)
	if (locale === "zh") return zh_settings_display_name(inputs)
	if (locale === "ja") return ja_settings_display_name(inputs)
	return en_settings_display_name(inputs)
});
