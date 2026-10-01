/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Stage_DoneInputs */

const en_jams_stage_done = /** @type {(inputs: Jams_Stage_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completed`)
};

const es_jams_stage_done = /** @type {(inputs: Jams_Stage_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completado`)
};

const de_jams_stage_done = /** @type {(inputs: Jams_Stage_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abgeschlossen`)
};

const fr_jams_stage_done = /** @type {(inputs: Jams_Stage_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminé`)
};

const it_jams_stage_done = /** @type {(inputs: Jams_Stage_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completato`)
};

const nl_jams_stage_done = /** @type {(inputs: Jams_Stage_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltooid`)
};

const pl_jams_stage_done = /** @type {(inputs: Jams_Stage_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zakończone`)
};

const pt_jams_stage_done = /** @type {(inputs: Jams_Stage_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concluído`)
};

const ru_jams_stage_done = /** @type {(inputs: Jams_Stage_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Завершено`)
};

const sv_jams_stage_done = /** @type {(inputs: Jams_Stage_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avklarat`)
};

const tr_jams_stage_done = /** @type {(inputs: Jams_Stage_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamamlandı`)
};

const zh_jams_stage_done = /** @type {(inputs: Jams_Stage_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已完成`)
};

const ja_jams_stage_done = /** @type {(inputs: Jams_Stage_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完了`)
};

/**
* | output |
* | --- |
* | "Completed" |
*
* @param {Jams_Stage_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_stage_done = /** @type {((inputs?: Jams_Stage_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Stage_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_stage_done(inputs)
	if (locale === "de") return de_jams_stage_done(inputs)
	if (locale === "fr") return fr_jams_stage_done(inputs)
	if (locale === "it") return it_jams_stage_done(inputs)
	if (locale === "nl") return nl_jams_stage_done(inputs)
	if (locale === "pl") return pl_jams_stage_done(inputs)
	if (locale === "pt") return pt_jams_stage_done(inputs)
	if (locale === "ru") return ru_jams_stage_done(inputs)
	if (locale === "sv") return sv_jams_stage_done(inputs)
	if (locale === "tr") return tr_jams_stage_done(inputs)
	if (locale === "zh") return zh_jams_stage_done(inputs)
	if (locale === "ja") return ja_jams_stage_done(inputs)
	return en_jams_stage_done(inputs)
});
