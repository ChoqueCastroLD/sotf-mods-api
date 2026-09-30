/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Col_AppInputs */

const en_settings_notif_col_app = /** @type {(inputs: Settings_Notif_Col_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In the app`)
};

const es_settings_notif_col_app = /** @type {(inputs: Settings_Notif_Col_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En la app`)
};

const de_settings_notif_col_app = /** @type {(inputs: Settings_Notif_Col_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In der App`)
};

const fr_settings_notif_col_app = /** @type {(inputs: Settings_Notif_Col_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dans l’appli`)
};

const it_settings_notif_col_app = /** @type {(inputs: Settings_Notif_Col_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nell’app`)
};

const nl_settings_notif_col_app = /** @type {(inputs: Settings_Notif_Col_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In de app`)
};

const pl_settings_notif_col_app = /** @type {(inputs: Settings_Notif_Col_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W aplikacji`)
};

const pt_settings_notif_col_app = /** @type {(inputs: Settings_Notif_Col_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No app`)
};

const ru_settings_notif_col_app = /** @type {(inputs: Settings_Notif_Col_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В приложении`)
};

const sv_settings_notif_col_app = /** @type {(inputs: Settings_Notif_Col_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I appen`)
};

const tr_settings_notif_col_app = /** @type {(inputs: Settings_Notif_Col_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uygulamada`)
};

const zh_settings_notif_col_app = /** @type {(inputs: Settings_Notif_Col_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用内`)
};

const ja_settings_notif_col_app = /** @type {(inputs: Settings_Notif_Col_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アプリ内`)
};

/**
* | output |
* | --- |
* | "In the app" |
*
* @param {Settings_Notif_Col_AppInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_col_app = /** @type {((inputs?: Settings_Notif_Col_AppInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Col_AppInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_col_app(inputs)
	if (locale === "de") return de_settings_notif_col_app(inputs)
	if (locale === "fr") return fr_settings_notif_col_app(inputs)
	if (locale === "it") return it_settings_notif_col_app(inputs)
	if (locale === "nl") return nl_settings_notif_col_app(inputs)
	if (locale === "pl") return pl_settings_notif_col_app(inputs)
	if (locale === "pt") return pt_settings_notif_col_app(inputs)
	if (locale === "ru") return ru_settings_notif_col_app(inputs)
	if (locale === "sv") return sv_settings_notif_col_app(inputs)
	if (locale === "tr") return tr_settings_notif_col_app(inputs)
	if (locale === "zh") return zh_settings_notif_col_app(inputs)
	if (locale === "ja") return ja_settings_notif_col_app(inputs)
	return en_settings_notif_col_app(inputs)
});
