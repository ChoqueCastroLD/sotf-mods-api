/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Field_Display_NameInputs */

const en_auth_field_display_name = /** @type {(inputs: Auth_Field_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display name`)
};

const es_auth_field_display_name = /** @type {(inputs: Auth_Field_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre visible`)
};

const de_auth_field_display_name = /** @type {(inputs: Auth_Field_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anzeigename`)
};

const fr_auth_field_display_name = /** @type {(inputs: Auth_Field_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom affiché`)
};

const it_auth_field_display_name = /** @type {(inputs: Auth_Field_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome visualizzato`)
};

const nl_auth_field_display_name = /** @type {(inputs: Auth_Field_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weergavenaam`)
};

const pl_auth_field_display_name = /** @type {(inputs: Auth_Field_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyświetlana nazwa`)
};

const pt_auth_field_display_name = /** @type {(inputs: Auth_Field_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome de exibição`)
};

const ru_auth_field_display_name = /** @type {(inputs: Auth_Field_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отображаемое имя`)
};

const sv_auth_field_display_name = /** @type {(inputs: Auth_Field_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visningsnamn`)
};

const tr_auth_field_display_name = /** @type {(inputs: Auth_Field_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görünen ad`)
};

const zh_auth_field_display_name = /** @type {(inputs: Auth_Field_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示名称`)
};

const ja_auth_field_display_name = /** @type {(inputs: Auth_Field_Display_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示名`)
};

/**
* | output |
* | --- |
* | "Display name" |
*
* @param {Auth_Field_Display_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_display_name = /** @type {((inputs?: Auth_Field_Display_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_Display_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_display_name(inputs)
	if (locale === "de") return de_auth_field_display_name(inputs)
	if (locale === "fr") return fr_auth_field_display_name(inputs)
	if (locale === "it") return it_auth_field_display_name(inputs)
	if (locale === "nl") return nl_auth_field_display_name(inputs)
	if (locale === "pl") return pl_auth_field_display_name(inputs)
	if (locale === "pt") return pt_auth_field_display_name(inputs)
	if (locale === "ru") return ru_auth_field_display_name(inputs)
	if (locale === "sv") return sv_auth_field_display_name(inputs)
	if (locale === "tr") return tr_auth_field_display_name(inputs)
	if (locale === "zh") return zh_auth_field_display_name(inputs)
	if (locale === "ja") return ja_auth_field_display_name(inputs)
	return en_auth_field_display_name(inputs)
});
