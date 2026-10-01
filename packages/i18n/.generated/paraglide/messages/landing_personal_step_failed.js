/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_Step_FailedInputs */

const en_landing_personal_step_failed = /** @type {(inputs: Landing_Personal_Step_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't save that step. Try again.`)
};

const es_landing_personal_step_failed = /** @type {(inputs: Landing_Personal_Step_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo guardar el paso. Inténtalo de nuevo.`)
};

const de_landing_personal_step_failed = /** @type {(inputs: Landing_Personal_Step_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Schritt konnte nicht gespeichert werden. Versuche es erneut.`)
};

const fr_landing_personal_step_failed = /** @type {(inputs: Landing_Personal_Step_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d'enregistrer cette étape. Réessayez.`)
};

const it_landing_personal_step_failed = /** @type {(inputs: Landing_Personal_Step_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile salvare il passaggio. Riprova.`)
};

const nl_landing_personal_step_failed = /** @type {(inputs: Landing_Personal_Step_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die stap kon niet worden opgeslagen. Probeer het opnieuw.`)
};

const pl_landing_personal_step_failed = /** @type {(inputs: Landing_Personal_Step_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać kroku. Spróbuj ponownie.`)
};

const pt_landing_personal_step_failed = /** @type {(inputs: Landing_Personal_Step_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar a etapa. Tente novamente.`)
};

const ru_landing_personal_step_failed = /** @type {(inputs: Landing_Personal_Step_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить шаг. Попробуйте ещё раз.`)
};

const sv_landing_personal_step_failed = /** @type {(inputs: Landing_Personal_Step_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att spara steget. Försök igen.`)
};

const tr_landing_personal_step_failed = /** @type {(inputs: Landing_Personal_Step_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adım kaydedilemedi. Tekrar dene.`)
};

const zh_landing_personal_step_failed = /** @type {(inputs: Landing_Personal_Step_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存该步骤，请重试。`)
};

const ja_landing_personal_step_failed = /** @type {(inputs: Landing_Personal_Step_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ステップを保存できませんでした。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Couldn't save that step. Try again." |
*
* @param {Landing_Personal_Step_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_step_failed = /** @type {((inputs?: Landing_Personal_Step_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_Step_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_step_failed(inputs)
	if (locale === "de") return de_landing_personal_step_failed(inputs)
	if (locale === "fr") return fr_landing_personal_step_failed(inputs)
	if (locale === "it") return it_landing_personal_step_failed(inputs)
	if (locale === "nl") return nl_landing_personal_step_failed(inputs)
	if (locale === "pl") return pl_landing_personal_step_failed(inputs)
	if (locale === "pt") return pt_landing_personal_step_failed(inputs)
	if (locale === "ru") return ru_landing_personal_step_failed(inputs)
	if (locale === "sv") return sv_landing_personal_step_failed(inputs)
	if (locale === "tr") return tr_landing_personal_step_failed(inputs)
	if (locale === "zh") return zh_landing_personal_step_failed(inputs)
	if (locale === "ja") return ja_landing_personal_step_failed(inputs)
	return en_landing_personal_step_failed(inputs)
});
