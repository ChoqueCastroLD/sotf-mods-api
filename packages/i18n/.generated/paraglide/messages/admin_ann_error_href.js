/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Error_HrefInputs */

const en_admin_ann_error_href = /** @type {(inputs: Admin_Ann_Error_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a path starting with / or an https:// address.`)
};

const es_admin_ann_error_href = /** @type {(inputs: Admin_Ann_Error_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa una ruta que empiece por / o una dirección https://.`)
};

const de_admin_ann_error_href = /** @type {(inputs: Admin_Ann_Error_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutze einen Pfad, der mit / beginnt, oder eine https://-Adresse.`)
};

const fr_admin_ann_error_href = /** @type {(inputs: Admin_Ann_Error_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez un chemin commençant par / ou une adresse https://.`)
};

const it_admin_ann_error_href = /** @type {(inputs: Admin_Ann_Error_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa un percorso che inizia con / o un indirizzo https://.`)
};

const nl_admin_ann_error_href = /** @type {(inputs: Admin_Ann_Error_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik een pad dat met / begint of een https://-adres.`)
};

const pl_admin_ann_error_href = /** @type {(inputs: Admin_Ann_Error_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj ścieżki zaczynającej się od / albo adresu https://.`)
};

const pt_admin_ann_error_href = /** @type {(inputs: Admin_Ann_Error_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use um caminho que comece com / ou um endereço https://.`)
};

const ru_admin_ann_error_href = /** @type {(inputs: Admin_Ann_Error_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Укажите путь, начинающийся с /, или адрес https://.`)
};

const sv_admin_ann_error_href = /** @type {(inputs: Admin_Ann_Error_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd en sökväg som börjar med / eller en https://-adress.`)
};

const tr_admin_ann_error_href = /** @type {(inputs: Admin_Ann_Error_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/ ile başlayan bir yol veya bir https:// adresi kullan.`)
};

const zh_admin_ann_error_href = /** @type {(inputs: Admin_Ann_Error_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请使用以 / 开头的路径或 https:// 地址。`)
};

const ja_admin_ann_error_href = /** @type {(inputs: Admin_Ann_Error_HrefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/ で始まるパスか https:// のアドレスを使ってください。`)
};

/**
* | output |
* | --- |
* | "Use a path starting with / or an https:// address." |
*
* @param {Admin_Ann_Error_HrefInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_error_href = /** @type {((inputs?: Admin_Ann_Error_HrefInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Error_HrefInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_error_href(inputs)
	if (locale === "de") return de_admin_ann_error_href(inputs)
	if (locale === "fr") return fr_admin_ann_error_href(inputs)
	if (locale === "it") return it_admin_ann_error_href(inputs)
	if (locale === "nl") return nl_admin_ann_error_href(inputs)
	if (locale === "pl") return pl_admin_ann_error_href(inputs)
	if (locale === "pt") return pt_admin_ann_error_href(inputs)
	if (locale === "ru") return ru_admin_ann_error_href(inputs)
	if (locale === "sv") return sv_admin_ann_error_href(inputs)
	if (locale === "tr") return tr_admin_ann_error_href(inputs)
	if (locale === "zh") return zh_admin_ann_error_href(inputs)
	if (locale === "ja") return ja_admin_ann_error_href(inputs)
	return en_admin_ann_error_href(inputs)
});
