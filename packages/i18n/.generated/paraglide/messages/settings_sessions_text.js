/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Sessions_TextInputs */

const en_settings_sessions_text = /** @type {(inputs: Settings_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every browser and device with an active session. Log out of any you don’t recognise.`)
};

const es_settings_sessions_text = /** @type {(inputs: Settings_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada navegador y dispositivo con una sesión activa. Cierra la sesión en los que no reconozcas.`)
};

const de_settings_sessions_text = /** @type {(inputs: Settings_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Browser und jedes Gerät mit einer aktiven Sitzung. Melde alle ab, die du nicht kennst.`)
};

const fr_settings_sessions_text = /** @type {(inputs: Settings_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque navigateur et appareil avec une session active. Déconnectez ceux que vous ne reconnaissez pas.`)
};

const it_settings_sessions_text = /** @type {(inputs: Settings_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni browser e dispositivo con una sessione attiva. Disconnetti quelli che non riconosci.`)
};

const nl_settings_sessions_text = /** @type {(inputs: Settings_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke browser en elk apparaat met een actieve sessie. Log de sessies uit die je niet herkent.`)
};

const pl_settings_sessions_text = /** @type {(inputs: Settings_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każda przeglądarka i urządzenie z aktywną sesją. Wyloguj te, których nie rozpoznajesz.`)
};

const pt_settings_sessions_text = /** @type {(inputs: Settings_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada navegador e dispositivo com uma sessão ativa. Encerre os que você não reconhece.`)
};

const ru_settings_sessions_text = /** @type {(inputs: Settings_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все браузеры и устройства с активной сессией. Завершите те, которые не узнаёте.`)
};

const sv_settings_sessions_text = /** @type {(inputs: Settings_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje webbläsare och enhet med en aktiv session. Logga ut dem du inte känner igen.`)
};

const tr_settings_sessions_text = /** @type {(inputs: Settings_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etkin oturumu olan her tarayıcı ve cihaz. Tanımadıklarından çıkış yap.`)
};

const zh_settings_sessions_text = /** @type {(inputs: Settings_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有有活跃会话的浏览器和设备。退出你不认识的会话。`)
};

const ja_settings_sessions_text = /** @type {(inputs: Settings_Sessions_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクティブなセッションがあるすべてのブラウザーとデバイス。心当たりのないものはログアウトしてください。`)
};

/**
* | output |
* | --- |
* | "Every browser and device with an active session. Log out of any you don’t recognise." |
*
* @param {Settings_Sessions_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_text = /** @type {((inputs?: Settings_Sessions_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_text(inputs)
	if (locale === "de") return de_settings_sessions_text(inputs)
	if (locale === "fr") return fr_settings_sessions_text(inputs)
	if (locale === "it") return it_settings_sessions_text(inputs)
	if (locale === "nl") return nl_settings_sessions_text(inputs)
	if (locale === "pl") return pl_settings_sessions_text(inputs)
	if (locale === "pt") return pt_settings_sessions_text(inputs)
	if (locale === "ru") return ru_settings_sessions_text(inputs)
	if (locale === "sv") return sv_settings_sessions_text(inputs)
	if (locale === "tr") return tr_settings_sessions_text(inputs)
	if (locale === "zh") return zh_settings_sessions_text(inputs)
	if (locale === "ja") return ja_settings_sessions_text(inputs)
	return en_settings_sessions_text(inputs)
});
