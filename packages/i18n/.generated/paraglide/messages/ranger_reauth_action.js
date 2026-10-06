/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reauth_ActionInputs */

const en_ranger_reauth_action = /** @type {(inputs: Ranger_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in again`)
};

const es_ranger_reauth_action = /** @type {(inputs: Ranger_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a iniciar sesión`)
};

const de_ranger_reauth_action = /** @type {(inputs: Ranger_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut anmelden`)
};

const fr_ranger_reauth_action = /** @type {(inputs: Ranger_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se reconnecter`)
};

const it_ranger_reauth_action = /** @type {(inputs: Ranger_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi di nuovo`)
};

const nl_ranger_reauth_action = /** @type {(inputs: Ranger_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw inloggen`)
};

const pl_ranger_reauth_action = /** @type {(inputs: Ranger_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się ponownie`)
};

const pt_ranger_reauth_action = /** @type {(inputs: Ranger_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrar de novo`)
};

const ru_ranger_reauth_action = /** @type {(inputs: Ranger_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войти снова`)
};

const sv_ranger_reauth_action = /** @type {(inputs: Ranger_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in igen`)
};

const tr_ranger_reauth_action = /** @type {(inputs: Ranger_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden giriş yap`)
};

const zh_ranger_reauth_action = /** @type {(inputs: Ranger_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新登录`)
};

const ja_ranger_reauth_action = /** @type {(inputs: Ranger_Reauth_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`もう一度ログイン`)
};

/**
* | output |
* | --- |
* | "Log in again" |
*
* @param {Ranger_Reauth_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reauth_action = /** @type {((inputs?: Ranger_Reauth_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reauth_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reauth_action(inputs)
	if (locale === "de") return de_ranger_reauth_action(inputs)
	if (locale === "fr") return fr_ranger_reauth_action(inputs)
	if (locale === "it") return it_ranger_reauth_action(inputs)
	if (locale === "nl") return nl_ranger_reauth_action(inputs)
	if (locale === "pl") return pl_ranger_reauth_action(inputs)
	if (locale === "pt") return pt_ranger_reauth_action(inputs)
	if (locale === "ru") return ru_ranger_reauth_action(inputs)
	if (locale === "sv") return sv_ranger_reauth_action(inputs)
	if (locale === "tr") return tr_ranger_reauth_action(inputs)
	if (locale === "zh") return zh_ranger_reauth_action(inputs)
	if (locale === "ja") return ja_ranger_reauth_action(inputs)
	return en_ranger_reauth_action(inputs)
});
