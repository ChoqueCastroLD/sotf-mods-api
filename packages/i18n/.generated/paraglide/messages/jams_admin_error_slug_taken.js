/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Error_Slug_TakenInputs */

const en_jams_admin_error_slug_taken = /** @type {(inputs: Jams_Admin_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That address is already used by another jam.`)
};

const es_jams_admin_error_slug_taken = /** @type {(inputs: Jams_Admin_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esa dirección ya la usa otro jam.`)
};

const de_jams_admin_error_slug_taken = /** @type {(inputs: Jams_Admin_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Adresse wird schon von einem anderen Jam verwendet.`)
};

const fr_jams_admin_error_slug_taken = /** @type {(inputs: Jams_Admin_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette adresse est déjà utilisée par un autre jam.`)
};

const it_jams_admin_error_slug_taken = /** @type {(inputs: Jams_Admin_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo indirizzo è già usato da un altro jam.`)
};

const nl_jams_admin_error_slug_taken = /** @type {(inputs: Jams_Admin_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit adres wordt al door een andere jam gebruikt.`)
};

const pl_jams_admin_error_slug_taken = /** @type {(inputs: Jams_Admin_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten adres jest już używany przez inny jam.`)
};

const pt_jams_admin_error_slug_taken = /** @type {(inputs: Jams_Admin_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esse endereço já é usado por outra jam.`)
};

const ru_jams_admin_error_slug_taken = /** @type {(inputs: Jams_Admin_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот адрес уже занят другим джемом.`)
};

const sv_jams_admin_error_slug_taken = /** @type {(inputs: Jams_Admin_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den adressen används redan av en annan jam.`)
};

const tr_jams_admin_error_slug_taken = /** @type {(inputs: Jams_Admin_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu adres başka bir jam tarafından kullanılıyor.`)
};

const zh_jams_admin_error_slug_taken = /** @type {(inputs: Jams_Admin_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该地址已被其他 Jam 使用。`)
};

const ja_jams_admin_error_slug_taken = /** @type {(inputs: Jams_Admin_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このアドレスは別のジャムですでに使われています。`)
};

/**
* | output |
* | --- |
* | "That address is already used by another jam." |
*
* @param {Jams_Admin_Error_Slug_TakenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_error_slug_taken = /** @type {((inputs?: Jams_Admin_Error_Slug_TakenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Error_Slug_TakenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_error_slug_taken(inputs)
	if (locale === "de") return de_jams_admin_error_slug_taken(inputs)
	if (locale === "fr") return fr_jams_admin_error_slug_taken(inputs)
	if (locale === "it") return it_jams_admin_error_slug_taken(inputs)
	if (locale === "nl") return nl_jams_admin_error_slug_taken(inputs)
	if (locale === "pl") return pl_jams_admin_error_slug_taken(inputs)
	if (locale === "pt") return pt_jams_admin_error_slug_taken(inputs)
	if (locale === "ru") return ru_jams_admin_error_slug_taken(inputs)
	if (locale === "sv") return sv_jams_admin_error_slug_taken(inputs)
	if (locale === "tr") return tr_jams_admin_error_slug_taken(inputs)
	if (locale === "zh") return zh_jams_admin_error_slug_taken(inputs)
	if (locale === "ja") return ja_jams_admin_error_slug_taken(inputs)
	return en_jams_admin_error_slug_taken(inputs)
});
