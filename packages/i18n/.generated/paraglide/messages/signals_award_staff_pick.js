/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Award_Staff_PickInputs */

const en_signals_award_staff_pick = /** @type {(inputs: Signals_Award_Staff_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} is a Staff pick`)
};

const es_signals_award_staff_pick = /** @type {(inputs: Signals_Award_Staff_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} es una Elección del equipo`)
};

const de_signals_award_staff_pick = /** @type {(inputs: Signals_Award_Staff_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ist eine Team-Empfehlung`)
};

const fr_signals_award_staff_pick = /** @type {(inputs: Signals_Award_Staff_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} est un Choix de l’équipe`)
};

const it_signals_award_staff_pick = /** @type {(inputs: Signals_Award_Staff_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} è una Scelta dello staff`)
};

const nl_signals_award_staff_pick = /** @type {(inputs: Signals_Award_Staff_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} is een Staff pick`)
};

const pl_signals_award_staff_pick = /** @type {(inputs: Signals_Award_Staff_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} to Wybór zespołu`)
};

const pt_signals_award_staff_pick = /** @type {(inputs: Signals_Award_Staff_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} é uma Escolha da equipe`)
};

const ru_signals_award_staff_pick = /** @type {(inputs: Signals_Award_Staff_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} — выбор команды`)
};

const sv_signals_award_staff_pick = /** @type {(inputs: Signals_Award_Staff_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} är ett teamval`)
};

const tr_signals_award_staff_pick = /** @type {(inputs: Signals_Award_Staff_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} bir Ekip Seçimi oldu`)
};

const zh_signals_award_staff_pick = /** @type {(inputs: Signals_Award_Staff_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 入选团队精选`)
};

const ja_signals_award_staff_pick = /** @type {(inputs: Signals_Award_Staff_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} がスタッフのおすすめに選ばれました`)
};

/**
* | output |
* | --- |
* | "{mod} is a Staff pick" |
*
* @param {Signals_Award_Staff_PickInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_award_staff_pick = /** @type {((inputs: Signals_Award_Staff_PickInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Award_Staff_PickInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_award_staff_pick(inputs)
	if (locale === "de") return de_signals_award_staff_pick(inputs)
	if (locale === "fr") return fr_signals_award_staff_pick(inputs)
	if (locale === "it") return it_signals_award_staff_pick(inputs)
	if (locale === "nl") return nl_signals_award_staff_pick(inputs)
	if (locale === "pl") return pl_signals_award_staff_pick(inputs)
	if (locale === "pt") return pt_signals_award_staff_pick(inputs)
	if (locale === "ru") return ru_signals_award_staff_pick(inputs)
	if (locale === "sv") return sv_signals_award_staff_pick(inputs)
	if (locale === "tr") return tr_signals_award_staff_pick(inputs)
	if (locale === "zh") return zh_signals_award_staff_pick(inputs)
	if (locale === "ja") return ja_signals_award_staff_pick(inputs)
	return en_signals_award_staff_pick(inputs)
});
