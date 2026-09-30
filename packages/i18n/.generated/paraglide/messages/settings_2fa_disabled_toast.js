/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Disabled_ToastInputs */

const en_settings_2fa_disabled_toast = /** @type {(inputs: Settings_2fa_Disabled_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Two-step verification is off.`)
};

const es_settings_2fa_disabled_toast = /** @type {(inputs: Settings_2fa_Disabled_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La verificación en dos pasos está desactivada.`)
};

const de_settings_2fa_disabled_toast = /** @type {(inputs: Settings_2fa_Disabled_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Bestätigung in zwei Schritten ist deaktiviert.`)
};

const fr_settings_2fa_disabled_toast = /** @type {(inputs: Settings_2fa_Disabled_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La vérification en deux étapes est désactivée.`)
};

const it_settings_2fa_disabled_toast = /** @type {(inputs: Settings_2fa_Disabled_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La verifica in due passaggi è disattivata.`)
};

const nl_settings_2fa_disabled_toast = /** @type {(inputs: Settings_2fa_Disabled_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificatie in twee stappen staat uit.`)
};

const pl_settings_2fa_disabled_toast = /** @type {(inputs: Settings_2fa_Disabled_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weryfikacja dwuetapowa jest wyłączona.`)
};

const pt_settings_2fa_disabled_toast = /** @type {(inputs: Settings_2fa_Disabled_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A verificação em duas etapas está desativada.`)
};

const ru_settings_2fa_disabled_toast = /** @type {(inputs: Settings_2fa_Disabled_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Двухэтапная проверка выключена.`)
};

const sv_settings_2fa_disabled_toast = /** @type {(inputs: Settings_2fa_Disabled_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tvåstegsverifiering är av.`)
};

const tr_settings_2fa_disabled_toast = /** @type {(inputs: Settings_2fa_Disabled_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İki adımlı doğrulama kapalı.`)
};

const zh_settings_2fa_disabled_toast = /** @type {(inputs: Settings_2fa_Disabled_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`两步验证已关闭。`)
};

const ja_settings_2fa_disabled_toast = /** @type {(inputs: Settings_2fa_Disabled_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2段階認証をオフにしました。`)
};

/**
* | output |
* | --- |
* | "Two-step verification is off." |
*
* @param {Settings_2fa_Disabled_ToastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_disabled_toast = /** @type {((inputs?: Settings_2fa_Disabled_ToastInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Disabled_ToastInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_disabled_toast(inputs)
	if (locale === "de") return de_settings_2fa_disabled_toast(inputs)
	if (locale === "fr") return fr_settings_2fa_disabled_toast(inputs)
	if (locale === "it") return it_settings_2fa_disabled_toast(inputs)
	if (locale === "nl") return nl_settings_2fa_disabled_toast(inputs)
	if (locale === "pl") return pl_settings_2fa_disabled_toast(inputs)
	if (locale === "pt") return pt_settings_2fa_disabled_toast(inputs)
	if (locale === "ru") return ru_settings_2fa_disabled_toast(inputs)
	if (locale === "sv") return sv_settings_2fa_disabled_toast(inputs)
	if (locale === "tr") return tr_settings_2fa_disabled_toast(inputs)
	if (locale === "zh") return zh_settings_2fa_disabled_toast(inputs)
	if (locale === "ja") return ja_settings_2fa_disabled_toast(inputs)
	return en_settings_2fa_disabled_toast(inputs)
});
