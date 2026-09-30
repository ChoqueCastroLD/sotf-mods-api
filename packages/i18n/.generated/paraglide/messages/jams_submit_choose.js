/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Submit_ChooseInputs */

const en_jams_submit_choose = /** @type {(inputs: Jams_Submit_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose…`)
};

const es_jams_submit_choose = /** @type {(inputs: Jams_Submit_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige…`)
};

const de_jams_submit_choose = /** @type {(inputs: Jams_Submit_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auswählen …`)
};

const fr_jams_submit_choose = /** @type {(inputs: Jams_Submit_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir…`)
};

const it_jams_submit_choose = /** @type {(inputs: Jams_Submit_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli…`)
};

const nl_jams_submit_choose = /** @type {(inputs: Jams_Submit_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies…`)
};

const pl_jams_submit_choose = /** @type {(inputs: Jams_Submit_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz…`)
};

const pt_jams_submit_choose = /** @type {(inputs: Jams_Submit_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolher…`)
};

const ru_jams_submit_choose = /** @type {(inputs: Jams_Submit_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать…`)
};

const sv_jams_submit_choose = /** @type {(inputs: Jams_Submit_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj …`)
};

const tr_jams_submit_choose = /** @type {(inputs: Jams_Submit_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seçin…`)
};

const zh_jams_submit_choose = /** @type {(inputs: Jams_Submit_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择…`)
};

const ja_jams_submit_choose = /** @type {(inputs: Jams_Submit_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択…`)
};

/**
* | output |
* | --- |
* | "Choose…" |
*
* @param {Jams_Submit_ChooseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_submit_choose = /** @type {((inputs?: Jams_Submit_ChooseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Submit_ChooseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_submit_choose(inputs)
	if (locale === "de") return de_jams_submit_choose(inputs)
	if (locale === "fr") return fr_jams_submit_choose(inputs)
	if (locale === "it") return it_jams_submit_choose(inputs)
	if (locale === "nl") return nl_jams_submit_choose(inputs)
	if (locale === "pl") return pl_jams_submit_choose(inputs)
	if (locale === "pt") return pt_jams_submit_choose(inputs)
	if (locale === "ru") return ru_jams_submit_choose(inputs)
	if (locale === "sv") return sv_jams_submit_choose(inputs)
	if (locale === "tr") return tr_jams_submit_choose(inputs)
	if (locale === "zh") return zh_jams_submit_choose(inputs)
	if (locale === "ja") return ja_jams_submit_choose(inputs)
	return en_jams_submit_choose(inputs)
});
