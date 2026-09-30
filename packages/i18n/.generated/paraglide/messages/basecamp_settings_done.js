/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ status: NonNullable<unknown> }} Basecamp_Settings_DoneInputs */

const en_basecamp_settings_done = /** @type {(inputs: Basecamp_Settings_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}: done`)
};

const es_basecamp_settings_done = /** @type {(inputs: Basecamp_Settings_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}: hecho`)
};

const de_basecamp_settings_done = /** @type {(inputs: Basecamp_Settings_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}: erledigt`)
};

const fr_basecamp_settings_done = /** @type {(inputs: Basecamp_Settings_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status} : c’est fait`)
};

const it_basecamp_settings_done = /** @type {(inputs: Basecamp_Settings_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}: fatto`)
};

const nl_basecamp_settings_done = /** @type {(inputs: Basecamp_Settings_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}: gedaan`)
};

const pl_basecamp_settings_done = /** @type {(inputs: Basecamp_Settings_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}: gotowe`)
};

const pt_basecamp_settings_done = /** @type {(inputs: Basecamp_Settings_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}: feito`)
};

const ru_basecamp_settings_done = /** @type {(inputs: Basecamp_Settings_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}: готово`)
};

const sv_basecamp_settings_done = /** @type {(inputs: Basecamp_Settings_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}: klart`)
};

const tr_basecamp_settings_done = /** @type {(inputs: Basecamp_Settings_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}: tamam`)
};

const zh_basecamp_settings_done = /** @type {(inputs: Basecamp_Settings_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}：已完成`)
};

const ja_basecamp_settings_done = /** @type {(inputs: Basecamp_Settings_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}：完了`)
};

/**
* | output |
* | --- |
* | "{status}: done" |
*
* @param {Basecamp_Settings_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_done = /** @type {((inputs: Basecamp_Settings_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_done(inputs)
	if (locale === "de") return de_basecamp_settings_done(inputs)
	if (locale === "fr") return fr_basecamp_settings_done(inputs)
	if (locale === "it") return it_basecamp_settings_done(inputs)
	if (locale === "nl") return nl_basecamp_settings_done(inputs)
	if (locale === "pl") return pl_basecamp_settings_done(inputs)
	if (locale === "pt") return pt_basecamp_settings_done(inputs)
	if (locale === "ru") return ru_basecamp_settings_done(inputs)
	if (locale === "sv") return sv_basecamp_settings_done(inputs)
	if (locale === "tr") return tr_basecamp_settings_done(inputs)
	if (locale === "zh") return zh_basecamp_settings_done(inputs)
	if (locale === "ja") return ja_basecamp_settings_done(inputs)
	return en_basecamp_settings_done(inputs)
});
