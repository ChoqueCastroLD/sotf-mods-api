/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Password_Revoke_HintInputs */

const en_settings_password_revoke_hint = /** @type {(inputs: Settings_Password_Revoke_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recommended if you think someone else knows your password.`)
};

const es_settings_password_revoke_hint = /** @type {(inputs: Settings_Password_Revoke_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recomendado si crees que alguien más conoce tu contraseña.`)
};

const de_settings_password_revoke_hint = /** @type {(inputs: Settings_Password_Revoke_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empfohlen, wenn du glaubst, dass jemand anderes dein Passwort kennt.`)
};

const fr_settings_password_revoke_hint = /** @type {(inputs: Settings_Password_Revoke_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recommandé si vous pensez que quelqu’un d’autre connaît votre mot de passe.`)
};

const it_settings_password_revoke_hint = /** @type {(inputs: Settings_Password_Revoke_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consigliato se pensi che qualcun altro conosca la tua password.`)
};

const nl_settings_password_revoke_hint = /** @type {(inputs: Settings_Password_Revoke_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aanbevolen als je denkt dat iemand anders je wachtwoord kent.`)
};

const pl_settings_password_revoke_hint = /** @type {(inputs: Settings_Password_Revoke_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zalecane, jeśli podejrzewasz, że ktoś inny zna twoje hasło.`)
};

const pt_settings_password_revoke_hint = /** @type {(inputs: Settings_Password_Revoke_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recomendado se você acha que outra pessoa conhece sua senha.`)
};

const ru_settings_password_revoke_hint = /** @type {(inputs: Settings_Password_Revoke_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рекомендуется, если вы думаете, что ваш пароль знает кто-то ещё.`)
};

const sv_settings_password_revoke_hint = /** @type {(inputs: Settings_Password_Revoke_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rekommenderas om du tror att någon annan känner till ditt lösenord.`)
};

const tr_settings_password_revoke_hint = /** @type {(inputs: Settings_Password_Revoke_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifreni başka birinin bildiğini düşünüyorsan önerilir.`)
};

const zh_settings_password_revoke_hint = /** @type {(inputs: Settings_Password_Revoke_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如果你怀疑别人知道你的密码，建议勾选。`)
};

const ja_settings_password_revoke_hint = /** @type {(inputs: Settings_Password_Revoke_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードを他の人に知られたかもしれない場合におすすめです。`)
};

/**
* | output |
* | --- |
* | "Recommended if you think someone else knows your password." |
*
* @param {Settings_Password_Revoke_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_revoke_hint = /** @type {((inputs?: Settings_Password_Revoke_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_Revoke_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_revoke_hint(inputs)
	if (locale === "de") return de_settings_password_revoke_hint(inputs)
	if (locale === "fr") return fr_settings_password_revoke_hint(inputs)
	if (locale === "it") return it_settings_password_revoke_hint(inputs)
	if (locale === "nl") return nl_settings_password_revoke_hint(inputs)
	if (locale === "pl") return pl_settings_password_revoke_hint(inputs)
	if (locale === "pt") return pt_settings_password_revoke_hint(inputs)
	if (locale === "ru") return ru_settings_password_revoke_hint(inputs)
	if (locale === "sv") return sv_settings_password_revoke_hint(inputs)
	if (locale === "tr") return tr_settings_password_revoke_hint(inputs)
	if (locale === "zh") return zh_settings_password_revoke_hint(inputs)
	if (locale === "ja") return ja_settings_password_revoke_hint(inputs)
	return en_settings_password_revoke_hint(inputs)
});
