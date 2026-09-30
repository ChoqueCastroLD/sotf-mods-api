/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Flags_EmptyInputs */

const en_admin_flags_empty = /** @type {(inputs: Admin_Flags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No flags set`)
};

const es_admin_flags_empty = /** @type {(inputs: Admin_Flags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay flags`)
};

const de_admin_flags_empty = /** @type {(inputs: Admin_Flags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Flags gesetzt`)
};

const fr_admin_flags_empty = /** @type {(inputs: Admin_Flags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun flag défini`)
};

const it_admin_flags_empty = /** @type {(inputs: Admin_Flags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun flag impostato`)
};

const nl_admin_flags_empty = /** @type {(inputs: Admin_Flags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen flags ingesteld`)
};

const pl_admin_flags_empty = /** @type {(inputs: Admin_Flags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak ustawionych flag`)
};

const pt_admin_flags_empty = /** @type {(inputs: Admin_Flags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma flag definida`)
};

const ru_admin_flags_empty = /** @type {(inputs: Admin_Flags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Флаги не заданы`)
};

const sv_admin_flags_empty = /** @type {(inputs: Admin_Flags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga flaggor satta`)
};

const tr_admin_flags_empty = /** @type {(inputs: Admin_Flags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayarlanmış bayrak yok`)
};

const zh_admin_flags_empty = /** @type {(inputs: Admin_Flags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未设置开关`)
};

const ja_admin_flags_empty = /** @type {(inputs: Admin_Flags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フラグは設定されていません`)
};

/**
* | output |
* | --- |
* | "No flags set" |
*
* @param {Admin_Flags_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_flags_empty = /** @type {((inputs?: Admin_Flags_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Flags_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_flags_empty(inputs)
	if (locale === "de") return de_admin_flags_empty(inputs)
	if (locale === "fr") return fr_admin_flags_empty(inputs)
	if (locale === "it") return it_admin_flags_empty(inputs)
	if (locale === "nl") return nl_admin_flags_empty(inputs)
	if (locale === "pl") return pl_admin_flags_empty(inputs)
	if (locale === "pt") return pt_admin_flags_empty(inputs)
	if (locale === "ru") return ru_admin_flags_empty(inputs)
	if (locale === "sv") return sv_admin_flags_empty(inputs)
	if (locale === "tr") return tr_admin_flags_empty(inputs)
	if (locale === "zh") return zh_admin_flags_empty(inputs)
	if (locale === "ja") return ja_admin_flags_empty(inputs)
	return en_admin_flags_empty(inputs)
});
