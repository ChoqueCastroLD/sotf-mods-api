/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Codes_TitleInputs */

const en_settings_2fa_codes_title = /** @type {(inputs: Settings_2fa_Codes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save your recovery codes`)
};

const es_settings_2fa_codes_title = /** @type {(inputs: Settings_2fa_Codes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guarda tus códigos de recuperación`)
};

const de_settings_2fa_codes_title = /** @type {(inputs: Settings_2fa_Codes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speichere deine Wiederherstellungscodes`)
};

const fr_settings_2fa_codes_title = /** @type {(inputs: Settings_2fa_Codes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrez vos codes de récupération`)
};

const it_settings_2fa_codes_title = /** @type {(inputs: Settings_2fa_Codes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva i tuoi codici di recupero`)
};

const nl_settings_2fa_codes_title = /** @type {(inputs: Settings_2fa_Codes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewaar je herstelcodes`)
};

const pl_settings_2fa_codes_title = /** @type {(inputs: Settings_2fa_Codes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz swoje kody odzyskiwania`)
};

const pt_settings_2fa_codes_title = /** @type {(inputs: Settings_2fa_Codes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guarde seus códigos de recuperação`)
};

const ru_settings_2fa_codes_title = /** @type {(inputs: Settings_2fa_Codes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохраните коды восстановления`)
};

const sv_settings_2fa_codes_title = /** @type {(inputs: Settings_2fa_Codes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara dina återställningskoder`)
};

const tr_settings_2fa_codes_title = /** @type {(inputs: Settings_2fa_Codes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurtarma kodlarını kaydet`)
};

const zh_settings_2fa_codes_title = /** @type {(inputs: Settings_2fa_Codes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存你的恢复码`)
};

const ja_settings_2fa_codes_title = /** @type {(inputs: Settings_2fa_Codes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リカバリーコードを保存`)
};

/**
* | output |
* | --- |
* | "Save your recovery codes" |
*
* @param {Settings_2fa_Codes_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_codes_title = /** @type {((inputs?: Settings_2fa_Codes_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Codes_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_codes_title(inputs)
	if (locale === "de") return de_settings_2fa_codes_title(inputs)
	if (locale === "fr") return fr_settings_2fa_codes_title(inputs)
	if (locale === "it") return it_settings_2fa_codes_title(inputs)
	if (locale === "nl") return nl_settings_2fa_codes_title(inputs)
	if (locale === "pl") return pl_settings_2fa_codes_title(inputs)
	if (locale === "pt") return pt_settings_2fa_codes_title(inputs)
	if (locale === "ru") return ru_settings_2fa_codes_title(inputs)
	if (locale === "sv") return sv_settings_2fa_codes_title(inputs)
	if (locale === "tr") return tr_settings_2fa_codes_title(inputs)
	if (locale === "zh") return zh_settings_2fa_codes_title(inputs)
	if (locale === "ja") return ja_settings_2fa_codes_title(inputs)
	return en_settings_2fa_codes_title(inputs)
});
