/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Platform_ServerInputs */

const en_explore_platform_server = /** @type {(inputs: Explore_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const es_explore_platform_server = /** @type {(inputs: Explore_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const de_explore_platform_server = /** @type {(inputs: Explore_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedizierter Server`)
};

const fr_explore_platform_server = /** @type {(inputs: Explore_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serveur dédié`)
};

const it_explore_platform_server = /** @type {(inputs: Explore_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server dedicato`)
};

const nl_explore_platform_server = /** @type {(inputs: Explore_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const pl_explore_platform_server = /** @type {(inputs: Explore_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serwer dedykowany`)
};

const pt_explore_platform_server = /** @type {(inputs: Explore_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const ru_explore_platform_server = /** @type {(inputs: Explore_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выделенный сервер`)
};

const sv_explore_platform_server = /** @type {(inputs: Explore_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedikerad server`)
};

const tr_explore_platform_server = /** @type {(inputs: Explore_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel sunucu`)
};

const zh_explore_platform_server = /** @type {(inputs: Explore_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`专用服务器`)
};

const ja_explore_platform_server = /** @type {(inputs: Explore_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`専用サーバー`)
};

/**
* | output |
* | --- |
* | "Dedicated server" |
*
* @param {Explore_Platform_ServerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_platform_server = /** @type {((inputs?: Explore_Platform_ServerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Platform_ServerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_platform_server(inputs)
	if (locale === "de") return de_explore_platform_server(inputs)
	if (locale === "fr") return fr_explore_platform_server(inputs)
	if (locale === "it") return it_explore_platform_server(inputs)
	if (locale === "nl") return nl_explore_platform_server(inputs)
	if (locale === "pl") return pl_explore_platform_server(inputs)
	if (locale === "pt") return pt_explore_platform_server(inputs)
	if (locale === "ru") return ru_explore_platform_server(inputs)
	if (locale === "sv") return sv_explore_platform_server(inputs)
	if (locale === "tr") return tr_explore_platform_server(inputs)
	if (locale === "zh") return zh_explore_platform_server(inputs)
	if (locale === "ja") return ja_explore_platform_server(inputs)
	return en_explore_platform_server(inputs)
});
