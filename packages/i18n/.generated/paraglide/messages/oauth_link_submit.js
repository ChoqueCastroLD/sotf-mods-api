/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Link_SubmitInputs */

const en_oauth_link_submit = /** @type {(inputs: Oauth_Link_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link and log in`)
};

const es_oauth_link_submit = /** @type {(inputs: Oauth_Link_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincular e iniciar sesión`)
};

const de_oauth_link_submit = /** @type {(inputs: Oauth_Link_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verknüpfen und anmelden`)
};

const fr_oauth_link_submit = /** @type {(inputs: Oauth_Link_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lier et se connecter`)
};

const it_oauth_link_submit = /** @type {(inputs: Oauth_Link_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collega e accedi`)
};

const nl_oauth_link_submit = /** @type {(inputs: Oauth_Link_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppelen en inloggen`)
};

const pl_oauth_link_submit = /** @type {(inputs: Oauth_Link_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Połącz i zaloguj`)
};

const pt_oauth_link_submit = /** @type {(inputs: Oauth_Link_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vincular e entrar`)
};

const ru_oauth_link_submit = /** @type {(inputs: Oauth_Link_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Привязать и войти`)
};

const sv_oauth_link_submit = /** @type {(inputs: Oauth_Link_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koppla och logga in`)
};

const tr_oauth_link_submit = /** @type {(inputs: Oauth_Link_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağla ve giriş yap`)
};

const zh_oauth_link_submit = /** @type {(inputs: Oauth_Link_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关联并登录`)
};

const ja_oauth_link_submit = /** @type {(inputs: Oauth_Link_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`連携してログイン`)
};

/**
* | output |
* | --- |
* | "Link and log in" |
*
* @param {Oauth_Link_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_link_submit = /** @type {((inputs?: Oauth_Link_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Link_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_link_submit(inputs)
	if (locale === "de") return de_oauth_link_submit(inputs)
	if (locale === "fr") return fr_oauth_link_submit(inputs)
	if (locale === "it") return it_oauth_link_submit(inputs)
	if (locale === "nl") return nl_oauth_link_submit(inputs)
	if (locale === "pl") return pl_oauth_link_submit(inputs)
	if (locale === "pt") return pt_oauth_link_submit(inputs)
	if (locale === "ru") return ru_oauth_link_submit(inputs)
	if (locale === "sv") return sv_oauth_link_submit(inputs)
	if (locale === "tr") return tr_oauth_link_submit(inputs)
	if (locale === "zh") return zh_oauth_link_submit(inputs)
	if (locale === "ja") return ja_oauth_link_submit(inputs)
	return en_oauth_link_submit(inputs)
});
