/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Reset_HeadingInputs */

const en_auth_reset_heading = /** @type {(inputs: Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a new password`)
};

const es_auth_reset_heading = /** @type {(inputs: Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige una contraseña nueva`)
};

const de_auth_reset_heading = /** @type {(inputs: Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Passwort wählen`)
};

const fr_auth_reset_heading = /** @type {(inputs: Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir un nouveau mot de passe`)
};

const it_auth_reset_heading = /** @type {(inputs: Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli una nuova password`)
};

const nl_auth_reset_heading = /** @type {(inputs: Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een nieuw wachtwoord`)
};

const pl_auth_reset_heading = /** @type {(inputs: Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustaw nowe hasło`)
};

const pt_auth_reset_heading = /** @type {(inputs: Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha uma nova senha`)
};

const ru_auth_reset_heading = /** @type {(inputs: Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Задайте новый пароль`)
};

const sv_auth_reset_heading = /** @type {(inputs: Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj ett nytt lösenord`)
};

const tr_auth_reset_heading = /** @type {(inputs: Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bir şifre seç`)
};

const zh_auth_reset_heading = /** @type {(inputs: Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置新密码`)
};

const ja_auth_reset_heading = /** @type {(inputs: Auth_Reset_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいパスワードを設定`)
};

/**
* | output |
* | --- |
* | "Choose a new password" |
*
* @param {Auth_Reset_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_reset_heading = /** @type {((inputs?: Auth_Reset_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Reset_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_reset_heading(inputs)
	if (locale === "de") return de_auth_reset_heading(inputs)
	if (locale === "fr") return fr_auth_reset_heading(inputs)
	if (locale === "it") return it_auth_reset_heading(inputs)
	if (locale === "nl") return nl_auth_reset_heading(inputs)
	if (locale === "pl") return pl_auth_reset_heading(inputs)
	if (locale === "pt") return pt_auth_reset_heading(inputs)
	if (locale === "ru") return ru_auth_reset_heading(inputs)
	if (locale === "sv") return sv_auth_reset_heading(inputs)
	if (locale === "tr") return tr_auth_reset_heading(inputs)
	if (locale === "zh") return zh_auth_reset_heading(inputs)
	if (locale === "ja") return ja_auth_reset_heading(inputs)
	return en_auth_reset_heading(inputs)
});
