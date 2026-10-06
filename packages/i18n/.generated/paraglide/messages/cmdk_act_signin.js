/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Act_SigninInputs */

const en_cmdk_act_signin = /** @type {(inputs: Cmdk_Act_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in to do that`)
};

const es_cmdk_act_signin = /** @type {(inputs: Cmdk_Act_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para hacerlo`)
};

const de_cmdk_act_signin = /** @type {(inputs: Cmdk_Act_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Fortfahren anmelden`)
};

const fr_cmdk_act_signin = /** @type {(inputs: Cmdk_Act_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour continuer`)
};

const it_cmdk_act_signin = /** @type {(inputs: Cmdk_Act_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per continuare`)
};

const nl_cmdk_act_signin = /** @type {(inputs: Cmdk_Act_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om dit te doen`)
};

const pl_cmdk_act_signin = /** @type {(inputs: Cmdk_Act_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby to zrobić`)
};

const pt_cmdk_act_signin = /** @type {(inputs: Cmdk_Act_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para continuar`)
};

const ru_cmdk_act_signin = /** @type {(inputs: Cmdk_Act_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы продолжить`)
};

const sv_cmdk_act_signin = /** @type {(inputs: Cmdk_Act_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att fortsätta`)
};

const tr_cmdk_act_signin = /** @type {(inputs: Cmdk_Act_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devam etmek için giriş yapın`)
};

const zh_cmdk_act_signin = /** @type {(inputs: Cmdk_Act_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请登录后继续`)
};

const ja_cmdk_act_signin = /** @type {(inputs: Cmdk_Act_SigninInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`続けるにはログインしてください`)
};

/**
* | output |
* | --- |
* | "Log in to do that" |
*
* @param {Cmdk_Act_SigninInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_signin = /** @type {((inputs?: Cmdk_Act_SigninInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_SigninInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_signin(inputs)
	if (locale === "de") return de_cmdk_act_signin(inputs)
	if (locale === "fr") return fr_cmdk_act_signin(inputs)
	if (locale === "it") return it_cmdk_act_signin(inputs)
	if (locale === "nl") return nl_cmdk_act_signin(inputs)
	if (locale === "pl") return pl_cmdk_act_signin(inputs)
	if (locale === "pt") return pt_cmdk_act_signin(inputs)
	if (locale === "ru") return ru_cmdk_act_signin(inputs)
	if (locale === "sv") return sv_cmdk_act_signin(inputs)
	if (locale === "tr") return tr_cmdk_act_signin(inputs)
	if (locale === "zh") return zh_cmdk_act_signin(inputs)
	if (locale === "ja") return ja_cmdk_act_signin(inputs)
	return en_cmdk_act_signin(inputs)
});
