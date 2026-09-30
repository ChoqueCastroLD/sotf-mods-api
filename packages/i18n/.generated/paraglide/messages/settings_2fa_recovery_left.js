/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Settings_2fa_Recovery_LeftInputs */

const en_settings_2fa_recovery_left = /** @type {(inputs: Settings_2fa_Recovery_LeftInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Recovery codes left: ${i?.count}`)
};

const es_settings_2fa_recovery_left = /** @type {(inputs: Settings_2fa_Recovery_LeftInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Códigos de recuperación restantes: ${i?.count}`)
};

const de_settings_2fa_recovery_left = /** @type {(inputs: Settings_2fa_Recovery_LeftInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verbleibende Wiederherstellungscodes: ${i?.count}`)
};

const fr_settings_2fa_recovery_left = /** @type {(inputs: Settings_2fa_Recovery_LeftInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Codes de récupération restants : ${i?.count}`)
};

const it_settings_2fa_recovery_left = /** @type {(inputs: Settings_2fa_Recovery_LeftInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Codici di recupero rimasti: ${i?.count}`)
};

const nl_settings_2fa_recovery_left = /** @type {(inputs: Settings_2fa_Recovery_LeftInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resterende herstelcodes: ${i?.count}`)
};

const pl_settings_2fa_recovery_left = /** @type {(inputs: Settings_2fa_Recovery_LeftInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pozostałe kody odzyskiwania: ${i?.count}`)
};

const pt_settings_2fa_recovery_left = /** @type {(inputs: Settings_2fa_Recovery_LeftInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Códigos de recuperação restantes: ${i?.count}`)
};

const ru_settings_2fa_recovery_left = /** @type {(inputs: Settings_2fa_Recovery_LeftInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Осталось кодов восстановления: ${i?.count}`)
};

const sv_settings_2fa_recovery_left = /** @type {(inputs: Settings_2fa_Recovery_LeftInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Återställningskoder kvar: ${i?.count}`)
};

const tr_settings_2fa_recovery_left = /** @type {(inputs: Settings_2fa_Recovery_LeftInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kalan kurtarma kodları: ${i?.count}`)
};

const zh_settings_2fa_recovery_left = /** @type {(inputs: Settings_2fa_Recovery_LeftInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`剩余恢复码：${i?.count}`)
};

const ja_settings_2fa_recovery_left = /** @type {(inputs: Settings_2fa_Recovery_LeftInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`残りのリカバリーコード：${i?.count}`)
};

/**
* | output |
* | --- |
* | "Recovery codes left: {count}" |
*
* @param {Settings_2fa_Recovery_LeftInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_recovery_left = /** @type {((inputs: Settings_2fa_Recovery_LeftInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Recovery_LeftInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_recovery_left(inputs)
	if (locale === "de") return de_settings_2fa_recovery_left(inputs)
	if (locale === "fr") return fr_settings_2fa_recovery_left(inputs)
	if (locale === "it") return it_settings_2fa_recovery_left(inputs)
	if (locale === "nl") return nl_settings_2fa_recovery_left(inputs)
	if (locale === "pl") return pl_settings_2fa_recovery_left(inputs)
	if (locale === "pt") return pt_settings_2fa_recovery_left(inputs)
	if (locale === "ru") return ru_settings_2fa_recovery_left(inputs)
	if (locale === "sv") return sv_settings_2fa_recovery_left(inputs)
	if (locale === "tr") return tr_settings_2fa_recovery_left(inputs)
	if (locale === "zh") return zh_settings_2fa_recovery_left(inputs)
	if (locale === "ja") return ja_settings_2fa_recovery_left(inputs)
	return en_settings_2fa_recovery_left(inputs)
});
