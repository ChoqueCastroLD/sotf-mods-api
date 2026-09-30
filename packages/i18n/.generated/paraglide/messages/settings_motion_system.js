/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Motion_SystemInputs */

const en_settings_motion_system = /** @type {(inputs: Settings_Motion_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Match my device`)
};

const es_settings_motion_system = /** @type {(inputs: Settings_Motion_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como mi dispositivo`)
};

const de_settings_motion_system = /** @type {(inputs: Settings_Motion_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie mein Gerät`)
};

const fr_settings_motion_system = /** @type {(inputs: Settings_Motion_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comme mon appareil`)
};

const it_settings_motion_system = /** @type {(inputs: Settings_Motion_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come il mio dispositivo`)
};

const nl_settings_motion_system = /** @type {(inputs: Settings_Motion_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoals mijn apparaat`)
};

const pl_settings_motion_system = /** @type {(inputs: Settings_Motion_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak na moim urządzeniu`)
};

const pt_settings_motion_system = /** @type {(inputs: Settings_Motion_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Igual ao meu dispositivo`)
};

const ru_settings_motion_system = /** @type {(inputs: Settings_Motion_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как на устройстве`)
};

const sv_settings_motion_system = /** @type {(inputs: Settings_Motion_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Som min enhet`)
};

const tr_settings_motion_system = /** @type {(inputs: Settings_Motion_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cihazımla aynı`)
};

const zh_settings_motion_system = /** @type {(inputs: Settings_Motion_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`跟随设备`)
};

const ja_settings_motion_system = /** @type {(inputs: Settings_Motion_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デバイスに合わせる`)
};

/**
* | output |
* | --- |
* | "Match my device" |
*
* @param {Settings_Motion_SystemInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_motion_system = /** @type {((inputs?: Settings_Motion_SystemInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Motion_SystemInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_motion_system(inputs)
	if (locale === "de") return de_settings_motion_system(inputs)
	if (locale === "fr") return fr_settings_motion_system(inputs)
	if (locale === "it") return it_settings_motion_system(inputs)
	if (locale === "nl") return nl_settings_motion_system(inputs)
	if (locale === "pl") return pl_settings_motion_system(inputs)
	if (locale === "pt") return pt_settings_motion_system(inputs)
	if (locale === "ru") return ru_settings_motion_system(inputs)
	if (locale === "sv") return sv_settings_motion_system(inputs)
	if (locale === "tr") return tr_settings_motion_system(inputs)
	if (locale === "zh") return zh_settings_motion_system(inputs)
	if (locale === "ja") return ja_settings_motion_system(inputs)
	return en_settings_motion_system(inputs)
});
