/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ step: NonNullable<unknown> }} Me_Onboarding_Mark_DoneInputs */

const en_me_onboarding_mark_done = /** @type {(inputs: Me_Onboarding_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mark “${i?.step}” as done`)
};

const es_me_onboarding_mark_done = /** @type {(inputs: Me_Onboarding_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcar «${i?.step}» como hecho`)
};

const de_me_onboarding_mark_done = /** @type {(inputs: Me_Onboarding_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.step}“ als erledigt markieren`)
};

const fr_me_onboarding_mark_done = /** @type {(inputs: Me_Onboarding_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marquer « ${i?.step} » comme fait`)
};

const it_me_onboarding_mark_done = /** @type {(inputs: Me_Onboarding_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segna «${i?.step}» come fatto`)
};

const nl_me_onboarding_mark_done = /** @type {(inputs: Me_Onboarding_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.step}” als gedaan markeren`)
};

const pl_me_onboarding_mark_done = /** @type {(inputs: Me_Onboarding_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oznacz „${i?.step}” jako zrobione`)
};

const pt_me_onboarding_mark_done = /** @type {(inputs: Me_Onboarding_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcar “${i?.step}” como feito`)
};

const ru_me_onboarding_mark_done = /** @type {(inputs: Me_Onboarding_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отметить «${i?.step}» как выполненное`)
};

const sv_me_onboarding_mark_done = /** @type {(inputs: Me_Onboarding_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markera ”${i?.step}” som klart`)
};

const tr_me_onboarding_mark_done = /** @type {(inputs: Me_Onboarding_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.step}” adımını tamamlandı olarak işaretle`)
};

const zh_me_onboarding_mark_done = /** @type {(inputs: Me_Onboarding_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将“${i?.step}”标记为已完成`)
};

const ja_me_onboarding_mark_done = /** @type {(inputs: Me_Onboarding_Mark_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.step}」を完了にする`)
};

/**
* | output |
* | --- |
* | "Mark “{step}” as done" |
*
* @param {Me_Onboarding_Mark_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_mark_done = /** @type {((inputs: Me_Onboarding_Mark_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Mark_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_mark_done(inputs)
	if (locale === "de") return de_me_onboarding_mark_done(inputs)
	if (locale === "fr") return fr_me_onboarding_mark_done(inputs)
	if (locale === "it") return it_me_onboarding_mark_done(inputs)
	if (locale === "nl") return nl_me_onboarding_mark_done(inputs)
	if (locale === "pl") return pl_me_onboarding_mark_done(inputs)
	if (locale === "pt") return pt_me_onboarding_mark_done(inputs)
	if (locale === "ru") return ru_me_onboarding_mark_done(inputs)
	if (locale === "sv") return sv_me_onboarding_mark_done(inputs)
	if (locale === "tr") return tr_me_onboarding_mark_done(inputs)
	if (locale === "zh") return zh_me_onboarding_mark_done(inputs)
	if (locale === "ja") return ja_me_onboarding_mark_done(inputs)
	return en_me_onboarding_mark_done(inputs)
});
