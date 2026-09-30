/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Mine_No_DeadlineInputs */

const en_jams_mine_no_deadline = /** @type {(inputs: Jams_Mine_No_DeadlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No deadline set yet`)
};

const es_jams_mine_no_deadline = /** @type {(inputs: Jams_Mine_No_DeadlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún sin fecha límite`)
};

const de_jams_mine_no_deadline = /** @type {(inputs: Jams_Mine_No_DeadlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Frist`)
};

const fr_jams_mine_no_deadline = /** @type {(inputs: Jams_Mine_No_DeadlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de date limite`)
};

const it_jams_mine_no_deadline = /** @type {(inputs: Jams_Mine_No_DeadlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna scadenza ancora`)
};

const nl_jams_mine_no_deadline = /** @type {(inputs: Jams_Mine_No_DeadlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen deadline`)
};

const pl_jams_mine_no_deadline = /** @type {(inputs: Jams_Mine_No_DeadlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak terminu`)
};

const pt_jams_mine_no_deadline = /** @type {(inputs: Jams_Mine_No_DeadlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda sem prazo`)
};

const ru_jams_mine_no_deadline = /** @type {(inputs: Jams_Mine_No_DeadlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Срок пока не задан`)
};

const sv_jams_mine_no_deadline = /** @type {(inputs: Jams_Mine_No_DeadlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen deadline ännu`)
};

const tr_jams_mine_no_deadline = /** @type {(inputs: Jams_Mine_No_DeadlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz son tarih yok`)
};

const zh_jams_mine_no_deadline = /** @type {(inputs: Jams_Mine_No_DeadlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂未设置截止时间`)
};

const ja_jams_mine_no_deadline = /** @type {(inputs: Jams_Mine_No_DeadlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`締め切りは未設定`)
};

/**
* | output |
* | --- |
* | "No deadline set yet" |
*
* @param {Jams_Mine_No_DeadlineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_mine_no_deadline = /** @type {((inputs?: Jams_Mine_No_DeadlineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mine_No_DeadlineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_mine_no_deadline(inputs)
	if (locale === "de") return de_jams_mine_no_deadline(inputs)
	if (locale === "fr") return fr_jams_mine_no_deadline(inputs)
	if (locale === "it") return it_jams_mine_no_deadline(inputs)
	if (locale === "nl") return nl_jams_mine_no_deadline(inputs)
	if (locale === "pl") return pl_jams_mine_no_deadline(inputs)
	if (locale === "pt") return pt_jams_mine_no_deadline(inputs)
	if (locale === "ru") return ru_jams_mine_no_deadline(inputs)
	if (locale === "sv") return sv_jams_mine_no_deadline(inputs)
	if (locale === "tr") return tr_jams_mine_no_deadline(inputs)
	if (locale === "zh") return zh_jams_mine_no_deadline(inputs)
	if (locale === "ja") return ja_jams_mine_no_deadline(inputs)
	return en_jams_mine_no_deadline(inputs)
});
