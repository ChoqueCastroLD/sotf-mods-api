/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_First_KickerInputs */

const en_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Season one · Date announced here first`)
};

const es_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temporada uno · Fecha anunciada aquí primero`)
};

const de_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staffel eins · Termin zuerst hier`)
};

const fr_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saison un · Date annoncée ici en premier`)
};

const it_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stagione uno · Data annunciata prima qui`)
};

const nl_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seizoen één · Datum eerst hier bekendgemaakt`)
};

const pl_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sezon pierwszy · Termin ogłosimy najpierw tutaj`)
};

const pt_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temporada um · Data anunciada aqui primeiro`)
};

const ru_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первый сезон · Дату объявим здесь первыми`)
};

const sv_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Säsong ett · Datum meddelas här först`)
};

const tr_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk sezon · Tarih önce burada duyurulur`)
};

const zh_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`第一季 · 日期将在此率先公布`)
};

const ja_jams_first_kicker = /** @type {(inputs: Jams_First_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シーズン1 · 日程はここで最初に発表`)
};

/**
* | output |
* | --- |
* | "Season one · Date announced here first" |
*
* @param {Jams_First_KickerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_first_kicker = /** @type {((inputs?: Jams_First_KickerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_First_KickerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_first_kicker(inputs)
	if (locale === "de") return de_jams_first_kicker(inputs)
	if (locale === "fr") return fr_jams_first_kicker(inputs)
	if (locale === "it") return it_jams_first_kicker(inputs)
	if (locale === "nl") return nl_jams_first_kicker(inputs)
	if (locale === "pl") return pl_jams_first_kicker(inputs)
	if (locale === "pt") return pt_jams_first_kicker(inputs)
	if (locale === "ru") return ru_jams_first_kicker(inputs)
	if (locale === "sv") return sv_jams_first_kicker(inputs)
	if (locale === "tr") return tr_jams_first_kicker(inputs)
	if (locale === "zh") return zh_jams_first_kicker(inputs)
	if (locale === "ja") return ja_jams_first_kicker(inputs)
	return en_jams_first_kicker(inputs)
});
