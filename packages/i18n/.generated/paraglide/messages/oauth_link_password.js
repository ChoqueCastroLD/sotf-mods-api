/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Link_PasswordInputs */

const en_oauth_link_password = /** @type {(inputs: Oauth_Link_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account password`)
};

const es_oauth_link_password = /** @type {(inputs: Oauth_Link_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contraseña de la cuenta`)
};

const de_oauth_link_password = /** @type {(inputs: Oauth_Link_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontopasswort`)
};

const fr_oauth_link_password = /** @type {(inputs: Oauth_Link_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mot de passe du compte`)
};

const it_oauth_link_password = /** @type {(inputs: Oauth_Link_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password dell’account`)
};

const nl_oauth_link_password = /** @type {(inputs: Oauth_Link_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord van het account`)
};

const pl_oauth_link_password = /** @type {(inputs: Oauth_Link_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hasło do konta`)
};

const pt_oauth_link_password = /** @type {(inputs: Oauth_Link_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senha da conta`)
};

const ru_oauth_link_password = /** @type {(inputs: Oauth_Link_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пароль аккаунта`)
};

const sv_oauth_link_password = /** @type {(inputs: Oauth_Link_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontots lösenord`)
};

const tr_oauth_link_password = /** @type {(inputs: Oauth_Link_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap parolası`)
};

const zh_oauth_link_password = /** @type {(inputs: Oauth_Link_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`账号密码`)
};

const ja_oauth_link_password = /** @type {(inputs: Oauth_Link_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントのパスワード`)
};

/**
* | output |
* | --- |
* | "Account password" |
*
* @param {Oauth_Link_PasswordInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_link_password = /** @type {((inputs?: Oauth_Link_PasswordInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Link_PasswordInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_link_password(inputs)
	if (locale === "de") return de_oauth_link_password(inputs)
	if (locale === "fr") return fr_oauth_link_password(inputs)
	if (locale === "it") return it_oauth_link_password(inputs)
	if (locale === "nl") return nl_oauth_link_password(inputs)
	if (locale === "pl") return pl_oauth_link_password(inputs)
	if (locale === "pt") return pt_oauth_link_password(inputs)
	if (locale === "ru") return ru_oauth_link_password(inputs)
	if (locale === "sv") return sv_oauth_link_password(inputs)
	if (locale === "tr") return tr_oauth_link_password(inputs)
	if (locale === "zh") return zh_oauth_link_password(inputs)
	if (locale === "ja") return ja_oauth_link_password(inputs)
	return en_oauth_link_password(inputs)
});
