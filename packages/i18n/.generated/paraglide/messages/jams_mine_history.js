/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Mine_HistoryInputs */

const en_jams_mine_history = /** @type {(inputs: Jams_Mine_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your participations`)
};

const es_jams_mine_history = /** @type {(inputs: Jams_Mine_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus participaciones`)
};

const de_jams_mine_history = /** @type {(inputs: Jams_Mine_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Teilnahmen`)
};

const fr_jams_mine_history = /** @type {(inputs: Jams_Mine_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos participations`)
};

const it_jams_mine_history = /** @type {(inputs: Jams_Mine_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le tue partecipazioni`)
};

const nl_jams_mine_history = /** @type {(inputs: Jams_Mine_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je deelnames`)
};

const pl_jams_mine_history = /** @type {(inputs: Jams_Mine_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój udział`)
};

const pt_jams_mine_history = /** @type {(inputs: Jams_Mine_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suas participações`)
};

const ru_jams_mine_history = /** @type {(inputs: Jams_Mine_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваше участие`)
};

const sv_jams_mine_history = /** @type {(inputs: Jams_Mine_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina deltaganden`)
};

const tr_jams_mine_history = /** @type {(inputs: Jams_Mine_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Katılımlarınız`)
};

const zh_jams_mine_history = /** @type {(inputs: Jams_Mine_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的参与记录`)
};

const ja_jams_mine_history = /** @type {(inputs: Jams_Mine_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参加履歴`)
};

/**
* | output |
* | --- |
* | "Your participations" |
*
* @param {Jams_Mine_HistoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_mine_history = /** @type {((inputs?: Jams_Mine_HistoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mine_HistoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_mine_history(inputs)
	if (locale === "de") return de_jams_mine_history(inputs)
	if (locale === "fr") return fr_jams_mine_history(inputs)
	if (locale === "it") return it_jams_mine_history(inputs)
	if (locale === "nl") return nl_jams_mine_history(inputs)
	if (locale === "pl") return pl_jams_mine_history(inputs)
	if (locale === "pt") return pt_jams_mine_history(inputs)
	if (locale === "ru") return ru_jams_mine_history(inputs)
	if (locale === "sv") return sv_jams_mine_history(inputs)
	if (locale === "tr") return tr_jams_mine_history(inputs)
	if (locale === "zh") return zh_jams_mine_history(inputs)
	if (locale === "ja") return ja_jams_mine_history(inputs)
	return en_jams_mine_history(inputs)
});
