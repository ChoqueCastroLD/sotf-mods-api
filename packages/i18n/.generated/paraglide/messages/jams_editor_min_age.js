/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Min_AgeInputs */

const en_jams_editor_min_age = /** @type {(inputs: Jams_Editor_Min_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimum account age to vote (days)`)
};

const es_jams_editor_min_age = /** @type {(inputs: Jams_Editor_Min_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antigüedad mínima de la cuenta para votar (días)`)
};

const de_jams_editor_min_age = /** @type {(inputs: Jams_Editor_Min_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mindestalter des Kontos zum Abstimmen (Tage)`)
};

const fr_jams_editor_min_age = /** @type {(inputs: Jams_Editor_Min_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancienneté minimale du compte pour voter (jours)`)
};

const it_jams_editor_min_age = /** @type {(inputs: Jams_Editor_Min_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anzianità minima dell'account per votare (giorni)`)
};

const nl_jams_editor_min_age = /** @type {(inputs: Jams_Editor_Min_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimale accountleeftijd om te stemmen (dagen)`)
};

const pl_jams_editor_min_age = /** @type {(inputs: Jams_Editor_Min_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimalny wiek konta do głosowania (dni)`)
};

const pt_jams_editor_min_age = /** @type {(inputs: Jams_Editor_Min_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idade mínima da conta para votar (dias)`)
};

const ru_jams_editor_min_age = /** @type {(inputs: Jams_Editor_Min_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Минимальный возраст аккаунта для голосования (дни)`)
};

const sv_jams_editor_min_age = /** @type {(inputs: Jams_Editor_Min_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minsta kontoålder för att rösta (dagar)`)
};

const tr_jams_editor_min_age = /** @type {(inputs: Jams_Editor_Min_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy vermek için asgari hesap yaşı (gün)`)
};

const zh_jams_editor_min_age = /** @type {(inputs: Jams_Editor_Min_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票所需的最短账号天数`)
};

const ja_jams_editor_min_age = /** @type {(inputs: Jams_Editor_Min_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票に必要なアカウント作成後の日数`)
};

/**
* | output |
* | --- |
* | "Minimum account age to vote (days)" |
*
* @param {Jams_Editor_Min_AgeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_min_age = /** @type {((inputs?: Jams_Editor_Min_AgeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Min_AgeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_min_age(inputs)
	if (locale === "de") return de_jams_editor_min_age(inputs)
	if (locale === "fr") return fr_jams_editor_min_age(inputs)
	if (locale === "it") return it_jams_editor_min_age(inputs)
	if (locale === "nl") return nl_jams_editor_min_age(inputs)
	if (locale === "pl") return pl_jams_editor_min_age(inputs)
	if (locale === "pt") return pt_jams_editor_min_age(inputs)
	if (locale === "ru") return ru_jams_editor_min_age(inputs)
	if (locale === "sv") return sv_jams_editor_min_age(inputs)
	if (locale === "tr") return tr_jams_editor_min_age(inputs)
	if (locale === "zh") return zh_jams_editor_min_age(inputs)
	if (locale === "ja") return ja_jams_editor_min_age(inputs)
	return en_jams_editor_min_age(inputs)
});
