/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Security_HintInputs */

const en_settings_security_hint = /** @type {(inputs: Settings_Security_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Where you are signed in, and signing out other devices.`)
};

const es_settings_security_hint = /** @type {(inputs: Settings_Security_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dónde tienes la sesión iniciada y cerrar sesión en otros dispositivos.`)
};

const de_settings_security_hint = /** @type {(inputs: Settings_Security_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wo du angemeldet bist, und andere Geräte abmelden.`)
};

const fr_settings_security_hint = /** @type {(inputs: Settings_Security_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Où vous êtes connecté, et déconnexion des autres appareils.`)
};

const it_settings_security_hint = /** @type {(inputs: Settings_Security_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dove hai effettuato l’accesso e disconnessione degli altri dispositivi.`)
};

const nl_settings_security_hint = /** @type {(inputs: Settings_Security_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waar je bent ingelogd, en andere apparaten uitloggen.`)
};

const pl_settings_security_hint = /** @type {(inputs: Settings_Security_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gdzie jesteś zalogowany i wylogowywanie innych urządzeń.`)
};

const pt_settings_security_hint = /** @type {(inputs: Settings_Security_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onde você está conectado e como sair de outros dispositivos.`)
};

const ru_settings_security_hint = /** @type {(inputs: Settings_Security_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Где выполнен вход и выход на других устройствах.`)
};

const sv_settings_security_hint = /** @type {(inputs: Settings_Security_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Var du är inloggad, och utloggning av andra enheter.`)
};

const tr_settings_security_hint = /** @type {(inputs: Settings_Security_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nerede oturum açık olduğu ve diğer cihazlardan çıkış.`)
};

const zh_settings_security_hint = /** @type {(inputs: Settings_Security_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你在哪里登录，以及退出其他设备。`)
};

const ja_settings_security_hint = /** @type {(inputs: Settings_Security_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン中の場所と、他のデバイスからのログアウト。`)
};

/**
* | output |
* | --- |
* | "Where you are signed in, and signing out other devices." |
*
* @param {Settings_Security_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_security_hint = /** @type {((inputs?: Settings_Security_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Security_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_security_hint(inputs)
	if (locale === "de") return de_settings_security_hint(inputs)
	if (locale === "fr") return fr_settings_security_hint(inputs)
	if (locale === "it") return it_settings_security_hint(inputs)
	if (locale === "nl") return nl_settings_security_hint(inputs)
	if (locale === "pl") return pl_settings_security_hint(inputs)
	if (locale === "pt") return pt_settings_security_hint(inputs)
	if (locale === "ru") return ru_settings_security_hint(inputs)
	if (locale === "sv") return sv_settings_security_hint(inputs)
	if (locale === "tr") return tr_settings_security_hint(inputs)
	if (locale === "zh") return zh_settings_security_hint(inputs)
	if (locale === "ja") return ja_settings_security_hint(inputs)
	return en_settings_security_hint(inputs)
});
