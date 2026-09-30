/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_KeyInputs */

const en_admin_tpl_key = /** @type {(inputs: Admin_Tpl_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Key`)
};

const es_admin_tpl_key = /** @type {(inputs: Admin_Tpl_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clave`)
};

const de_admin_tpl_key = /** @type {(inputs: Admin_Tpl_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schlüssel`)
};

const fr_admin_tpl_key = /** @type {(inputs: Admin_Tpl_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clé`)
};

const it_admin_tpl_key = /** @type {(inputs: Admin_Tpl_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiave`)
};

const nl_admin_tpl_key = /** @type {(inputs: Admin_Tpl_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleutel`)
};

const pl_admin_tpl_key = /** @type {(inputs: Admin_Tpl_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klucz`)
};

const pt_admin_tpl_key = /** @type {(inputs: Admin_Tpl_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chave`)
};

const ru_admin_tpl_key = /** @type {(inputs: Admin_Tpl_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ключ`)
};

const sv_admin_tpl_key = /** @type {(inputs: Admin_Tpl_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyckel`)
};

const tr_admin_tpl_key = /** @type {(inputs: Admin_Tpl_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anahtar`)
};

const zh_admin_tpl_key = /** @type {(inputs: Admin_Tpl_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`键`)
};

const ja_admin_tpl_key = /** @type {(inputs: Admin_Tpl_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キー`)
};

/**
* | output |
* | --- |
* | "Key" |
*
* @param {Admin_Tpl_KeyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_key = /** @type {((inputs?: Admin_Tpl_KeyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_KeyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_key(inputs)
	if (locale === "de") return de_admin_tpl_key(inputs)
	if (locale === "fr") return fr_admin_tpl_key(inputs)
	if (locale === "it") return it_admin_tpl_key(inputs)
	if (locale === "nl") return nl_admin_tpl_key(inputs)
	if (locale === "pl") return pl_admin_tpl_key(inputs)
	if (locale === "pt") return pt_admin_tpl_key(inputs)
	if (locale === "ru") return ru_admin_tpl_key(inputs)
	if (locale === "sv") return sv_admin_tpl_key(inputs)
	if (locale === "tr") return tr_admin_tpl_key(inputs)
	if (locale === "zh") return zh_admin_tpl_key(inputs)
	if (locale === "ja") return ja_admin_tpl_key(inputs)
	return en_admin_tpl_key(inputs)
});
