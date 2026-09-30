/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ step: NonNullable<unknown> }} Landing_Personal_Step_Mark_DoneInputs */

const en_landing_personal_step_mark_done = /** @type {(inputs: Landing_Personal_Step_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mark “${i?.step}” as done`)
};

const es_landing_personal_step_mark_done = /** @type {(inputs: Landing_Personal_Step_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcar «${i?.step}» como hecho`)
};

const de_landing_personal_step_mark_done = /** @type {(inputs: Landing_Personal_Step_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.step}“ als erledigt markieren`)
};

const fr_landing_personal_step_mark_done = /** @type {(inputs: Landing_Personal_Step_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marquer « ${i?.step} » comme fait`)
};

const it_landing_personal_step_mark_done = /** @type {(inputs: Landing_Personal_Step_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segna «${i?.step}» come fatto`)
};

const nl_landing_personal_step_mark_done = /** @type {(inputs: Landing_Personal_Step_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.step}” als gedaan markeren`)
};

const pl_landing_personal_step_mark_done = /** @type {(inputs: Landing_Personal_Step_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oznacz „${i?.step}” jako zrobione`)
};

const pt_landing_personal_step_mark_done = /** @type {(inputs: Landing_Personal_Step_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcar “${i?.step}” como feito`)
};

const ru_landing_personal_step_mark_done = /** @type {(inputs: Landing_Personal_Step_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отметить «${i?.step}» как выполненное`)
};

const sv_landing_personal_step_mark_done = /** @type {(inputs: Landing_Personal_Step_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markera ”${i?.step}” som klart`)
};

const tr_landing_personal_step_mark_done = /** @type {(inputs: Landing_Personal_Step_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.step}” adımını tamamlandı olarak işaretle`)
};

const zh_landing_personal_step_mark_done = /** @type {(inputs: Landing_Personal_Step_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将“${i?.step}”标记为已完成`)
};

const ja_landing_personal_step_mark_done = /** @type {(inputs: Landing_Personal_Step_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.step}」を完了にする`)
};

/**
* | output |
* | --- |
* | "Mark “{step}” as done" |
*
* @param {Landing_Personal_Step_Mark_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_step_mark_done = /** @type {((inputs: Landing_Personal_Step_Mark_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_Step_Mark_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_step_mark_done(inputs)
	if (locale === "de") return de_landing_personal_step_mark_done(inputs)
	if (locale === "fr") return fr_landing_personal_step_mark_done(inputs)
	if (locale === "it") return it_landing_personal_step_mark_done(inputs)
	if (locale === "nl") return nl_landing_personal_step_mark_done(inputs)
	if (locale === "pl") return pl_landing_personal_step_mark_done(inputs)
	if (locale === "pt") return pt_landing_personal_step_mark_done(inputs)
	if (locale === "ru") return ru_landing_personal_step_mark_done(inputs)
	if (locale === "sv") return sv_landing_personal_step_mark_done(inputs)
	if (locale === "tr") return tr_landing_personal_step_mark_done(inputs)
	if (locale === "zh") return zh_landing_personal_step_mark_done(inputs)
	if (locale === "ja") return ja_landing_personal_step_mark_done(inputs)
	return en_landing_personal_step_mark_done(inputs)
});
