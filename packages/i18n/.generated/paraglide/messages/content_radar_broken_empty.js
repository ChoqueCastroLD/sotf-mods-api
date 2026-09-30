/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Content_Radar_Broken_EmptyInputs */

const en_content_radar_broken_empty = /** @type {(inputs: Content_Radar_Broken_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`None of the top mods is reported broken on ${i?.build}.`)
};

const es_content_radar_broken_empty = /** @type {(inputs: Content_Radar_Broken_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ninguno de los mods principales está reportado como roto en ${i?.build}.`)
};

const de_content_radar_broken_empty = /** @type {(inputs: Content_Radar_Broken_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Keiner der Top-Mods ist auf ${i?.build} als kaputt gemeldet.`)
};

const fr_content_radar_broken_empty = /** @type {(inputs: Content_Radar_Broken_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aucun des mods principaux n’est signalé cassé sur ${i?.build}.`)
};

const it_content_radar_broken_empty = /** @type {(inputs: Content_Radar_Broken_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nessuna delle mod principali è segnalata come rotta su ${i?.build}.`)
};

const nl_content_radar_broken_empty = /** @type {(inputs: Content_Radar_Broken_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geen van de topmods is gemeld als kapot op ${i?.build}.`)
};

const pl_content_radar_broken_empty = /** @type {(inputs: Content_Radar_Broken_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Żaden z czołowych modów nie jest zgłoszony jako zepsuty na ${i?.build}.`)
};

const pt_content_radar_broken_empty = /** @type {(inputs: Content_Radar_Broken_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nenhum dos mods principais foi relatado como quebrado na ${i?.build}.`)
};

const ru_content_radar_broken_empty = /** @type {(inputs: Content_Radar_Broken_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ни один топ-мод не отмечен как сломанный на ${i?.build}.`)
};

const sv_content_radar_broken_empty = /** @type {(inputs: Content_Radar_Broken_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingen av toppmoddarna är rapporterad som trasig på ${i?.build}.`)
};

const tr_content_radar_broken_empty = /** @type {(inputs: Content_Radar_Broken_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} sürümünde hiçbir popüler mod bozuk olarak bildirilmedi.`)
};

const zh_content_radar_broken_empty = /** @type {(inputs: Content_Radar_Broken_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`在 ${i?.build} 上没有热门模组被报告失效。`)
};

const ja_content_radar_broken_empty = /** @type {(inputs: Content_Radar_Broken_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} で不具合が報告されている上位 MOD はありません。`)
};

/**
* | output |
* | --- |
* | "None of the top mods is reported broken on {build}." |
*
* @param {Content_Radar_Broken_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_broken_empty = /** @type {((inputs: Content_Radar_Broken_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Broken_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_broken_empty(inputs)
	if (locale === "de") return de_content_radar_broken_empty(inputs)
	if (locale === "fr") return fr_content_radar_broken_empty(inputs)
	if (locale === "it") return it_content_radar_broken_empty(inputs)
	if (locale === "nl") return nl_content_radar_broken_empty(inputs)
	if (locale === "pl") return pl_content_radar_broken_empty(inputs)
	if (locale === "pt") return pt_content_radar_broken_empty(inputs)
	if (locale === "ru") return ru_content_radar_broken_empty(inputs)
	if (locale === "sv") return sv_content_radar_broken_empty(inputs)
	if (locale === "tr") return tr_content_radar_broken_empty(inputs)
	if (locale === "zh") return zh_content_radar_broken_empty(inputs)
	if (locale === "ja") return ja_content_radar_broken_empty(inputs)
	return en_content_radar_broken_empty(inputs)
});
