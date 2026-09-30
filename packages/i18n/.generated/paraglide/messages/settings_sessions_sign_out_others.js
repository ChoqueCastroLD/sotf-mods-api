/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Sessions_Sign_Out_OthersInputs */

const en_settings_sessions_sign_out_others = /** @type {(inputs: Settings_Sessions_Sign_Out_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign out everywhere else`)
};

const es_settings_sessions_sign_out_others = /** @type {(inputs: Settings_Sessions_Sign_Out_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar sesión en todos los demás`)
};

const de_settings_sessions_sign_out_others = /** @type {(inputs: Settings_Sessions_Sign_Out_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Überall sonst abmelden`)
};

const fr_settings_sessions_sign_out_others = /** @type {(inputs: Settings_Sessions_Sign_Out_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se déconnecter partout ailleurs`)
};

const it_settings_sessions_sign_out_others = /** @type {(inputs: Settings_Sessions_Sign_Out_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esci da tutti gli altri`)
};

const nl_settings_sessions_sign_out_others = /** @type {(inputs: Settings_Sessions_Sign_Out_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overal elders uitloggen`)
};

const pl_settings_sessions_sign_out_others = /** @type {(inputs: Settings_Sessions_Sign_Out_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyloguj wszędzie indziej`)
};

const pt_settings_sessions_sign_out_others = /** @type {(inputs: Settings_Sessions_Sign_Out_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair de todos os outros`)
};

const ru_settings_sessions_sign_out_others = /** @type {(inputs: Settings_Sessions_Sign_Out_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти на всех остальных`)
};

const sv_settings_sessions_sign_out_others = /** @type {(inputs: Settings_Sessions_Sign_Out_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut överallt annars`)
};

const tr_settings_sessions_sign_out_others = /** @type {(inputs: Settings_Sessions_Sign_Out_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer her yerden çıkış yap`)
};

const zh_settings_sessions_sign_out_others = /** @type {(inputs: Settings_Sessions_Sign_Out_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退出其他所有设备`)
};

const ja_settings_sessions_sign_out_others = /** @type {(inputs: Settings_Sessions_Sign_Out_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`他のすべてからログアウト`)
};

/**
* | output |
* | --- |
* | "Sign out everywhere else" |
*
* @param {Settings_Sessions_Sign_Out_OthersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_sign_out_others = /** @type {((inputs?: Settings_Sessions_Sign_Out_OthersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Sign_Out_OthersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_sign_out_others(inputs)
	if (locale === "de") return de_settings_sessions_sign_out_others(inputs)
	if (locale === "fr") return fr_settings_sessions_sign_out_others(inputs)
	if (locale === "it") return it_settings_sessions_sign_out_others(inputs)
	if (locale === "nl") return nl_settings_sessions_sign_out_others(inputs)
	if (locale === "pl") return pl_settings_sessions_sign_out_others(inputs)
	if (locale === "pt") return pt_settings_sessions_sign_out_others(inputs)
	if (locale === "ru") return ru_settings_sessions_sign_out_others(inputs)
	if (locale === "sv") return sv_settings_sessions_sign_out_others(inputs)
	if (locale === "tr") return tr_settings_sessions_sign_out_others(inputs)
	if (locale === "zh") return zh_settings_sessions_sign_out_others(inputs)
	if (locale === "ja") return ja_settings_sessions_sign_out_others(inputs)
	return en_settings_sessions_sign_out_others(inputs)
});
