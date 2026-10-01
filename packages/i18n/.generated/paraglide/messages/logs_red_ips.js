/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Red_IpsInputs */

const en_logs_red_ips = /** @type {(inputs: Logs_Red_IpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IP addresses`)
};

const es_logs_red_ips = /** @type {(inputs: Logs_Red_IpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Direcciones IP`)
};

const de_logs_red_ips = /** @type {(inputs: Logs_Red_IpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IP-Adressen`)
};

const fr_logs_red_ips = /** @type {(inputs: Logs_Red_IpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresses IP`)
};

const it_logs_red_ips = /** @type {(inputs: Logs_Red_IpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indirizzi IP`)
};

const nl_logs_red_ips = /** @type {(inputs: Logs_Red_IpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IP-adressen`)
};

const pl_logs_red_ips = /** @type {(inputs: Logs_Red_IpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresy IP`)
};

const pt_logs_red_ips = /** @type {(inputs: Logs_Red_IpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endereços IP`)
};

const ru_logs_red_ips = /** @type {(inputs: Logs_Red_IpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IP-адреса`)
};

const sv_logs_red_ips = /** @type {(inputs: Logs_Red_IpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IP-adresser`)
};

const tr_logs_red_ips = /** @type {(inputs: Logs_Red_IpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IP adresleri`)
};

const zh_logs_red_ips = /** @type {(inputs: Logs_Red_IpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IP 地址`)
};

const ja_logs_red_ips = /** @type {(inputs: Logs_Red_IpsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IP アドレス`)
};

/**
* | output |
* | --- |
* | "IP addresses" |
*
* @param {Logs_Red_IpsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_red_ips = /** @type {((inputs?: Logs_Red_IpsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Red_IpsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_red_ips(inputs)
	if (locale === "de") return de_logs_red_ips(inputs)
	if (locale === "fr") return fr_logs_red_ips(inputs)
	if (locale === "it") return it_logs_red_ips(inputs)
	if (locale === "nl") return nl_logs_red_ips(inputs)
	if (locale === "pl") return pl_logs_red_ips(inputs)
	if (locale === "pt") return pt_logs_red_ips(inputs)
	if (locale === "ru") return ru_logs_red_ips(inputs)
	if (locale === "sv") return sv_logs_red_ips(inputs)
	if (locale === "tr") return tr_logs_red_ips(inputs)
	if (locale === "zh") return zh_logs_red_ips(inputs)
	if (locale === "ja") return ja_logs_red_ips(inputs)
	return en_logs_red_ips(inputs)
});
