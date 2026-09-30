/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, handle: NonNullable<unknown> }} Auth_Login_Already_TextInputs */

const en_auth_login_already_text = /** @type {(inputs: Auth_Login_Already_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Signed in as ${i?.name} (@${i?.handle}).`)
};

const es_auth_login_already_text = /** @type {(inputs: Auth_Login_Already_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Has iniciado sesión como ${i?.name} (@${i?.handle}).`)
};

const de_auth_login_already_text = /** @type {(inputs: Auth_Login_Already_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Angemeldet als ${i?.name} (@${i?.handle}).`)
};

const fr_auth_login_already_text = /** @type {(inputs: Auth_Login_Already_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Connecté en tant que ${i?.name} (@${i?.handle}).`)
};

const it_auth_login_already_text = /** @type {(inputs: Auth_Login_Already_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Accesso effettuato come ${i?.name} (@${i?.handle}).`)
};

const nl_auth_login_already_text = /** @type {(inputs: Auth_Login_Already_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingelogd als ${i?.name} (@${i?.handle}).`)
};

const pl_auth_login_already_text = /** @type {(inputs: Auth_Login_Already_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zalogowano jako ${i?.name} (@${i?.handle}).`)
};

const pt_auth_login_already_text = /** @type {(inputs: Auth_Login_Already_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Conectado como ${i?.name} (@${i?.handle}).`)
};

const ru_auth_login_already_text = /** @type {(inputs: Auth_Login_Already_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы вошли как ${i?.name} (@${i?.handle}).`)
};

const sv_auth_login_already_text = /** @type {(inputs: Auth_Login_Already_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inloggad som ${i?.name} (@${i?.handle}).`)
};

const tr_auth_login_already_text = /** @type {(inputs: Auth_Login_Already_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} (@${i?.handle}) olarak giriş yaptın.`)
};

const zh_auth_login_already_text = /** @type {(inputs: Auth_Login_Already_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`当前登录身份：${i?.name}（@${i?.handle}）。`)
};

const ja_auth_login_already_text = /** @type {(inputs: Auth_Login_Already_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}（@${i?.handle}）としてログイン中です。`)
};

/**
* | output |
* | --- |
* | "Signed in as {name} (@{handle})." |
*
* @param {Auth_Login_Already_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_login_already_text = /** @type {((inputs: Auth_Login_Already_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_Already_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_login_already_text(inputs)
	if (locale === "de") return de_auth_login_already_text(inputs)
	if (locale === "fr") return fr_auth_login_already_text(inputs)
	if (locale === "it") return it_auth_login_already_text(inputs)
	if (locale === "nl") return nl_auth_login_already_text(inputs)
	if (locale === "pl") return pl_auth_login_already_text(inputs)
	if (locale === "pt") return pt_auth_login_already_text(inputs)
	if (locale === "ru") return ru_auth_login_already_text(inputs)
	if (locale === "sv") return sv_auth_login_already_text(inputs)
	if (locale === "tr") return tr_auth_login_already_text(inputs)
	if (locale === "zh") return zh_auth_login_already_text(inputs)
	if (locale === "ja") return ja_auth_login_already_text(inputs)
	return en_auth_login_already_text(inputs)
});
