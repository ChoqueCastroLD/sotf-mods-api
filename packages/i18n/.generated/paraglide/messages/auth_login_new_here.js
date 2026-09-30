/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Login_New_HereInputs */

const en_auth_login_new_here = /** @type {(inputs: Auth_Login_New_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New here?`)
};

const es_auth_login_new_here = /** @type {(inputs: Auth_Login_New_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eres nuevo?`)
};

const de_auth_login_new_here = /** @type {(inputs: Auth_Login_New_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neu hier?`)
};

const fr_auth_login_new_here = /** @type {(inputs: Auth_Login_New_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau ici ?`)
};

const it_auth_login_new_here = /** @type {(inputs: Auth_Login_New_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sei nuovo?`)
};

const nl_auth_login_new_here = /** @type {(inputs: Auth_Login_New_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw hier?`)
};

const pl_auth_login_new_here = /** @type {(inputs: Auth_Login_New_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jesteś tu nowy?`)
};

const pt_auth_login_new_here = /** @type {(inputs: Auth_Login_New_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`É novo por aqui?`)
};

const ru_auth_login_new_here = /** @type {(inputs: Auth_Login_New_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Впервые здесь?`)
};

const sv_auth_login_new_here = /** @type {(inputs: Auth_Login_New_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny här?`)
};

const tr_auth_login_new_here = /** @type {(inputs: Auth_Login_New_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Burada yeni misin?`)
};

const zh_auth_login_new_here = /** @type {(inputs: Auth_Login_New_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`第一次来？`)
};

const ja_auth_login_new_here = /** @type {(inputs: Auth_Login_New_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`はじめての方は`)
};

/**
* | output |
* | --- |
* | "New here?" |
*
* @param {Auth_Login_New_HereInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_login_new_here = /** @type {((inputs?: Auth_Login_New_HereInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_New_HereInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_login_new_here(inputs)
	if (locale === "de") return de_auth_login_new_here(inputs)
	if (locale === "fr") return fr_auth_login_new_here(inputs)
	if (locale === "it") return it_auth_login_new_here(inputs)
	if (locale === "nl") return nl_auth_login_new_here(inputs)
	if (locale === "pl") return pl_auth_login_new_here(inputs)
	if (locale === "pt") return pt_auth_login_new_here(inputs)
	if (locale === "ru") return ru_auth_login_new_here(inputs)
	if (locale === "sv") return sv_auth_login_new_here(inputs)
	if (locale === "tr") return tr_auth_login_new_here(inputs)
	if (locale === "zh") return zh_auth_login_new_here(inputs)
	if (locale === "ja") return ja_auth_login_new_here(inputs)
	return en_auth_login_new_here(inputs)
});
