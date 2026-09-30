/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Codes_CopiedInputs */

const en_settings_2fa_codes_copied = /** @type {(inputs: Settings_2fa_Codes_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recovery codes copied.`)
};

const es_settings_2fa_codes_copied = /** @type {(inputs: Settings_2fa_Codes_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Códigos de recuperación copiados.`)
};

const de_settings_2fa_codes_copied = /** @type {(inputs: Settings_2fa_Codes_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiederherstellungscodes kopiert.`)
};

const fr_settings_2fa_codes_copied = /** @type {(inputs: Settings_2fa_Codes_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codes de récupération copiés.`)
};

const it_settings_2fa_codes_copied = /** @type {(inputs: Settings_2fa_Codes_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codici di recupero copiati.`)
};

const nl_settings_2fa_codes_copied = /** @type {(inputs: Settings_2fa_Codes_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herstelcodes gekopieerd.`)
};

const pl_settings_2fa_codes_copied = /** @type {(inputs: Settings_2fa_Codes_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiowano kody odzyskiwania.`)
};

const pt_settings_2fa_codes_copied = /** @type {(inputs: Settings_2fa_Codes_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Códigos de recuperação copiados.`)
};

const ru_settings_2fa_codes_copied = /** @type {(inputs: Settings_2fa_Codes_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Коды восстановления скопированы.`)
};

const sv_settings_2fa_codes_copied = /** @type {(inputs: Settings_2fa_Codes_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återställningskoderna kopierades.`)
};

const tr_settings_2fa_codes_copied = /** @type {(inputs: Settings_2fa_Codes_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurtarma kodları kopyalandı.`)
};

const zh_settings_2fa_codes_copied = /** @type {(inputs: Settings_2fa_Codes_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制恢复码。`)
};

const ja_settings_2fa_codes_copied = /** @type {(inputs: Settings_2fa_Codes_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リカバリーコードをコピーしました。`)
};

/**
* | output |
* | --- |
* | "Recovery codes copied." |
*
* @param {Settings_2fa_Codes_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_codes_copied = /** @type {((inputs?: Settings_2fa_Codes_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Codes_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_codes_copied(inputs)
	if (locale === "de") return de_settings_2fa_codes_copied(inputs)
	if (locale === "fr") return fr_settings_2fa_codes_copied(inputs)
	if (locale === "it") return it_settings_2fa_codes_copied(inputs)
	if (locale === "nl") return nl_settings_2fa_codes_copied(inputs)
	if (locale === "pl") return pl_settings_2fa_codes_copied(inputs)
	if (locale === "pt") return pt_settings_2fa_codes_copied(inputs)
	if (locale === "ru") return ru_settings_2fa_codes_copied(inputs)
	if (locale === "sv") return sv_settings_2fa_codes_copied(inputs)
	if (locale === "tr") return tr_settings_2fa_codes_copied(inputs)
	if (locale === "zh") return zh_settings_2fa_codes_copied(inputs)
	if (locale === "ja") return ja_settings_2fa_codes_copied(inputs)
	return en_settings_2fa_codes_copied(inputs)
});
