/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Platform_ServerInputs */

const en_ui_domain_platform_server = /** @type {(inputs: Ui_Domain_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server`)
};

const es_ui_domain_platform_server = /** @type {(inputs: Ui_Domain_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor`)
};

const de_ui_domain_platform_server = /** @type {(inputs: Ui_Domain_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server`)
};

const fr_ui_domain_platform_server = /** @type {(inputs: Ui_Domain_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serveur`)
};

const it_ui_domain_platform_server = /** @type {(inputs: Ui_Domain_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server`)
};

const nl_ui_domain_platform_server = /** @type {(inputs: Ui_Domain_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server`)
};

const pl_ui_domain_platform_server = /** @type {(inputs: Ui_Domain_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serwer`)
};

const pt_ui_domain_platform_server = /** @type {(inputs: Ui_Domain_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor`)
};

const ru_ui_domain_platform_server = /** @type {(inputs: Ui_Domain_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сервер`)
};

const sv_ui_domain_platform_server = /** @type {(inputs: Ui_Domain_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server`)
};

const tr_ui_domain_platform_server = /** @type {(inputs: Ui_Domain_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sunucu`)
};

const zh_ui_domain_platform_server = /** @type {(inputs: Ui_Domain_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务器`)
};

const ja_ui_domain_platform_server = /** @type {(inputs: Ui_Domain_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サーバー`)
};

/**
* | output |
* | --- |
* | "Server" |
*
* @param {Ui_Domain_Platform_ServerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_platform_server = /** @type {((inputs?: Ui_Domain_Platform_ServerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Platform_ServerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_platform_server(inputs)
	if (locale === "de") return de_ui_domain_platform_server(inputs)
	if (locale === "fr") return fr_ui_domain_platform_server(inputs)
	if (locale === "it") return it_ui_domain_platform_server(inputs)
	if (locale === "nl") return nl_ui_domain_platform_server(inputs)
	if (locale === "pl") return pl_ui_domain_platform_server(inputs)
	if (locale === "pt") return pt_ui_domain_platform_server(inputs)
	if (locale === "ru") return ru_ui_domain_platform_server(inputs)
	if (locale === "sv") return sv_ui_domain_platform_server(inputs)
	if (locale === "tr") return tr_ui_domain_platform_server(inputs)
	if (locale === "zh") return zh_ui_domain_platform_server(inputs)
	if (locale === "ja") return ja_ui_domain_platform_server(inputs)
	return en_ui_domain_platform_server(inputs)
});
