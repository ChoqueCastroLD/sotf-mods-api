/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Motion_Full_HintInputs */

const en_settings_motion_full_hint = /** @type {(inputs: Settings_Motion_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All animations on.`)
};

const es_settings_motion_full_hint = /** @type {(inputs: Settings_Motion_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las animaciones activadas.`)
};

const de_settings_motion_full_hint = /** @type {(inputs: Settings_Motion_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Animationen an.`)
};

const fr_settings_motion_full_hint = /** @type {(inputs: Settings_Motion_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les animations activées.`)
};

const it_settings_motion_full_hint = /** @type {(inputs: Settings_Motion_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le animazioni attive.`)
};

const nl_settings_motion_full_hint = /** @type {(inputs: Settings_Motion_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle animaties aan.`)
};

const pl_settings_motion_full_hint = /** @type {(inputs: Settings_Motion_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie animacje włączone.`)
};

const pt_settings_motion_full_hint = /** @type {(inputs: Settings_Motion_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as animações ativadas.`)
};

const ru_settings_motion_full_hint = /** @type {(inputs: Settings_Motion_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все анимации включены.`)
};

const sv_settings_motion_full_hint = /** @type {(inputs: Settings_Motion_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla animationer på.`)
};

const tr_settings_motion_full_hint = /** @type {(inputs: Settings_Motion_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm animasyonlar açık.`)
};

const zh_settings_motion_full_hint = /** @type {(inputs: Settings_Motion_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开启所有动画。`)
};

const ja_settings_motion_full_hint = /** @type {(inputs: Settings_Motion_Full_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのアニメーションをオン。`)
};

/**
* | output |
* | --- |
* | "All animations on." |
*
* @param {Settings_Motion_Full_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_motion_full_hint = /** @type {((inputs?: Settings_Motion_Full_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Motion_Full_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_motion_full_hint(inputs)
	if (locale === "de") return de_settings_motion_full_hint(inputs)
	if (locale === "fr") return fr_settings_motion_full_hint(inputs)
	if (locale === "it") return it_settings_motion_full_hint(inputs)
	if (locale === "nl") return nl_settings_motion_full_hint(inputs)
	if (locale === "pl") return pl_settings_motion_full_hint(inputs)
	if (locale === "pt") return pt_settings_motion_full_hint(inputs)
	if (locale === "ru") return ru_settings_motion_full_hint(inputs)
	if (locale === "sv") return sv_settings_motion_full_hint(inputs)
	if (locale === "tr") return tr_settings_motion_full_hint(inputs)
	if (locale === "zh") return zh_settings_motion_full_hint(inputs)
	if (locale === "ja") return ja_settings_motion_full_hint(inputs)
	return en_settings_motion_full_hint(inputs)
});
