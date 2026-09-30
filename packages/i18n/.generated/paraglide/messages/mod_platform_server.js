/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Platform_ServerInputs */

const en_mod_platform_server = /** @type {(inputs: Mod_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const es_mod_platform_server = /** @type {(inputs: Mod_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const de_mod_platform_server = /** @type {(inputs: Mod_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedizierter Server`)
};

const fr_mod_platform_server = /** @type {(inputs: Mod_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serveur dédié`)
};

const it_mod_platform_server = /** @type {(inputs: Mod_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server dedicato`)
};

const nl_mod_platform_server = /** @type {(inputs: Mod_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const pl_mod_platform_server = /** @type {(inputs: Mod_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serwer dedykowany`)
};

const pt_mod_platform_server = /** @type {(inputs: Mod_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const ru_mod_platform_server = /** @type {(inputs: Mod_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выделенный сервер`)
};

const sv_mod_platform_server = /** @type {(inputs: Mod_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedikerad server`)
};

const tr_mod_platform_server = /** @type {(inputs: Mod_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel sunucu`)
};

const zh_mod_platform_server = /** @type {(inputs: Mod_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`专用服务器`)
};

const ja_mod_platform_server = /** @type {(inputs: Mod_Platform_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`専用サーバー`)
};

/**
* | output |
* | --- |
* | "Dedicated server" |
*
* @param {Mod_Platform_ServerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_platform_server = /** @type {((inputs?: Mod_Platform_ServerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Platform_ServerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_platform_server(inputs)
	if (locale === "de") return de_mod_platform_server(inputs)
	if (locale === "fr") return fr_mod_platform_server(inputs)
	if (locale === "it") return it_mod_platform_server(inputs)
	if (locale === "nl") return nl_mod_platform_server(inputs)
	if (locale === "pl") return pl_mod_platform_server(inputs)
	if (locale === "pt") return pt_mod_platform_server(inputs)
	if (locale === "ru") return ru_mod_platform_server(inputs)
	if (locale === "sv") return sv_mod_platform_server(inputs)
	if (locale === "tr") return tr_mod_platform_server(inputs)
	if (locale === "zh") return zh_mod_platform_server(inputs)
	if (locale === "ja") return ja_mod_platform_server(inputs)
	return en_mod_platform_server(inputs)
});
