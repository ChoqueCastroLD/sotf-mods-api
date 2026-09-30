/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Security_Tip_SessionsInputs */

const en_settings_security_tip_sessions = /** @type {(inputs: Settings_Security_Tip_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign out of shared or public computers when you’re done.`)
};

const es_settings_security_tip_sessions = /** @type {(inputs: Settings_Security_Tip_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cierra la sesión en ordenadores compartidos o públicos al terminar.`)
};

const de_settings_security_tip_sessions = /** @type {(inputs: Settings_Security_Tip_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich an geteilten oder öffentlichen Computern ab, wenn du fertig bist.`)
};

const fr_settings_security_tip_sessions = /** @type {(inputs: Settings_Security_Tip_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déconnectez-vous des ordinateurs partagés ou publics quand vous avez fini.`)
};

const it_settings_security_tip_sessions = /** @type {(inputs: Settings_Security_Tip_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esci dai computer condivisi o pubblici quando hai finito.`)
};

const nl_settings_security_tip_sessions = /** @type {(inputs: Settings_Security_Tip_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log uit op gedeelde of openbare computers als je klaar bent.`)
};

const pl_settings_security_tip_sessions = /** @type {(inputs: Settings_Security_Tip_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wylogowuj się z komputerów wspólnych lub publicznych, gdy skończysz.`)
};

const pt_settings_security_tip_sessions = /** @type {(inputs: Settings_Security_Tip_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saia de computadores compartilhados ou públicos quando terminar.`)
};

const ru_settings_security_tip_sessions = /** @type {(inputs: Settings_Security_Tip_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выходите из аккаунта на общих и публичных компьютерах.`)
};

const sv_settings_security_tip_sessions = /** @type {(inputs: Settings_Security_Tip_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut från delade eller offentliga datorer när du är klar.`)
};

const tr_settings_security_tip_sessions = /** @type {(inputs: Settings_Security_Tip_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortak ya da herkese açık bilgisayarlarda işin bitince çıkış yap.`)
};

const zh_settings_security_tip_sessions = /** @type {(inputs: Settings_Security_Tip_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在共享或公共电脑上用完后请退出登录。`)
};

const ja_settings_security_tip_sessions = /** @type {(inputs: Settings_Security_Tip_SessionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共用・公共のコンピューターでは使い終わったらログアウトしましょう。`)
};

/**
* | output |
* | --- |
* | "Sign out of shared or public computers when you’re done." |
*
* @param {Settings_Security_Tip_SessionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_security_tip_sessions = /** @type {((inputs?: Settings_Security_Tip_SessionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Security_Tip_SessionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_security_tip_sessions(inputs)
	if (locale === "de") return de_settings_security_tip_sessions(inputs)
	if (locale === "fr") return fr_settings_security_tip_sessions(inputs)
	if (locale === "it") return it_settings_security_tip_sessions(inputs)
	if (locale === "nl") return nl_settings_security_tip_sessions(inputs)
	if (locale === "pl") return pl_settings_security_tip_sessions(inputs)
	if (locale === "pt") return pt_settings_security_tip_sessions(inputs)
	if (locale === "ru") return ru_settings_security_tip_sessions(inputs)
	if (locale === "sv") return sv_settings_security_tip_sessions(inputs)
	if (locale === "tr") return tr_settings_security_tip_sessions(inputs)
	if (locale === "zh") return zh_settings_security_tip_sessions(inputs)
	if (locale === "ja") return ja_settings_security_tip_sessions(inputs)
	return en_settings_security_tip_sessions(inputs)
});
