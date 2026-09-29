/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Step_CompleteInputs */

const en_ui_step_complete = /** @type {(inputs: Ui_Step_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`completed`)
};

const es_ui_step_complete = /** @type {(inputs: Ui_Step_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`completado`)
};

const de_ui_step_complete = /** @type {(inputs: Ui_Step_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`abgeschlossen`)
};

const fr_ui_step_complete = /** @type {(inputs: Ui_Step_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`terminée`)
};

const it_ui_step_complete = /** @type {(inputs: Ui_Step_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`completato`)
};

const nl_ui_step_complete = /** @type {(inputs: Ui_Step_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`voltooid`)
};

const pl_ui_step_complete = /** @type {(inputs: Ui_Step_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ukończony`)
};

const pt_ui_step_complete = /** @type {(inputs: Ui_Step_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`concluída`)
};

const ru_ui_step_complete = /** @type {(inputs: Ui_Step_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`выполнен`)
};

const sv_ui_step_complete = /** @type {(inputs: Ui_Step_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`klart`)
};

const tr_ui_step_complete = /** @type {(inputs: Ui_Step_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`tamamlandı`)
};

const zh_ui_step_complete = /** @type {(inputs: Ui_Step_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已完成`)
};

const ja_ui_step_complete = /** @type {(inputs: Ui_Step_CompleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完了`)
};

/**
* | output |
* | --- |
* | "completed" |
*
* @param {Ui_Step_CompleteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_step_complete = /** @type {((inputs?: Ui_Step_CompleteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Step_CompleteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_step_complete(inputs)
	if (locale === "de") return de_ui_step_complete(inputs)
	if (locale === "fr") return fr_ui_step_complete(inputs)
	if (locale === "it") return it_ui_step_complete(inputs)
	if (locale === "nl") return nl_ui_step_complete(inputs)
	if (locale === "pl") return pl_ui_step_complete(inputs)
	if (locale === "pt") return pt_ui_step_complete(inputs)
	if (locale === "ru") return ru_ui_step_complete(inputs)
	if (locale === "sv") return sv_ui_step_complete(inputs)
	if (locale === "tr") return tr_ui_step_complete(inputs)
	if (locale === "zh") return zh_ui_step_complete(inputs)
	if (locale === "ja") return ja_ui_step_complete(inputs)
	return en_ui_step_complete(inputs)
});
