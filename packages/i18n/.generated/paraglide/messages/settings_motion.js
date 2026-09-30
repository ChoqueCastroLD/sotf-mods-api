/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_MotionInputs */

const en_settings_motion = /** @type {(inputs: Settings_MotionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Animations`)
};

const es_settings_motion = /** @type {(inputs: Settings_MotionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Animaciones`)
};

const de_settings_motion = /** @type {(inputs: Settings_MotionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Animationen`)
};

const fr_settings_motion = /** @type {(inputs: Settings_MotionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Animations`)
};

const it_settings_motion = /** @type {(inputs: Settings_MotionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Animazioni`)
};

const nl_settings_motion = /** @type {(inputs: Settings_MotionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Animaties`)
};

const pl_settings_motion = /** @type {(inputs: Settings_MotionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Animacje`)
};

const pt_settings_motion = /** @type {(inputs: Settings_MotionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Animações`)
};

const ru_settings_motion = /** @type {(inputs: Settings_MotionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Анимации`)
};

const sv_settings_motion = /** @type {(inputs: Settings_MotionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Animationer`)
};

const tr_settings_motion = /** @type {(inputs: Settings_MotionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Animasyonlar`)
};

const zh_settings_motion = /** @type {(inputs: Settings_MotionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`动画`)
};

const ja_settings_motion = /** @type {(inputs: Settings_MotionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アニメーション`)
};

/**
* | output |
* | --- |
* | "Animations" |
*
* @param {Settings_MotionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_motion = /** @type {((inputs?: Settings_MotionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_MotionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_motion(inputs)
	if (locale === "de") return de_settings_motion(inputs)
	if (locale === "fr") return fr_settings_motion(inputs)
	if (locale === "it") return it_settings_motion(inputs)
	if (locale === "nl") return nl_settings_motion(inputs)
	if (locale === "pl") return pl_settings_motion(inputs)
	if (locale === "pt") return pt_settings_motion(inputs)
	if (locale === "ru") return ru_settings_motion(inputs)
	if (locale === "sv") return sv_settings_motion(inputs)
	if (locale === "tr") return tr_settings_motion(inputs)
	if (locale === "zh") return zh_settings_motion(inputs)
	if (locale === "ja") return ja_settings_motion(inputs)
	return en_settings_motion(inputs)
});
