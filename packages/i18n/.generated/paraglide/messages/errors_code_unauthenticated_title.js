/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Unauthenticated_TitleInputs */

const en_errors_code_unauthenticated_title = /** @type {(inputs: Errors_Code_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in to continue`)
};

const es_errors_code_unauthenticated_title = /** @type {(inputs: Errors_Code_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para continuar`)
};

const de_errors_code_unauthenticated_title = /** @type {(inputs: Errors_Code_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich an, um fortzufahren`)
};

const fr_errors_code_unauthenticated_title = /** @type {(inputs: Errors_Code_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour continuer`)
};

const it_errors_code_unauthenticated_title = /** @type {(inputs: Errors_Code_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per continuare`)
};

const nl_errors_code_unauthenticated_title = /** @type {(inputs: Errors_Code_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om verder te gaan`)
};

const pl_errors_code_unauthenticated_title = /** @type {(inputs: Errors_Code_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby kontynuować`)
};

const pt_errors_code_unauthenticated_title = /** @type {(inputs: Errors_Code_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para continuar`)
};

const ru_errors_code_unauthenticated_title = /** @type {(inputs: Errors_Code_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы продолжить`)
};

const sv_errors_code_unauthenticated_title = /** @type {(inputs: Errors_Code_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att fortsätta`)
};

const tr_errors_code_unauthenticated_title = /** @type {(inputs: Errors_Code_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devam etmek için giriş yap`)
};

const zh_errors_code_unauthenticated_title = /** @type {(inputs: Errors_Code_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后继续`)
};

const ja_errors_code_unauthenticated_title = /** @type {(inputs: Errors_Code_Unauthenticated_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`続けるにはログインしてください`)
};

/**
* | output |
* | --- |
* | "Log in to continue" |
*
* @param {Errors_Code_Unauthenticated_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_unauthenticated_title = /** @type {((inputs?: Errors_Code_Unauthenticated_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Unauthenticated_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_unauthenticated_title(inputs)
	if (locale === "de") return de_errors_code_unauthenticated_title(inputs)
	if (locale === "fr") return fr_errors_code_unauthenticated_title(inputs)
	if (locale === "it") return it_errors_code_unauthenticated_title(inputs)
	if (locale === "nl") return nl_errors_code_unauthenticated_title(inputs)
	if (locale === "pl") return pl_errors_code_unauthenticated_title(inputs)
	if (locale === "pt") return pt_errors_code_unauthenticated_title(inputs)
	if (locale === "ru") return ru_errors_code_unauthenticated_title(inputs)
	if (locale === "sv") return sv_errors_code_unauthenticated_title(inputs)
	if (locale === "tr") return tr_errors_code_unauthenticated_title(inputs)
	if (locale === "zh") return zh_errors_code_unauthenticated_title(inputs)
	if (locale === "ja") return ja_errors_code_unauthenticated_title(inputs)
	return en_errors_code_unauthenticated_title(inputs)
});
