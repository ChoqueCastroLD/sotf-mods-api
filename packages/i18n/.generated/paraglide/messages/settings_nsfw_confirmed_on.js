/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Settings_Nsfw_Confirmed_OnInputs */

const en_settings_nsfw_confirmed_on = /** @type {(inputs: Settings_Nsfw_Confirmed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Confirmed ${i?.date}`)
};

const es_settings_nsfw_confirmed_on = /** @type {(inputs: Settings_Nsfw_Confirmed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Confirmado el ${i?.date}`)
};

const de_settings_nsfw_confirmed_on = /** @type {(inputs: Settings_Nsfw_Confirmed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bestätigt am ${i?.date}`)
};

const fr_settings_nsfw_confirmed_on = /** @type {(inputs: Settings_Nsfw_Confirmed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Confirmé le ${i?.date}`)
};

const it_settings_nsfw_confirmed_on = /** @type {(inputs: Settings_Nsfw_Confirmed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Confermato il ${i?.date}`)
};

const nl_settings_nsfw_confirmed_on = /** @type {(inputs: Settings_Nsfw_Confirmed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bevestigd op ${i?.date}`)
};

const pl_settings_nsfw_confirmed_on = /** @type {(inputs: Settings_Nsfw_Confirmed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Potwierdzono ${i?.date}`)
};

const pt_settings_nsfw_confirmed_on = /** @type {(inputs: Settings_Nsfw_Confirmed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Confirmado em ${i?.date}`)
};

const ru_settings_nsfw_confirmed_on = /** @type {(inputs: Settings_Nsfw_Confirmed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Подтверждено ${i?.date}`)
};

const sv_settings_nsfw_confirmed_on = /** @type {(inputs: Settings_Nsfw_Confirmed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bekräftat ${i?.date}`)
};

const tr_settings_nsfw_confirmed_on = /** @type {(inputs: Settings_Nsfw_Confirmed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinde onaylandı`)
};

const zh_settings_nsfw_confirmed_on = /** @type {(inputs: Settings_Nsfw_Confirmed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已于 ${i?.date} 确认`)
};

const ja_settings_nsfw_confirmed_on = /** @type {(inputs: Settings_Nsfw_Confirmed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} に確認済み`)
};

/**
* | output |
* | --- |
* | "Confirmed {date}" |
*
* @param {Settings_Nsfw_Confirmed_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_nsfw_confirmed_on = /** @type {((inputs: Settings_Nsfw_Confirmed_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nsfw_Confirmed_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_nsfw_confirmed_on(inputs)
	if (locale === "de") return de_settings_nsfw_confirmed_on(inputs)
	if (locale === "fr") return fr_settings_nsfw_confirmed_on(inputs)
	if (locale === "it") return it_settings_nsfw_confirmed_on(inputs)
	if (locale === "nl") return nl_settings_nsfw_confirmed_on(inputs)
	if (locale === "pl") return pl_settings_nsfw_confirmed_on(inputs)
	if (locale === "pt") return pt_settings_nsfw_confirmed_on(inputs)
	if (locale === "ru") return ru_settings_nsfw_confirmed_on(inputs)
	if (locale === "sv") return sv_settings_nsfw_confirmed_on(inputs)
	if (locale === "tr") return tr_settings_nsfw_confirmed_on(inputs)
	if (locale === "zh") return zh_settings_nsfw_confirmed_on(inputs)
	if (locale === "ja") return ja_settings_nsfw_confirmed_on(inputs)
	return en_settings_nsfw_confirmed_on(inputs)
});
