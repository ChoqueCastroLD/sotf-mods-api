/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Sessions_Sign_Out_HereInputs */

const en_settings_sessions_sign_out_here = /** @type {(inputs: Settings_Sessions_Sign_Out_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign out here`)
};

const es_settings_sessions_sign_out_here = /** @type {(inputs: Settings_Sessions_Sign_Out_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar sesión aquí`)
};

const de_settings_sessions_sign_out_here = /** @type {(inputs: Settings_Sessions_Sign_Out_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier abmelden`)
};

const fr_settings_sessions_sign_out_here = /** @type {(inputs: Settings_Sessions_Sign_Out_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se déconnecter ici`)
};

const it_settings_sessions_sign_out_here = /** @type {(inputs: Settings_Sessions_Sign_Out_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esci da qui`)
};

const nl_settings_sessions_sign_out_here = /** @type {(inputs: Settings_Sessions_Sign_Out_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier uitloggen`)
};

const pl_settings_sessions_sign_out_here = /** @type {(inputs: Settings_Sessions_Sign_Out_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyloguj tutaj`)
};

const pt_settings_sessions_sign_out_here = /** @type {(inputs: Settings_Sessions_Sign_Out_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair daqui`)
};

const ru_settings_sessions_sign_out_here = /** @type {(inputs: Settings_Sessions_Sign_Out_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти здесь`)
};

const sv_settings_sessions_sign_out_here = /** @type {(inputs: Settings_Sessions_Sign_Out_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut här`)
};

const tr_settings_sessions_sign_out_here = /** @type {(inputs: Settings_Sessions_Sign_Out_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Burada çıkış yap`)
};

const zh_settings_sessions_sign_out_here = /** @type {(inputs: Settings_Sessions_Sign_Out_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在此退出`)
};

const ja_settings_sessions_sign_out_here = /** @type {(inputs: Settings_Sessions_Sign_Out_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここでログアウト`)
};

/**
* | output |
* | --- |
* | "Sign out here" |
*
* @param {Settings_Sessions_Sign_Out_HereInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_sign_out_here = /** @type {((inputs?: Settings_Sessions_Sign_Out_HereInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Sign_Out_HereInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_sign_out_here(inputs)
	if (locale === "de") return de_settings_sessions_sign_out_here(inputs)
	if (locale === "fr") return fr_settings_sessions_sign_out_here(inputs)
	if (locale === "it") return it_settings_sessions_sign_out_here(inputs)
	if (locale === "nl") return nl_settings_sessions_sign_out_here(inputs)
	if (locale === "pl") return pl_settings_sessions_sign_out_here(inputs)
	if (locale === "pt") return pt_settings_sessions_sign_out_here(inputs)
	if (locale === "ru") return ru_settings_sessions_sign_out_here(inputs)
	if (locale === "sv") return sv_settings_sessions_sign_out_here(inputs)
	if (locale === "tr") return tr_settings_sessions_sign_out_here(inputs)
	if (locale === "zh") return zh_settings_sessions_sign_out_here(inputs)
	if (locale === "ja") return ja_settings_sessions_sign_out_here(inputs)
	return en_settings_sessions_sign_out_here(inputs)
});
