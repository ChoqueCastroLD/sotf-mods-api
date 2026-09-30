/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_TitleInputs */

const en_settings_2fa_title = /** @type {(inputs: Settings_2fa_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Two-step verification`)
};

const es_settings_2fa_title = /** @type {(inputs: Settings_2fa_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificación en dos pasos`)
};

const de_settings_2fa_title = /** @type {(inputs: Settings_2fa_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätigung in zwei Schritten`)
};

const fr_settings_2fa_title = /** @type {(inputs: Settings_2fa_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérification en deux étapes`)
};

const it_settings_2fa_title = /** @type {(inputs: Settings_2fa_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica in due passaggi`)
};

const nl_settings_2fa_title = /** @type {(inputs: Settings_2fa_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificatie in twee stappen`)
};

const pl_settings_2fa_title = /** @type {(inputs: Settings_2fa_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weryfikacja dwuetapowa`)
};

const pt_settings_2fa_title = /** @type {(inputs: Settings_2fa_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificação em duas etapas`)
};

const ru_settings_2fa_title = /** @type {(inputs: Settings_2fa_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Двухэтапная проверка`)
};

const sv_settings_2fa_title = /** @type {(inputs: Settings_2fa_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tvåstegsverifiering`)
};

const tr_settings_2fa_title = /** @type {(inputs: Settings_2fa_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İki adımlı doğrulama`)
};

const zh_settings_2fa_title = /** @type {(inputs: Settings_2fa_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`两步验证`)
};

const ja_settings_2fa_title = /** @type {(inputs: Settings_2fa_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2段階認証`)
};

/**
* | output |
* | --- |
* | "Two-step verification" |
*
* @param {Settings_2fa_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_title = /** @type {((inputs?: Settings_2fa_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_title(inputs)
	if (locale === "de") return de_settings_2fa_title(inputs)
	if (locale === "fr") return fr_settings_2fa_title(inputs)
	if (locale === "it") return it_settings_2fa_title(inputs)
	if (locale === "nl") return nl_settings_2fa_title(inputs)
	if (locale === "pl") return pl_settings_2fa_title(inputs)
	if (locale === "pt") return pt_settings_2fa_title(inputs)
	if (locale === "ru") return ru_settings_2fa_title(inputs)
	if (locale === "sv") return sv_settings_2fa_title(inputs)
	if (locale === "tr") return tr_settings_2fa_title(inputs)
	if (locale === "zh") return zh_settings_2fa_title(inputs)
	if (locale === "ja") return ja_settings_2fa_title(inputs)
	return en_settings_2fa_title(inputs)
});
