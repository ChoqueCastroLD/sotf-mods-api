/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Field_Handle_PlaceholderInputs */

const en_auth_field_handle_placeholder = /** @type {(inputs: Auth_Field_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`your-handle`)
};

const es_auth_field_handle_placeholder = /** @type {(inputs: Auth_Field_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`tu-nombre`)
};

const de_auth_field_handle_placeholder = /** @type {(inputs: Auth_Field_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`dein-handle`)
};

const fr_auth_field_handle_placeholder = /** @type {(inputs: Auth_Field_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`votre-identifiant`)
};

const it_auth_field_handle_placeholder = /** @type {(inputs: Auth_Field_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`il-tuo-handle`)
};

const nl_auth_field_handle_placeholder = /** @type {(inputs: Auth_Field_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`jouw-handle`)
};

const pl_auth_field_handle_placeholder = /** @type {(inputs: Auth_Field_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`twoja-nazwa`)
};

const pt_auth_field_handle_placeholder = /** @type {(inputs: Auth_Field_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`seu-nome`)
};

const ru_auth_field_handle_placeholder = /** @type {(inputs: Auth_Field_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`vashe-imya`)
};

const sv_auth_field_handle_placeholder = /** @type {(inputs: Auth_Field_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ditt-namn`)
};

const tr_auth_field_handle_placeholder = /** @type {(inputs: Auth_Field_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`kullanici-adin`)
};

const zh_auth_field_handle_placeholder = /** @type {(inputs: Auth_Field_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`your-name`)
};

const ja_auth_field_handle_placeholder = /** @type {(inputs: Auth_Field_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`your-handle`)
};

/**
* | output |
* | --- |
* | "your-handle" |
*
* @param {Auth_Field_Handle_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_handle_placeholder = /** @type {((inputs?: Auth_Field_Handle_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_Handle_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_handle_placeholder(inputs)
	if (locale === "de") return de_auth_field_handle_placeholder(inputs)
	if (locale === "fr") return fr_auth_field_handle_placeholder(inputs)
	if (locale === "it") return it_auth_field_handle_placeholder(inputs)
	if (locale === "nl") return nl_auth_field_handle_placeholder(inputs)
	if (locale === "pl") return pl_auth_field_handle_placeholder(inputs)
	if (locale === "pt") return pt_auth_field_handle_placeholder(inputs)
	if (locale === "ru") return ru_auth_field_handle_placeholder(inputs)
	if (locale === "sv") return sv_auth_field_handle_placeholder(inputs)
	if (locale === "tr") return tr_auth_field_handle_placeholder(inputs)
	if (locale === "zh") return zh_auth_field_handle_placeholder(inputs)
	if (locale === "ja") return ja_auth_field_handle_placeholder(inputs)
	return en_auth_field_handle_placeholder(inputs)
});
