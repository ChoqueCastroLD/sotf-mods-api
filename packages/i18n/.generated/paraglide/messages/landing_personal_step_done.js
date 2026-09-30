/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_Step_DoneInputs */

const en_landing_personal_step_done = /** @type {(inputs: Landing_Personal_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Done`)
};

const es_landing_personal_step_done = /** @type {(inputs: Landing_Personal_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hecho`)
};

const de_landing_personal_step_done = /** @type {(inputs: Landing_Personal_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erledigt`)
};

const fr_landing_personal_step_done = /** @type {(inputs: Landing_Personal_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fait`)
};

const it_landing_personal_step_done = /** @type {(inputs: Landing_Personal_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fatto`)
};

const nl_landing_personal_step_done = /** @type {(inputs: Landing_Personal_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klaar`)
};

const pl_landing_personal_step_done = /** @type {(inputs: Landing_Personal_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zrobione`)
};

const pt_landing_personal_step_done = /** @type {(inputs: Landing_Personal_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concluído`)
};

const ru_landing_personal_step_done = /** @type {(inputs: Landing_Personal_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готово`)
};

const sv_landing_personal_step_done = /** @type {(inputs: Landing_Personal_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klart`)
};

const tr_landing_personal_step_done = /** @type {(inputs: Landing_Personal_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamamlandı`)
};

const zh_landing_personal_step_done = /** @type {(inputs: Landing_Personal_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已完成`)
};

const ja_landing_personal_step_done = /** @type {(inputs: Landing_Personal_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完了`)
};

/**
* | output |
* | --- |
* | "Done" |
*
* @param {Landing_Personal_Step_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_step_done = /** @type {((inputs?: Landing_Personal_Step_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_Step_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_step_done(inputs)
	if (locale === "de") return de_landing_personal_step_done(inputs)
	if (locale === "fr") return fr_landing_personal_step_done(inputs)
	if (locale === "it") return it_landing_personal_step_done(inputs)
	if (locale === "nl") return nl_landing_personal_step_done(inputs)
	if (locale === "pl") return pl_landing_personal_step_done(inputs)
	if (locale === "pt") return pt_landing_personal_step_done(inputs)
	if (locale === "ru") return ru_landing_personal_step_done(inputs)
	if (locale === "sv") return sv_landing_personal_step_done(inputs)
	if (locale === "tr") return tr_landing_personal_step_done(inputs)
	if (locale === "zh") return zh_landing_personal_step_done(inputs)
	if (locale === "ja") return ja_landing_personal_step_done(inputs)
	return en_landing_personal_step_done(inputs)
});
