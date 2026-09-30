/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Settings_Passkeys_Last_UsedInputs */

const en_settings_passkeys_last_used = /** @type {(inputs: Settings_Passkeys_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Last used ${i?.when}`)
};

const es_settings_passkeys_last_used = /** @type {(inputs: Settings_Passkeys_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Último uso ${i?.when}`)
};

const de_settings_passkeys_last_used = /** @type {(inputs: Settings_Passkeys_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zuletzt verwendet ${i?.when}`)
};

const fr_settings_passkeys_last_used = /** @type {(inputs: Settings_Passkeys_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dernière utilisation ${i?.when}`)
};

const it_settings_passkeys_last_used = /** @type {(inputs: Settings_Passkeys_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ultimo utilizzo ${i?.when}`)
};

const nl_settings_passkeys_last_used = /** @type {(inputs: Settings_Passkeys_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Laatst gebruikt ${i?.when}`)
};

const pl_settings_passkeys_last_used = /** @type {(inputs: Settings_Passkeys_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ostatnio użyty ${i?.when}`)
};

const pt_settings_passkeys_last_used = /** @type {(inputs: Settings_Passkeys_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Último uso ${i?.when}`)
};

const ru_settings_passkeys_last_used = /** @type {(inputs: Settings_Passkeys_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Последнее использование ${i?.when}`)
};

const sv_settings_passkeys_last_used = /** @type {(inputs: Settings_Passkeys_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Senast använd ${i?.when}`)
};

const tr_settings_passkeys_last_used = /** @type {(inputs: Settings_Passkeys_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Son kullanım ${i?.when}`)
};

const zh_settings_passkeys_last_used = /** @type {(inputs: Settings_Passkeys_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`上次使用 ${i?.when}`)
};

const ja_settings_passkeys_last_used = /** @type {(inputs: Settings_Passkeys_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最終使用 ${i?.when}`)
};

/**
* | output |
* | --- |
* | "Last used {when}" |
*
* @param {Settings_Passkeys_Last_UsedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_last_used = /** @type {((inputs: Settings_Passkeys_Last_UsedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_Last_UsedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_last_used(inputs)
	if (locale === "de") return de_settings_passkeys_last_used(inputs)
	if (locale === "fr") return fr_settings_passkeys_last_used(inputs)
	if (locale === "it") return it_settings_passkeys_last_used(inputs)
	if (locale === "nl") return nl_settings_passkeys_last_used(inputs)
	if (locale === "pl") return pl_settings_passkeys_last_used(inputs)
	if (locale === "pt") return pt_settings_passkeys_last_used(inputs)
	if (locale === "ru") return ru_settings_passkeys_last_used(inputs)
	if (locale === "sv") return sv_settings_passkeys_last_used(inputs)
	if (locale === "tr") return tr_settings_passkeys_last_used(inputs)
	if (locale === "zh") return zh_settings_passkeys_last_used(inputs)
	if (locale === "ja") return ja_settings_passkeys_last_used(inputs)
	return en_settings_passkeys_last_used(inputs)
});
