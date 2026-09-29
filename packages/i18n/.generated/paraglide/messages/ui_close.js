/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_CloseInputs */

const en_ui_close = /** @type {(inputs: Ui_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
};

const es_ui_close = /** @type {(inputs: Ui_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar`)
};

const de_ui_close = /** @type {(inputs: Ui_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schließen`)
};

const fr_ui_close = /** @type {(inputs: Ui_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermer`)
};

const it_ui_close = /** @type {(inputs: Ui_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi`)
};

const nl_ui_close = /** @type {(inputs: Ui_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluiten`)
};

const pl_ui_close = /** @type {(inputs: Ui_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknij`)
};

const pt_ui_close = /** @type {(inputs: Ui_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechar`)
};

const ru_ui_close = /** @type {(inputs: Ui_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыть`)
};

const sv_ui_close = /** @type {(inputs: Ui_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng`)
};

const tr_ui_close = /** @type {(inputs: Ui_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapat`)
};

const zh_ui_close = /** @type {(inputs: Ui_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭`)
};

const ja_ui_close = /** @type {(inputs: Ui_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閉じる`)
};

/**
* | output |
* | --- |
* | "Close" |
*
* @param {Ui_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_close = /** @type {((inputs?: Ui_CloseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_CloseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_close(inputs)
	if (locale === "de") return de_ui_close(inputs)
	if (locale === "fr") return fr_ui_close(inputs)
	if (locale === "it") return it_ui_close(inputs)
	if (locale === "nl") return nl_ui_close(inputs)
	if (locale === "pl") return pl_ui_close(inputs)
	if (locale === "pt") return pt_ui_close(inputs)
	if (locale === "ru") return ru_ui_close(inputs)
	if (locale === "sv") return sv_ui_close(inputs)
	if (locale === "tr") return tr_ui_close(inputs)
	if (locale === "zh") return zh_ui_close(inputs)
	if (locale === "ja") return ja_ui_close(inputs)
	return en_ui_close(inputs)
});
