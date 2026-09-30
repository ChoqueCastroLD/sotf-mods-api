/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Density_Compact_HintInputs */

const en_settings_density_compact_hint = /** @type {(inputs: Settings_Density_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More on screen at once.`)
};

const es_settings_density_compact_hint = /** @type {(inputs: Settings_Density_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más cosas en pantalla a la vez.`)
};

const de_settings_density_compact_hint = /** @type {(inputs: Settings_Density_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr auf einmal auf dem Bildschirm.`)
};

const fr_settings_density_compact_hint = /** @type {(inputs: Settings_Density_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus d’éléments à l’écran.`)
};

const it_settings_density_compact_hint = /** @type {(inputs: Settings_Density_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più elementi sullo schermo.`)
};

const nl_settings_density_compact_hint = /** @type {(inputs: Settings_Density_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer tegelijk op het scherm.`)
};

const pl_settings_density_compact_hint = /** @type {(inputs: Settings_Density_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej naraz na ekranie.`)
};

const pt_settings_density_compact_hint = /** @type {(inputs: Settings_Density_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais coisas na tela ao mesmo tempo.`)
};

const ru_settings_density_compact_hint = /** @type {(inputs: Settings_Density_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше всего на экране сразу.`)
};

const sv_settings_density_compact_hint = /** @type {(inputs: Settings_Density_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mer på skärmen samtidigt.`)
};

const tr_settings_density_compact_hint = /** @type {(inputs: Settings_Density_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekranda aynı anda daha fazlası.`)
};

const zh_settings_density_compact_hint = /** @type {(inputs: Settings_Density_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一屏显示更多内容。`)
};

const ja_settings_density_compact_hint = /** @type {(inputs: Settings_Density_Compact_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一度に多くの情報を表示。`)
};

/**
* | output |
* | --- |
* | "More on screen at once." |
*
* @param {Settings_Density_Compact_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_density_compact_hint = /** @type {((inputs?: Settings_Density_Compact_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Density_Compact_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_density_compact_hint(inputs)
	if (locale === "de") return de_settings_density_compact_hint(inputs)
	if (locale === "fr") return fr_settings_density_compact_hint(inputs)
	if (locale === "it") return it_settings_density_compact_hint(inputs)
	if (locale === "nl") return nl_settings_density_compact_hint(inputs)
	if (locale === "pl") return pl_settings_density_compact_hint(inputs)
	if (locale === "pt") return pt_settings_density_compact_hint(inputs)
	if (locale === "ru") return ru_settings_density_compact_hint(inputs)
	if (locale === "sv") return sv_settings_density_compact_hint(inputs)
	if (locale === "tr") return tr_settings_density_compact_hint(inputs)
	if (locale === "zh") return zh_settings_density_compact_hint(inputs)
	if (locale === "ja") return ja_settings_density_compact_hint(inputs)
	return en_settings_density_compact_hint(inputs)
});
