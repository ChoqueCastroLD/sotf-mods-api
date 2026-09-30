/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Platform_ClientInputs */

const en_ui_domain_platform_client = /** @type {(inputs: Ui_Domain_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const es_ui_domain_platform_client = /** @type {(inputs: Ui_Domain_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente`)
};

const de_ui_domain_platform_client = /** @type {(inputs: Ui_Domain_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const fr_ui_domain_platform_client = /** @type {(inputs: Ui_Domain_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const it_ui_domain_platform_client = /** @type {(inputs: Ui_Domain_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const nl_ui_domain_platform_client = /** @type {(inputs: Ui_Domain_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client`)
};

const pl_ui_domain_platform_client = /** @type {(inputs: Ui_Domain_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient`)
};

const pt_ui_domain_platform_client = /** @type {(inputs: Ui_Domain_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente`)
};

const ru_ui_domain_platform_client = /** @type {(inputs: Ui_Domain_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Клиент`)
};

const sv_ui_domain_platform_client = /** @type {(inputs: Ui_Domain_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient`)
};

const tr_ui_domain_platform_client = /** @type {(inputs: Ui_Domain_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstemci`)
};

const zh_ui_domain_platform_client = /** @type {(inputs: Ui_Domain_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`客户端`)
};

const ja_ui_domain_platform_client = /** @type {(inputs: Ui_Domain_Platform_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クライアント`)
};

/**
* | output |
* | --- |
* | "Client" |
*
* @param {Ui_Domain_Platform_ClientInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_platform_client = /** @type {((inputs?: Ui_Domain_Platform_ClientInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Platform_ClientInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_platform_client(inputs)
	if (locale === "de") return de_ui_domain_platform_client(inputs)
	if (locale === "fr") return fr_ui_domain_platform_client(inputs)
	if (locale === "it") return it_ui_domain_platform_client(inputs)
	if (locale === "nl") return nl_ui_domain_platform_client(inputs)
	if (locale === "pl") return pl_ui_domain_platform_client(inputs)
	if (locale === "pt") return pt_ui_domain_platform_client(inputs)
	if (locale === "ru") return ru_ui_domain_platform_client(inputs)
	if (locale === "sv") return sv_ui_domain_platform_client(inputs)
	if (locale === "tr") return tr_ui_domain_platform_client(inputs)
	if (locale === "zh") return zh_ui_domain_platform_client(inputs)
	if (locale === "ja") return ja_ui_domain_platform_client(inputs)
	return en_ui_domain_platform_client(inputs)
});
