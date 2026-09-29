/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_ChooseInputs */

const en_ui_choose = /** @type {(inputs: Ui_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose…`)
};

const es_ui_choose = /** @type {(inputs: Ui_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige…`)
};

const de_ui_choose = /** @type {(inputs: Ui_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auswählen…`)
};

const fr_ui_choose = /** @type {(inputs: Ui_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir…`)
};

const it_ui_choose = /** @type {(inputs: Ui_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli…`)
};

const nl_ui_choose = /** @type {(inputs: Ui_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies…`)
};

const pl_ui_choose = /** @type {(inputs: Ui_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz…`)
};

const pt_ui_choose = /** @type {(inputs: Ui_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha…`)
};

const ru_ui_choose = /** @type {(inputs: Ui_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбери…`)
};

const sv_ui_choose = /** @type {(inputs: Ui_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj…`)
};

const tr_ui_choose = /** @type {(inputs: Ui_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seç…`)
};

const zh_ui_choose = /** @type {(inputs: Ui_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择…`)
};

const ja_ui_choose = /** @type {(inputs: Ui_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択…`)
};

/**
* | output |
* | --- |
* | "Choose…" |
*
* @param {Ui_ChooseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_choose = /** @type {((inputs?: Ui_ChooseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_ChooseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_choose(inputs)
	if (locale === "de") return de_ui_choose(inputs)
	if (locale === "fr") return fr_ui_choose(inputs)
	if (locale === "it") return it_ui_choose(inputs)
	if (locale === "nl") return nl_ui_choose(inputs)
	if (locale === "pl") return pl_ui_choose(inputs)
	if (locale === "pt") return pt_ui_choose(inputs)
	if (locale === "ru") return ru_ui_choose(inputs)
	if (locale === "sv") return sv_ui_choose(inputs)
	if (locale === "tr") return tr_ui_choose(inputs)
	if (locale === "zh") return zh_ui_choose(inputs)
	if (locale === "ja") return ja_ui_choose(inputs)
	return en_ui_choose(inputs)
});
