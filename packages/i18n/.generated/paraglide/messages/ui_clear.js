/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_ClearInputs */

const en_ui_clear = /** @type {(inputs: Ui_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear`)
};

const es_ui_clear = /** @type {(inputs: Ui_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrar`)
};

const de_ui_clear = /** @type {(inputs: Ui_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leeren`)
};

const fr_ui_clear = /** @type {(inputs: Ui_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer`)
};

const it_ui_clear = /** @type {(inputs: Ui_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancella`)
};

const nl_ui_clear = /** @type {(inputs: Ui_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wissen`)
};

const pl_ui_clear = /** @type {(inputs: Ui_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść`)
};

const pt_ui_clear = /** @type {(inputs: Ui_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar`)
};

const ru_ui_clear = /** @type {(inputs: Ui_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очистить`)
};

const sv_ui_clear = /** @type {(inputs: Ui_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa`)
};

const tr_ui_clear = /** @type {(inputs: Ui_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temizle`)
};

const zh_ui_clear = /** @type {(inputs: Ui_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除`)
};

const ja_ui_clear = /** @type {(inputs: Ui_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリア`)
};

/**
* | output |
* | --- |
* | "Clear" |
*
* @param {Ui_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_clear = /** @type {((inputs?: Ui_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_clear(inputs)
	if (locale === "de") return de_ui_clear(inputs)
	if (locale === "fr") return fr_ui_clear(inputs)
	if (locale === "it") return it_ui_clear(inputs)
	if (locale === "nl") return nl_ui_clear(inputs)
	if (locale === "pl") return pl_ui_clear(inputs)
	if (locale === "pt") return pt_ui_clear(inputs)
	if (locale === "ru") return ru_ui_clear(inputs)
	if (locale === "sv") return sv_ui_clear(inputs)
	if (locale === "tr") return tr_ui_clear(inputs)
	if (locale === "zh") return zh_ui_clear(inputs)
	if (locale === "ja") return ja_ui_clear(inputs)
	return en_ui_clear(inputs)
});
