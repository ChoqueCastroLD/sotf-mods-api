/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ device: NonNullable<unknown> }} Settings_Sessions_Confirm_TextInputs */

const en_settings_sessions_confirm_text = /** @type {(inputs: Settings_Sessions_Confirm_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} will need to sign in again.`)
};

const es_settings_sessions_confirm_text = /** @type {(inputs: Settings_Sessions_Confirm_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} tendrá que volver a iniciar sesión.`)
};

const de_settings_sessions_confirm_text = /** @type {(inputs: Settings_Sessions_Confirm_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} muss sich erneut anmelden.`)
};

const fr_settings_sessions_confirm_text = /** @type {(inputs: Settings_Sessions_Confirm_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} devra se reconnecter.`)
};

const it_settings_sessions_confirm_text = /** @type {(inputs: Settings_Sessions_Confirm_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} dovrà accedere di nuovo.`)
};

const nl_settings_sessions_confirm_text = /** @type {(inputs: Settings_Sessions_Confirm_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} moet opnieuw inloggen.`)
};

const pl_settings_sessions_confirm_text = /** @type {(inputs: Settings_Sessions_Confirm_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} będzie musiało zalogować się ponownie.`)
};

const pt_settings_sessions_confirm_text = /** @type {(inputs: Settings_Sessions_Confirm_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} vai precisar entrar de novo.`)
};

const ru_settings_sessions_confirm_text = /** @type {(inputs: Settings_Sessions_Confirm_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`На устройстве «${i?.device}» потребуется войти снова.`)
};

const sv_settings_sessions_confirm_text = /** @type {(inputs: Settings_Sessions_Confirm_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} måste logga in igen.`)
};

const tr_settings_sessions_confirm_text = /** @type {(inputs: Settings_Sessions_Confirm_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} yeniden giriş yapmak zorunda kalacak.`)
};

const zh_settings_sessions_confirm_text = /** @type {(inputs: Settings_Sessions_Confirm_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} 需要重新登录。`)
};

const ja_settings_sessions_confirm_text = /** @type {(inputs: Settings_Sessions_Confirm_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.device} は再ログインが必要になります。`)
};

/**
* | output |
* | --- |
* | "{device} will need to sign in again." |
*
* @param {Settings_Sessions_Confirm_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_confirm_text = /** @type {((inputs: Settings_Sessions_Confirm_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Confirm_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_confirm_text(inputs)
	if (locale === "de") return de_settings_sessions_confirm_text(inputs)
	if (locale === "fr") return fr_settings_sessions_confirm_text(inputs)
	if (locale === "it") return it_settings_sessions_confirm_text(inputs)
	if (locale === "nl") return nl_settings_sessions_confirm_text(inputs)
	if (locale === "pl") return pl_settings_sessions_confirm_text(inputs)
	if (locale === "pt") return pt_settings_sessions_confirm_text(inputs)
	if (locale === "ru") return ru_settings_sessions_confirm_text(inputs)
	if (locale === "sv") return sv_settings_sessions_confirm_text(inputs)
	if (locale === "tr") return tr_settings_sessions_confirm_text(inputs)
	if (locale === "zh") return zh_settings_sessions_confirm_text(inputs)
	if (locale === "ja") return ja_settings_sessions_confirm_text(inputs)
	return en_settings_sessions_confirm_text(inputs)
});
