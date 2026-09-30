/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_ProgressInputs */

const en_landing_personal_progress = /** @type {(inputs: Landing_Personal_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checklist progress`)
};

const es_landing_personal_progress = /** @type {(inputs: Landing_Personal_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progreso de la lista`)
};

const de_landing_personal_progress = /** @type {(inputs: Landing_Personal_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortschritt der Checkliste`)
};

const fr_landing_personal_progress = /** @type {(inputs: Landing_Personal_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progression de la liste`)
};

const it_landing_personal_progress = /** @type {(inputs: Landing_Personal_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avanzamento della lista`)
};

const nl_landing_personal_progress = /** @type {(inputs: Landing_Personal_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voortgang van de checklist`)
};

const pl_landing_personal_progress = /** @type {(inputs: Landing_Personal_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Postęp listy`)
};

const pt_landing_personal_progress = /** @type {(inputs: Landing_Personal_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progresso da lista`)
};

const ru_landing_personal_progress = /** @type {(inputs: Landing_Personal_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Прогресс списка`)
};

const sv_landing_personal_progress = /** @type {(inputs: Landing_Personal_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checklistans framsteg`)
};

const tr_landing_personal_progress = /** @type {(inputs: Landing_Personal_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste ilerlemesi`)
};

const zh_landing_personal_progress = /** @type {(inputs: Landing_Personal_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清单进度`)
};

const ja_landing_personal_progress = /** @type {(inputs: Landing_Personal_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チェックリストの進捗`)
};

/**
* | output |
* | --- |
* | "Checklist progress" |
*
* @param {Landing_Personal_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_progress = /** @type {((inputs?: Landing_Personal_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_progress(inputs)
	if (locale === "de") return de_landing_personal_progress(inputs)
	if (locale === "fr") return fr_landing_personal_progress(inputs)
	if (locale === "it") return it_landing_personal_progress(inputs)
	if (locale === "nl") return nl_landing_personal_progress(inputs)
	if (locale === "pl") return pl_landing_personal_progress(inputs)
	if (locale === "pt") return pt_landing_personal_progress(inputs)
	if (locale === "ru") return ru_landing_personal_progress(inputs)
	if (locale === "sv") return sv_landing_personal_progress(inputs)
	if (locale === "tr") return tr_landing_personal_progress(inputs)
	if (locale === "zh") return zh_landing_personal_progress(inputs)
	if (locale === "ja") return ja_landing_personal_progress(inputs)
	return en_landing_personal_progress(inputs)
});
