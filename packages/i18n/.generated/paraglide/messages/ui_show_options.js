/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Show_OptionsInputs */

const en_ui_show_options = /** @type {(inputs: Ui_Show_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show options`)
};

const es_ui_show_options = /** @type {(inputs: Ui_Show_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar opciones`)
};

const de_ui_show_options = /** @type {(inputs: Ui_Show_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optionen anzeigen`)
};

const fr_ui_show_options = /** @type {(inputs: Ui_Show_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher les options`)
};

const it_ui_show_options = /** @type {(inputs: Ui_Show_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra opzioni`)
};

const nl_ui_show_options = /** @type {(inputs: Ui_Show_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opties tonen`)
};

const pl_ui_show_options = /** @type {(inputs: Ui_Show_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż opcje`)
};

const pt_ui_show_options = /** @type {(inputs: Ui_Show_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar opções`)
};

const ru_ui_show_options = /** @type {(inputs: Ui_Show_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать варианты`)
};

const sv_ui_show_options = /** @type {(inputs: Ui_Show_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa alternativ`)
};

const tr_ui_show_options = /** @type {(inputs: Ui_Show_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seçenekleri göster`)
};

const zh_ui_show_options = /** @type {(inputs: Ui_Show_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示选项`)
};

const ja_ui_show_options = /** @type {(inputs: Ui_Show_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`候補を表示`)
};

/**
* | output |
* | --- |
* | "Show options" |
*
* @param {Ui_Show_OptionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_show_options = /** @type {((inputs?: Ui_Show_OptionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Show_OptionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_show_options(inputs)
	if (locale === "de") return de_ui_show_options(inputs)
	if (locale === "fr") return fr_ui_show_options(inputs)
	if (locale === "it") return it_ui_show_options(inputs)
	if (locale === "nl") return nl_ui_show_options(inputs)
	if (locale === "pl") return pl_ui_show_options(inputs)
	if (locale === "pt") return pt_ui_show_options(inputs)
	if (locale === "ru") return ru_ui_show_options(inputs)
	if (locale === "sv") return sv_ui_show_options(inputs)
	if (locale === "tr") return tr_ui_show_options(inputs)
	if (locale === "zh") return zh_ui_show_options(inputs)
	if (locale === "ja") return ja_ui_show_options(inputs)
	return en_ui_show_options(inputs)
});
