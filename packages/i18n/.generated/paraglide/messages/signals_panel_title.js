/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Panel_TitleInputs */

const en_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signals`)
};

const es_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Señales`)
};

const de_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signale`)
};

const fr_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaux`)
};

const it_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnali`)
};

const nl_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalen`)
};

const pl_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sygnały`)
};

const pt_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinais`)
};

const ru_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сигналы`)
};

const sv_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler`)
};

const tr_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyaller`)
};

const zh_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信号`)
};

const ja_signals_panel_title = /** @type {(inputs: Signals_Panel_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シグナル`)
};

/**
* | output |
* | --- |
* | "Signals" |
*
* @param {Signals_Panel_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_panel_title = /** @type {((inputs?: Signals_Panel_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Panel_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_panel_title(inputs)
	if (locale === "de") return de_signals_panel_title(inputs)
	if (locale === "fr") return fr_signals_panel_title(inputs)
	if (locale === "it") return it_signals_panel_title(inputs)
	if (locale === "nl") return nl_signals_panel_title(inputs)
	if (locale === "pl") return pl_signals_panel_title(inputs)
	if (locale === "pt") return pt_signals_panel_title(inputs)
	if (locale === "ru") return ru_signals_panel_title(inputs)
	if (locale === "sv") return sv_signals_panel_title(inputs)
	if (locale === "tr") return tr_signals_panel_title(inputs)
	if (locale === "zh") return zh_signals_panel_title(inputs)
	if (locale === "ja") return ja_signals_panel_title(inputs)
	return en_signals_panel_title(inputs)
});
