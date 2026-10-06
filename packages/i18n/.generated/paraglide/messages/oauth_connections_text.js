/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Connections_TextInputs */

const en_oauth_connections_text = /** @type {(inputs: Oauth_Connections_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link Discord to log in faster.`)
};

const es_oauth_connections_text = /** @type {(inputs: Oauth_Connections_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincula Discord para iniciar sesión más rápido.`)
};

const de_oauth_connections_text = /** @type {(inputs: Oauth_Connections_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verknüpfe Discord, um dich schneller anzumelden.`)
};

const fr_oauth_connections_text = /** @type {(inputs: Oauth_Connections_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liez Discord pour vous connecter plus vite.`)
};

const it_oauth_connections_text = /** @type {(inputs: Oauth_Connections_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collega Discord per accedere più velocemente.`)
};

const nl_oauth_connections_text = /** @type {(inputs: Oauth_Connections_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppel Discord om sneller in te loggen.`)
};

const pl_oauth_connections_text = /** @type {(inputs: Oauth_Connections_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Połącz Discord, aby logować się szybciej.`)
};

const pt_oauth_connections_text = /** @type {(inputs: Oauth_Connections_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincule o Discord para entrar mais rápido.`)
};

const ru_oauth_connections_text = /** @type {(inputs: Oauth_Connections_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Привяжите Discord, чтобы входить быстрее.`)
};

const sv_oauth_connections_text = /** @type {(inputs: Oauth_Connections_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppla Discord för att logga in snabbare.`)
};

const tr_oauth_connections_text = /** @type {(inputs: Oauth_Connections_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha hızlı giriş yapmak için Discord’u bağla.`)
};

const zh_oauth_connections_text = /** @type {(inputs: Oauth_Connections_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关联 Discord，登录更快捷。`)
};

const ja_oauth_connections_text = /** @type {(inputs: Oauth_Connections_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord を連携すると、より素早くログインできます。`)
};

/**
* | output |
* | --- |
* | "Link Discord to log in faster." |
*
* @param {Oauth_Connections_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_connections_text = /** @type {((inputs?: Oauth_Connections_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Connections_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_connections_text(inputs)
	if (locale === "de") return de_oauth_connections_text(inputs)
	if (locale === "fr") return fr_oauth_connections_text(inputs)
	if (locale === "it") return it_oauth_connections_text(inputs)
	if (locale === "nl") return nl_oauth_connections_text(inputs)
	if (locale === "pl") return pl_oauth_connections_text(inputs)
	if (locale === "pt") return pt_oauth_connections_text(inputs)
	if (locale === "ru") return ru_oauth_connections_text(inputs)
	if (locale === "sv") return sv_oauth_connections_text(inputs)
	if (locale === "tr") return tr_oauth_connections_text(inputs)
	if (locale === "zh") return zh_oauth_connections_text(inputs)
	if (locale === "ja") return ja_oauth_connections_text(inputs)
	return en_oauth_connections_text(inputs)
});
