/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_RegenerateInputs */

const en_settings_2fa_regenerate = /** @type {(inputs: Settings_2fa_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get new recovery codes`)
};

const es_settings_2fa_regenerate = /** @type {(inputs: Settings_2fa_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obtener nuevos códigos de recuperación`)
};

const de_settings_2fa_regenerate = /** @type {(inputs: Settings_2fa_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Wiederherstellungscodes erzeugen`)
};

const fr_settings_2fa_regenerate = /** @type {(inputs: Settings_2fa_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obtenir de nouveaux codes de récupération`)
};

const it_settings_2fa_regenerate = /** @type {(inputs: Settings_2fa_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ottieni nuovi codici di recupero`)
};

const nl_settings_2fa_regenerate = /** @type {(inputs: Settings_2fa_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe herstelcodes aanmaken`)
};

const pl_settings_2fa_regenerate = /** @type {(inputs: Settings_2fa_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wygeneruj nowe kody odzyskiwania`)
};

const pt_settings_2fa_regenerate = /** @type {(inputs: Settings_2fa_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerar novos códigos de recuperação`)
};

const ru_settings_2fa_regenerate = /** @type {(inputs: Settings_2fa_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Получить новые коды восстановления`)
};

const sv_settings_2fa_regenerate = /** @type {(inputs: Settings_2fa_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaffa nya återställningskoder`)
};

const tr_settings_2fa_regenerate = /** @type {(inputs: Settings_2fa_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni kurtarma kodları al`)
};

const zh_settings_2fa_regenerate = /** @type {(inputs: Settings_2fa_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取新的恢复码`)
};

const ja_settings_2fa_regenerate = /** @type {(inputs: Settings_2fa_RegenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいリカバリーコードを取得`)
};

/**
* | output |
* | --- |
* | "Get new recovery codes" |
*
* @param {Settings_2fa_RegenerateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_regenerate = /** @type {((inputs?: Settings_2fa_RegenerateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_RegenerateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_regenerate(inputs)
	if (locale === "de") return de_settings_2fa_regenerate(inputs)
	if (locale === "fr") return fr_settings_2fa_regenerate(inputs)
	if (locale === "it") return it_settings_2fa_regenerate(inputs)
	if (locale === "nl") return nl_settings_2fa_regenerate(inputs)
	if (locale === "pl") return pl_settings_2fa_regenerate(inputs)
	if (locale === "pt") return pt_settings_2fa_regenerate(inputs)
	if (locale === "ru") return ru_settings_2fa_regenerate(inputs)
	if (locale === "sv") return sv_settings_2fa_regenerate(inputs)
	if (locale === "tr") return tr_settings_2fa_regenerate(inputs)
	if (locale === "zh") return zh_settings_2fa_regenerate(inputs)
	if (locale === "ja") return ja_settings_2fa_regenerate(inputs)
	return en_settings_2fa_regenerate(inputs)
});
